const userService = require("../services/userService");
const walletService = require("../services/walletServices");
const notificationService = require("../services/notificationService");
const asyncHandler = require("express-async-handler");

// Handle notification request
const handleNotificationCtrl = asyncHandler(async (req, res) => {
  const { userId, amount, notificationType } = req.body;

  // Fetch user information
  const user = await userService.fetchUserInformation(userId);

  // Check wallet balance
  const hasSufficientFunds = await walletService.checkWalletBalance(
    userId,
    amount
  );

  if (!hasSufficientFunds) {
    // Send notification
    if (notificationType === "mobile") {
      await notificationService.sendMobileNotification(
        user.mobileNumber,
        amount
      );
    } else if (notificationType === "email") {
      notificationService.sendEmailNotification(user.email, amount);
    } else {
      throw new Error("Invalid notification type");
    }
  }

  res.sendStatus(200);
});

module.exports = handleNotificationCtrl;
