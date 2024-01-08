import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarComp.css'

function CalendarComp() {
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
                    <Calendar
                        onChange={onChange}
                        value={selectedDate}
                        tileDisabled={tileDisabled}
                        tileClassName={tileClassName}
                        showNeighboringMonth={false}
                        minDate={new Date()}
                    />
                </div>
                <div className="slots-div">
                    <h1>Slots for {selectedDate.toDateString()} </h1>
                </div>
            </div>

        </div>
    );
}

export default CalendarComp;