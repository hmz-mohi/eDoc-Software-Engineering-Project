const db = require("../models");
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
}; // Import your Sequelize models

exports.sendlink = async (req, res) => {
    pt_id=req.query.pt_id
    console.log(pt_id)
  try {
    const doctorsData = await db.Booked_slots.findOne({
        attributes: ['link'], // Specify the columns you want to retrieve
        where: {
          regPatientId: pt_id,
        }
       

      
      
      
    });



    console.log(doctorsData.link)
    res.status(200).json({ success: true, data: doctorsData });
  } catch (error) {
    console.error('Error fetching all doctors data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
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