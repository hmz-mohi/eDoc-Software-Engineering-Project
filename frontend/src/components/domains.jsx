import React from "react";
import "../styles/domain.css";
import { Link } from 'react-router-dom';
function Domain(props) {
  const handleButtonClick = () => {
    console.log("See More Button clicked");
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button className= {`domain_cards ${props.className}`} onClick={handleButtonClick}>
      <Link style={{textDecoration: "none"}} to= {props.to}>
      <div className="domain_cards_image_div">
        <img src={props.img} alt={props.heading} />
        <p className="domain_cards_heading">{props.heading}</p>
      </div>
      </Link>

    </button>
  );
}

export default Domain;
