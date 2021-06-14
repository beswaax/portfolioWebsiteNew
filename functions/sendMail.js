const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: "RangoJango",
};
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message, service } = request.query;

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: "office@rangojango.com",
      subject: "Message received!",
      html: `
      <p style="font-size:16px">Message received!</p>
      <p style="font-size:16px">From: ${name}</p>
      <p style="font-size:16px">Email: ${email}</p>
      <p style="font-size:16px">Message: ${message}</p> 
      `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
