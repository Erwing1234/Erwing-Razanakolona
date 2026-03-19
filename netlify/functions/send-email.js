const nodemailer = require("nodemailer");

exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Méthode non autorisée",
    };
  }

  const { message } = JSON.parse(event.body);

  // validation
  if (!message) {
    return {
      statusCode: 400,
      body: "Message requis",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS_APP,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Nouveau message depuis portfolio",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Email envoyé",
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: "Erreur envoi email",
    };
  }
};