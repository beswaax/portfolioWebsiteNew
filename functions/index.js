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

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: email,
      subject: "We have received your message!",
      html: `
      <body align="center" style="margin: 0; padding: 0; background: #e5e5e5">
      <table
        align="center"
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="background: #e5e5e5"
        id="bodyTable"
      >
        <tr>
          <td align="center" id="bodyCell">
            <table
              align="center"
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="background: #e5e5e5"
              class="m_device_width"
            >
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td align="center">
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td align="center">
                              <a
                                href="http://www.rangojango.com/"
                                target="_blank"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/pdQkBPd.png"
                                  alt="Rango Jango"
                                  width="600"
                                  height=""
                                  style="
                                    width: 600px;
                                    max-width: 600px;
                                    display: block;
                                  "
                                  class="m_device_width"
                                />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td
                        align="center"
                        background="https://i.imgur.com/kgst1RF.jpg"
                        bgcolor="#ffffff"
                        width="600"
                        height="617"
                        valign="top"
                        style="background-repeat: no-repeat"
                        class="h_auto m_device_width"
                      >
                        <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                    <v:fill type="tile" src="https://i.imgur.com/kgst1RF.jpg" color="#ffffff" />
                    <v:textbox inset="0,0,0,0">
                    <![endif]-->
                        <div>
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tr>
                              <td
                                align="center"
                                width="85"
                                style="width: 85px"
                                class="mob_hidden"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/HR1pI0g.gif"
                                  alt=""
                                  width="85"
                                  style="width: 85px; display: block"
                                />
                              </td>
                              <td
                                align="center"
                                style="padding: 160px 0px"
                                class="mob_ptb80lr20"
                              >
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                  style="
                                    background: #F37B21;
                                    border-radius: 10px;
                                    box-shadow: 0px 4px 15px 0px
                                      rgba(0, 0, 0, 0.32);
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="padding: 85px 35px 110px 35px"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            style="
                                              font-family: 'Pacifico', Tahoma;
                                              font-size: 34.28px;
                                              font-weight: normal;
                                              line-height: 35px;
                                              color: #fff;
                                              text-align: center;
                                            "
                                          >
                                            Hello
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            align="center"
                                            style="
                                              padding: 20px 0px 0px 0px;
                                              font-family: 'Roboto', Tahoma, Segoe,
                                                sans-serif;
                                              font-size: 20px;
                                              font-weight: normal;
                                              line-height: 25.5px;
                                              color: #fff;
                                              text-align: center;
                                            "
                                          >
                                            Thanks for sending us a message! We’ll
                                            get back to you as soon as possible.
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                align="center"
                                width="85"
                                style="width: 85px"
                                class="mob_hidden"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/HR1pI0g.gif"
                                  alt=""
                                  width="85"
                                  style="width: 85px; display: block"
                                />
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if gte mso 9]>
                    </v:textbox>
                    </v:rect>
                    <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td align="center">
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th
                              align="left"
                              valign="middle"
                              width="64.666666%"
                              style="
                                width: 64.666666%;
                                background-repeat: no-repeat;
                                background-position: top right;
                              "
                              background="https://i.imgur.com/koFmNPb.png"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td align="center" style="padding: 40px 10px">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          width="18"
                                          style="
                                            width: 18px;
                                            padding: 0px 0px 7px 0px;
                                          "
                                        >
                                          <img
                                            align="left"
                                            src="https://i.imgur.com/ZtalTud.png"
                                            alt=""
                                            width="18"
                                            height="18"
                                            style="
                                              width: 18px;
                                              max-width: 18px;
                                              display: block;
                                            "
                                            class="sm_icon"
                                          />
                                        </td>
                                        <td
                                          align="left"
                                          style="
                                            padding: 0px 0px 7px 5px;
                                            font-family: 'Roboto', Tahoma, Segoe,
                                              sans-serif;
                                            font-size: 13.7px;
                                            font-weight: normal;
                                            line-height: 14px;
                                            color: #ffffff;
                                            text-align: left;
                                          "
                                          class="font11"
                                        >
                                          +49 159 01954867
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          width="18"
                                          style="width: 18px"
                                        >
                                          <img
                                            align="left"
                                            src="https://i.imgur.com/9T7w2Kv.png"
                                            alt=""
                                            width="18"
                                            height="12"
                                            style="
                                              width: 18px;
                                              max-width: 18px;
                                              display: block;
                                            "
                                            class="sm_icon"
                                          />
                                        </td>
                                        <td
                                          align="left"
                                          style="
                                            padding: 0px 0px 0px 5px;
                                            font-family: 'Roboto', Tahoma, Segoe,
                                              sans-serif;
                                            font-size: 13.7px;
                                            font-weight: normal;
                                            line-height: 14px;
                                            color: #ffffff;
                                            text-align: left;
                                          "
                                          class="font11"
                                        >
                                          <a
                                            href="mailto:office@rangojango.com"
                                            style="
                                              color: #ffffff;
                                              text-decoration: none !important;
                                            "
                                            >office@rangojango.com</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </th>
                            <th
                              align="left"
                              valign="middle"
                              bgcolor="#000000"
                              width="35.333333%"
                              style="width: 35.333333%"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </th>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
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

    mailOptions = {
      from: `RangoJango <${config.user.email}>`,
      to: email,
      subject: "We have received your message!",
      html: `
      <body align="center" style="margin: 0; padding: 0; background: #e5e5e5">
      <table
        align="center"
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="background: #e5e5e5"
        id="bodyTable"
      >
        <tr>
          <td align="center" id="bodyCell">
            <table
              align="center"
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="background: #e5e5e5"
              class="m_device_width"
            >
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td align="center">
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td align="center">
                              <a
                                href="http://www.rangojango.com/"
                                target="_blank"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/pdQkBPd.png"
                                  alt="Rango Jango"
                                  width="600"
                                  height=""
                                  style="
                                    width: 600px;
                                    max-width: 600px;
                                    display: block;
                                  "
                                  class="m_device_width"
                                />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td
                        align="center"
                        background="https://i.imgur.com/kgst1RF.jpg"
                        bgcolor="#ffffff"
                        width="600"
                        height="617"
                        valign="top"
                        style="background-repeat: no-repeat"
                        class="h_auto m_device_width"
                      >
                        <!--[if gte mso 9]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                    <v:fill type="tile" src="https://i.imgur.com/kgst1RF.jpg" color="#ffffff" />
                    <v:textbox inset="0,0,0,0">
                    <![endif]-->
                        <div>
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tr>
                              <td
                                align="center"
                                width="85"
                                style="width: 85px"
                                class="mob_hidden"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/HR1pI0g.gif"
                                  alt=""
                                  width="85"
                                  style="width: 85px; display: block"
                                />
                              </td>
                              <td
                                align="center"
                                style="padding: 160px 0px"
                                class="mob_ptb80lr20"
                              >
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                  style="
                                    background: #F37B21;
                                    border-radius: 10px;
                                    box-shadow: 0px 4px 15px 0px
                                      rgba(0, 0, 0, 0.32);
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      style="padding: 85px 35px 110px 35px"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            style="
                                              font-family: 'Pacifico', Tahoma;
                                              font-size: 34.28px;
                                              font-weight: normal;
                                              line-height: 35px;
                                              color: #fff;
                                              text-align: center;
                                            "
                                          >
                                            Hello ${firstName} ${lastName}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            align="center"
                                            style="
                                              padding: 20px 0px 0px 0px;
                                              font-family: 'Roboto', Tahoma, Segoe,
                                                sans-serif;
                                              font-size: 20px;
                                              font-weight: normal;
                                              line-height: 25.5px;
                                              color: #fff;
                                              text-align: center;
                                            "
                                          >
                                            Thanks for sending us a message! We’ll
                                            get in touch with you soon!
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                align="center"
                                width="85"
                                style="width: 85px"
                                class="mob_hidden"
                              >
                                <img
                                  align="center"
                                  src="https://i.imgur.com/HR1pI0g.gif"
                                  alt=""
                                  width="85"
                                  style="width: 85px; display: block"
                                />
                              </td>
                            </tr>
                          </table>
                        </div>
                        <!--[if gte mso 9]>
                    </v:textbox>
                    </v:rect>
                    <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
  
              <tr>
                <td align="center">
                  <table
                    align="center"
                    width="600"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background: #000000"
                    class="m_device_width"
                  >
                    <tr>
                      <td align="center">
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <th
                              align="left"
                              valign="middle"
                              width="64.666666%"
                              style="
                                width: 64.666666%;
                                background-repeat: no-repeat;
                                background-position: top right;
                              "
                              background="https://i.imgur.com/koFmNPb.png"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td align="center" style="padding: 40px 10px">
                                    <table
                                      align="center"
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          width="18"
                                          style="
                                            width: 18px;
                                            padding: 0px 0px 7px 0px;
                                          "
                                        >
                                          <img
                                            align="left"
                                            src="https://i.imgur.com/ZtalTud.png"
                                            alt=""
                                            width="18"
                                            height="18"
                                            style="
                                              width: 18px;
                                              max-width: 18px;
                                              display: block;
                                            "
                                            class="sm_icon"
                                          />
                                        </td>
                                        <td
                                          align="left"
                                          style="
                                            padding: 0px 0px 7px 5px;
                                            font-family: 'Roboto', Tahoma, Segoe,
                                              sans-serif;
                                            font-size: 13.7px;
                                            font-weight: normal;
                                            line-height: 14px;
                                            color: #ffffff;
                                            text-align: left;
                                          "
                                          class="font11"
                                        >
                                          +49 159 01954867
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          width="18"
                                          style="width: 18px"
                                        >
                                          <img
                                            align="left"
                                            src="https://i.imgur.com/9T7w2Kv.png"
                                            alt=""
                                            width="18"
                                            height="12"
                                            style="
                                              width: 18px;
                                              max-width: 18px;
                                              display: block;
                                            "
                                            class="sm_icon"
                                          />
                                        </td>
                                        <td
                                          align="left"
                                          style="
                                            padding: 0px 0px 0px 5px;
                                            font-family: 'Roboto', Tahoma, Segoe,
                                              sans-serif;
                                            font-size: 13.7px;
                                            font-weight: normal;
                                            line-height: 14px;
                                            color: #ffffff;
                                            text-align: left;
                                          "
                                          class="font11"
                                        >
                                          <a
                                            href="mailto:office@rangojango.com"
                                            style="
                                              color: #ffffff;
                                              text-decoration: none !important;
                                            "
                                            >office@rangojango.com</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </th>
                            <th
                              align="left"
                              valign="middle"
                              bgcolor="#000000"
                              width="35.333333%"
                              style="width: 35.333333%"
                            >
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </th>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
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
