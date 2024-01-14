const db = require("../models");
const Op = db.Sequelize.Op;

function convertTo24HourFormat(timeString) {
  const [start, end] = timeString.split('-').map(time => {
    const [hours, minutes] = time.split(':').map(Number);
    return [hours, minutes];
  });

  return [start, end];
}

function formatTime(time) {
  return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function generateSlots(docDuration, meetingDuration, breakDuration) {
  const [start, end] = convertTo24HourFormat(docDuration);

  console.log("Start and End Time:", formatTime(new Date(2000, 0, 1, start[0], start[1])), formatTime(new Date(2000, 0, 1, end[0], end[1])));

  const startDate = new Date(2000, 0, 1, start[0], start[1]);
  const endDate = new Date(2000, 0, 1, end[0], end[1]);

  console.log("Start and End Date:", formatTime(startDate), formatTime(endDate));

  const slots = [];
  let currentSlot = startDate;

  console.log("Initial Current Slot:", formatTime(currentSlot));

  while (currentSlot < endDate) {
    const slotEnd = new Date(currentSlot.getTime() + meetingDuration * 60000);

    // Check if the slot end time is beyond the doctor's working hours
    if (slotEnd > endDate) {
      break;
    }

    slots.push({
      start: formatTime(currentSlot),
      end: formatTime(slotEnd),
    });

    console.log("Slot Start and End:", formatTime(currentSlot), formatTime(slotEnd));

    // Add break
    currentSlot = new Date(slotEnd.getTime() + breakDuration * 60000);

    console.log("Next Current Slot:", formatTime(currentSlot));
  }

  return slots;
}






// Create and Save a new Tutorial
exports.create = (req, res) => {
  
}; // Import your Sequelize models

exports.getAllDoctorsData = async (req, res) => {
  try {
    const doctorsData = await db.doctors.findAll({
      where: {
        doc_type:"Booking", // Assuming you have a password field in your User model
      },include: [{
          model: db.certifications // Make sure this matches the alias you used in the association
        },{
          model:db.Booked_slots
        }
      ]
      
    });
    const meetingDuration = 20; // in minutes
  const breakDuration = 20; // in minutes

  const doctorsWithSlots = doctorsData.map(doctor => {
    const { doc_duration, doc_meeting_Duration, ...rest } = doctor.toJSON();
    const slots = generateSlots(doc_duration, doc_meeting_Duration,breakDuration);
    return { ...rest, slots };
  });

  res.status(200).json({ success: true, data: doctorsWithSlots });
} catch (error) {
  console.error('Error fetching all doctors data:', error);
  res.status(500).json({ success: false, message: 'Internal server error' });

   // console.log(doctorsData)

    //res.status(200).json({ success: true, data: doctorsData });
 // } catch (error) {
   // console.error('Error fetching all doctors data:', error);
   // res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
const findAll = (req, res) => {
    
};