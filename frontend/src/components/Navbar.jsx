// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import iconimg from "../assets/images/icons/stethoscope.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample(props) {
  let username = sessionStorage.getItem("username")
  console.log(username)
  let login = false
  if (username) {
    login = true;
  }

  const [isuserDashboardOpen, setUserDashboardOpen] = useState(false);

  const handleDashboardClick = () => {
    setUserDashboardOpen(!isuserDashboardOpen);
  };

  return (
    <Navbar className={`fixed-top ${props.className}`}>
      <div className="brand">
        <img src={iconimg} style={{ width: "8%", height: "8%" }} alt="" />

        <Navbar.Brand className="nav-heading">
          {" "}
          <Link className="nav-heading" to="/">
            eDoc
          </Link>{" "}
        </Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav navbarScroll>
          <Link className="nav-text-para" to="/">
            {" "}
            Home
          </Link>
          <Link className="nav-text-para" to="/auth">
            {" "}
            ChatBot
          </Link>
          {login ? (
            <div className="nav-text-para">
              <img src={require('../assets/images/icons/notification.png')} style={{ width: '20px' }} />
            </div>
          ) : (
            <Link className="nav-text-para" to="/regasdoctor">
              {" "}
              <p className="regdoc">Register as Doctor</p>
            </Link>
          )}
          {login ? (
            <div className="user-dashboard">
              <button className="navbar-btn" onClick={handleDashboardClick}></button>

              {isuserDashboardOpen && (
                <div className="user-profile-modal modals">
                  <div className="modals-content">
                    <div className="user-profile-top-div">
                      <button  className="inside-btn" onClick={handleDashboardClick}></button>

                    </div>
                    <div className='doctor-top-div-details'>
                  <p>{username}</p>
                  <p>hamzaanwer2016@gmail.com</p>
                </div>
                    <div className="logout-div">
                    <button class="Btn">
                      <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                      <div class="text">Logout</div>
                    </button>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link className="nav-text-para loginbutton" to="/auth">
              {" "}
              <p>Login</p>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavScrollExample;
