module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      admin_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin_username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      admin_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    return Admin;
  };
  