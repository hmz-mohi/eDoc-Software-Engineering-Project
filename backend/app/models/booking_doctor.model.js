const Doctor = require('./doctors.model');
module.exports = (sequelize, Sequelize) => {
const BookingDoctor = sequelize.define('BookingDoctor', {
  bookingDocId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  daily_Duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  meeting_Duration: {
    type:Sequelize.INTEGER,
    allowNull: false,
  },
});
BookingDoctor.associate = (models) => {
  BookingDoctore.belongsTo(models.Doctor, {foreignKey: 'ID'});
  return BookingDoctor

}};


