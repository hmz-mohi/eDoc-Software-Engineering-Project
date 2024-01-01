import React from 'react';
import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import "../styles/doctor_cards.css"

function Doctor_cards() {
  const { domain } = useParams();

  return (
    <div className='viewdoctors_main_section'>
      <Navbar />
      <div>
        <div className="doctor_header_text">
          <h1>Your Health is Our Priority!!</h1>
          <h3>Consult the Best <span>{domain}s</span> in <br /> Pakistan Online</h3>
        </div>
      </div>

    </div>
  );
}

export default Doctor_cards;
