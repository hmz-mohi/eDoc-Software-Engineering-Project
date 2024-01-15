import React from 'react';

function DocRegAdditional({ updateAdditionalDetails }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateAdditionalDetails({ [name]: value });
  };

  return (
    <div className="introduction">
      <div className="first-row">
        <div className="row1-fields">
          <label>Enter Start Time</label>
          <input
            type="time"
            name="startTime"
            placeholder="Enter Start Time"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div className="row1-fields">
          <label>Enter End Time</label>
          <input
            type="time"
            name="endTime"
            placeholder="Enter End Time"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div className="row1-fields">
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration"
            id=""
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default DocRegAdditional;
