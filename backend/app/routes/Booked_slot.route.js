module.exports = app => {
    const express = require('express');
  //  const jwt = require('jsonwebtoken');
    var router = require("express").Router();
    const appointment_booked_controller = require("../controllers/Booked_slot.controller.js");
    // let usersdb = ["backend se data lana controller bna k"]
  
  
  
  
    router.post("/appointmentbooked", async (req, res) => {
      try {
        const variable = await appointment_booked_controller.createnewappointment(req, res);
        if (variable=="new_appointment_entered") {
          console.log("appp booked")
        }
        else {     
        }
  
    }
      catch (error) {
       /// console.error('Error authenticating user:', error);
        throw error;
      }
    });
    app.use("/auth",router)
}