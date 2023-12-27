// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import iconimg from "../assets/images/stethoscope.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample(props) {
  const login = false;

  return (
    <Navbar className={`${props.className}`}>
        <div className="brand">
          <img src={iconimg} style={{ width: "8%", height: "8%" }} alt="" />

          <Navbar.Brand className="nav-heading">
            {" "}
            <Link className="nav-heading" to="/home">
              eDoc
            </Link>{" "}
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Link className="nav-text-para" to="/home">
              {" "}
              Home
            </Link>
            <Link className="nav-text-para" to="/login">
              {" "}
              ChatBot
            </Link>
            {login ? ('Register as ululul') : (
              <Link className="nav-text-para" to="/regasdoctor">
                {" "}
                <p className="regdoc">Register as Doctor</p>
              </Link>)}
            {login? ("") : (<Link className="nav-text-para loginbutton" to="/login">
              {" "}
              <p>Login</p>
            </Link>)}
            
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default NavScrollExample;
