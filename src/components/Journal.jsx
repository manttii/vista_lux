import React from 'react';

const articles = [
  {
    id: 1,
    date: 'OCTOBER 2025',
    title: 'The Silent Rebellion of Light',
    category: 'ESSAY',
    snippet: 'How we use natural light as a building material, less as a source of illumination and more as a slow-burning hour of atmosphere.'
  },
  {
    id: 2,
    date: 'AUGUST 2025',
    title: 'Material Honesty in the Digital Age',
    category: 'INTERVIEW',
    snippet: 'A conversation with our lead architect on why we choose pigments before plans and the return to tactile luxury.'
  },
  {
    id: 3,
    date: 'MAY 2025',
    title: 'The Geometry of Silence',
    category: 'CASE STUDY',
    snippet: 'An analysis of the acoustic design in Corridor No. IX and how we created a quiet oasis in the heart of Tokyo.'
  }
];

export default function Journal() {
  return (
    <div className="pt-40 pb-32 bg-pure-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <p className="text-[10px] font-sans tracking-[0.5em] text-matte-black/40 uppercase mb-4">
            Thoughts / Journal
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-matte-black mb-6 tracking-tight">
            The <span className="italic font-light">Journal</span>
          </h1>
          <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/60 max-w-xl uppercase leading-relaxed">
            A collection of essays, interviews, and observations on space and light.
          </p>
        </div>

        {/* Feature Article */}
        <div className="mb-24 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-matte-black/10 pb-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-sans tracking-[0.2em] text-champagne-gold uppercase">{articles[0].category}</p>
              <p className="text-[10px] font-sans tracking-[0.1em] text-matte-black/40 mt-1">{articles[0].date}</p>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-4xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-500 mb-4">
                {articles[0].title}
              </h2>
              <p className="text-sm text-matte-black/60 font-sans leading-relaxed">
                {articles[0].snippet}
              </p>
            </div>
            <div className="lg:col-span-3 flex justify-end">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-matte-black/60 group-hover:text-matte-black transition-colors flex items-center gap-2">
                Read Essay 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* List of Articles */}
        <div className="flex flex-col gap-12">
          {articles.slice(1).map(article => (
            <div key={article.id} className="group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-matte-black/10 pb-12">
                <div className="lg:col-span-3">
                  <p className="text-xs font-sans tracking-[0.2em] text-champagne-gold uppercase">{article.category}</p>
                  <p className="text-[10px] font-sans tracking-[0.1em] text-matte-black/40 mt-1">{article.date}</p>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-2xl font-serif text-matte-black group-hover:text-champagne-gold transition-colors duration-500 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-matte-black/60 font-sans leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
                <div className="lg:col-span-3 flex justify-end">
                  <span className="text-xs font-sans tracking-[0.2em] uppercase text-matte-black/60 group-hover:text-matte-black transition-colors flex items-center gap-2">
                    Read More 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
