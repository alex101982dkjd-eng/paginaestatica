import { ShoppingCart } from 'lucide-react';
import './Footer.css';

// lucide-react no incluye iconos de marca; se definen como SVG propios.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.6-1.5H16.7V3.3C16.4 3.3 15.4 3.2 14.3 3.2c-2.4 0-4 1.5-4 4.1v2.5H7.6V13H10.3v8h3.2Z"/>
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.2" cy="6.8" r="1"/>
    </svg>
  );
}
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M3 3h4.6l4 5.4L16.4 3H21l-6.9 8.5L21.4 21h-4.6l-4.5-5.9L6.5 21H2l7.3-9L3 3Z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { href: '#inicio',   label: 'Inicio' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#ofertas',  label: 'Ofertas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

// Redes sociales oficiales de la Central de Abasto de la Ciudad de México (CEDA).
const SOCIAL_LINKS = [
  { Icon: FacebookIcon,  label: 'Facebook',    href: 'https://www.facebook.com/CdeAbastoCDMX/' },
  { Icon: InstagramIcon, label: 'Instagram',   href: 'https://www.instagram.com/cdeabastocdmx/' },
  { Icon: XIcon,         label: 'X (Twitter)', href: 'https://x.com/CdeAbastoCDMX' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <ShoppingCart size={20} strokeWidth={2} />
          <span>Abarrotes Don Pepe</span>
        </div>

        <ul className="footer__links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <ul className="footer__social">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__copy">© {year} Abarrotes Don Pepe — Jilotepec, Estado de México.</p>
      </div>
    </footer>
  );
}
