// userService.js

const axios = require("axios");

// Fetch user information from User Management Service
const fetchUserInformation = async (userId) => {
  // Assume an API endpoint '/users/:userId' that retrieves user information
  const response = await axios.get(`https://example.com/users/${userId}`);
  return response.data;
};

module.exports = { fetchUserInformation };
