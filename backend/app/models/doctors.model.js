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
});
  return Doctor
};

