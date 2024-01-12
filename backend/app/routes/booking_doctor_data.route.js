module.exports=app=>{
    const doctorsdatafetch=require("../controllers/all_booking_doctors.controller.js");
    var router =require("express").Router();
    router.get("/Booking",doctorsdatafetch.getAllDoctorsData);
    app.use("/api/doctors",router);
    
    }
    
    