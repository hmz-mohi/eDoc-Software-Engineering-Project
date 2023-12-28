import React from "react";
import "../styles/domain.css";

function Domain(props) {
  const handleButtonClick = () => {
    console.log("See More Button clicked");
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <button className= {`domain_cards ${props.className}`} onClick={handleButtonClick}>
      <div className="domain_cards_image_div">
        <img src={props.img} alt={props.heading} />
        <p className="domain_cards_heading">{props.heading}</p>
      </div>
    </button>
  );
}

export default Domain;
