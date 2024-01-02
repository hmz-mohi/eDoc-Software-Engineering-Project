import React from "react";
import "../styles/doctor_page_domains.css";
import { Link } from 'react-router-dom';
function Doctor_page_domains(props) {

    const handleButtonClick = () => {
        console.log("See More Button clicked");
        if (props.onClick) {
          props.onClick();
        }
      };
  return (
    <button className= {`doctorPagedomain_cards ${props.className}`} onClick={handleButtonClick}>
      <Link style={{textDecoration: "none", padding:"0", margin:"0", width: "auto"}} className="link" to= {props.to}>
        <p className="doctorPagedomain_cards_heading">{props.heading}</p>
      </Link>

    </button>
  )
}

export default Doctor_page_domains