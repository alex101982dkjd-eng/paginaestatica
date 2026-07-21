import { MessageCircle, Mail, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { WHATSAPP_NUMBER, products } from '../data/products.js';
import heroImg from '../assets/hero.png';
import './Hero.css';

const featured = products.filter(p => p.featured);

// Mapa de icono SVG por categoría/producto (lucide no tiene íconos de comida,
// usamos una selección semántica de su set)
import {
  Wheat, Bean, Droplets, Leaf, Package,
  Zap, ShoppingBag, Star
} from 'lucide-react';

const PRODUCT_ICONS = {
  1: Wheat,
  2: Bean,
  3: Droplets,
  4: Droplets,
  5: Zap,
  6: Leaf,
  7: Package,
  8: Zap,
  9: ShoppingBag,
  10: Droplets,
  11: Package,
  12: Package,
};

export default function Hero() {
  const waLink  = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero más información sobre sus productos.')}`;
  const mailLink = 'mailto:donpepe@ejemplo.com?subject=Consulta desde la página web';

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-accent" />
      <div className="container hero__inner">

        <div className="hero__content">
          <span className="hero__eyebrow">
            <MapPin size={12} strokeWidth={2.5} />
            Jilotepec, Estado de México
          </span>
          <h1 className="hero__title">
            Tu tienda de<br />
            <span className="hero__title--green">confianza</span>
          </h1>
          <p className="hero__desc">
            Abarrotes, bebidas, botanas y más — todo lo que tu familia necesita,
            a precio justo y con la calidad de siempre.
          </p>
          <div className="hero__actions">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={17} strokeWidth={2} />
              Pedir por WhatsApp
            </a>
            <a href={mailLink} className="btn-email">
              <Mail size={17} strokeWidth={2} />
              Enviar correo
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__badge">
            <Star size={13} strokeWidth={2.5} />
            Destacados del día
          </div>
          <div className="hero__featured">
            {featured.map(p => {
              const Icon = PRODUCT_ICONS[p.id] || Package;
              const waMsg = encodeURIComponent(`Hola, me interesa el producto: ${p.name} — $${p.price.toFixed(2)}`);
              return (
                <a
                  key={p.id}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__product-card"
                >
                  <span className="hero__product-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="hero__product-name">{p.name}</p>
                    <p className="hero__product-price">${p.price.toFixed(2)}</p>
                  </div>
                  <ChevronRight size={16} strokeWidth={2} className="hero__product-arrow" />
                </a>
              );
            })}
          </div>
          <div className="hero__store-img">
            <img src={heroImg} alt="Fachada de Abarrotes Don Pepe" loading="lazy" />
            <p>Abarrotes Don Pepe</p>
            <p className="hero__store-sub">Lun – Dom · 7 am a 9 pm</p>
          </div>
        </div>

      </div>
    </section>
  );
}
