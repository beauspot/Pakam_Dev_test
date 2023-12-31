const mongoose = require("mongoose");
const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.info(`Connected to the Database!`);
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
