import React, {useState} from 'react'


function DocRegEducation() {

  const [certificationFiles, setCertificationFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;

    // Extract file names from File objects
    const fileNames = Array.from(selectedFiles).map((file) => file.name);

    // Update the state with the array of selected file names
    setCertificationFiles(fileNames);
  };
  return (
    <div className="introduction">  
      <div className="first-row">
        <div className="row1-fields">
          <label>Middle School</label>
          <input type="text" name="" placeholder='Name of Institution' id="" />
          <input type="text" name="" placeholder='Your Grade' id="" />
        </div>
        <div className="row1-fields">
          <label>High School</label>
          <input type="text" name="" placeholder='Name of Institution' id="" />
          <input type="text" name="" placeholder='Your Grade' id="" />
        </div>
        <div className="row1-fields">
          <label>College</label>
          <input type="text" name="" placeholder='Name of Institution' id="" />
          <input type="text" name="" placeholder='Your Grade' id="" />
        </div>

      </div>
      <div className="Second-row">
        <div className="row2-fields">
          <label>Specialization</label>
          <input type="text" name="" style={{width: '22rem', marginRight:"1em"}} placeholder='Enter Your Medical Specialization' id="" />
        </div>
        <div className="row2-fields">
          <label>Certifications</label>
          {/* Use 'multiple' attribute to allow selecting multiple files */}
          <input style={{width: '22rem'}}
            type="file"
            name=""
            accept=".png"
            placeholder="png file"
            id=""
            onChange={handleFileChange}
            multiple
          />
        </div>
        {/* Display the selected file names */}
        {/* <div>
          {certificationFiles.length > 0 && (
            <p>Selected Files: {certificationFiles.join(', ')}</p>
          )}
        </div> */}

      </div>
    </div>
  )
}

export default DocRegEducation