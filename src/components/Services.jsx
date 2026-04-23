import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hexagon, Box, Layers, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: '1', title: 'Retail Design Services', Icon: Hexagon },
  { id: '2', title: 'Production and Manufacturing', Icon: Box },
  { id: '3', title: 'Installation', Icon: Layers },
  { id: '4', title: 'Logistics', Icon: ArrowUpRight },
];

export default function Services() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const bgMaskRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Faint background text parallax/scroll
    gsap.to(marqueeRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (bgMaskRef.current) {
        bgMaskRef.current.style.setProperty('--mouse-x', `${x}px`);
        bgMaskRef.current.style.setProperty('--mouse-y', `${y}px`);
      }

      cardsRef.current.forEach(card => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardX = e.clientX - cardRect.left;
        const cardY = e.clientY - cardRect.top;
        card.style.setProperty('--mouse-x', `${cardX}px`);
        card.style.setProperty('--mouse-y', `${cardY}px`);
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bgWords = Array(400).fill("Vista Lux Enterprise Architecture Design Luxury Production ").join("");

  return (
    <section 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-pure-white text-matte-black py-32 border-b border-champagne-gold/50"
    >
      {/* Background Scrolling Text with Dynamic Mouse Spotlight Mask */}
      <div 
        ref={bgMaskRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 20%, transparent 80%)',
          maskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 20%, transparent 80%)' 
        }}
      >
        <div 
          ref={marqueeRef}
          className="absolute inset-0 flex items-center justify-center opacity-[0.04] w-full h-[150%] -top-[25%]"
        >
          <p className="text-base md:text-xl font-serif font-bold leading-tight text-center w-full h-full text-matte-black break-words px-8">
            {bgWords}
          </p>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-[2000px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-matte-black mb-6 tracking-tight">
            Luxury Retail
          </h2>
          <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/40 uppercase">
            Creating beautiful stores for luxury brands in malls and airports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { id: '1', title: 'Turnkey Fitouts', desc: 'Crafting luxurious and elegant store designs for premium clientele.', image: '/images/retail_1.png' },
            { id: '2', title: 'Shop-in-Shop Fixtures', desc: 'Designing exquisite interiors for luxury retail spaces and boutiques.', image: '/images/furniture_1.png' },
            { id: '3', title: 'POPUPS and Podiums', desc: 'Providing bespoke furnishings for high-end retail.', image: '/images/boutique_1.png' },
            { id: '4', title: 'Visual Merchandising and POSM', desc: 'Tailoring unique and customized solutions for luxury.', image: '/images/retail_1.png' },
          ].map((item, idx) => (
            <div 
              key={item.id} 
              ref={el => cardsRef.current[idx] = el}
              className="group relative cursor-pointer"
              style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
            >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-matte-black/5 mb-8">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle 350px at var(--mouse-x) var(--mouse-y), rgba(188, 168, 127, 0.15), transparent 100%)'
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-matte-black/40 font-sans max-w-sm">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <ArrowUpRight className="text-matte-black/20 group-hover:text-champagne-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
