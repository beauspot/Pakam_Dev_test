const generateDummyUsers = require("../dummyData");
// userService.js

let users = generateDummyUsers();
console.log(users);

// Fetch user information from User Management Service
const fetchUserInformation = async (userId) => {
  // Assume an API endpoint '/users/:userId' that retrieves user information
  const user = users.find(
    (user) => user.id === userId || user.username === userId
  );
  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

module.exports = { fetchUserInformation };
