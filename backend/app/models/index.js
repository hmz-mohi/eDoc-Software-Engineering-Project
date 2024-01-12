const dbConfig = require("../config/dbconfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.tutorials = require("./admin.model.js")(sequelize, Sequelize);
db.doctors = require("./doctors.model.js")(sequelize, Sequelize);
db.patients_data = require("./reg_patient.model.js")(sequelize, Sequelize);
//db.tutorials = require("./emergency_doctor.model.js")(sequelize, Sequelize);
//db.tutorials = require("./certification.model.js")(sequelize, Sequelize);
//db.tutorials = require("./booking_doctor.model.js")(sequelize, Sequelize);
//db.tutorials = require("./salary.model.js")(sequelize, Sequelize);
//db.tutorials = require("./slot.model.js")(sequelize, Sequelize);





module.exports = db;