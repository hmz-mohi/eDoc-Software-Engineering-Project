const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const cors = require('cors');
app.set("view engine", "ejs");
const fileupload=require('express-fileupload')
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});
 app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
})); 
app.use(fileupload())
app.use(express.json());

const { ExpressPeerServer } = require("peer");
const opinions = {
  debug: true,
}

app.use("/peerjs", ExpressPeerServer(server, opinions));
app.use(express.static("public"));
//app.use(cors());
const db=require("./app/models");
const { link } = require("fs");
require("./app/routes/doctors.routes.js")(app);
require ("./app/routes/patient_login.route.js")(app);
require ("./app/routes/patient_register.route.js")(app);
require ("./app/routes/booking_doctor_data.route.js")(app);
require ("./app/routes/emergency_doctor_data.route.js")(app);
require ("./app/routes/Booked_slot.route.js")(app);
require ("./app/routes/doctor_register.route.js")(app);
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db."); });

const savelinkcontroller=require("./app/controllers/tosavelink.controller.js");
//var router =require("express").Router();
//router.get("/domains",doctors.findAlldomains);
app.get("/", (req, res) => {
  id=`${uuidv4()}`
  const link="http://localhost:5000"+`/${id}`
  console.log(link)
  const pt_id = req.query.pt_id;
  console.log(pt_id)
  savelinkcontroller.update(req,res,pt_id,link)
  console.log(pt_id)


 


  res.json({link});
});
app.get("/sendlinktouser",(req,res)=>{
})

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
      socket.join(roomId);
      setTimeout(() => {
        // Make sure 'socket' is valid before using 'emit'
        if (socket) {
          socket.to(roomId).emit("user-connected", userId);
        } else {
          console.error("'socket' is not defined when emitting 'user-connected'");
        }
      }, 1000);
  
      socket.on("message", (message) => {
        io.to(roomId).emit("createMessage", message, userName);
      });
    });
  }); 


server.listen(process.env.PORT || 5000);