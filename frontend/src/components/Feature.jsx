  import React from "react";
  import "../styles/Feature.css";


  function Feature(props) {

// In Feature component
const handleButtonClick = () => {
  console.log("Button clicked");
  if (props.onClick) {
    props.onClick();
  }
};

    return (
      <div className="main" style={{margin: '1% 3%'}}>
      <div className={`card ${props.className}`}>
        <div className="heading">{props.heading}</div>
        <div className="details">Beste Design till date.Flex it up as you wish,but you can't break it.</div>
        <button className="btn1" onClick={handleButtonClick}>{props.btn_text}</button>
      </div>
      <img className="glasses" src={props.img} alt="Glasses Image"/>
    </div>
    );
  }

  export default Feature;
