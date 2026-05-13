import React, { useState, useEffect } from 'react';

// Import images from assets
import maisonDuneImg1 from '../assets/portfolio/maison_dune/img1.png';
import maisonDuneImg2 from '../assets/portfolio/maison_dune/img2.png';
import maisonDuneImg3 from '../assets/portfolio/maison_dune/img3.png';
import velourHallImg1 from '../assets/portfolio/velour_hall/img1.png';
import corridorNoIxImg1 from '../assets/portfolio/corridor_no_ix/img1.png';
import cobaltAtriumImg1 from '../assets/portfolio/cobalt_atrium/img1.png';
import spectraResidenceImg1 from '../assets/portfolio/spectra_residence/img1.png';
import pavilionSeveImg1 from '../assets/portfolio/pavilion_seve/img1.png';

const projects = [
  {
    id: 1,
    title: 'Maison Dune',
    info: 'RESIDENTIAL TOWER · DUBAI',
    images: [maisonDuneImg1, maisonDuneImg2, maisonDuneImg3]
  },
  {
    id: 2,
    title: 'Velour Hall',
    info: 'PRIVATE GALLERY · MILAN',
    images: [velourHallImg1, velourHallImg1, velourHallImg1]
  },
  {
    id: 3,
    title: 'Corridor No. IX',
    info: 'RETAIL INTERIOR · TOKYO',
    images: [corridorNoIxImg1, corridorNoIxImg1, corridorNoIxImg1]
  },
  {
    id: 4,
    title: 'Cobalt Atrium',
    info: 'CIVIC ARCHITECTURE · SINGAPORE',
    images: [cobaltAtriumImg1, cobaltAtriumImg1, cobaltAtriumImg1]
  },
  {
    id: 5,
    title: 'Spectra Residence',
    info: 'HOSPITALITY · MEXICO CITY',
    images: [spectraResidenceImg1, spectraResidenceImg1, spectraResidenceImg1]
  },
  {
    id: 6,
    title: 'Pavilion Sève',
    info: 'FLAGSHIP BOUTIQUE · PARIS',
    images: [pavilionSeveImg1, pavilionSeveImg1, pavilionSeveImg1]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [boxLoadedImages, setBoxLoadedImages] = useState({});
  
  const [projectImageIndexes, setProjectImageIndexes] = useState({ 
    1: { current: 0, prev: 0 }, 
    2: { current: 0, prev: 0 }, 
    3: { current: 0, prev: 0 },
    4: { current: 0, prev: 0 },
    5: { current: 0, prev: 0 },
    6: { current: 0, prev: 0 }
  });

  // Centralized interval to change 1-3 images at a time randomly
  useEffect(() => {
    const interval = setInterval(() => {
      const numToChange = Math.floor(Math.random() * 3) + 1;
      
      setProjectImageIndexes(prev => {
        const newIndexes = { ...prev };
        const availableIds = [1, 2, 3, 4, 5, 6];
        
        for (let i = 0; i < numToChange; i++) {
          if (availableIds.length === 0) break;
          const randomIndex = Math.floor(Math.random() * availableIds.length);
          const randomId = availableIds.splice(randomIndex, 1)[0];
          
          const project = projects.find(p => p.id === randomId);
          const current = prev[randomId]?.current ?? 0;
          const next = (current + 1) % project.images.length;
          
          newIndexes[randomId] = { current: next, prev: current };
        }
        
        return newIndexes;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Escape key listener to close hover preview
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setHoveredProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTileMouseEnter = (project) => {
    // Clear any pending hover triggers
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    const timeout = setTimeout(() => {
      setHoveredProject(project);
    }, 2000); // 2 seconds delay
    setHoverTimeout(timeout);
  };

  const handleTileMouseLeave = () => {
    // If we leave the tile BEFORE the 2s delay, cancel the trigger
    if (hoverTimeout) clearTimeout(hoverTimeout);
  };

  return (
    <div className="py-32 bg-pure-white min-h-screen relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <p className="text-[10px] font-sans tracking-[0.5em] text-matte-black/40 uppercase mb-4">
            Works / Collection
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-matte-black mb-6 tracking-tight">
            Our <span className="italic font-light">Portfolio</span>
          </h1>
          <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/60 max-w-xl uppercase leading-relaxed">
            A curated index of our most prestigious commissions across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map(project => (
            <ProjectTile 
              key={project.id} 
              project={project} 
              currentImageIdx={projectImageIndexes[project.id]?.current ?? 0}
              prevImageIdx={projectImageIndexes[project.id]?.prev ?? 0}
              onMouseEnter={() => handleTileMouseEnter(project)}
              onMouseLeave={handleTileMouseLeave}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Centralized Fixed Overlay for Hover Effect (Stays open until closed manually) */}
      {hoveredProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-matte-black/60 backdrop-blur-sm transition-opacity duration-500 cursor-pointer"
          onClick={() => setHoveredProject(null)} // Close on background click
        >
          <div 
            className="bg-pure-white text-matte-black p-6 flex flex-col items-center gap-6 shadow-2xl max-w-sm cursor-auto animate-scale-in relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button (X) */}
            <button 
              onClick={() => setHoveredProject(null)}
              className="absolute top-4 right-4 z-[110] text-matte-black/40 hover:text-matte-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Top: Heading */}
            <div className="text-center pt-2">
              <h3 className="text-2xl font-serif">{hoveredProject.title}</h3>
            </div>

            {/* Middle: Image Slideshow */}
            <div className="relative w-64 h-80 overflow-hidden shadow-md bg-gray-100">
              {/* Skeleton Shimmer Background */}
              <div className="absolute inset-0 animate-shimmer"></div>

              {hoveredProject.images.map((img, idx) => {
                const currentIdx = projectImageIndexes[hoveredProject.id]?.current ?? 0;
                const prevIdx = projectImageIndexes[hoveredProject.id]?.prev ?? 0;
                
                let posClass = "opacity-0 translate-x-full z-0";
                if (idx === currentIdx) {
                  posClass = "opacity-100 translate-x-0 z-10";
                } else if (idx === prevIdx) {
                  posClass = "opacity-100 -translate-x-full z-0";
                }
                
                const isLoaded = boxLoadedImages[`${hoveredProject.id}_${idx}`];
                
                return (
                  <img 
                    key={idx}
                    src={img} 
                    alt={hoveredProject.title}
                    onLoad={() => setBoxLoadedImages(prev => ({ ...prev, [`${hoveredProject.id}_${idx}`]: true }))}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-in-out ${posClass} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                );
              })}
            </div>

            {/* Bottom: Description & Action */}
            <div className="text-center flex flex-col gap-2">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-matte-black/60">{hoveredProject.info}</p>
              <button 
                onClick={() => {
                  setSelectedProject(hoveredProject);
                  setHoveredProject(null);
                }}
                className="text-[10px] font-sans tracking-[0.2em] text-matte-black hover:text-matte-black/70 uppercase flex items-center gap-2 justify-center mt-2 transition-colors"
              >
                Click to Open Gallery 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

function ProjectTile({ project, currentImageIdx, prevImageIdx, onMouseEnter, onMouseLeave, onClick }) {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <div 
      className="relative aspect-[4/5] overflow-hidden cursor-pointer group bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-500"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Skeleton Shimmer Background */}
      <div className="absolute inset-0 animate-shimmer"></div>

      {/* Images with transition */}
      <div className="w-full h-full relative">
        {project.images.map((img, idx) => {
          let posClass = "opacity-0 translate-x-full z-0";
          if (idx === currentImageIdx) {
            posClass = "opacity-100 translate-x-0 z-10";
          } else if (idx === prevImageIdx) {
            posClass = "opacity-100 -translate-x-full z-0";
          }
          
          const isLoaded = loadedImages[idx];
          
          return (
            <img 
              key={idx}
              src={img} 
              alt={project.title}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [idx]: true }))}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-in-out ${posClass} group-hover:scale-105 transition-transform duration-[2s] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          );
        })}
      </div>
      
      {/* Default Overlay with info (Bottom Left) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-2xl font-serif text-pure-white mb-1">{project.title}</h3>
        <p className="text-xs font-sans tracking-[0.2em] text-pure-white/80 uppercase mb-4">{project.info}</p>
        <span className="text-[10px] font-sans tracking-[0.2em] text-pure-white uppercase flex items-center gap-2">
          View Project 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx(prev => (prev + 1) % project.images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="fixed inset-0 z-[150] bg-matte-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-12">
      <div className="w-full h-full max-w-6xl max-h-[85vh] bg-pure-white flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[160] flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-matte-black bg-white/80 p-2 rounded-full hover:bg-white transition-colors shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="w-full md:w-7/12 h-1/2 md:h-full relative overflow-hidden bg-matte-black">
          {project.images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentImageIdx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-transparent to-transparent flex flex-col justify-end p-12">
            <h2 className="text-4xl md:text-5xl font-serif text-pure-white mb-3">{project.title}</h2>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-pure-white/70">{project.info}</p>
          </div>
        </div>

        <div className="w-full md:w-5/12 h-1/2 md:h-full overflow-y-auto p-8 bg-pure-white flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-sans tracking-[0.2em] text-matte-black/40 uppercase mb-4">Gallery</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`aspect-square overflow-hidden cursor-pointer border-2 transition-colors ${
                    idx === currentImageIdx ? 'border-champagne-gold' : 'border-transparent'
                  } rounded-lg`}
                  onClick={() => setCurrentImageIdx(idx)}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} thumbnail ${idx}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <p className="text-[10px] font-sans tracking-[0.2em] text-matte-black/40 uppercase mb-2">Description</p>
            <p className="text-xs text-matte-black/70 font-sans leading-relaxed">
              This project represents our commitment to luxury and restrained geometry. Every detail was meticulously crafted to ensure a high-end experience that aligns with the brand's identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
