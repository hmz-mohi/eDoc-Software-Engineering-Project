import CustomNavbar from "../components/CustomNavbar";
import "../styles/DoctorDashboard.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Booking } from "../bookingdata";
import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactPaginate from 'react-paginate';


function DoctorDashboard() {
  const today = new Date();
  const oneMonthLater = new Date(today);
  oneMonthLater.setMonth(today.getMonth() + 1);

  const [selectedDate, setSelectedDate] = useState(today);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [appointments, setAppointments] = useState([]);




  useLayoutEffect(() => {
    const updateCurrentTime = () => setCurrentTime(new Date());

    // Call updateCurrentTime immediately
    updateCurrentTime();

    // Set up a timer to update the current time every 10 seconds
    const timerId = setInterval(updateCurrentTime, 10000); // Update every 10 seconds

    // Clean up the timer on component unmount
    return () => clearInterval(timerId);
  }, []);

  const onChange = (newDate) => setSelectedDate(newDate);

  const tileDisabled = ({ date, view }) => view === "month" && date > oneMonthLater;

  const formattedSelectedDate = selectedDate.toLocaleDateString("en-US");

  const isToday = formattedSelectedDate === today.toLocaleDateString("en-US");



  // PAGINATE

  const [pageNumber, setPageNumber] = useState(0);
  const appointmentsPerPage = 5; // Adjust as needed

  // Calculate the number of pages
  const pagesVisited = pageNumber * appointmentsPerPage;
  const pageCount = Math.ceil(appointments.length / appointmentsPerPage);

  // Slice the data for the current page
  const displayedAppointments = appointments.slice(pagesVisited, pagesVisited + appointmentsPerPage);

  // Handle page change
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



  useEffect(() => {
    // Filter the data based on doc_id and date
    const filteredData = Booking.filter(
      (data) => data.doc_id === "10" && data.date === formattedSelectedDate
    );

    // Set appointments and reset pageNumber to 0
    setAppointments(filteredData);
    setPageNumber(0);
  }, [formattedSelectedDate]);
  

  return (
    <>
      <CustomNavbar />
      <div className="DoctorDashboard-main-section">
        <Calendar
          onChange={onChange}
          value={selectedDate}
          tileDisabled={tileDisabled}
          showNeighboringMonth={false}
          minDate={new Date()}
          className="DashboardCalender"
        />
<div className="appointments-div">
  <h1>Scheduled Appointments</h1>
  {displayedAppointments.length === 0 ? (
    <p>No appointments for the selected date.</p>
  ) : (
    <>
      <table>
        <thead>
          <tr>
            <th>Slot Start Time</th>
            <th>Doctor Name</th>
            <th>Patient ID</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedAppointments.map((data, index) => {
            const slotStartTime = new Date(`${data.date} ${data.Slot_start_time}`);
            const slotEndTime = new Date(`${data.date} ${data.Slot_end_time}`);

            return (
              <tr key={index} className="AppointmentCard">
                <td>{data.Slot_start_time}</td>
                <td>{data.doc_name}</td>
                <td>{data.patient_id}</td>
                <td>{data.date}</td>
                <td>
                  <div className="btn-div">
                    <button
                      className="button"
                      disabled={!isToday || currentTime < slotStartTime || currentTime > slotEndTime}
                      onClick={() => {
                        alert(`Button clicked for Slot_start_time: ${data.Slot_start_time}`);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        viewBox="0 0 32 32"
                        height="32"
                        fill="none"
                        className="svg-icon"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          stroke="#fff"
                          fillRule="evenodd"
                          d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination */}
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"PaginationContainer"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          forcePage={pageNumber}
        />
    </>
  )}
</div>

        <div className="patient_div">
          <h1>Your Patients</h1>
          {appointments.length === 0 ? (
            <p>No patients for the selected date.</p>
          ) : (
            appointments.map((data, index) => (
              <div key={index} className="patientCard">
                <p>{data.doc_name}</p>
                <p>{data.patient_id}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;