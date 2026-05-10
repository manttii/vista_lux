import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import logos
import loreal_paris from '../assets/logos/loreal_paris.png';
import chanel from '../assets/logos/chanel.png';
import giorgio_armani from '../assets/logos/giorgio_armani.png';
import yves_saint_luarent from '../assets/logos/yves_saint_luarent.png';
import loccitane from '../assets/logos/loccitane.png';
import givenchy from '../assets/logos/givenchy.png';
import guerlain from '../assets/logos/guerlain.png';
import dior from '../assets/logos/dior.png';
import acqua_di_parma from '../assets/logos/acqua_di_parma.png';
import bvlgari from '../assets/logos/bvlgari.png';
import gucci from '../assets/logos/gucci.png';
import kenzo from '../assets/logos/kenzo.png';
import lancome from '../assets/logos/lancome.png';
import creed from '../assets/logos/creed.png';
import charlotte_tilbury from '../assets/logos/charlotte_tilbury.png';
import shiseido from '../assets/logos/shiseido.png';
import burberry from '../assets/logos/burberry.png';
import prada from '../assets/logos/prada.png';
import rabanne from '../assets/logos/rabanne.png';
import huda_beauty from '../assets/logos/huda_beauty.png';
import boss from '../assets/logos/boss.png';
import laura_mercier from '../assets/logos/laura_mercier.png';
import sulwhasoo from '../assets/logos/sulwhasoo.png';
import urban_decay from '../assets/logos/urban_decay.png';
import kerastase from '../assets/logos/kerastase.png';
import pat_mcgrath_labs from '../assets/logos/pat_mcgrath_labs.jpg';
import ex_nihilo from '../assets/logos/ex_nihilo.png';
import laprairie from '../assets/logos/laprairie.png';

// New imports
import chloe from '../assets/logos/chloe.png';
import marc_jacobs from '../assets/logos/marc_jacobs.png';
import memo_paris from '../assets/logos/memo_paris.png';
import olaplex from '../assets/logos/olaplex.png';
import serge_lutens from '../assets/logos/serge_lutens.png';
import versace from '../assets/logos/versace.png';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "L'ORÉAL PARIS", domain: "loreal.com", image: loreal_paris },
  { name: "CHANEL", domain: "chanel.com", image: chanel },
  { name: "GIORGIO ARMANI", domain: "armani.com", image: giorgio_armani },
  { name: "YVES SAINT LAURENT", domain: "ysl.com", image: yves_saint_luarent },
  { name: "L'OCCITANE", domain: "loccitane.com", image: loccitane },
  { name: "GIVENCHY", domain: "givenchy.com", image: givenchy },
  { name: "GUERLAIN", domain: "guerlain.com", image: guerlain },
  { name: "DIOR", domain: "dior.com", image: dior },
  { name: "ACQUA DI PARMA", domain: "acquadiparma.com", image: acqua_di_parma },
  { name: "BVLGARI", domain: "bulgari.com", image: bvlgari },
  { name: "GUCCI", domain: "gucci.com", image: gucci },
  { name: "KENZO", domain: "kenzo.com", image: kenzo },
  { name: "LANCÔME", domain: "lancome.com", image: lancome },
  { name: "CREED", domain: "creedfragrance.com", image: creed, scale: 0.7 },
  { name: "CHARLOTTE TILBURY", domain: "charlottetilbury.com", image: charlotte_tilbury },
  { name: "SHISEIDO", domain: "shiseido.com", image: shiseido },
  { name: "BURBERRY", domain: "burberry.com", image: burberry },
  { name: "PRADA", domain: "prada.com", image: prada },
  { name: "RABANNE", domain: "rabanne.com", image: rabanne },
  { name: "HUDA BEAUTY", domain: "hudabeauty.com", image: huda_beauty, noFilter: true },
  { name: "BOSS", domain: "hugoboss.com", image: boss },
  { name: "LAURA MERCIER", domain: "lauramercier.com", image: laura_mercier, scale: 1.2 },
  { name: "SULWHASOO", domain: "sulwhasoo.com", image: sulwhasoo },
  { name: "URBAN DECAY", domain: "urbandecay.com", image: urban_decay },
  { name: "KÉRASTASE", domain: "kerastase.com", image: kerastase },
  { name: "PAT MCGRATH LABS", domain: "patmcgrath.com", fontClass: "font-serif text-[13px] tracking-[0.15em] font-normal" },
  { name: "EX NIHILO", domain: "ex-nihilo-paris.com", image: ex_nihilo },
  { name: "LA PRAIRIE", domain: "laprairie.com", image: laprairie },
  { name: "CHLOÉ", domain: "chloe.com", image: chloe },
  { name: "MEMO PARIS", domain: "memoparis.com", image: memo_paris },
  { name: "VERSACE", domain: "versace.com", image: versace },
  { name: "MARC JACOBS", domain: "marcjacobs.com", image: marc_jacobs },
  { name: "SERGE LUTENS", domain: "sergelutens.com", image: serge_lutens },
  { name: "OLAPLEX", domain: "olaplex.com", image: olaplex, scale: 0.7 }
];

export default function Clientele() {
  const containerRef = useRef(null);
  const [slots, setSlots] = useState(brands.slice(0, 15));

  // GSAP initial load animation
  useGSAP(() => {
    const logos = gsap.utils.toArray('.brand-item');
    
    gsap.from(logos, {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.02,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  // Living wall effect: rotate logos with CGI-style 3D flip
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random number of tiles to change (3 to 5)
      const count = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
      
      const randomIndices = [];
      while (randomIndices.length < count) {
        const idx = Math.floor(Math.random() * 15);
        if (!randomIndices.includes(idx)) {
          randomIndices.push(idx);
        }
      }
      
      // Filter out hovered tiles
      const validIndices = randomIndices.filter(idx => {
        const tileEl = containerRef.current?.querySelectorAll('.brand-item')[idx];
        return tileEl && !tileEl.matches(':hover');
      });
      
      if (validIndices.length === 0) return;
      
      // Get currently visible names to avoid duplicates
      let visibleNames = slots.map(s => s.name);
      
      // Compute all new brands for the batch first
      const updates = [];
      let availableBrands = brands.filter(b => !visibleNames.includes(b.name));
      
      validIndices.forEach(idx => {
        if (availableBrands.length === 0) return;
        
        const randomIdx = Math.floor(Math.random() * availableBrands.length);
        const newBrand = availableBrands[randomIdx];
        
        updates.push({ idx, newBrand });
        
        // Remove picked brand from available and add to visible so next slot doesn't pick it
        availableBrands.splice(randomIdx, 1);
        visibleNames.push(newBrand.name);
      });
      
      // Perform animations and state updates for the computed batch
      updates.forEach(({ idx, newBrand }) => {
        const tileEl = containerRef.current?.querySelectorAll('.brand-item')[idx];
        
        gsap.to(tileEl, {
          rotateY: 90,
          opacity: 0.3,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            // Update state for that slot
            setSlots(prev => {
              const newSlots = [...prev];
              newSlots[idx] = newBrand;
              return newSlots;
            });
            
            // Set starting state for reveal
            gsap.set(tileEl, { rotateY: -90 });
            
            // Animate in
            gsap.to(tileEl, {
              rotateY: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      });
    }, 3000); // Change a batch every 3 seconds
    
    return () => clearInterval(interval);
  }, [slots]);

  return (
    <section ref={containerRef} className="py-32 bg-pure-white border-b border-champagne-gold/30">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl md:text-6xl font-serif text-matte-black mb-24 tracking-tight leading-tight">
          Our <span className="italic font-light">Ever Growing</span> <span className="font-bold">Luxe</span> Clientele
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 items-center"
            style={{ perspective: '1000px' }}
          >
            {slots.map((brand, index) => (
              <a 
                key={index} 
                href={`https://${brand.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-item relative flex items-center justify-center bg-white aspect-square p-2"
                title={brand.name}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {brand.image ? (
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className={`w-full h-full object-contain filter grayscale ${brand.noFilter ? '' : 'contrast-[3] brightness-[1.1]'}`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: brand.scale ? `scale(${brand.scale})` : 'none'
                    }}
                  />
                ) : (
                  <span 
                    className={`text-matte-black uppercase text-center leading-relaxed ${brand.fontClass || 'text-[11px] font-sans font-medium tracking-[0.25em]'}`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {brand.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
