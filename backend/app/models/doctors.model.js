module.exports = (sequelize, Sequelize) => {
const Doctor = sequelize.define('Doctor', {
  doc_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  doc_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doc_specialization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doc_username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  doc_experience: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doc_password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doc_valid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  doc_duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  doc_meeting_Duration: {
    type:Sequelize.INTEGER,
    allowNull: true,
  },
  doc_type: {
    type:Sequelize.STRING,
    allowNull: true,
  },


});

  //Doctor.hasOne(models.EmergencyDoctor, { foreignKey: 'doc_id'});
    // Add other associations if needed

  
  return Doctor
};

