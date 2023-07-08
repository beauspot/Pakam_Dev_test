// Send mobile notification
const sendMobileNotification = async (mobileNumber, amount) => {
  // Implement the logic to send a mobile notification
  // You may use a third-party SMS service or any other notification service
  console.log(
    `Sending mobile notification to ${mobileNumber}: Insufficient funds for deposit of ${amount}`
  );
};

// Send email notification
const sendEmailNotification = (email, amount) => {
  // Implement the logic to send an email notification
  // You may use a third-party email service or any other notification service
  console.log(
    `Sending email notification to ${email}: Insufficient funds for deposit of ${amount}`
  );
};

module.exports = { sendMobileNotification, sendEmailNotification };
