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
    const { name, email, phone, message, service } = request.query;

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: "office@rangojango.com",
      subject: "Message received!",
      html: `
      <p style="font-size:16px">From: ${name}</p>
      <p style="font-size:16px">Email: ${email}</p>
      <p style="font-size:16px">Phone: ${phone}</p>
      <p style="font-size:16px">Message: ${message}</p> 
      <p style="font-size:16px">Service: ${service}</p> 
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

exports.sendConsultation = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { firstName, lastName, email, phone } = request.query;

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: "office@rangojango.com",
      subject: "Consultation query received!",
      html: `
      <p style="font-size:16px">From: ${firstName} ${lastName}</p>
      <p style="font-size:16px">Email: ${email}</p>
      <p style="font-size:16px">Phone: ${phone}</p>
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

{
  /* <tr>
<td
  align="center"
  style="padding: 0px 44px 0px 0px"
  class="mob_pr12"
>
  <table
    align="right"
    border="0"
    cellspacing="0"
    cellpadding="0"
  >
    <tr>
      <td
        align="center"
        style="padding: 0px 14px"
        class="spacer"
      >
        <a
          href="https://www.instagram.com/development_arc"
          target="_blank"
        >
          <img
            align="center"
            src="https://i.imgur.com/auxeind.png"
            alt=""
            width="31"
            height="31"
            style="
              width: 31px;
              max-width: 31px;
              display: block;
            "
            class="social_icon"
          />
        </a>
      </td>
      <td
        align="center"
        style="padding: 0px 14px"
        class="spacer"
      >
        <a
          href="https://twitter.com/development_arc"
          target="_blank"
        >
          <img
            align="center"
            src="https://i.imgur.com/QV0qmLC.png"
            alt=""
            width="30"
            height="25"
            style="
              width: 30px;
              max-width: 30px;
              display: block;
            "
            class="social_icon"
          />
        </a>
      </td>
      <td
        align="center"
        style="padding: 0px 14px"
        class="spacer"
      >
        <a
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img
            align="center"
            src="https://i.imgur.com/wPb7ijk.png"
            alt=""
            width="17"
            height="31"
            style="
              width: 17px;
              max-width: 17px;
              display: block;
            "
            class="social_icon"
          />
        </a>
      </td>
    </tr> */
}
