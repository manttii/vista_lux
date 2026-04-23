import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCard from './PortfolioCard';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    projectNumber: 'PROJECT 01',
    folio: 'FOLIO Nº 001',
    location: 'DUBAI',
    year: '2023',
    title: 'Maison Dune',
    category: 'RESIDENTIAL TOWER',
    image: '/images/vista_grid_1_1776939051231.png',
    className: 'col-span-12 lg:col-span-6',
  },
  {
    id: 2,
    projectNumber: 'PROJECT 02',
    folio: 'FOLIO Nº 002',
    location: 'MILAN',
    year: '2024',
    title: 'Velour Hall',
    category: 'PRIVATE GALLERY',
    image: '/images/vista_grid_2_1776939072546.png',
    className: 'col-span-12 lg:col-span-6 lg:mt-64',
  },
  {
    id: 3,
    projectNumber: 'PROJECT 03',
    folio: 'FOLIO Nº 003',
    location: 'TOKYO',
    year: '2024',
    title: 'Corridor No. IX',
    category: 'RETAIL INTERIOR',
    image: '/images/vista_grid_2_1776939072546.png',
    className: 'col-span-12 lg:col-span-6 lg:-mt-32',
  },
  {
    id: 4,
    projectNumber: 'PROJECT 04',
    folio: 'FOLIO Nº 004',
    location: 'SINGAPORE',
    year: '2023',
    title: 'Cobalt Atrium',
    category: 'CIVIC ARCHITECTURE',
    image: '/images/vista_grid_1_1776939051231.png',
    className: 'col-span-12 lg:col-span-6 lg:mt-32',
  },
  {
    id: 5,
    projectNumber: 'PROJECT 05',
    folio: 'FOLIO Nº 005',
    location: 'MEXICO CITY',
    year: '2023',
    title: 'Spectra Residence',
    category: 'HOSPITALITY',
    image: '/images/vista_hero_bg_1776939032975.png',
    className: 'col-span-12 lg:col-span-6 lg:-mt-16',
  },
  {
    id: 6,
    projectNumber: 'PROJECT 06',
    folio: 'FOLIO Nº 006',
    location: 'PARIS',
    year: '2022',
    title: 'Pavilion Sève',
    category: 'FLAGSHIP BOUTIQUE',
    image: '/images/vista_grid_1_1776939051231.png',
    className: 'col-span-12 lg:col-span-6 lg:mt-32 lg:mb-24',
  }
];

export default function MasonryGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.portfolio-card-wrapper');

    // Initial state: subtle shift
    gsap.set(cards, { y: 60, opacity: 0 });

    // Staggered reveal animation
    ScrollTrigger.batch(cards, {
      start: "top 90%",
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 2.2,
          ease: "expo.out",
          stagger: 0.1,
          overwrite: "auto"
        });
      },
    });

    // Subtle parallax shift for depth
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -40 : 40,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="py-40 px-6 md:px-12 lg:px-24 bg-pure-white w-full max-w-[2000px] mx-auto border-b border-champagne-gold/50"
    >
      <div className="mb-48 text-center md:text-left">
        <h2 className="text-[10px] font-sans tracking-[0.5em] text-matte-black/40 uppercase mb-12">
          Catalogue / Works
        </h2>
        <p className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-matte-black max-w-7xl leading-[0.9] tracking-tighter">
          An index of <span className="italic text-champagne-gold">quiet</span> monuments.
        </p>
        <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/60 mt-12 max-w-xl uppercase leading-relaxed">
          Six commissions from six cities — each a study in contrast between saturated pigment and restrained geometry. Turn the pages slowly.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-y-24 md:gap-x-8 lg:gap-x-12">
        {projects.map((project) => (
          <div key={project.id} className={`portfolio-card-wrapper ${project.className}`}>
            <PortfolioCard 
              title={project.title}
              projectNumber={project.projectNumber}
              folio={project.folio}
              location={project.location}
              year={project.year}
              category={project.category}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
