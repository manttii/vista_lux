export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-pure-white w-full max-w-[2000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-matte-black/60 pt-4 mb-24">
            — FOLIO 04 / CORRESPONDENCE
          </p>

          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-[0.9] text-matte-black mb-12 tracking-tight">
            Begin a <br />
            <span className="italic">commission.</span>
          </h2>

          <p className="font-sans font-light text-matte-black/80 leading-relaxed text-sm md:text-base max-w-sm mb-32">
            We review every letter in person. Replies are written by hand, usually within ten days. Urgent matters may be addressed to <span className="text-champagne-gold hover:text-matte-black transition-colors cursor-pointer">studio@vistalux.co</span>.
          </p>

          <div className="flex flex-col gap-6 w-full max-w-sm border-t border-matte-black/10 pt-8 mt-auto">
            <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase">
              <span className="text-matte-black/60">Milan - HQ</span>
              <span className="font-serif normal-case text-base tracking-normal">Via Brera 14</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase">
              <span className="text-matte-black/60">Dubai</span>
              <span className="font-serif normal-case text-base tracking-normal">DIFC · Gate Village 3</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.2em] uppercase">
              <span className="text-matte-black/60">Tokyo</span>
              <span className="font-serif normal-case text-base tracking-normal">Aoyama 5-1-1</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex flex-col pt-12 lg:pt-32 lg:pl-12">
          <form className="flex flex-col gap-16">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">
                  01 - NAME
                </label>
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full border-b border-matte-black/20 pb-4 text-sm font-sans font-light bg-transparent focus:outline-none focus:border-matte-black transition-colors placeholder:text-matte-black/40"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">
                  02 - EMAIL
                </label>
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  className="w-full border-b border-matte-black/20 pb-4 text-sm font-sans font-light bg-transparent focus:outline-none focus:border-matte-black transition-colors placeholder:text-matte-black/40"
                />
              </div>
            </div>

            {/* Row 2: Nature of Commission */}
            <div className="flex flex-col">
              <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">
                03 - NATURE OF COMMISSION
              </label>
              <div className="flex flex-wrap gap-4">
                {['RESIDENTIAL', 'HOSPITALITY', 'RETAIL', 'CIVIC', 'OBJECT / FURNITURE'].map((btn) => (
                  <button 
                    key={btn}
                    type="button"
                    className="border border-matte-black/20 px-4 py-2 text-[10px] font-sans tracking-[0.2em] uppercase hover:bg-matte-black hover:text-pure-white transition-colors duration-300"
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col">
              <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60 mb-6">
                04 - TELL US OF THE PLACE
              </label>
              <textarea 
                rows="4"
                placeholder="Location, square meters, the weather you hope it holds..." 
                className="w-full border-b border-matte-black/20 pb-4 text-sm font-sans font-light bg-transparent focus:outline-none focus:border-matte-black transition-colors placeholder:text-matte-black/40 resize-none"
              ></textarea>
            </div>

            {/* Submit Row */}
            <div className="flex justify-between items-center mt-8 border-t border-matte-black/10 pt-12">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/60">
                WE REPLY BY HAND - WITHIN TEN DAYS
              </span>
              <button 
                type="submit"
                className="bg-matte-black text-pure-white px-8 py-4 text-[10px] font-sans tracking-[0.2em] uppercase hover:bg-champagne-gold hover:text-matte-black transition-colors duration-300 flex items-center gap-4"
              >
                SEND LETTER <span className="text-sm">→</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
