import { useState } from 'react';
import { MessageCircle, Mail, Clock, MapPin, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products.js';
import './Contacto.css';

const INFO = [
  { Icon: MessageCircle, label: 'WhatsApp',          value: '+52 (1) 123 456 7890' },
  { Icon: Mail,          label: 'Correo',             value: 'donpepe@ejemplo.com'  },
  { Icon: Clock,         label: 'Horario',            value: 'Lun – Dom: 7:00 am – 9:00 pm' },
  { Icon: MapPin,        label: 'Ubicación',          value: 'Calle Hidalgo #12, Jilotepec, EDOMEX' },
];

export default function Contacto() {
  const [form, setForm]   = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('loading');

    try {
      const subject = encodeURIComponent(`Consulta desde la web - ${form.nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${form.nombre}\nCorreo: ${form.email}\n\nMensaje:\n${form.mensaje}`
      );

      window.location.href = `mailto:donpepe@ejemplo.com?subject=${subject}&body=${body}`;
      setStatus('ok');
      setForm({ nombre: '', email: '', mensaje: '' });
    } catch {
      setStatus('error');
    }
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero contactarlos.')}`;

  return (
    <section id="contacto" className="contacto">
      <div className="container contacto__inner">

        <div className="contacto__info">
          <p className="section-subtitle">Estamos para servirte</p>
          <h2 className="section-title">Contáctanos</h2>

          <ul className="contacto__items">
            {INFO.map(({ Icon, label, value }) => (
              <li key={label} className="contacto__item">
                <span className="contacto__item-icon">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="contacto__item-label">{label}</p>
                  <p className="contacto__item-value">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="contacto__btns">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} strokeWidth={2} />
              Enviar mensaje por WhatsApp
            </a>
            <a href="mailto:donpepe@ejemplo.com" className="btn-email">
              <Mail size={16} strokeWidth={2} />
              Enviar correo
            </a>
          </div>
        </div>

        <div className="contacto__form-wrap">
          <h3 className="contacto__form-title">Escríbenos</h3>
          <p className="contacto__form-sub">Te respondemos a la brevedad por correo o WhatsApp.</p>

          <form className="contacto__form" onSubmit={handleSubmit}>
            <div className="contacto__field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo"
                value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="contacto__field">
              <label htmlFor="email">Correo electrónico</label>
              <input id="email" name="email" type="email" placeholder="tu@correo.com"
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="contacto__field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={5}
                placeholder="¿Tienes alguna pregunta, pedido o comentario?"
                value={form.mensaje} onChange={handleChange} required />
            </div>

            {status === 'ok' && (
              <div className="contacto__alert contacto__alert--ok">
                Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="contacto__alert contacto__alert--error">
                No se pudo enviar el mensaje. Inténtalo de nuevo.
              </div>
            )}

            <button type="submit" className="btn-email contacto__submit" disabled={status === 'loading'}>
              <Send size={15} strokeWidth={2} />
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
