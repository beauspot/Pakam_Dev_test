

const userModel = require("../models/userModel");

// Check wallet balance using User Wallet microservice
const checkWalletBalance = async (userId, amount) => {
  // Assume an API endpoint '/wallets/:userId/balance' that retrieves wallet balance
  // For the sake of this example, we will use the dummy user data to get the wallet balance

  // Retrieve the user from the dummy data
  const user = userModel.findById(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  // Get the wallet balance from the user object
  const balance = user.walletBalance;

  return balance >= amount;
};

module.exports = { checkWalletBalance };
