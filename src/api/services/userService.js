const userModel = require("../models/userModel");

// Fetch user information from User Management Service
const fetchUserInformation = async (userId) => {
  const user = userModel.findById(userId);
  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

// Signup a user Service
const signupuserservice = async (userdata) => {
  const newUser = await userModel.create({ ...userdata });
  if (!newUser) throw new Error("User canot be created");
  return newUser;
};

module.exports = { fetchUserInformation, signupuserservice };
