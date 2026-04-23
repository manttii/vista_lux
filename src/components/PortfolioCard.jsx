import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function PortfolioCard({ image, title, projectNumber, location, year, category, className = "" }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    // Hover animation
    const card = cardRef.current;
    
    // We create an animation instance that we can play/reverse on hover
    // It subtly lifts on Y-axis and casts a soft diffused shadow
    const hoverAnim = gsap.to(card, {
      y: -15, // lift up
      boxShadow: "0 20px 40px -15px rgba(188, 168, 127, 0.3)", // Soft diffused shadow with champagne gold tint, or just black. Let's use black for contrast.
      ease: "power2.out",
      duration: 0.4,
      paused: true,
    });

    // Make shadow darker/diffused
    gsap.set(card, { boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0)" });
    
    const hoverAnimUpdate = gsap.to(card, {
      y: -20,
      boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.25)",
      ease: "power3.out",
      duration: 0.5,
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
      className={`group relative overflow-hidden bg-white cursor-pointer ${className}`}
      // Enforce sharp edges by not adding rounded corners
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="pt-8 pb-4 text-left">
        <div className="flex justify-between items-center text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-matte-black/60 uppercase mb-4">
          <span>{projectNumber} — {location}</span>
          <span>{year}</span>
        </div>
        <div className="flex justify-between items-end">
          <h3 className="text-3xl md:text-5xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-500">
            {title}
          </h3>
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-matte-black/60 uppercase">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
