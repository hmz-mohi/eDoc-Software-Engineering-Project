const Doctor = require('./doctors.model');
module.exports = (sequelize, Sequelize) => {
    const Salary = sequelize.define("salary", {
      salary_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      doc_id: {
        type: Sequelize.INTEGER, // Assuming UUID as in the Doctor table
        allowNull: false,
        references: {
          model: 'doctors', // Make sure to match the actual table name
          key: 'doc_id',
        },
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2), // Assuming a decimal for monetary values
        allowNull: false,
      },
      salary_due: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
    Salary.associate = (models) => {
      Salary.belongsTo(models.Doctor, {foreignKey: 'doc_id'});
  
    return Salary;
  }};
  