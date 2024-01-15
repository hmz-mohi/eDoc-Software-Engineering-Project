import React, { useState, useEffect, createRef } from 'react';
//import { createRef } from 'react';

function DocRegIntro({ updateIntroDetails }) {

    const [profilePicture, setProfilePicture] = useState(null);
    const fileinput = createRef();
  
    const handleFileChange = (event) => {
      event.preventDefault();
      const selectedFile = event.target.files[0];
  
      if (selectedFile ) {
        const formData = new FormData();
        formData.set("profilePicture", selectedFile);
  
        // Update the state with the FormData
        setProfilePicture(formData);
  
        // Pass the updated profile picture to the parent component
        updateIntroDetails({ profilePicture: formData });
        console.log("i am here")
      } else {
        // Invalid file type
        console.error('Please select a PNG file.');
      }
    };
  
    useEffect(() => {
      console.log("Profile Picture:", profilePicture);
    }, [profilePicture]);
  
 /*  const [profilePicture, setProfilePicture] = useState(null);
  const fileinput =createRef()

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    //event.preventDefault();
  
    //setProfilePicture(formdata);
    

    if (selectedFile && selectedFile.type === 'image/png') {
      const formdata=new FormData();
      formdata.set("profilePicture",fileinput.current.value[0])
      console.log(" i am here")
      // Valid PNG file
      setProfilePicture(formdata);
      
      console.log(profilePicture)

      // Pass the updated profile picture to the parent component
      updateIntroDetails({ profilePicture: formdata });
    } else {
      // Invalid file type
      console.error('Please select a PNG file.');
    }
  };  */
  //console.log(ptofilePic)

  const handleInputChange = (field, value) => {
    // Pass the updated introduction details to the parent component
    updateIntroDetails({ [field]: value });
  };

  return (
    <div className="introduction">
      <div className="first-row">
        <div className="row1-fields">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Usama"
            id=""
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
        </div>
        <div className="row1-fields">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Bin Laden"
            id=""
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>
        <div className="row1-fields">
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            id=""
            onChange={(e) => handleInputChange('dob', e.target.value)}
          />
        </div>
      </div>
      <div className="Second-row">
        <div className="row2-fields">
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            id=""
            onChange={(e) => handleInputChange('nationality', e.target.value)}
          />
        </div>
        <div className="row2-fields">
          <label>CNIC</label>
          <input
            type="text"
            name="cnic"
            placeholder="Your CNIC Number"
            id=""
            onChange={(e) => handleInputChange('cnic', e.target.value)}
          />
        </div>
        <div className="row2-fields">
          <label>Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            
            ref={fileinput}
           // accept=".png"
           // placeholder="png file"
            id=""
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}

export default DocRegIntro;
