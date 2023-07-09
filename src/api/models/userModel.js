const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please your First name is mandatory."],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please an email address is mandatory."],
    unique: [true, "This email address is currently in use"],
  },
  mobile: {
    type: String,
    required: [true, "Please your mobile number mandatory."],
    unique: [true, "This mobile number is currently in use"],
  },
  walletBalance: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.model("usermodel", userSchema);
module.exports = userModel;