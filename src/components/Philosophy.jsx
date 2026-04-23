export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-pure-white w-full max-w-[2000px] mx-auto border-b border-champagne-gold/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column - Label */}
        <div className="lg:col-span-3">
          <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-matte-black/60 pt-4">
            — FOLIO 03 / PHILOSOPHY
          </p>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-9">
          {/* Main Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-serif leading-[0.9] text-matte-black mb-16 tracking-tight">
            We build <br />
            rooms <span className="italic text-champagne-gold font-light">that</span> <br />
            <span className="italic text-champagne-gold font-light">hold weather.</span>
          </h2>

          {/* Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mb-32">
            <p className="font-sans font-light text-matte-black/80 leading-relaxed text-sm md:text-base">
              Vista Lux is an atelier of seven. We work in pigment before plan — choosing a color long before we draw a wall. The result is architecture that behaves less like a container and more like a slow-burning hour of light.
            </p>
            <p className="font-sans font-light text-matte-black/80 leading-relaxed text-sm md:text-base">
              Our practice moves between cities the way a magazine moves between pages: deliberately, one folio at a time. Each commission is photographed in its first week of occupation and then never again.
            </p>
          </div>

          {/* Details List */}
          <div className="flex flex-col border-t border-matte-black/20">
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-matte-black/10">
              <div className="md:col-span-4 text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-2 md:mb-0">Founded</div>
              <div className="md:col-span-8 font-serif text-xl md:text-2xl text-matte-black">Milan, 2012</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-matte-black/10">
              <div className="md:col-span-4 text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-2 md:mb-0">Studios</div>
              <div className="md:col-span-8 font-serif text-xl md:text-2xl text-matte-black">Milan · Dubai · Tokyo</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-matte-black/10">
              <div className="md:col-span-4 text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-2 md:mb-0">Commissions</div>
              <div className="md:col-span-8 font-serif text-xl md:text-2xl text-matte-black">47 completed</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-matte-black/10">
              <div className="md:col-span-4 text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-2 md:mb-0">Recognition</div>
              <div className="md:col-span-8 font-serif text-xl md:text-2xl text-matte-black">Wallpaper*, AD, Dezeen, Frame</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-matte-black/10">
              <div className="md:col-span-4 text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-2 md:mb-0">Medium</div>
              <div className="md:col-span-8 font-serif text-xl md:text-2xl text-matte-black">Architecture, Interior, Object</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
