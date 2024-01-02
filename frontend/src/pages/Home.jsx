// import basic
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import SearchTable from "../components/SearchFeature";
import Domain from "../components/home_page_domains";
import SeeMoreModal from "../components/SeeMoreModal";

// import CSS
import "../styles/Home.css";

// import Pngs
import chat_bot_img from "../assets/images/chat-bot.png";
import nearby_img from "../assets/images/nearby.png";
import search_img from "../assets/images/search.png";
import emergencyimg from "../assets/images/emergency.png";

// import data files

import { medicalDomains } from "../domain_data";

function Home() {

  // to apply drag effect on scrolls
  
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  
  
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  
  // In Home component
  const handleSearchClick = () => {
    console.log("Search clicked");
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    console.log("Modal closed");
    setIsSearchModalOpen(false);
  };




  // See More modal

  const [isSeeMoreModalOpen, setIsSeeMoreModalOpen] = useState(false);

  const handleSeeMoreClick = () => {
    console.log("See More clicked");
    setIsSeeMoreModalOpen(true);
  };

  const toggleModal = () => {
    setIsSeeMoreModalOpen(!isSeeMoreModalOpen);
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
    if (isSeeMoreModalOpen) {
      // Add event listeners when the modal is open
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('click', handleOutsideClick);
    }

    // Remove event listeners when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSeeMoreModalOpen, toggleModal]);




  return (
    <div className="homepage">
      <Navbar className="special" />
      <div className="main-section">
        <div className="home-header">
          <h1>
            Empowering Your <span>Health</span> Choices
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repellendus eligendi{" "}
          </p>
          <button><Link to= "/Doctor_cards/null">Book Appointment</Link>
            
          </button>
        </div>
        <div className="img-div-home">{/* <img src={doctorimg}/> */}</div>
      </div>

      <div className="services_section">
        <div className="services_headers">
          <h1>Fastest Solution</h1>
          <h3>4 Services Leading towards your Solution</h3>
        </div>

        <div className="services_cards">
          <Feature
            heading="Search Doctor"
            img={search_img}
            onClick={handleSearchClick}
            btn_text="Search"
          />
          <Feature
            heading="Online Doctor"
            className="custom_css"
            img={emergencyimg}
            btn_text="Consult"
          />
          <Feature heading="Chatbot" img={chat_bot_img} btn_text="Interact" />
          <Feature
            heading="Nearby Clinics"
            className="custom_css"
            img={nearby_img}
            btn_text="View"
          />
        </div>
        <div>
          {isSearchModalOpen && (
            <div className="search-modal modals">
              <div className="modals-content">
                <SearchTable />
                <button
                  className="close-button"
                  onClick={handleCloseSearchModal}
                >
                  <span role="img" aria-label="Close">
                    &#10006;
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="domain_section_outerdiv">
        <div className="domain_section" {...events}
          ref={ref}>
          {medicalDomains.map((domain, index) => {
            let imagePath;
            try {
              imagePath = require(`../assets/images/Domains/${domain.toLowerCase()}.png`);
            } catch (error) {
              // If the image doesn't exist, fallback to the plus image
              imagePath = require("../assets/images/plus.png");
            }
            return (
              <Domain
                key={index}
                heading={domain.toUpperCase()}
                img={imagePath}
                to={`/Doctor_cards/${domain}`}
              />
            );
          })}
        </div>
        <Domain
          heading="See More"
          img={require("../assets/images/plus.png")}
          className="addmore"
          onClick={handleSeeMoreClick}
        />
      </div>

      <div>
        {isSeeMoreModalOpen && (
          <div className="see-more-modal modals">
            <div className="modals-content">
              <div className="modal_heading">
                <h1>Domains</h1>

              </div>
              {medicalDomains.map((domain, index) => {
                let imagePath;
                try {
                  imagePath = require(`../assets/images/Domains/${domain.toLowerCase()}.png`);
                } catch (error) {
                  // If the image doesn't exist, fallback to the plus image
                  imagePath = require("../assets/images/plus.png");
                }

                return (
                  <SeeMoreModal
                    key={index}
                    img={imagePath}
                    domain={domain}
                    to={`/Doctor_cards/${domain}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default Home;
