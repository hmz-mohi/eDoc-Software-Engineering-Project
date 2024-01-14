import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarComp.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CalendarComp(props) {
    const Doctor = props.doctor;
    const BookedSlots = props.BookedSlots;
    const DoctorSlots = Doctor.slots;

    const [show, setShow] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null); // Track the selected slot
    const handleClose = () => setShow(false);
    const handleShow = (slot) => {
        setSelectedSlot(slot); // Set the selected slot
        setShow(true);
    };

    const today = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);

    const [selectedDate, setSelectedDate] = useState(today);

    const onChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const tileDisabled = ({ date, view }) => {
        // Disable dates after one month
        if (view === 'month') {
            return date > oneMonthLater;
        }
    };

    const handleslotclick = async (starttime, endtime) => {
        const values = {
            doc_id: Doctor.doc_id,
            pt_name: sessionStorage.getItem('username'),
            pt_id: sessionStorage.getItem('pt_id'),
            starttime: starttime,
            endtime: endtime,
            slot_date: selectedDate.toDateString(),
        };
        console.log(values);
        handleShow({ start: starttime, end: endtime }); // Show the modal with the selected slot
    };

    DoctorSlots.forEach((element) => {
        element.disable = false;
    });

    BookedSlots.forEach((Element) => {
        DoctorSlots.forEach((element) => {
            if (Element.slot_start_time === element.start && Element.slot_date === selectedDate.toDateString()) {
                element.disable = true;
            }
        });
    });

    const handleSaveChanges = async () => {
        if (selectedSlot) {
            try {
                handleClose(); // Close the modal after saving changes
                window.location.reload()
                const response = await axios.post('http://localhost:5000/auth/appointmentbooked', {
                    doc_id: Doctor.doc_id,
                    pt_name: sessionStorage.getItem('username'),
                    pt_id: sessionStorage.getItem('pt_id'),
                    start_time: selectedSlot.start,
                    endtime: selectedSlot.end,
                    slot_date: selectedDate.toDateString(),
                });

                // Handle the response if needed
                console.log(response.data);
            } catch (error) {
                // Handle errors
                console.error('Error sending POST request:', error.message);
            }
        }

        
    };

    return (
        <div>
            <div className="component-parent-div">
                <div className="calendar-div">
                    <div className="calender-div-text">
                        <h4>Select the date to book an appointment</h4>
                    </div>
                    <hr />

                    <Calendar
                        onChange={onChange}
                        value={selectedDate}
                        tileDisabled={tileDisabled}
                        showNeighboringMonth={false}
                        minDate={new Date()}
                        className="BookingCalender"
                    />
                </div>
                <div className="slots-div">
                    <div className="calender-div-text">
                        <h4>Slots for {selectedDate.toDateString()}</h4>
                    </div>
                    <hr />
                    <div className="slots-container">
                        {Doctor &&
                            Doctor.slots &&
                            Doctor.slots.map((slot, index) => (
                                <button disabled={slot.disable} key={index} onClick={() => handleslotclick(slot.start, slot.end)}>
                                    {slot.start} - {slot.end}
                                </button>
                            ))}
                    </div>

                    <Modal show={show} backdrop="static" onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Booking Confirmation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to book Appointment for this slot with {Doctor.doc_name}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                No
                            </Button>
                            <Button variant="primary" onClick={handleSaveChanges}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default CalendarComp;
