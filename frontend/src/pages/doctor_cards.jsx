import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import "../styles/doctor_cards.css";
import { data } from "../doctor_data";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
//import { medicalDomains } from "../domain_data";
import Doctor_page_domains from '../components/doctor_page_domains';
import { useEffect } from 'react';
import CalendarComp from '../components/Calendar';
import axios from "axios";
                               
// ... (other imports)

function Doctor_cards() {
  const [medicalDomains, setMedicalDomains] = useState([]);

  useEffect(() => {
    const fetchMedicalDomains = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors/domains');
        const data = response.data;
        console.log(response.data)

        setMedicalDomains(data);
      } catch (error) {
        console.error('Error while fetching medical domains:', error);
      }
    };

    fetchMedicalDomains();
  }, []);

  // to apply drag effect on scrolls

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const { domain } = useParams();

  // Filter doctors based on the specified domain or show all doctors if domain is null
  const filteredDoctors = domain === "null"
    ? data
    : data.filter(doctor => doctor.specialization === domain);

  const [isBookAppDivOpen, setIsBookAppDivOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isSeeProfileModalOpen, setIsSeeProfileModalOpen] = useState(false)

  const handleSeeProfileClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsSeeProfileModalOpen(true);
  };
  const handleBookAppClick = (doctor) => {
    // idher krn hai axios 
    
    setSelectedDoctor(doctor);
    setIsBookAppDivOpen(!isBookAppDivOpen);
  };


  const toggleModal = () => {
    setIsSeeProfileModalOpen(!isSeeProfileModalOpen);
  };


  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      toggleModal();
    }
  };

  // Close the modal when clicking outside the modal content
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('bookAppointment_modal_outerdiv')) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isSeeProfileModalOpen) {
      // Add event listeners when the modal is open
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove event listeners when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSeeProfileModalOpen, toggleModal]);



  return (
    <>
      <div className='viewdoctors_main_section'>
        <Navbar />
        <div>
          <div className="doctor_header_text">
            <h1>Your Health is Our Priority!!</h1>
            <h3>Consult the Best {domain === "null" ? "Doctors" : <span>{domain}s</span>} in <br /> Pakistan Online</h3>
          </div>

          <div className="doctorPagedomain_section_outerdiv">
            <div className="doctorPagedomain_section" {...events}
              ref={ref}>
              {medicalDomains.map((domainItem, index) => {

                const isCurrentDomain = domain === domainItem;

                return (
                  <Doctor_page_domains
                    key={index}
                    heading={domainItem.toUpperCase()}

                    to={`/Doctor_cards/${domainItem}`}
                    className={isCurrentDomain ? "scaled-domain" : ""}
                  />
                );
              })}
            </div>
            <Doctor_page_domains
              heading="All Doctors"
              to={`/Doctor_cards/null`}
              className="addmores"
            />
          </div>
        </div>

        <div className="doctors-list">
          {filteredDoctors.length > 0 ? (
            // Map through the filtered doctors and display informatio
            filteredDoctors.map((doctor, index) => {
              let imageUrl;
              try {
                imageUrl = require(`../assets/images/Doctors/${doctor.name}.png`);
              } catch (error) {
                imageUrl = 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
              }

              return (
                <div key={index} className="doctor-card">
                  <div className="doctor_card_image_div" style={{ backgroundImage: `url(${imageUrl})` }}>
                  </div>
                  <div className="below_image_div">
                    <h2>{doctor.name}</h2>
                    <p>⭐⭐⭐⭐⭐</p>
                    <div className="doctor-cards-button-divs">
                      <button onClick={() => handleSeeProfileClick(doctor)}>
                        View Profile
                      </button>
                      <button onClick={() => handleBookAppClick(doctor)}>Book Appointment</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            // Display a message when no doctors are available
            <div className="no-doctors-message">
              <h2>No doctors available in the selected domain.</h2>
            </div>
          )}
        </div>
        {isSeeProfileModalOpen && (
          <div className="bookAppointment_modal_outerdiv modals">
            <div className="modals-content">
              {(() => {
                let imageUrl;
                try {
                  imageUrl = require(`../assets/images/Doctors/${selectedDoctor.name}.png`);
                } catch (error) {
                  imageUrl = 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                }
                return (
                  <div className="main-div">
                    <div className="left-div">
                      <div className="image-div" style={{ backgroundImage: `url(${imageUrl})` }}>
                      </div>
                      <div className="text-div">                      
                        <h6>{selectedDoctor.name}</h6>
                        <p>{selectedDoctor.specialization}</p>
                        <p>{selectedDoctor.doc_validity}</p>

                      </div>
                    </div>
                    <div className="right-div">
                      {/* Rendering certifications */}
                      {selectedDoctor.doc_certification && selectedDoctor.doc_certification.length > 0 && (
                        <div>
                          <h6>Certifications:</h6>
                          <ul>
                            {selectedDoctor.doc_certification.map((cert, index) => (
                              <li key={index}>{Object.values(cert)[0]}</li>
                            ))}
                          </ul>
                          <p>name</p>
                        <p>age</p>
                        <p>experience</p>
                        <p>rating</p>
                        <p>education</p>
                        </div>
                      )}
                    </div>
                  </div>

                );
              })()}
            </div>
          </div>
        )}
        {isBookAppDivOpen && (
        <div className="book-app-div">
          <h1>Hello {selectedDoctor.name}</h1>
          <div className="parent-div">
            <CalendarComp/>
          </div>
        </div>
        )}



      </div>
    </>
  );
}

export default Doctor_cards;