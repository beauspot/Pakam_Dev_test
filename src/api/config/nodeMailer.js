const nodemailer = require("nodemailer");
require("dotenv").config();

const mailer = async (mail, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.MAILPASS,
    },
  });

  const mailOptions = {
    from: process.env.USERMAIL,
    to: mail,
    subject: subject,
    text: text,
  };
  return await transporter.sendMail(mailOptions);
};

module.exports = mailer;

// make the component reusable by making it take 3 customizable arguments
