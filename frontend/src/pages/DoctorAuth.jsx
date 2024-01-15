import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/DoctorAuth.css';
import DocRegIntro from '../components/DocRegIntro';
import DocRegContact from '../components/DocRegContact';
import DocRegAdditional from '../components/DocRegAdditional';
import DocRegCred from '../components/DocRegCred';
import DocRegEducation from '../components/DocRegEducation';
import { FaStar } from 'react-icons/fa';
import axios from "axios"

function DoctorAuth() {

  const [isRegister, SetIsRegister] = useState(false)

  const [doctorAuth, setDoctorAuth] = useState({
    email: '',
    phoneNumber: '',
    address: '',
    startTime: '',
    endTime: '',
    duration: '',
    middleSchool: { institution: '', grade: '' },
    highSchool: { institution: '', grade: '' },
    college: { institution: '', grade: '' },
    specialization: '',
    certificationFiles: "certification 1 , certification 2",
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    cnic: '',
    profilePicture: "uploaded",
    userName: '',
    password: '',
    confirmPassword: '',
  });

  console.log(doctorAuth)

  const updateContactDetails = (contactData) => {
    setDoctorAuth({
      ...doctorAuth,
      ...contactData,
    });
  };

  const updateAdditionalDetails = (additionalData) => {
    setDoctorAuth({
      ...doctorAuth,
      ...additionalData,
    });
  };

  const updateEducationDetails = (educationData) => {
    setDoctorAuth({
      ...doctorAuth,
      ...educationData,
    });
  };

  const updateIntroDetails = (introData) => {
    setDoctorAuth({
      ...doctorAuth,
      ...introData,
    });
  };

  const updateCredDetails = (credData) => {
    setDoctorAuth({
      ...doctorAuth,
      ...credData,
    });
  };




  const handleIsRegisterClick = () => {
    SetIsRegister(!isRegister)
  }
  const submitclicked =async () => {
    const check = await axios.post('http://localhost:5000/applyforregisteration', doctorAuth)
  }
 

  return (
    <div>
      <div className="doctor-auth-top-section">
        <div className='text-div'>
          <h1>WELCOME TO eDOC</h1>
          <p>REGISTER NOW</p>
        </div>
      </div>
      <div className="doctor-auth-form-section">
        <div className="formdiv">
          {isRegister &&
            <Accordion defaultActiveKey="0" flush>
              {/* ... (existing code) */}
              <Accordion.Item eventKey="0">
                <Accordion.Header><FaStar style={{fontSize:'0.5rem', marginBottom:"1rem", marginRight:"0.5rem"}} />Doctor's Introduction</Accordion.Header>
                <Accordion.Body>
                  {/* Pass the function to update state down to DocRegIntro */}
                  <DocRegIntro updateIntroDetails={updateIntroDetails} />
                </Accordion.Body>
              </Accordion.Item>
              {/* ... (existing code) */}
              <Accordion.Item eventKey="1">
                <Accordion.Header><FaStar style={{fontSize:'0.5rem', marginBottom:"1rem", marginRight:"0.5rem"}} />Contact Details</Accordion.Header>
                <Accordion.Body>
                  {/* Pass the function to update state down to DocRegContact */}
                  <DocRegContact updateContactDetails={updateContactDetails} />
                </Accordion.Body>
              </Accordion.Item>
              {/* ... (existing code) */}
              <Accordion.Item eventKey="2">
                <Accordion.Header><FaStar style={{fontSize:'0.5rem', marginBottom:"1rem", marginRight:"0.5rem"}} />Education & Qualification</Accordion.Header>
                <Accordion.Body>
                  {/* Pass the function to update state down to DocRegEducation */}
                  <DocRegEducation updateEducationDetails={updateEducationDetails} />
                </Accordion.Body>
              </Accordion.Item>
              {/* ... (existing code) */}
              <Accordion.Item eventKey="3">
                <Accordion.Header><FaStar style={{fontSize:'0.5rem', marginBottom:"1rem", marginRight:"0.5rem"}} />Additional Details</Accordion.Header>
                <Accordion.Body>
                  {/* Pass the function to update state down to DocRegAdditional */}
                  <DocRegAdditional updateAdditionalDetails={updateAdditionalDetails} />
                </Accordion.Body>
              </Accordion.Item>
              {/* ... (existing code) */}
              <Accordion.Item eventKey="4">
                <Accordion.Header><FaStar style={{fontSize:'0.5rem', marginBottom:"1rem", marginRight:"0.5rem"}} />Credential Part</Accordion.Header>
                <Accordion.Body>
                  {/* Pass the function to update state down to DocRegCred */}
                  <DocRegCred updateCredDetails={updateCredDetails} />
                  <div className="buttons">
                    <button className="btn" onClick={submitclicked}><span></span><p data-start="good luck!" data-text="RegisterNow" data-title="SUBMIT"></p></button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          }
          {!isRegister &&
            <div>
              <div className="login">
                <h1>LOGIN FORM</h1>
                <hr />
                <div className="first-row">
                  <div className="row2-fields">
                    <label>UserName</label>
                    <input
                      type="text"
                      name="userName"
                      placeholder="Enter Your UserName"
                      id=""

                    />
                  </div>
                  <div className="row2-fields">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      id=""

                    />
                  </div>
                  <button className='SignInBtn'> SIGN IN
              </button>
                </div>
              </div>

            </div>
          }

        </div>
        <div className='image-div'>
          <h6>Don't have an account?</h6>
          <button className='changingbtn' onClick={handleIsRegisterClick}>
            <span> SignUp
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorAuth;
