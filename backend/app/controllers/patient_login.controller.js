
const db = require("../models");
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.get_credentials_for_auth=async (req,res)=>{
    const { username, password } = req.body;
    try {
    
        const user = await db.patients_data.findOne({
          where: {
            pt_username: username,
            pt_password: password, // Assuming you have a password field in your User model
          },
        });
        if(user){
            return true
            

        }
        else{
            return false
            
        }
    
        
         // If user exists, it will be returned, otherwise null
      } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
      }
   // let domains= await db.doctors.findAll({attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('doc_specialization')), 'doc_specialization']]})
    //const specializationList = domains.map(doctor => doctor.doc_specialization);
    //console.log(specializationList)
    //res.json(specializationList)
}
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