import { Target, Eye, Handshake, Leaf, DollarSign, Heart, Store } from 'lucide-react';
import heroImg from '../assets/hero.png';
import './Nosotros.css';

const valores = [
  { Icon: Handshake, title: 'Confianza',    desc: 'Más de 20 años sirviendo a la comunidad con honestidad.' },
  { Icon: Leaf,      title: 'Frescura',     desc: 'Productos frescos y de temporada todos los días.' },
  { Icon: DollarSign,title: 'Precio justo', desc: 'Los mejores precios sin sacrificar calidad.' },
  { Icon: Heart,     title: 'Familia',      desc: 'Un negocio familiar que atiende familias.' },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="container nosotros__inner">

        <div className="nosotros__story">
          <div className="nosotros__store-visual">
            <img src={heroImg} alt="Interior de Abarrotes Don Pepe" loading="lazy" />
            <div className="nosotros__store-tag">Desde 2003</div>
          </div>
          <p className="section-subtitle">Quiénes somos</p>
          <h2 className="section-title">Abarrotes Don Pepe</h2>
          <p className="nosotros__text">
            Somos una tienda familiar ubicada en el corazón de Jilotepec. Desde 2003,
            hemos servido a cientos de familias con productos de calidad a precios accesibles.
            Empezamos siendo un pequeño puesto y hoy contamos con un amplio surtido para cubrir
            todas las necesidades de tu hogar.
          </p>
          <p className="nosotros__text">
            Creemos que una buena tienda de abarrotes es el corazón del barrio — un lugar donde
            te conocen por tu nombre y siempre encuentras lo que necesitas.
          </p>
        </div>

        <div className="nosotros__mvv">
          <div className="nosotros__mv-card">
            <Target size={24} strokeWidth={1.5} className="nosotros__mv-icon" />
            <h3>Misión</h3>
            <p>Proveer a las familias de Tula productos de calidad al mejor precio, con atención cálida y honesta.</p>
          </div>
          <div className="nosotros__mv-card">
            <Eye size={24} strokeWidth={1.5} className="nosotros__mv-icon" />
            <h3>Visión</h3>
            <p>Ser la tienda de abarrotes de referencia en la región, reconocida por su surtido, calidad y trato familiar.</p>
          </div>
          <div className="nosotros__valores">
            <h3 className="nosotros__valores-title">Nuestros valores</h3>
            <ul className="nosotros__valores-grid">
              {valores.map(({ Icon, title, desc }) => (
                <li key={title} className="nosotros__valor">
                  <span className="nosotros__valor-icon">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
