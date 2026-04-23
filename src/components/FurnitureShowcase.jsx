import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FurnitureShowcase() {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    const stats = statsRef.current.querySelectorAll('.stat-number');
    const revealTexts = containerRef.current.querySelectorAll('.reveal-text-alt');

    // Reveal Text Animation
    gsap.to(revealTexts, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
        },
        onUpdate: () => {
          stat.textContent = Math.ceil(obj.value) + (stat.id === 'plus' ? '+' : '');
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-pure-white border-b border-champagne-gold/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Full Width Headline - Rescaled for 100% Zoom visibility */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-serif text-matte-black leading-[1.1] tracking-tighter">
            <span className="block pb-2 md:pb-4 relative z-40">
              <span className="inline-block bg-gradient-to-r from-champagne-gold via-[#D4C4A1] to-champagne-gold bg-clip-text text-transparent transform translate-y-[20%] opacity-0 reveal-text-alt">
                Luxury
              </span>
            </span>
            <span className="block pb-2 md:pb-4 relative z-30">
              <span className="inline-block transform translate-y-[20%] opacity-0 reveal-text-alt">
                Furniture
              </span>
            </span>
            <span className="block pb-2 md:pb-4 relative z-20">
              <span className="inline-block transform translate-y-[20%] opacity-0 reveal-text-alt">
                Manufacturer
              </span>
            </span>
            <span className="block text-champagne-gold pb-2 md:pb-4 relative z-10">
              <span className="inline-block transform translate-y-[20%] opacity-0 reveal-text-alt">
                & Retailer
              </span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">

          {/* Subtext and Button - Slightly narrower to give image more room */}
          <div className="w-full lg:w-[35%]">
            <p className="text-base md:text-lg lg:text-xl font-sans tracking-[0.2em] text-matte-black/60 uppercase leading-relaxed mb-12">
              Creating Exquisite Stores for Prestigious Beauty and Luxury Brands in India, specializing in mall and airport installations.
            </p>
            <button className="px-12 py-6 rounded-full border border-matte-black text-matte-black font-sans text-sm tracking-widest uppercase hover:bg-matte-black hover:text-pure-white transition-all duration-500">
              Explore Collection
            </button>
          </div>

          {/* Image and Stats Grid - Maximum expansion */}
          <div className="w-full lg:w-[70%] relative group">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl">
              <img
                src="/images/furniture_1.png"
                alt="Luxury Furniture"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Stats - Shrunk proportionally to keep the focus on the photo */}
            <div
              ref={statsRef}
              className="mt-8 lg:mt-0 lg:absolute lg:bottom-[-8%] lg:right-[-5%] bg-[#00427A] p-[4%] text-pure-white flex gap-[8%] shadow-2xl z-10 w-full lg:w-[65%] border-l-4 border-champagne-gold"
            >
              <div className="flex-1">
                <div id="plus" className="stat-number text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif mb-1" data-target="150">0+</div>
                <div className="text-[8px] md:text-[10px] lg:text-[11px] font-sans tracking-[0.2em] uppercase opacity-60">Luxury Retailer</div>
              </div>
              <div className="w-px h-auto bg-pure-white/20 self-stretch"></div>
              <div className="flex-1">
                <div className="stat-number text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-serif mb-1" data-target="15">0</div>
                <div className="text-[8px] md:text-[10px] lg:text-[11px] font-sans tracking-[0.2em] uppercase opacity-60 leading-tight">Exquisite Designs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
