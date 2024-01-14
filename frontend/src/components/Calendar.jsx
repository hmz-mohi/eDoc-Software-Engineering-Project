import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarComp.css'
import axios  from 'axios';

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
   // const handleslotclick=(starttime,endtime)=>{
    //   console.log(starttime)
      //  console.log(`selected doctor ${starttime} ${endtime}`)
   // }
    const handleslotclick = async (starttime,endtime) => {
        const values={
            doc_id: Doctor.doc_id,
            pt_name: sessionStorage.getItem("username"),
            pt_id: sessionStorage.getItem("pt_id"),
            starttime:starttime,
            endtime:endtime,
            slot_date:selectedDate.toDateString(),
          }
          console.log(values)
        try {
          const response = await axios.post('http://localhost:5000/auth/appointmentbooked', {
            doc_id: Doctor.doc_id,
            pt_name: sessionStorage.getItem("username"),
            pt_id: sessionStorage.getItem("pt_id"),
            start_time:starttime,
            endtime:endtime,
            slot_date:selectedDate.toDateString(),
          });
      
          // Handle the response if needed
          console.log(response.data);
        } catch (error) {
          // Handle errors
          console.error('Error sending POST request:', error.message);
        } 
      };
   //const handleSubmit =async (event) =>{
       // event.preventDefault();
         //doc_id=Doctor.doc_id
       //   doc_name=Doctor.doc_name
       //pt_name = sessionStorage.getItem("username")
  // pt_id= sessionStorage.getItem("pt_id")

         // const decide =await axios.post('http://localhost:5000/auth/login',{'email':values['email'], 'password':values['password']})
        //console.log(username)}
    



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
                            <button    key={index} onClick={()=>handleslotclick(slot.start,slot.end)} >
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