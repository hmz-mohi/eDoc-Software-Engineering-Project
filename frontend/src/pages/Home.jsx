import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Feature from "../components/Feature";
import chat_bot_img from "../assets/images/chat-bot.png";
import nearby_img from "../assets/images/nearby.png";
import search_img from "../assets/images/search.png";
import emergencyimg from "../assets/images/emergency.png";
import { useState } from "react";
import SearchTable from "../components/SearchFeature";

function Home() {
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
      </div>
      <div>
        {isSearchModalOpen && (
          <div className="modals">
            <div className="modals-content">
              <SearchTable/>
              <button className="close-button" onClick={handleCloseSearchModal}>
          <span role="img" aria-label="Close">&#10006;</span>
        </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
