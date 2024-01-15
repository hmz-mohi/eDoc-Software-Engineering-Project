// AboutUs.jsx

import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <header>
                <h1>User Guidelines for eDoc</h1>
            </header>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <section className="guideline">
                    <h2>eDoc Login and Signup</h2>
                    <p>
                        eDoc enhances user accessibility by providing secure and efficient login and signup functionalities for patients and a login + registration option for experts.
                    </p>
                </section>
                <section className="guideline">
                    <h2>Doctor Selection</h2>
                    <p>
                        Patients can browse through all available doctors separated by their domains and select a preferred expert at a mutually suited time.
                    </p>
                </section>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <section className="guideline">
                    <h2>Nearby Clinics</h2>
                    <p>
                        Patients will be provided with a list of nearby clinics for additional support.
                    </p>
                </section>

                <section className="guideline">
                    <h2>Emergency Support</h2>
                    <p>
                        Special experts are available 24/7 for patients in case of emergencies, providing assistance at all times.
                    </p>
                </section>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>

                <section className="guideline">
                    <h2>Video Consultations</h2>
                    <p>
                        Patients can interact with experts via video calls integrated with a file transfer system for exchanging reports or other documents.
                    </p>
                </section>

                <section className="guideline">
                    <h2>Admin Interface</h2>
                    <p>
                        An admin interface is provided to the owners to manage doctor registrations, with the authority to select or reject an individual.
                    </p>
                </section>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <section className="guideline">
                    <h2>Patient Record</h2>
                    <p>
                        Complete track records of patients are stored securely and can be accessed at any time by the patient.
                    </p>
                </section>

                <section className="guideline">
                    <h2>Doctor Appointments</h2>
                    <p>
                        Doctors will be provided with a schedule of appointments for the day and can update their profiles at any time.
                    </p>
                </section>
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <section className="guideline">
                    <h2>Users and Characteristics</h2>
                    <h3>Administrator</h3>
                    <p>
                        The administrator will have the authority to select/reject the registration request of the doctors and also accept the resignation of the doctors.
                    </p>
                    {/* Add more sections for Patient and Doctor characteristics as needed */}
                </section>
            </div>













        </div>
    );
}

export default AboutUs;