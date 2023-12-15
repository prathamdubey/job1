const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {type:Boolean, default:false},
});

const UserDetailModel = mongoose.model("userdetails", UserDetailsSchema);

module.exports = UserDetailModel;
