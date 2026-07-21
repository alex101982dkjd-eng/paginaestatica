const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, message: 'Método no permitido' }),
    };
  }

  try {
    const { nombre, email, mensaje } = JSON.parse(event.body || '{}');

    if (!nombre || !email || !mensaje) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, message: 'Completa todos los campos.' }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: `Consulta desde la web - ${nombre}`,
      text: `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`,
      html: `<p><strong>Nombre:</strong> ${nombre}</p><p><strong>Correo:</strong> ${email}</p><p><strong>Mensaje:</strong><br/>${mensaje}</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, message: 'Mensaje enviado correctamente.' }),
    };
  } catch (error) {
    const message =
      error.code === 'EAUTH'
        ? 'No se pudo autenticar el correo. Revisa SMTP_USER y SMTP_PASS.'
        : error.code === 'ESOCKET'
          ? 'No se pudo establecer la conexión con el servidor SMTP.'
          : 'No se pudo enviar el correo. Revisa la configuración del servidor y las credenciales.';

    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, message }),
    };
  }
};
