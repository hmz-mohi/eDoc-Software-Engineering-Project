import React from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import "../styles/doctor_cards.css";
import { data } from "../doctor_data";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import { medicalDomains } from "../domain_data";
import Doctor_page_domains from '../components/doctor_page_domains';

// ... (other imports)

function Doctor_cards() {

  // to apply drag effect on scrolls

  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const { domain } = useParams();

  // Filter doctors based on the specified domain or show all doctors if domain is null
  const filteredDoctors = domain === "null"
    ? data
    : data.filter(doctor => doctor.specialization === domain);

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
              className="addmore"
            />
          </div>
        </div>

        <div className="doctors-list">
          {/* Map through the filtered doctors and display information */}
          {filteredDoctors.map((doctor, index) => {
            // Construct the image path dynamically based on doctor's name



            // Try to load .png, if not found, provide a predefined fallback
            let imageUrl;
            try {
              imageUrl = require(`../assets/images/Doctors/${doctor.name}.png`);
            } catch (error) {
              // If .png is not found, provide a predefined fallback
              console.error(`Image not found for ${doctor.name}`);
              imageUrl = 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Replace with your fallback image path
            }

            return (
              <div key={index} className="doctor-card">
                <div className="doctor_card_image_div" style={{ backgroundImage: `url(${imageUrl})` }}>
                </div>
                <div className="below_image_div">
                  <h2>{doctor.name}</h2>
                  <p>⭐⭐⭐⭐⭐</p>
                  <div className="doctor-cards-button-divs">
                    <button>View Profile</button>
                    <button>Book Appointment</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Doctor_cards;