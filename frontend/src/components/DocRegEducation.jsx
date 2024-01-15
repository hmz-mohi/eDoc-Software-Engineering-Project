import React, { useState } from 'react';

function DocRegEducation({ updateEducationDetails }) {
  const [certificationFiles, setCertificationFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const fileNames = Array.from(selectedFiles).map((file) => file.name);
    setCertificationFiles(fileNames);

    // Pass the updated certification files to the parent component
    updateEducationDetails({ certificationFiles: fileNames });
  };

  const handleInputChange = (field, value) => {
    // Pass the updated education details to the parent component
    updateEducationDetails({ [field]: value });
  };

  return (
    <div className="introduction">
      <div className="first-row">
        {/* ... (existing code) */}
      </div>
      <div className="Second-row">
        <div className="row2-fields">
          <label>Specialization</label>
          <input
            type="text"
            name="specialization"
            style={{ width: '22rem', marginRight: '1em' }}
            placeholder='Enter Your Medical Specialization'
            id=""
            onChange={(e) => handleInputChange('specialization', e.target.value)}
          />
        </div>
        <div className="row2-fields">
          <label>Certifications</label>
          <input
            style={{ width: '22rem' }}
            type="file"
            name=""
            accept=".png"
            placeholder="png file"
            id=""
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>
    </div>
  );
}

export default DocRegEducation;
