import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { products, categories, WHATSAPP_NUMBER } from '../data/products.js';
import './Catalogo.css';

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const allCategories = ['Todos', ...categories];
  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalogo" className="catalogo">
      <div className="container">
        <p className="section-subtitle">Lo que tenemos para ti</p>
        <h2 className="section-title">Catálogo de Productos</h2>

        <ol className="catalogo__steps">
          <li>Elige tus productos del catálogo o de las ofertas.</li>
          <li>Escríbenos por WhatsApp con el botón "Pedir".</li>
          <li>Confirma tu pedido y recíbelo o pásalo a recoger.</li>
        </ol>

        <div className="catalogo__filters">
          {allCategories.map(cat => (
            <button
              key={cat}
              className={`catalogo__filter-btn${activeCategory === cat ? ' catalogo__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalogo__grid">
          {filtered.map(p => {
            const waMsg = encodeURIComponent(
              `Hola! Me interesa el producto: *${p.name}* — $${p.price.toFixed(2)}. ¿Está disponible?`
            );
            return (
              <div key={p.id} className="product-card">
                <div className="product-card__icon-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="product-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="product-card__body">
                  <span className="product-card__category">{p.category}</span>
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">${p.price.toFixed(2)}</span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp product-card__btn"
                    >
                      <MessageCircle size={14} strokeWidth={2} />
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
