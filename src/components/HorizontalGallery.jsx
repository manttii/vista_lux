import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    projectNumber: 'PROJECT 03',
    location: 'TOKYO',
    year: '2024',
    title: 'Corridor No. IX',
    category: 'RETAIL INTERIOR',
    image: '/images/vista_grid_2_1776939072546.png',
  },
  {
    id: 2,
    projectNumber: 'PROJECT 04',
    location: 'DUBAI',
    year: '2023',
    title: 'Azure Horizon',
    category: 'COMMERCIAL SPACE',
    image: '/images/vista_grid_1_1776939051231.png',
  },
  {
    id: 3,
    projectNumber: 'PROJECT 05',
    location: 'MEXICO CITY',
    year: '2023',
    title: 'Spectra Residence',
    category: 'HOSPITALITY',
    image: '/images/vista_hero_bg_1776939032975.png',
  },
  {
    id: 4,
    projectNumber: 'PROJECT 06',
    location: 'PARIS',
    year: '2022',
    title: 'Pavilion Sève',
    category: 'FLAGSHIP BOUTIQUE',
    image: '/images/vista_grid_1_1776939051231.png',
  },
  {
    id: 5,
    projectNumber: 'PROJECT 07',
    location: 'LONDON',
    year: '2021',
    title: 'The Vaults',
    category: 'EXPERIMENTAL',
    image: '/images/vista_grid_2_1776939072546.png',
  }
];

export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const cards = cardsRef.current;

    const getScrollAmount = () => {
      let scrollContainerWidth = scrollContainer.scrollWidth;
      return -(scrollContainerWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollContainer, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    cards.forEach((card, i) => {
      // Setting initial transform origin for scaling from center
      gsap.set(card, { transformOrigin: "center center" });

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tween,
        start: "left center",
        end: "right center",
        onEnter: () => gsap.to(card, { scale: 1.05, zIndex: 50, duration: 0.4, ease: "power2.out" }),
        onLeave: () => gsap.to(card, { scale: 1.0, zIndex: i, duration: 0.4, ease: "power2.out" }),
        onEnterBack: () => gsap.to(card, { scale: 1.05, zIndex: 50, duration: 0.4, ease: "power2.out" }),
        onLeaveBack: () => gsap.to(card, { scale: 1.0, zIndex: i, duration: 0.4, ease: "power2.out" }),
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full bg-pure-white overflow-hidden relative border-b border-champagne-gold/50">
      
      {/* Title overlay fixed on the left */}
      <div className="absolute top-32 left-6 md:left-12 lg:left-24 z-10 pointer-events-none">
        <h2 className="text-sm font-sans tracking-[0.3em] text-champagne-gold uppercase mb-6 bg-pure-white/80 p-2 inline-block">
          Portfolio Gallery
        </h2>
        <p className="text-4xl md:text-5xl font-serif text-matte-black max-w-xl leading-tight bg-pure-white/80 p-2">
          A curated deck of high-end architectural spaces.
        </p>
      </div>

      <div 
        ref={scrollContainerRef} 
        className="flex h-full items-center pt-32 px-[10vw]"
        style={{ width: "fit-content" }}
      >
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            ref={el => cardsRef.current[index] = el}
            className="relative flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] h-[60vh] -ml-12 md:-ml-24 first:ml-0 group"
            style={{ zIndex: index }}
          >
            {/* Card Content - Pure White, Matte Black, 1px Gold border */}
            <div className="w-full h-full bg-pure-white border border-champagne-gold/30 p-6 flex flex-col justify-between shadow-2xl shadow-matte-black/5 overflow-hidden">
              <div className="w-full h-3/4 overflow-hidden relative border border-champagne-gold/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <div className="pt-6 pb-2 text-left bg-pure-white z-10">
                <div className="flex justify-between items-center text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-matte-black/60 uppercase mb-4">
                  <span>{project.projectNumber} — {project.location}</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-matte-black/60 uppercase text-right max-w-[120px]">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Empty padding block to allow the last card to reach the center before ending */}
        <div className="flex-shrink-0 w-[50vw]"></div>
      </div>
    </section>
  );
}
