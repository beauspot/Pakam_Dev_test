// Generate dummy user data with wallet balances
const generateDummyUsers = () => {
  return [
    {
      id: "user1",
      username: "john_doe",
      email: "omogbemeiyere@gmail.com",
      mobile: "1234567890",
      walletBalance: 5000,
    },
    {
      id: "user2",
      username: "jane_smith",
      email: "jane@example.com",
      mobile: "9876543210",
      walletBalance: 10000,
    },
    // Add more dummy users if needed
  ];
};

module.exports = generateDummyUsers;
