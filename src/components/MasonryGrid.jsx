import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioCard from './PortfolioCard';

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
    className: 'col-span-12 lg:col-span-5',
  },
  {
    id: 2,
    projectNumber: 'PROJECT 04',
    location: 'DUBAI',
    year: '2023',
    title: 'Azure Horizon',
    category: 'COMMERCIAL SPACE',
    image: '/images/vista_grid_1_1776939051231.png',
    className: 'col-span-12 lg:col-span-6 lg:col-start-7 lg:mt-48',
  },
  {
    id: 3,
    projectNumber: 'PROJECT 05',
    location: 'MEXICO CITY',
    year: '2023',
    title: 'Spectra Residence',
    category: 'HOSPITALITY',
    image: '/images/vista_hero_bg_1776939032975.png',
    className: 'col-span-12 lg:col-span-6 lg:mt-32',
  },
  {
    id: 4,
    projectNumber: 'PROJECT 06',
    location: 'PARIS',
    year: '2022',
    title: 'Pavilion Sève',
    category: 'FLAGSHIP BOUTIQUE',
    image: '/images/vista_grid_1_1776939051231.png',
    className: 'col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-16 lg:mb-32',
  }
];

export default function MasonryGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.portfolio-card-wrapper');

    // Initial state: shifted down and invisible
    gsap.set(cards, { y: 150, opacity: 0 });

    // Staggered reveal animation
    ScrollTrigger.batch(cards, {
      start: "top 85%",
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          stagger: 0.15,
          overwrite: "auto"
        });
      },
      // Optional: reverse on leave back so they animate again when scrolling up
      // onLeaveBack: (elements) => {
      //   gsap.set(elements, { y: 150, opacity: 0, overwrite: "auto" })
      // }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="py-40 px-6 md:px-12 lg:px-24 bg-pure-white w-full max-w-[2000px] mx-auto border-b border-champagne-gold/50"
    >
      <div className="mb-32">
        <h2 className="text-sm font-sans tracking-[0.3em] text-champagne-gold uppercase mb-6">
          Selected Works
        </h2>
        <p className="text-4xl md:text-5xl font-serif text-matte-black max-w-3xl leading-tight">
          A curated portfolio of high-end tech and luxury architectural spaces.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-y-24 md:gap-x-8 lg:gap-x-12">
        {projects.map((project) => (
          <div key={project.id} className={`portfolio-card-wrapper ${project.className}`}>
            <PortfolioCard 
              title={project.title}
              projectNumber={project.projectNumber}
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
