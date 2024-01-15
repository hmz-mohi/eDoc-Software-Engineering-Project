import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/DoctorAuth.css';
import DocRegIntro from '../components/DocRegIntro';
import DocRegContact from '../components/DocRegContact';
import DocRegAdditional from '../components/DocRegAdditional';
import DocRegCred from '../components/DocRegCred';
import DocRegEducation from '../components/DocRegEducation';
import { FaStar } from 'react-icons/fa';

function DoctorAuth() {
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
    certificationFiles: [],
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    cnic: '',
    profilePicture: null,
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
          <Accordion defaultActiveKey="0" flush>
            {/* ... (existing code) */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Doctor's Introduction</Accordion.Header>
              <Accordion.Body>
                {/* Pass the function to update state down to DocRegIntro */}
                <DocRegIntro updateIntroDetails={updateIntroDetails} />
              </Accordion.Body>
            </Accordion.Item>
            {/* ... (existing code) */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Contact Details<FaStar style={{color:"red"}} /></Accordion.Header>
              <Accordion.Body>
                {/* Pass the function to update state down to DocRegContact */}
                <DocRegContact updateContactDetails={updateContactDetails} />
              </Accordion.Body>
            </Accordion.Item>
            {/* ... (existing code) */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Education & Qualification</Accordion.Header>
              <Accordion.Body>
                {/* Pass the function to update state down to DocRegEducation */}
                <DocRegEducation updateEducationDetails={updateEducationDetails} />
              </Accordion.Body>
            </Accordion.Item>
            {/* ... (existing code) */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Additional Details</Accordion.Header>
              <Accordion.Body>
                {/* Pass the function to update state down to DocRegAdditional */}
                <DocRegAdditional updateAdditionalDetails={updateAdditionalDetails} />
              </Accordion.Body>
            </Accordion.Item>
            {/* ... (existing code) */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Credential Part</Accordion.Header>
              <Accordion.Body>
                {/* Pass the function to update state down to DocRegCred */}
                <DocRegCred updateCredDetails={updateCredDetails} />
                <div className="buttons">
                  <button className="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className='image-div'>
          {/* ... (existing code) */}
        </div>
      </div>
    </div>
  );
}

export default DoctorAuth;
