module.exports=app=>{
    const sendlinktopatient=require("../controllers/to_send_call_link.controller.js");
    var router =require("express").Router();
    router.get("/sendlink",sendlinktopatient.sendlink);
    app.use(router);
    
    }