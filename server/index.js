const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserDetailModel = require("./models/userdetails");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://MetalTroop:Metal1234@cluster0.xjzih57.mongodb.net/userdetails", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post("/login", (req, res) => {
  const { email, password, isAdmin } = req.body;
  UserDetailModel.findOne({ email: email }).then((user) => {
    if (user) {
      if(user.isAdmin === true && user.password === password){
        res.json("access")
      }else if(user.password === password){
        res.json("success")
      }else("not an admin")
      // if (user.password === password) {
      //   res.json("Success");
      // } else {
      //   res.json("the password is incorrect");
      // }
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
