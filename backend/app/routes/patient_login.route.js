

module.exports=app=>{


const jwt = require('jsonwebtoken');
const session = require('express-session');
var router =require("express").Router();
const patients_data=require("../controllers/patient_login.controller.js");
app.use(session({secret:"fingerpint"},resave=true,saveUninitialized=true));

router.post("/login",async(req,res)=>{
    try {
    const result = await patients_data.get_credentials_for_auth(req, res);
    const password=req.body.password
    const email=req.body.email
    console.log(result)

// Check the result and send an appropriate response
    if (result[0]) {
      username=result[1]
      pt_id=result[3]

        let accessToken = jwt.sign({
        data: password
      }, 'access', { expiresIn: 60 * 60 });
  
      req.session.authorization = {
     accessToken,username,email//name dalna hai 
    }
   // console.log(req.session.authorization)
   // res.json(["true user",req.session.authorization.username]);
   res.json(["true user",username, email,pt_id]);
    }
      //ores.status(200).json({ success: true, message: "Login successful" });
    //} else if (result === "username password incorrect") {
     // res.status(401).json({ success: false, message: "Username or password incorrect" });
     else {
       res.json("false user")
    //}

     // res.status(500).json({ success: false, message: "Internal server error" });
    }
  } catch (error) {
   console.error('Error in login route:', error);
    //res.status(500).json({ success: false, message: "Internal server error" });
}
}
)
console.log(session.username)
  
 
   

app.use("/auth",router)
}