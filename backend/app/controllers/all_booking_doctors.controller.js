const db = require("../models");
const Op = db.Sequelize.Op;

function convertTo24HourFormat(timeString) {
  const [time, period] = timeString.split(/(?=[APMapm])/); // Split time and AM/PM
  let [hours, minutes] = time.split(':').map(Number);

  // Convert to 24-hour format
  if (period.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period.toLowerCase() === 'am' && hours === 12) {
    hours = 0;
  }

  return [hours, minutes];
}


function generateSlots(docDuration, meetingDuration, breakDuration) {
  const [start, end] = docDuration.split('-').map(time => convertTo24HourFormat(time));

  console.log("Start and End Time:", start, end);

  const startDate = new Date(2000, 0, 1, start[0], start[1]);
  let endDate = new Date(2000, 0, 1, end[0], end[1]);

  // Adjust the end date if it is earlier than the start date (span across midnight)
  if (endDate < startDate) {
    endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  }

  console.log("Start and End Date:", startDate, endDate);

  const slots = [];
  let currentSlot = startDate;

  console.log("Initial Current Slot:", currentSlot);

  while (currentSlot < endDate) {
    const slotEnd = new Date(currentSlot.getTime() + meetingDuration * 60000);
    slots.push({ start: currentSlot, end: slotEnd });

    console.log("Slot Start and End:", currentSlot, slotEnd);

    // Add break
    currentSlot = new Date(slotEnd.getTime() + breakDuration * 60000);

    console.log("Next Current Slot:", currentSlot);
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
        },
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