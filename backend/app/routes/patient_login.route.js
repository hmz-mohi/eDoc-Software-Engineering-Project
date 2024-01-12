
//const con =require() '../utils/db.js'
module.exports=app=>{


const jwt = require('jsonwebtoken');
const session = require('express-session');
var router =require("express").Router();
const patients_data=require("../controllers/patient_login.controller.js");
app.use(session({secret:"fingerpint"},resave=true,saveUninitialized=true));
//let usersdb = ["backend se data lana controller bna k"]
//const isValid = (username)=>{ //returns booleanwrite code to check is the username is valid
//}
//const authenticatedUser = (username,password)=>{
  //let validusers = usersdb.filter((user)=>{
    //return (user.username === username && user.password === password)
 // });
  //if(validusers.length > 0){
   // return true;
  //} else {
    //return false;
  //}
//}
router.post("/login",async(req,res)=>{
    try {
    const result = await patients_data.get_credentials_for_auth(req, res);
    const password=req.body.password
    const username=req.body.username
    console.log(result)

// Check the result and send an appropriate response
    if (result) {
        let accessToken = jwt.sign({
        data: password
      }, 'access', { expiresIn: 60 * 60 });
  
      req.session.authorization = {
      accessToken,username
    }
    console.log(req.session.authorization.username)
    res.json(["true user",req.session.authorization.username]);
    }
      //ores.status(200).json({ success: true, message: "Login successful" });
    //} else if (result === "username password incorrect") {
     // res.status(401).json({ success: false, message: "Username or password incorrect" });
     else {
       res.json("false user")
    //}

      // Handle other cases if needed
     // res.status(500).json({ success: false, message: "Internal server error" });
    }
  } catch (error) {
   console.error('Error in login route:', error);
    //res.status(500).json({ success: false, message: "Internal server error" });
}
}
)
console.log(session.username)
  
 
    //if (!username || !password) {
      //  return res.status(404).json({message: "Error logging in"});
    //}
  
    //if (authenticatedUser(username,password)) {
      //let accessToken = jwt.sign({
       // data: password
      //}, 'access', { expiresIn: 60 * 60 });
  
      //req.session.authorization = {
     //   accessToken,username
   // }
    //return res.status(200).send("User successfully logged in");
    //} else {
      //return res.status(208).json({message: "Invalid Login. Check username and password"});
    //}
  


app.use("/auth",router)
}