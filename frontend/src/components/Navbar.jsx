// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import iconimg from "../assets/images/icons/stethoscope.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample(props) {
  const login = false;
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
              <button onClick={handleDashboardClick}></button>

              {isuserDashboardOpen && (
                <div className="user-profile-modal modals">
                  <div className="modals-content">
                    <div className="user-profile-top-div">
                      <button onClick={handleDashboardClick}></button>
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
