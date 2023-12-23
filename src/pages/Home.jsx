import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import emergencyImg from '../assets/images/emergency.png'

function Home() {
  return (
    <div className="homepage">
      <div className="main-section">
        <Navbar className="special" />
        <div className="home-header">
          <h1>
            Empowering Your <span>Health</span> Choices
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
