module.exports=app=>{
const doctors=require("../controllers/doctor.controller.js");
var router =require("express").Router();
router.get("/domains",doctors.findAlldomains);
app.use("/api/doctors",router);

}

