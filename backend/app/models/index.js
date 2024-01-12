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


db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.doctors = require("./doctors.model.js")(sequelize, Sequelize);
db.patients_data = require("./reg_patient.model.js")(sequelize, Sequelize);
//db.emergencydoctors= require("./emergency_doctor.model.js")(sequelize, Sequelize);
db.certifications = require("./certification.model.js")(sequelize, Sequelize);
//db.bookingdoctors= require("./booking_doctor.model.js")(sequelize, Sequelize);
db.tutorials = require("./salary.model.js")(sequelize, Sequelize);
db.slot = require("./slot.model.js")(sequelize, Sequelize);
db.doctors.hasMany(db.certifications)
db.certifications.belongsTo(db.doctors)





module.exports = db;