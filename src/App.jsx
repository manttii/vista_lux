import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import MasonryGrid from './components/MasonryGrid';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-pure-white min-h-screen text-matte-black selection:bg-champagne-gold selection:text-pure-white">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-pure-white shadow-sm py-4 text-matte-black' : 'bg-transparent text-pure-white mix-blend-difference'
        }`}
      >
        <div className="text-xl font-serif tracking-widest uppercase font-semibold">Vista Lux</div>
        <nav className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] uppercase font-light">
          <a href="#" className="hover:text-champagne-gold transition-colors">Work</a>
          <a href="#" className="hover:text-champagne-gold transition-colors">Studio</a>
          <a href="#" className="hover:text-champagne-gold transition-colors">Contact</a>
        </nav>
        {/* Simple Hamburger for mobile */}
        <button className="md:hidden space-y-1.5">
          <div className="w-6 h-px bg-current"></div>
          <div className="w-6 h-px bg-current"></div>
        </button>
      </header>

      <main>
        <Hero />
        <MasonryGrid />
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 text-center bg-pure-white">
        <h2 className="text-4xl md:text-6xl font-serif mb-12 text-matte-black">
          Ready to elevate your brand?
        </h2>
        <a 
          href="mailto:contact@vistalux.com" 
          className="inline-block text-sm font-sans tracking-[0.3em] text-champagne-gold uppercase pb-2 border-b border-champagne-gold hover:text-matte-black hover:border-matte-black transition-colors duration-300"
        >
          Initiate Contact
        </a>
        <div className="mt-32 pt-8 border-t border-champagne-gold flex flex-col md:flex-row justify-between items-center text-xs font-sans tracking-widest uppercase text-matte-black/60">
          <p>&copy; {new Date().getFullYear()} Vista Lux. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-matte-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-matte-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-matte-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
