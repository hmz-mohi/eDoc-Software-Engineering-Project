module.exports = (sequelize, Sequelize) => {
    const REG_PATIENT = sequelize.define("reg_patient", {
      pt_name: {
        type: Sequelize.STRING
      },
      pt_dob: {
        type: Sequelize.STRING
      },
      pt_email: {
        type: Sequelize.STRING
      },
       pt_password: {
      type: Sequelize.STRING
    }
   });

  
    return REG_PATIENT;
  };