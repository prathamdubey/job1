const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserDetailModel = require("./models/userdetails");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://dubeypratham11:sunita123@cluster0.zxcxa1q.mongodb.net/userdetails"
);

app.post("/login", (req, res) => {
  const { email, password, isAdmin } = req.body;
  UserDetailModel.findOne({ email: email  }).then((user) => {
    if (user) {
      
      if(user.isAdmin === true){
        res.json("access");
      } else{
        res.json("Not an admin")
      }
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else{
        res.json("No record existed")
    }

    
  });
});


app.post("/register", (req, res) => {
  UserDetailModel.create(req.body)
    .then((userdetails) => res.json(userdetails))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
