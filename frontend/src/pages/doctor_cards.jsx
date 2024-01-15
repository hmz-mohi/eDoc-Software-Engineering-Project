import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import "../styles/doctor_cards.css";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import Doctor_page_domains from '../components/doctor_page_domains';
import { useEffect } from 'react';
import CalendarComp from '../components/Calendar';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import Footer from '../components/Footer';


// ... (other imports)

function Doctor_cards() {
  const [medicalDomains, setMedicalDomains] = useState([]);
  const [bookingDoctors, setBookingDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [bookedSlots, setBookedSlots] = useState([]);
  // Modals USE STATES
  const [isBookAppDivOpen, setIsBookAppDivOpen] = useState(false)
  const [isSeeProfileModalOpen, setIsSeeProfileModalOpen] = useState(false)
  // Pagination USE STATES
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Set the number of items per page

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

  useEffect(() => {
    const fetchBookingDoctors = async () => {
      try {
        const BookingDoctorresponse = await axios.get('http://localhost:5000/api/doctors/Booking');
        const BookingDoctordata1 = BookingDoctorresponse.data;
        const BookingDoctordata = BookingDoctordata1["data"]
        console.log(BookingDoctorresponse.data)

        setBookingDoctors(BookingDoctordata);
      } catch (error) {
        console.error('Error while fetching booking doctors:', error);
      }
    };
    fetchBookingDoctors();
  }, []);

  const fetchBookedSlots = async (docId) => {
    const doctor = bookingDoctors.find(doc => doc.doc_id === docId);
    console.log(doctor)
    if (doctor) {
      // Access the Bookedslots for the selected doctor
      const bookedSlots = doctor.Bookedslots;
      setBookedSlots(bookedSlots)

      // Now you have the booked slots for the selected doctor
    } else {
      console.log("Doctor not found in the data array");
    }
  };



  // to apply drag effect on scrolls

  const ref = useRef();
  const { events } = useDraggable(ref);
  const { domain } = useParams();



  // Filter doctors based on the specified domain or show all doctors if domain is null
  const filteredDoctors = domain === "null"
    ? bookingDoctors
    : bookingDoctors.filter(doctor => doctor.doc_specialization === domain);




  // MODALS LOGIC
  const handleSeeProfileClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsSeeProfileModalOpen(true);
  };
  const handleBookAppClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsBookAppDivOpen(!isBookAppDivOpen);

    fetchBookedSlots(doctor.doc_id);
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



  useEffect(() => {
    // Scroll to the book appointment modal when it opens
    if (isBookAppDivOpen) {
      const modalElement = document.querySelector('.book-app-div');
      modalElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isBookAppDivOpen]);





  // PAGINATION CODE
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className='viewdoctors_main_section'>
        <Navbar className="special" />
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
          {currentItems.length > 0 ? (
            currentItems.map((doctor, index) => {
              let imageUrl;
              try {
                imageUrl = require(`../assets/images/Doctors/${doctor.doc_id}.png`);
              } catch (error) {
                imageUrl = 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
              }

              return (
                <div key={index} className="doctor-card">
                  <div className="doctor_card_image_div" style={{ backgroundImage: `url(${imageUrl})` }}>
                  </div>
                  <div className="below_image_div">
                    <h2>{doctor.doc_name}</h2>
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
        {filteredDoctors.length > itemsPerPage && (
          <ReactPaginate
            pageCount={Math.ceil(filteredDoctors.length / itemsPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName={'Pagination'}
            activeClassName={'active'}
          />
        )}
        {isSeeProfileModalOpen && (
          <div className="bookAppointment_modal_outerdiv modals">
            <div className="modals-content">
              {(() => {
                let imageUrl;
                try {
                  imageUrl = require(`../assets/images/Doctors/${selectedDoctor.doc_id}.png`);
                } catch (error) {
                  imageUrl = 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                }
                return (
                  <div className="main-div">
                    <div className="left-div">
                      <div className="image-div" style={{ backgroundImage: `url(${imageUrl})` }}>
                      </div>
                      <div className="text-div">
                        <h6>{selectedDoctor.doc_name}</h6>
                        <p>{selectedDoctor.doc_specialization}</p>
                        <p>{selectedDoctor.doc_valid}</p>
                      </div>
                    </div>
                    <div className="right-div">
                      <p>name</p>
                      <p>age</p>
                      <p>experience</p>
                      <p>rating</p>
                      <p>education</p>
                      {/* Rendering certifications */}
                      {selectedDoctor.Certifications && selectedDoctor.Certifications.length > 0 && (
                        <div>
                          <h6>Certifications:</h6>
                          <ul>
                            {selectedDoctor.Certifications.map((cert, index) => (
                              <li key={index}>{Object.values(cert)[1]}</li>
                            ))}
                          </ul>
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
            <div className="parent-div">
              <CalendarComp doctor={selectedDoctor} BookedSlots={bookedSlots} />
            </div>
          </div>
          
        )}
        
      </div>
          
      
    </>
  );
}

export default Doctor_cards;