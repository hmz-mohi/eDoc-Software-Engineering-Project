import React from 'react';

function DocRegCred({ updateCredDetails }) {
  const handleInputChange = (field, value) => {
    // Pass the updated credential details to the parent component
    updateCredDetails({ [field]: value });
  };

  return (
    <div className="introduction">
      <div className="Second-row">
        <div className="row2-fields">
          <label>UserName</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter Your UserName"
            id=""
            onChange={(e) => handleInputChange('userName', e.target.value)}
          />
        </div>
        <div className="row2-fields">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            id=""
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="row2-fields">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Your Password Again"
            id=""
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default DocRegCred;
