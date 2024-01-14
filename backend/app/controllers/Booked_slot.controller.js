const db = require("../models");
const Op = db.Sequelize.Op;

exports.createnewappointment = async (req, res) => {
  console.log("here ")
  const  regPatientId=req.body.pt_id
  const  pt_name = req.body.pt_name;
  const  DoctorDocId=req.body.doc_id;
  const slot_start_time=req.body.start_time
  const slot_end_time=req.body.endtime
  const slot_date=req.body.slot_date

  // Validate required fields
  if ( !pt_name || !DoctorDocId || !slot_start_time || !slot_end_time|| !slot_date) {
    console.log("panga hgya")
    //return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Create a new reg_patient instance
  const newappointment = {
    regPatientId,
    DoctorDocId,
    slot_start_time,
    slot_end_time,
    pt_name,
    slot_date,

  };


  // Insert the new patient data into the reg_patient model
  await db.Booked_slots.create(newappointment)
  return "new_appointment_entered"
   /*  .then(patient => {
      //res.status(201).json({ success: true, data: patient });
      return "new_patient_registered"
  
    .catch(error => {
      console.error('Error creating patient:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }); */
};

// Retrieve all Tutorials from the database.

// Find a single Tutorial with an id
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