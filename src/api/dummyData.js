const mongoose = require("mongoose");
const userSchema = require("../api/models/userModel");
const dbconfig = require("../api/config/dbConfig");
const dotenv = require("dotenv").config();

// Generate dummy user data with wallet balances
const dummyUsers = [
  {
    username: "john_doe",
    email: "omogbemeiyere@gmail.com",
    mobile: "1234567890",
    walletBalance: 5000,
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    mobile: "9876543210",
    walletBalance: 10000,
  },
];

const populateDB = async () => {
  try {
    await userSchema.deleteMany();
    await userSchema.insertMany(dummyUsers);
    console.log("Dummy data successfully inserted into the database.");
  } catch (err) {
    console.error("Error populating database:", err);
    mongoose.connection.close();
  }
};

populateDB();
