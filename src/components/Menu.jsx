import { useEffect } from 'react';
import gsap from 'gsap';

const links = [
  { num: '01', title: 'Index' },
  { num: '02', title: 'Portfolio' },
  { num: '03', title: 'Philosophy' },
  { num: '04', title: 'Journal' },
  { num: '05', title: 'Inquire' },
];

export default function Menu({ isOpen, onClose }) {
  // We can add entrance animations later if needed, but for now simple conditional rendering or opacity transition
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-pure-white text-matte-black flex flex-col pt-8 px-6 md:px-12 overflow-y-auto">
      {/* Header of Menu */}
      <div className="flex justify-between items-center w-full mb-24">
        <div className="text-xl font-serif tracking-widest uppercase font-semibold">Vista Lux</div>
        <button 
          onClick={onClose}
          className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase hover:text-champagne-gold transition-colors"
        >
          CLOSE 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 flex-1 pb-12">
        {/* Left Col - The Index */}
        <div className="lg:col-span-2 text-xs font-sans tracking-[0.2em] uppercase font-light text-matte-black/60">
          <p>The Index</p>
          <p>— 01 / 05</p>
        </div>

        {/* Center Col - Main Links */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {links.map((link) => (
            <div key={link.num} className="group border-b border-champagne-gold/20 pb-4 flex items-end justify-between cursor-pointer">
              <div className="flex items-start gap-8">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-champagne-gold mt-4">
                  — {link.num}
                </span>
                <span className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-none group-hover:text-champagne-gold transition-colors duration-500">
                  {link.title}
                </span>
              </div>
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 group-hover:text-matte-black transition-colors opacity-0 group-hover:opacity-100 flex items-center gap-2">
                VIEW
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          ))}
        </div>

        {/* Right Col - Contact / Journal */}
        <div className="lg:col-span-3 flex flex-col justify-between pt-4 lg:pt-0">
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">Contact</p>
            <p className="font-sans text-sm font-light mb-1 hover:text-champagne-gold cursor-pointer transition-colors">studio@vistalux.co</p>
            <p className="font-sans text-sm font-light hover:text-champagne-gold cursor-pointer transition-colors">+39 02 8723 4401</p>
          </div>

          <div className="mt-24 lg:mt-0">
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">Journal</p>
            <p className="font-serif text-2xl italic leading-relaxed mb-6">
              "Architecture is a quiet rebellion of light."
            </p>
            <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60">
              — ISSUE NO. XVII
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
