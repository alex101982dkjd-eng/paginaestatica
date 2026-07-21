import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogo from './components/Catalogo';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalogo />
        <Ofertas />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
