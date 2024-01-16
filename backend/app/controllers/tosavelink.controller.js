
const db = require("../models");
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
}; // Import your Sequelize models




exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
// Import your Sequelize model

exports.update = async (req, res,id,link,time) => {
    console.log(id)
    console.log(link+"Ffferv")
    console.log(time)
 // const { id, link, link } = req.body; // Assuming you receive the ID, column name, and new value from the request body

  try {
    // Find the record by ID
    const recordToUpdate = await db.Booked_slots.findOne(
      {
        where: {
          regPatientId: id,
          slot_start_time:time
        },
        
      }
    );

    if (!recordToUpdate) {
     // return res.status(404).json({ error: 'Record not found' });
    }

    // Update the specific column with the new value
    recordToUpdate["link"] = link;

    // Save the changes
    await recordToUpdate.save();

    // Send a success response
   // res.json({ success: true, message: 'Record updated successfully' });
  } catch (error) {
    console.error('Error updating record:', error);
  //  res.status(500).json({ error: 'Internal server error' });
  }
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