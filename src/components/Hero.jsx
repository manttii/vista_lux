import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const headlineRef = useRef(null);
  const spotlightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax effect for background
    tl.to(bgRef.current, {
      y: "30%",
      ease: "none",
    }, 0);

    // Headline floats upwards
    tl.to(headlineRef.current, {
      y: "-50%",
      ease: "none",
    }, 0);

  }, { scope: containerRef });

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !spotlightRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlightRef.current.style.setProperty('--mouse-x', `${x}px`);
      spotlightRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center border-b border-champagne-gold/50 bg-matte-black group"
    >
      {/* Background Image Container */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <img 
          src="/images/vista_hero_dark_glass.png" 
          alt="Vista Lux Dark Architectural Glass"
          className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
        />
        
        {/* Spotlight Overlay Reveal */}
        <div 
          ref={spotlightRef}
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            '--mouse-x': '50%',
            '--mouse-y': '50%',
            background: 'radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(188, 168, 127, 0.1), transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)',
            maskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)'
          }}
        >
          <img 
            src="/images/vista_hero_dark_glass.png" 
            className="w-full h-full object-cover opacity-100 grayscale-0"
            alt="Hero Spotlight"
          />
        </div>
      </div>

      {/* Floating Headline */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full mix-blend-normal">
        <h1 
          ref={headlineRef}
          className="text-7xl md:text-[10rem] lg:text-[14rem] font-serif tracking-tight leading-tight max-w-[1400px] mx-auto flex items-baseline gap-4 md:gap-8"
        >
          <span className="text-pure-white" style={{ textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}>Vista</span>
          <span className="text-champagne-gold italic" style={{ textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}>Lux</span>
        </h1>
      </div>
    </section>
  );
}
