const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: `RangoJango <${config.user.email}>`,
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, message } = request.query;

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: "office@rangojango.com",
      subject: "Message received!",
      html: `
      <p style="font-size:16px">New message received!</p>
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

exports.sendFreeAuditRequest = functions.https.onRequest(
  (request, response) => {
    cors(request, response, () => {
      const { name, email, website } = request.query;

      mailOptions = {
        from: `RangoJango <${config.user.email}>`,
        to: "office@rangojango.com",
        subject: "New audit request received!",
        html: `
        <p style="font-size:16px">New audit request received!</p>
        <p style="font-size:16px">From: ${name}</p>
        <p style="font-size:16px">Email: ${email}</p>
        <p style="font-size:16px">Website Url: ${website}</p>
        `,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          response.send(error);
        } else {
          response.send("Free audit request sent!");
        }
      });
    });
  }
);
