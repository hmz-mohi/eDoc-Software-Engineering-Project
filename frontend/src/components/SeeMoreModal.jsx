import React from "react";
import "../styles/SeeMoreModal.css";
import { Link } from 'react-router-dom';
function SeeMoreModal(props) {
  return (
    <div>
      <Link to = {props.to} style={{textDecoration:'none', color:"inherit"}}>
      <div className="all_domain_card">
        <img src={props.img} alt="" />
          <p>{props.domain}</p>
      </div>
      </Link>
    </div>

  );
}

export default SeeMoreModal;
