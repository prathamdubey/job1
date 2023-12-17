const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const UserDetailModel = require("./models/userdetails");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../Client")));

let currentEmail = "guest";

mongoose
  .connect(
    "mongodb+srv://dubeypratham11:sunita123@cluster0.zxcxa1q.mongodb.net/userdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/getUsers", (req, res) => {
  UserDetailModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/AdminHome" , (req, res) => {
  const{email} = req.body;
  UserDetailModel.findOne({email: email}) .then((user) => {
    if(user){
      if(currentEmail === email && user.isAdmin === true) {
        res.json("access")
      }else {
        res.json("denied")
      }
    }else {
      res.json("ungabunga")
    }
  })
});

console.log(currentEmail);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserDetailModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.isAdmin === true && user.password === password) {
        res.json("access");

        currentEmail = user.email;
        console.log(currentEmail);
      } else if (user.password === password) {
        res.json("success");
        currentEmail = user.email;
      } else "not an admin";
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  UserDetailModel.create(req.body)
    .then((userdetails) => res.json(userdetails))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
