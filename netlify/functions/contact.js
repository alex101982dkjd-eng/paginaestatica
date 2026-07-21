exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, message: 'Método no permitido' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, message: 'Completa todos los campos.' }),
      };
    }

    const missingEnv = [];
    if (!process.env.SMTP_USER) missingEnv.push('SMTP_USER');
    if (!process.env.SMTP_PASS) missingEnv.push('SMTP_PASS');
    if (!process.env.CONTACT_TO) missingEnv.push('CONTACT_TO');

    if (missingEnv.length > 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          ok: false,
          message: `Faltan variables de entorno: ${missingEnv.join(', ')}`,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, message: 'Mensaje recibido. La configuración de correo aún debe validarse en Netlify.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, message: error.message || 'Error interno al procesar el formulario.' }),
    };
  }
};
