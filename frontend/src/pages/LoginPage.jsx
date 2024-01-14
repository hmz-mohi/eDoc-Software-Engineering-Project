import React, { useState } from "react";
import "../styles/loginpage.css";
import Navbar from "../components/Navbar";
import google from '../assets/images/icons/google.png'
import facebook from '../assets/images/icons/facebook.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  const [values, setValues] = useState({
    email: '',
    password: '',
    Fname: '',
    Lname: '',
    contactno: '',
    dob: ''
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleClick = () => {
    setLogin(!login);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login === true) {
      console.log("idher hn meon")

      const decide = await axios.post('http://localhost:5000/auth/login', { 'email': values['email'], 'password': values['password'] })

      console.log(decide.data)
      const username = decide.data[1]
      const email = decide.data[2]
      const pt_id=decide.data[3]
      console.log(username)

      if (decide.data[0] == "true user") {
        console.log("it is true user")
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("pt_id",pt_id)


        navigate('/home')
      }
      if (decide.data[0] == "false user") {
        alert("it is false user")
      }
    }

    else {
      const check = await axios.post('http://localhost:5000/auth/signup', values)
      const email =values["email"]
      const Fname =values["Fname"]
      const Lname=values["Lname"]
      const username=Fname+Lname
      const pt_id=check.data[0]


      if (check.data[0] == "user_registered") {
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("pt_id",pt_id)
        console.log("hello mother ficjer")
        navigate('/home')
      }
    }
  }

  return (
    <div className="Loginpage_main_section">
      <Navbar />
      <div className="login-signup-container">
        <div className="login-signupLeftDiv col-lg-6">
          <h1>{login ? "SIGN IN" : "SIGN UP"}</h1>
          <hr style={{ width: "50%", marginLeft: "20%" }} />
          <div className="paralogin-signuptext">
          </div>
          {login ? "" : <div className="inpDiv fullname">
            <div className="labels">
              <label>First Name</label>
              <label>Last Name</label>
            </div>
            <div className="Inputs">
              <input type="text" onChange={(e) => setValues({ ...values, Fname: e.target.value })} placeholder="Enter your First Name" />
              <input type="text" onChange={(e) => setValues({ ...values, Lname: e.target.value })} placeholder="Enter your last Name" />
            </div>
            <div className="labels" style={{ width: "59%" }}>
              <label>Contact Number</label>
              <label>Date of Birth</label>
            </div>
            <div className="Inputs">
              <input type="tel" onChange={(e) => setValues({ ...values, contactno: e.target.value })} placeholder="Enter your Contact Number" />
              <input type="date" onChange={(e) => setValues({ ...values, dob: e.target.value })} placeholder="Enter your Date of Birth" />
            </div>


          </div>}

          <div className="inpDiv">
            <label>Your Email</label>
            <input type="email" onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder="Enter your Email" />
          </div>
          <div className="inpDiv">
            <label>Your password</label>
            <input type="password" onChange={(e) => setValues({ ...values, password: e.target.value })} placeholder="Enter your Password" />
          </div>
          <div className="login-signup-btn-div">
            <button className="login-signupbtn" onClick={handleSubmit}>
              {login ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>

          <div className='switchaccdiv'>


            <p> {login ? "Don't have an account" : "Already have an account"} </p>
            <button onClick={handleClick}>
              {login ? "Signup" : "Signin"}
            </button>
          </div>
        </div>
        <div className={`login-signupRightDiv col-lg-6 ${!login ? "Hello" : ""}`}>

        </div>
      </div>
    </div>
  );
}


