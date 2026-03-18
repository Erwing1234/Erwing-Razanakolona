// netlify/functions/send-email.js
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Bloquer les requêtes qui ne sont pas POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Méthode non autorisée" }),
    };
  }

  const { message } = JSON.parse(event.body);

  // Validation basique
  if (!email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email et message sont requis" }),
    };
  }

  // Configuration Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "razanakolonaelvinah@gmail.com",   // ton adresse gmail
      pass: "pswj csvj nqhg odio",   // mot de passe d'application Gmail
    },
  });

  const mailOptions = {                  
    to: process.env.GMAIL_USER,        // ton email (tu reçois le message)
    subject: `Nouveau message de ${email}`,
    html: `
      <h3>Nouveau message depuis ton portfolio</h3>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email envoyé avec succès !" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur lors de l'envoi de l'email" }),
    };
  }
};
