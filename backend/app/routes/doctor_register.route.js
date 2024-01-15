
module.exports=app=>{
    const express = require('express');
    const router = express.Router();
    const doctorController = require('../controllers/register_applicants.controller.js');
    
    // Route to handle doctor registration
    router.post('/applyforregisteration', doctorController.createDoctor);
    app.use(router);
    
    
    }
    