module.exports = (sequelize, Sequelize) => {
    const Bookedslots = sequelize.define("Bookedslots", {
      slot_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      slot_start_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slot_end_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      pt_name: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      slot_date: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
      },
      
      
      


    });
  
    return Bookedslots;
  };
  