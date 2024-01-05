module.exports = (sequelize, Sequelize) => {
    const REG_PATIENT = sequelize.define("reg_patient", {
      pt_id: {
        type: Sequelize.STRING
      },
      pt_name: {
        type: Sequelize.STRING
      },
      pt_age: {
        type: Sequelize.STRING
      },
      pt_username: {
        type: Sequelize.STRING
      },
       pt_password: {
      type: Sequelize.STRING
    }
   });

  
    return REG_PATIENT;
  };