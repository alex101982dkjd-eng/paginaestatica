const nodemailer = require('nodemailer');

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { nombre, correo, telefono, mensaje } = data;

    if (!nombre || !correo || !telefono || !mensaje) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Faltan campos requeridos.' }) };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: `Nuevo mensaje de ${nombre} - Abarrotes`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`,
    };

    await transporter.sendMail(mailOptions);

    return { statusCode: 200, body: JSON.stringify({ message: 'Mensaje enviado correctamente.' }) };
  } catch (err) {
    console.error('Error sending mail:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error al enviar el correo.' }) };
  }
};

