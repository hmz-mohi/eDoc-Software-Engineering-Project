import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../styles/DoctorAuth.css'
import DocRegIntro from '../components/DocRegIntro'
import DocRegContact from '../components/DocRegContact'
import DocRegAdditional from '../components/DocRegAdditional';
import DocRegCred from '../components/DocRegCred';
import DocRegEducation from '../components/DocRegEducation';
import { FaStar } from "react-icons/fa";

function DoctorAuth() {
    const [DoctorAuth, setDoctorAuth] = useState(true)
    return (
        <div>
            <div className="doctor-auth-top-section">
                <div className='text-div'>
                    <h1>WELCOME TO eDOC</h1>
                    <p>REGISTER NOW</p>
                </div>
            </div>
            <div className="doctor-auth-form-section">
                <div className="formdiv">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Doctor's Introduction</Accordion.Header>
                            <Accordion.Body>
                                <DocRegIntro />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Contact Details<FaStar style={{color:"red"}} /></Accordion.Header>
                            <Accordion.Body>
                                <DocRegContact />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Education & Qualification</Accordion.Header>
                            <Accordion.Body>
                                <DocRegEducation />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Additional Details</Accordion.Header>
                            <Accordion.Body>
                                <DocRegAdditional />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Credential Part</Accordion.Header>
                            <Accordion.Body>
                                <DocRegCred />
                                <div class="buttons">
                        <button class="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
                    </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                </div>
                <div className='image-div'>

                </div>
            </div>
        </div>
    )
}

export default DoctorAuth