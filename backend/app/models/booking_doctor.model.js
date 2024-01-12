
module.exports = (sequelize, Sequelize) => {
const Doctor = require('./doctors.model.js');
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
  BookingDoctor.belongsTo(models.Doctor, {foreignKey: 'doc_id'});
}
return BookingDoctor
};


