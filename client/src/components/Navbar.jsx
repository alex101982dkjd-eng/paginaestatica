import { useState, useEffect } from 'react';
import { ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#catalogo',  label: 'Catálogo' },
  { href: '#ofertas',   label: 'Ofertas' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#contacto',  label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__brand">
          <ShoppingCart size={22} strokeWidth={2} />
          <span className="navbar__name">
            Don Pepe<span className="navbar__sub"> Abarrotes</span>
          </span>
        </a>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="navbar__link" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/5211234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp navbar__cta"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} strokeWidth={2} />
            WhatsApp
          </a>
        </nav>

        <button
          className="navbar__hamburger"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
