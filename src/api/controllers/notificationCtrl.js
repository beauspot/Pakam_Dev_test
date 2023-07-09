const userService = require("../services/userService");
const walletService = require("../services/walletServices");
const notificationService = require("../services/notificationService");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// Handle notification request
const handleNotificationCtrl = asyncHandler(async (req, res) => {
  const { userId, amount, notificationType } = req.body;
  //console.log(userId);

  // Fetch user information
  const user = await userService.fetchUserInformation(userId);
  // console.log(user.mobile);
  // console.log(user);

  // Check wallet balance
  const hasSufficientFunds = await walletService.checkWalletBalance(
    userId,
    amount
  );

  if (!hasSufficientFunds) {
    // Send notification
    if (notificationType === "mobile") {
      console.log(user.mobile);
      await notificationService.sendMobileNotification(user.mobile, amount);
    } else if (notificationType === "email") {
      notificationService.sendEmailNotification(user.email, amount);
    } else {
      throw new Error("Invalid notification type");
    }
  }

  return res.status(StatusCodes.OK).json({ message: `Message Sent Successfully` });
});

module.exports = handleNotificationCtrl;
