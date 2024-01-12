
const db = require("../models");
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial

exports.create = async (req, res) => {
    console.log("yahan arha ")
  const  pt_email  = req.body.email;
  const pt_password=req.body.password;
  const pt_dob=req.body.dob;
  const pt_Fname=req.body.Fname
  const pt_Lname=req.body.Lname
  const pt_name=pt_Fname.concat(pt_Lname)

  // Validate required fields
  if ( !pt_name || !pt_dob || !pt_email || !pt_password) {
    console.log("panga hgya")
    //return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Create a new reg_patient instance
  const newPatient = {
    pt_name,
    pt_dob,
    pt_email,
    pt_password
  };
  console.log(newPatient)

  // Insert the new patient data into the reg_patient model
  await db.patients_data.create(newPatient)
  return "new_patient_registered"
<<<<<<< HEAD
    // .then(patient => {
    //   //res.status(201).json({ success: true, data: patient });
    //   return "new_patient_registered"
    // })
    // .catch(error => {
    //   console.error('Error creating patient:', error);
    //   res.status(500).json({ success: false, message: 'Internal server error' });
    // });
=======
   /*  .then(patient => {
      //res.status(201).json({ success: true, data: patient });
      return "new_patient_registered"
  
    .catch(error => {
      console.error('Error creating patient:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }); */
>>>>>>> f49eaabf5d91f00a60e44c0a992edb818fe78f97
};

// Retrieve all Tutorials from the database.
exports.doesexist=async (req,res)=>{
    console.log(req.body)
    const { email, password } = req.body;
    const  pt_dob  = req.body.dob;
    const pt_fname=req.body.Fname
    const pt_Lname=req.body.Lname
    
    const pt_name=pt_fname.concat(pt_Lname)
    console.log(pt_dob)
    console.log(pt_name)
    console.log(email)
    console.log(password)
    try {
    
        const user = await db.patients_data.findOne({
          where: {
            pt_email: email,
            pt_password: password, // Assuming you have a password field in your User model
          },
        });
        console.log(user)
        if(user==null){
            console.log("null ai hai")
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