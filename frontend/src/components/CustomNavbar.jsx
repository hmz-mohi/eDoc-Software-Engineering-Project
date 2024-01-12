import React, { useState } from 'react'
import '../styles/CustomNavbar.css'
import { useEffect } from 'react';

function CustomNavbar() {
  const [isdoctorDashboardOpen, setDoctorDashboardOpen] = useState(false);

  const handleDashboardClick = () => {
    setDoctorDashboardOpen(true);
  };

  const toggleModal = () => {
    setDoctorDashboardOpen(!isdoctorDashboardOpen);
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      toggleModal();
    }
  };

  // Close the modal when clicking outside the modal content
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('see-more-modal')) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isdoctorDashboardOpen) {
      // Add event listeners when the modal is open
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove event listeners when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isdoctorDashboardOpen, toggleModal]);

  return (
    <div className='custnav'>
      <div className="NavHeader">
        <img src={require('../assets/images/icons/stethoscope.png')} alt="" />
        <h1>eDoc</h1>
      </div>
      <div className="NavElements">
        <p>aba </p>
        <p>jabba </p>
        <div className="doctor-dashboard">
          <button className='doctor-dashboardbutton' onClick={handleDashboardClick}></button>

          {isdoctorDashboardOpen && (
            <div className="doctor-profile-modal modals">
              <div className="modals-content">
                <div className="doctor-profile-top-div">
                  <button className='doctor-dashboardbutton' onClick={toggleModal}></button>
                </div>
                <div className='doctor-top-div-details'>
                  <p>hamza Anwar</p>
                  <p>hamzaanwer2016@gmail.com</p>
                </div>
                <div className="profile-div">
                  <button className='updateprofilebtn'>
                    <img src={require('../assets/images/icons/user.png')} alt="" />
                    <p>your Profile</p></button>
                </div>
                <div className="profile-div">
                  <button className='updateprofilebtn'>
                    <img src={require('../assets/images/icons/feedback.png')} alt="" />
                    <p>View Feedback</p></button>
                </div>

                <hr />
                <div className="application-div">
                  <button className='updateprofilebtn'>
                    {/* <img src={require('../assets/images/icons/feedback.png')} alt="" /> */}
                    <p>Apply for Leave</p></button>
                  <button className='updateprofilebtn'>

                    <p>Apply for Resignation</p></button>
                  {/* <img src={require('../assets/images/icons/tap.png')} alt="" /> */}
                </div>
                <button class="Btn">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text">Logout</div>
</button>


              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CustomNavbar