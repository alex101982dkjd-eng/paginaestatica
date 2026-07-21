import { MessageCircle, Tag } from 'lucide-react';
import { offers, WHATSAPP_NUMBER } from '../data/products.js';
import './Ofertas.css';

export default function Ofertas() {
  return (
    <section id="ofertas" className="ofertas">
      <div className="container">
        <p className="section-subtitle">Ahorra más con nosotros</p>
        <h2 className="section-title">Ofertas y Promociones</h2>

        <div className="ofertas__grid">
          {offers.map(o => {
            const waMsg = encodeURIComponent(
              `Hola! Me interesa la oferta: *${o.title}* — $${o.salePrice.toFixed(2)}. ¿Sigue disponible?`
            );
            return (
              <div key={o.id} className="offer-card">
                <div className="offer-card__badge">
                  <Tag size={11} strokeWidth={2.5} />
                  {o.discount}
                </div>
                <div className="offer-card__icon">
                  <img src={o.image} alt={o.title} loading="lazy" className="offer-card__img" />
                </div>
                <h3 className="offer-card__title">{o.title}</h3>
                <p className="offer-card__desc">{o.description}</p>
                <div className="offer-card__prices">
                  <span className="offer-card__original">${o.originalPrice.toFixed(2)}</span>
                  <span className="offer-card__sale">${o.salePrice.toFixed(2)}</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp offer-card__cta"
                >
                  <MessageCircle size={15} strokeWidth={2} />
                  Solicitar oferta por WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
