const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const cors = require('cors');
app.set("view engine", "ejs");
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
app.use(express.json());

const { ExpressPeerServer } = require("peer");
const opinions = {
  debug: true,
}

app.use("/peerjs", ExpressPeerServer(server, opinions));
app.use(express.static("public"));
app.use(cors());
const db=require("./app/models");
require("./app/routes/doctors.routes.js")(app);
require ("./app/routes/patient_login.route.js")(app);
require ("./app/routes/patient_register.route.js")(app);
/* db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db."); */
//});
app.get("/genrateid", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

/* io.on("connection", (socket) => {
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
  }); */
  
app.post("/login",(req,res)=>{
  print("azher ka code dalna")

})
app.post("/signup",(req,res)=>{
  print("azher ka code dalna")

})
app.get("/",(req,res)=>{
  res.json({message:"hello i am here "})
})

server.listen(process.env.PORT || 5000);