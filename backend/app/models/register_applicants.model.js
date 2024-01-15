module.exports = (sequelize, Sequelize) => {
const register_applicants = sequelize.define('Register_applicants', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dob: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  startTime: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  endTime: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  duration: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  middleSchoolInstitution: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  middleSchoolGrade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  highSchoolInstitution: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  highSchoolGrade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  collegeInstitution: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  collegeGrade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  specialization: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  certificationFiles: {
    type: Sequelize.STRING, // Assuming it's an array of file paths
    allowNull: true,
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cnic: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  
})
return register_applicants;
};

