// certifications.model.js
// Assuming you have a separate file for Sequelize configuration
module.exports = (sequelize, Sequelize) => {
const Certification = sequelize.define('Certification', {
  certification_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  certification_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
    return Certification
}