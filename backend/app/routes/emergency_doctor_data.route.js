module.exports=app=>{
    const doctorsdatafetch=require("../controllers/all_emergency_doctors.controller.js");
    var router =require("express").Router();
    router.get("/Emergency",doctorsdatafetch.getAllDoctorsData);
    app.use("/api/doctors",router);
    
    }
    