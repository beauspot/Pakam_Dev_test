require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
  // I am using sendGrid for this functionality

  const mail = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Insuffient Funds in Wallet",
    text: `your curent funds of ${amount} is insufient for depositing your wallet`,
    html: "<strong>Your Balance is insuficient to carry out the transfer, Please credit to make transfer</strong>",
  };

  if (!mail) throw new Error("Failed to send email notification");
  console.log(
    `Sending email notification to ${email}: Insufficient funds for deposit of ${amount}`
  );
  try {
    const response = await sgMail.send(mail);
    if (response) {
      return response[0].statusCode.headers;
    }
  } catch (error) {
    return error.message;
  }

  return mail;
};

module.exports = { sendMobileNotification, sendEmailNotification };
