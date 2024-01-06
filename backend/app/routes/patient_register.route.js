
// import con from '../utils/db.js'
//import Jwt from "jsonwebtoken";
module.exports=app=>{
    const express = require('express');
    const jwt = require('jsonwebtoken');
    var router =require("express").Router();
    let usersdb = ["backend se data lana controller bna k"]
    
    const doesExist = (username)=>{
        let userswithsamename = users.filter((user)=>{
          return user.username === username
        });
        if(userswithsamename.length > 0){
          return true;
        } else {
          return false;
        }
      }
router.post("/signup", (req,res) => {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username)
        if (username && password) {
          
          if (!doesExist(username)) { 
            usersdb.push({"username":username,"password":password});
            return res.status(200).json({message: "User successfully registred. Now you can login"});
          } else {
            return res.status(404).json({message: "User already exists!"});    
          }
        } 
        return res.status(404).json({message: "Unable to register user."});
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
    
   // router.post('/signup',(req,res) => {
     //   console.log(req.body);
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