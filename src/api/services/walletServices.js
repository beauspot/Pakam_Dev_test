const axios = require("axios");

// Check wallet balance using User Wallet microservice
const checkWalletBalance = async (userId, amount) => {
  // Assume an API endpoint '/wallets/:userId/balance' that retrieves wallet balance
  const response = await axios.get(
    `https://example.com/wallets/${userId}/balance`
  );
  const balance = response.data.balance;
  return balance >= amount;
};

module.exports = { checkWalletBalance };
