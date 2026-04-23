import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PortfolioCard({ image, title, projectNumber, folio, location, year, category, className = "" }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    
    const hoverAnimUpdate = gsap.to(card, {
      y: -10,
      ease: "power3.out",
      duration: 0.6,
      paused: true
    });

    const handleMouseEnter = () => hoverAnimUpdate.play();
    const handleMouseLeave = () => hoverAnimUpdate.reverse();

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef} 
      className={`group relative bg-white cursor-pointer ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden border border-matte-black/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="pt-6 pb-4 text-left">
        <div className="flex justify-between items-center text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-matte-black/40 uppercase mb-3">
          <span>{projectNumber} — {location}</span>
          <span>{year}</span>
        </div>
        <div className="mb-2">
          <h3 className="text-3xl md:text-5xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-500 leading-none">
            {title}
          </h3>
        </div>
        <div className="flex justify-between items-center text-[9px] font-sans tracking-[0.2em] text-matte-black/30 uppercase mt-4">
          <span>{category}</span>
          <span className="font-bold">{folio}</span>
        </div>
      </div>
    </div>
  );
}
