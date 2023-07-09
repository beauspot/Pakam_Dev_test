require("dotenv").config();
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mailer = require("../config/nodeMailer");

// Send mobile notification
const sendMobileNotification = async (mobileNumber, amount) => {
  /// Implementing the logic to send a mobile notification using a third-party SMS service
  // Here, I am using the Twilio SMS API as an example

  const accountSid = process.env.TWILLO_ACCOUNT_SID;
  const authToken = process.env.TWILLO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILLO_PHONE_NUMBER;

  const client = require("twilio")(accountSid, authToken);

  // console.log(mobileNumber);

  const msg = await client.messages.create({
    body: `Insufficient funds for deposit of ${amount}`,
    from: twilioPhoneNumber,
    to: mobileNumber,
  });
  console.log(msg);
  if (!msg) {
    throw new Error("Failed to send mobile notification");
  }
  console.log(
    `Mobile notification sent to ${mobileNumber}: Insufficient funds for deposit of ${amount}`
  );
  return msg;
};

// Send email notification
const sendEmailNotification = async (email, amount) => {
  // Implementing the logic to send an email notification
  // we may use a third-party email service or any other notification service.
  // I am using nodemailer for this functionality

  console.log(
    `Sending email notification to ${email}: Insufficient funds for deposit of ${amount}`
  );
  const text = `Your current funds of ${amount} are insufficient for depositing into your wallet`;
  try {
    // Send the email
    const message = await mailer(email, "Insufficient Funds in Wallet", text);
    console.log(
      `Email notification sent to ${email}: Insufficient funds for deposit of ${amount}`
    );
    return message;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    throw new Error("Failed to send email notification");
  }

  //return mail;
};

module.exports = { sendMobileNotification, sendEmailNotification };
