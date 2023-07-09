
const userModel = require("../models/userModel");

/* let users = generateDummyUsers();
console.log(users); */

// Fetch user information from User Management Service
const fetchUserInformation = async (userId) => {
  const user = userModel.find();
  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

module.exports = { fetchUserInformation };
