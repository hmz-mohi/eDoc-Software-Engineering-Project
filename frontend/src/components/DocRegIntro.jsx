import React, { useState } from 'react'


function DocRegIntro() {

    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile && selectedFile.type === 'image/png') {
            // Valid PNG file
            console.log('Valid PNG file:', selectedFile);
        } else {
            // Invalid file type
            console.error('Please select a PNG file.');
        }
    };
    return (
        <div className="introduction">
            <div className="first-row">
                <div className="row1-fields">
                    <label>First Name</label>
                    <input type="text" name="" placeholder='Usama' id="" />
                </div>
                <div className="row1-fields">
                    <label>Last Name</label>
                    <input type="text" name="" placeholder='Bin Laden' id="" />
                </div>
                <div className="row1-fields">
                    <label>DOB</label>
                    <input type="date" name="" placeholder='Bin Laden' id="" />
                    
                </div>

            </div>
            <div className="Second-row">
                <div className="row2-fields">
                    <label>Nationality</label>
                    <input type="text" name="" placeholder='Nationality' id="" />
                </div>
                <div className="row2-fields">
                    <label>CNIC</label>
                    <input type="text" name="" placeholder='Your CNIC Number' id="" />
                </div>
                <div className="row2-fields">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        name=""
                        accept=".png"
                        placeholder="png file"
                        id=""
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default DocRegIntro