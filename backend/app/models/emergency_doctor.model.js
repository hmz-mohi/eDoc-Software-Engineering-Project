const Doctor = require('./doctors.model');
module.exports = (sequelize, Sequelize) => {

const EmergencyDoctor = sequelize.define('EmergencyDoctor', {
  emergency_DocId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
EmergencyDoctor.associate = (models) => {
  EmergencyDoctor.belongsTo(models.Doctor, {foreignKey: 'doc_id'});
   return EmergencyDoctor
}};