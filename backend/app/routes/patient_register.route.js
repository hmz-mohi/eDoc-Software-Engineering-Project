
// import con from '../utils/db.js'
//import Jwt from "jsonwebtoken";
module.exports = app => {
  const express = require('express');
  const jwt = require('jsonwebtoken');
  var router = require("express").Router();
  const register_controller = require("../controllers/patient_register.controller.js");
  // let usersdb = ["backend se data lana controller bna k"]




  router.post("/signup", async (req, res) => {
    try {
      const variable = await register_controller.doesexist(req, res);
      const email = req.body.email;
      const password = req.body.password;
      console.log(email)
      if (!variable) {
        console.log("not entering")
        return res.status(404).json({ message: "User already exists!" });
      }
      else {
        console.log("entering")
        const variable = await register_controller.create(req, res)
        if (variable[0] == "new_patient_registered") {
          console.log("onn scene")
          res.json(["user_registered",variable[1]])
        }
        else {
          res.json("error_registering_patient")
        }
      }

    }
    catch (error) {
      console.error('Error authenticating user:', error);
      throw error;
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
  app.use("/auth", router)
}