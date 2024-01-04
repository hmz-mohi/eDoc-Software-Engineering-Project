import React, { useState } from "react";
import "../styles/loginpage.css";
import Navbar from "../components/Navbar";
import google from '../assets/images/icons/google.png'
import facebook from '../assets/images/icons/facebook.png'
//hello this is the change rtvrv rgrg

function LoginPage() {
  const [login, setLogin] = useState(true);

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div className="Loginpage_main_section">
      <Navbar />
      <div className="login-signup-container">
        <div className="login-signupLeftDiv col-lg-6">
          <h1>{login ? "SIGN IN" : "SIGN UP"}</h1>
          <hr style={{width: "50%", marginLeft: "20%"}}/>
          <div className="paralogin-signuptext">
            {/* <p>
              {login
                ? "hello this is sign in form you need to sign in to see our services and book our appointments"
                : "hello this is siecervevv  gn up form you need to sign up to see our services and book our appointments"}
            </p> */}
          </div>
          {login ? "" : <div className="inpDiv fullname">
            <div className="labels">
              <label>First Name</label>
              <label>Last Name</label>
            </div>
            <div className="Inputs">
              <input type="text" placeholder="Enter your First Name" />
              <input type="text" placeholder="Enter your last Name" />
            </div>
            <div className="labels" style={{ width: "59%" }}>
              <label>Contact Number</label>
              <label>Date of Birth</label>
            </div>
            <div className="Inputs">
              <input type="tel" placeholder="Enter your Contact Number" />
              <input type="date" placeholder="Enter your Date of Birth" />
            </div>


          </div>}

          <div className="inpDiv">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="inpDiv">
            <label>Your password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>

          <button className="login-signupbtn">
            {login ? "SIGN IN" : "SIGN UP"}
          </button>
          {!login? "" : <div className="google-facebook-button" style={{ display: 'flex', marginTop: "5%" }}>
            <button class="button-google">
              <img src={google} style={{ width: "9%" }} alt="" srcset="" />
              Login with Google
            </button>
            <button class="button-google">
              <img src={facebook} style={{ width: "12%" }} alt="" srcset="" />
              Login with Facebook
            </button>
          </div> }

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

export default LoginPage;




