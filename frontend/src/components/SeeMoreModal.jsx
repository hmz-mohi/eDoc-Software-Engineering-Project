import React from "react";
import "../styles/SeeMoreModal.css";

function SeeMoreModal(props) {
  return (
    <div>
      <div className="all_domain_card">
        <img src={props.img} alt="" />
          <p>{props.domain}</p>
      </div>
    </div>
  );
}

export default SeeMoreModal;
