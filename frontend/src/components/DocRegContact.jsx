import React from 'react';

function DocRegContact({ updateContactDetails }) {
  // Function to handle input changes and update state in DoctorAuth
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateContactDetails({ [name]: value });
  };

  return (
    <div className="introduction">
      <div className="first-row">
        <div className="row1-fields">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Usama123@gmail.com"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div className="row1-fields">
          <label>Phone Number</label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="+92 0000000000"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div className="row1-fields">
          <label>Address</label>
          <input
            type="address"
            name="address"
            placeholder="215 E Tasman Dr, Po Box 65502, CA 95134 San Jose"
            id=""
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default DocRegContact;
