const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String
});

const UserDetailModel = mongoose.model("userdetails", UserDetailsSchema);

module.exports = UserDetailModel;
