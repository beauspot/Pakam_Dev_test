require("dotenv").config();

// Send mobile notification
const sendMobileNotification = async (mobileNumber, amount) => {
  /// Implementing the logic to send a mobile notification using a third-party SMS service
  // Here, I am using the Twilio SMS API as an example

  const client = require("twilio")(accountSid, authToken);

  const accountSid = process.env.TWILLO_ACCOUNT_SID;
  const authToken = process.env.TWILLO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILLO_PHONE_NUMBER;

  const msg = await client.messages.create({
    body: `Insufficient funds for deposit of ${amount}`,
    from: twilioPhoneNumber,
    to: mobileNumber,
  });
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

  const api_key = proces.env.SENDGRID_API_KEY;
  const senderMail = process.env.SENDGRID_EMAIL;

  const mail = await axios.post(
    "https://api.sendgrid.com/v3/mail/send",
    {
      personalizations: [{ to: [{ email }] }],
      from: { email: senderMail },
      subject: "Automated Deposit Failure",
      content: [
        {
          type: "text/plain",
          value: `Insufficient funds for deposit of ${amount}`,
        },
      ],
    },
    {
      headers: { Authorization: `Bearer ${api_key}` },
    }
  );

  if (!mail) throw new Error("Failed to send email notification");

  console.log(
    `Sending email notification to ${email}: Insufficient funds for deposit of ${amount}`
  );
  return mail;
};

module.exports = { sendMobileNotification, sendEmailNotification };
