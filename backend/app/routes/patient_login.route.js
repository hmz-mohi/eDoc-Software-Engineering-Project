
// import con from '../utils/db.js'
//import Jwt from "jsonwebtoken";
module.exports=app=>{
const express = require('express');
const jwt = require('jsonwebtoken');
var router =require("express").Router();
let usersdb = ["backend se data lana controller bna k"]


const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}
const authenticatedUser = (username,password)=>{
  let validusers = usersdb.filter((user)=>{
    return (user.username === username && user.password === password)
  });
  if(validusers.length > 0){
    return true;
  } else {
    return false;
  }
}
router.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
        return res.status(404).json({message: "Error logging in"});
    }
  
    if (authenticatedUser(username,password)) {
      let accessToken = jwt.sign({
        data: password
      }, 'access', { expiresIn: 60 * 60 });
  
      req.session.authorization = {
        accessToken,username
    }
    return res.status(200).send("User successfully logged in");
    } else {
      return res.status(208).json({message: "Invalid Login. Check username and password"});
    }
  });
//router.post('/login', (req, res) => {
  //  console.log(req.body);
    // const sql = 'SELECT * from reg_patients where email = ? password + ?'
    //    con.query(sql, [req.body.email, req.body.password], (err, result) => {
    //        if (err) return res.json({ loginStatus: false, Error: 'Querry Error' })
    //         if (result.length > 0) {
    //            const email = result[0].email
    //             const token = Jwt.sign({ role: 'patient', email: email }, "jwt-scretkey", { expireIn: '1d' });
    //         res.cookie("token", token)
    //        return res.json({ loginStatus: true})
    //         }else{
    //            return res.json({ loginStatus: false, Error: 'Wrong  email or password' })
    //        }
    //    });
//});

//router.post('/signup',(req,res) => {
  //  console.log(req.body);
    // const sql = 'INSERT into reg_patients (Fname, lname, contactNo, Date_of_birth, email, password) VALUES (?,?,?,?,?,?)'
    //    con.query(sql, [req.body.Fname, req.body.Lname, req.body.contactno, req.body.dob, req.body.email, req.body.password], (err, result) => {
    //        if (err) return res.json({ loginStatus: false, Error: 'Querry Error' })
    //      if (result.length > 0) {
    //             const email = result[0].email
    //             const token = Jwt.sign({ role: 'patient', email: email }, "jwt-scretkey", { expireIn: '1d' });
    //         res.cookie("token", token)
    //         return res.json({ loginStatus: true})
    //         }else{
    //             return res.json({ loginStatus: false, Error: 'Wrong  email or password' })
    //         }
    //     });
//})
app.use("/auth",router)
}