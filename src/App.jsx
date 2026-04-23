import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import MasonryGrid from './components/MasonryGrid';
import Services from './components/Services';
import Menu from './components/Menu';
import Philosophy from './components/Philosophy';
import Clientele from './components/Clientele';
import FurnitureShowcase from './components/FurnitureShowcase';
import Contact from './components/Contact';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-pure-white min-h-screen text-matte-black selection:bg-champagne-gold selection:text-pure-white antialiased">
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'bg-pure-white shadow-sm py-4 text-matte-black' : 'bg-transparent text-pure-white mix-blend-difference'
        }`}
      >
        <div className="text-xl font-serif tracking-widest uppercase font-semibold">Vista Lux</div>
        <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] uppercase font-light items-center">
          <span className="opacity-60">EST. MMXII — MILAN · DUBAI · TOKYO</span>
          <button 
            onClick={() => setMenuOpen(true)}
            className="hover:text-champagne-gold transition-colors flex items-center gap-4 group"
          >
            <span className="w-8 h-px bg-current group-hover:bg-champagne-gold transition-colors"></span>
            MENU / 05
          </button>
        </div>
        {/* Simple Hamburger for mobile */}
        <button 
          className="md:hidden space-y-1.5"
          onClick={() => setMenuOpen(true)}
        >
          <div className="w-6 h-px bg-current"></div>
          <div className="w-6 h-px bg-current"></div>
        </button>
      </header>

      <main>
        <Hero />
        <Services />
        <MasonryGrid />
        <Clientele />
        <FurnitureShowcase />
        <Philosophy />
        <Contact />
      </main>

    </div>
  );
}

export default App;
