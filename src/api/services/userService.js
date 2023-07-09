const userModel = require("../models/userModel");

// Fetch user information from User Management Service
const fetchUserInformation = async (userId) => {
  const user = userModel.findById(userId);
  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

module.exports = { fetchUserInformation };
