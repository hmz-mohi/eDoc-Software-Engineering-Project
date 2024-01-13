import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarComp.css'

function CalendarComp(props) {
    const Doctor = props.doctor
    console.log(Doctor)

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

    const tileClassName = ({ date, view }) => {
        // Highlight the current date
        if (view === 'month' && date.toDateString() === today.toDateString()) {
            return 'highlight-current-date';
        }
    };



    return (
        <div>
            <div className="component-parent-div">
                <div className="calendar-div">
                    <div className="calender-div-text">
                    <h4>Select the date to book appointment</h4>
                    </div>
                    <hr />

                    <Calendar
                        onChange={onChange}
                        value={selectedDate}
                        tileDisabled={tileDisabled}
                        tileClassName={tileClassName}
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
                    {Doctor && Doctor.slots
                        ? Doctor.slots.map((slot, index) => (
                            <button key={index}>
                                {slot.start} - {slot.end}
                            </button>
                        ))
                        : 'No slots available'}
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default CalendarComp;