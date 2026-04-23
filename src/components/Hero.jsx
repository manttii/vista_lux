import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax effect for background (moves slower than scroll)
    tl.to(bgRef.current, {
      y: "30%", // Moves down relative to its container to create depth
      ease: "none",
    }, 0);

    // Headline floats upwards at a slightly different speed
    tl.to(headlineRef.current, {
      y: "-50%", // Moves up faster to float away
      ease: "none",
    }, 0);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center border-b border-champagne-gold/50 bg-matte-black"
    >
      {/* Background Image Container */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <img 
          src="/images/vista_hero_dark_glass.png" 
          alt="Vista Lux Dark Architectural Glass"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Floating Headline */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full mix-blend-normal">
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
