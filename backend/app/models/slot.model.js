 // slot.model.js
 module.exports = (sequelize, Sequelize) => {
  const Slot = sequelize.define("slot", {
    slot_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    start_time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    end_time: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    slot_duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

 
  return Slot;
};