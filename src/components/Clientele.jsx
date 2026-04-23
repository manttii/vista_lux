import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "L'ORÉAL PARIS", domain: "loreal.com" },
  { name: "DIPTYQUE", domain: "diptyqueparis.com" },
  { name: "CHANEL", domain: "chanel.com" },
  { name: "GIORGIO ARMANI", domain: "armani.com" },
  { name: "YVES SAINT LAURENT", domain: "ysl.com" },
  { name: "L'OCCITANE", domain: "loccitane.com" },
  { name: "GIVENCHY", domain: "givenchy.com" },
  { name: "GUERLAIN", domain: "guerlain.com" },
  { name: "DIOR", domain: "dior.com" },
  { name: "ACQUA DI PARMA", domain: "acquadiparma.com" },
  { name: "BVLGARI", domain: "bulgari.com" },
  { name: "GUCCI", domain: "gucci.com" },
  { name: "KENZO", domain: "kenzo.com" },
  { name: "BENEFIT", domain: "benefitcosmetics.com" },
  { name: "LANCÔME", domain: "lancome.com" },
  { name: "CREED", domain: "creedfragrance.com" },
  { name: "CHARLOTTE TILBURY", domain: "charlottetilbury.com" },
  { name: "SHISEIDO", domain: "shiseido.com" },
  { name: "BURBERRY", domain: "burberry.com" },
  { name: "PRADA", domain: "prada.com" },
  { name: "RABANNE", domain: "rabanne.com" },
  { name: "HUDA BEAUTY", domain: "hudabeauty.com" },
  { name: "BOSS", domain: "hugoboss.com" },
  { name: "LAURA MERCIER", domain: "lauramercier.com" },
  { name: "SULWHASOO", domain: "sulwhasoo.com" },
  { name: "URBAN DECAY", domain: "urbandecay.com" },
  { name: "KÉRASTASE", domain: "kerastase.com" },
  { name: "PAT MCGRATH LABS", domain: "patmcgrath.com" },
  { name: "EX NIHILO", domain: "ex-nihilo-paris.com" },
  { name: "LA PRAIRIE", domain: "laprairie.com" },
  { name: "CHLOÉ", domain: "chloe.com" },
  { name: "MEMO PARIS", domain: "memoparis.com" },
  { name: "VERSACE", domain: "versace.com" },
  { name: "MARC JACOBS", domain: "marcjacobs.com" },
  { name: "SERGE LUTENS", domain: "sergelutens.com" },
  { name: "OLAPLEX", domain: "olaplex.com" }
];

export default function Clientele() {
  const containerRef = useRef(null);

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

  return (
    <section ref={containerRef} className="py-32 bg-pure-white border-b border-champagne-gold/30">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-matte-black mb-24 tracking-tight uppercase">
          Our Ever Growing Luxe Clientele
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="brand-item flex items-center justify-center p-8 transition-transform duration-500 hover:scale-105 cursor-pointer border border-gray-100"
            >
              <img 
                src={`https://logo.clearbit.com/${brand.domain}?size=512`} 
                alt={brand.name} 
                className="max-h-16 md:max-h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.classList.remove('hidden');
                }}
              />
              <span className="hidden text-[10px] font-sans font-bold tracking-[0.2em] text-matte-black uppercase text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
