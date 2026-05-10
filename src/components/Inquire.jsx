import React, { useState } from 'react';

export default function Inquire() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Name is required
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }

    // Validation: At least Email or Phone is required
    if (!formData.email.trim() && !formData.phone.trim()) {
      setError('Please provide at least an email address or a phone number.');
      return;
    }

    // Validation: Comfortable time is required
    if (!formData.time.trim()) {
      setError('Please specify a comfortable time to contact.');
      return;
    }

    // If valid, proceed
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Here we would integrate with EmailJS or a backend
    // For now, we simulate success
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-32 bg-pure-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-matte-black mb-6">Thank You.</h1>
          <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/60 uppercase leading-relaxed mb-8">
            We have received your inquiry. A curator from our atelier will contact you at your preferred time.
          </p>
          <span className="text-[10px] font-sans tracking-[0.2em] text-champagne-gold uppercase">
            Vista Lux / Inquiry Received
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-pure-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Intro */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-sans tracking-[0.5em] text-matte-black/40 uppercase mb-4">
              Inquire / Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-matte-black mb-6 tracking-tight">
              Begin the <span className="italic font-light">Dialogue</span>
            </h1>
            <p className="text-sm md:text-base font-sans tracking-widest text-matte-black/60 uppercase leading-relaxed mb-12">
              We accept a limited number of commissions each year to ensure absolute dedication to every project.
            </p>
            
            <div className="hidden lg:block border-t border-matte-black/10 pt-8">
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 mb-2">Global Studios</p>
              <p className="text-sm font-sans font-light text-matte-black/60">Milan · Dubai · Tokyo</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Name */}
              <div className="border-b border-matte-black/20 pb-4 focus-within:border-champagne-gold transition-colors">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 block mb-2">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none outline-none font-serif text-xl md:text-2xl text-matte-black placeholder-matte-black/20"
                  placeholder="Your full name"
                />
              </div>

              {/* Email & Phone (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-matte-black/20 pb-4 focus-within:border-champagne-gold transition-colors">
                  <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 block mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none outline-none font-serif text-xl md:text-2xl text-matte-black placeholder-matte-black/20"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="border-b border-matte-black/20 pb-4 focus-within:border-champagne-gold transition-colors">
                  <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 block mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none outline-none font-serif text-xl md:text-2xl text-matte-black placeholder-matte-black/20"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              {/* Comfortable Time */}
              <div className="border-b border-matte-black/20 pb-4 focus-within:border-champagne-gold transition-colors">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 block mb-2">Comfortable Time to Contact *</label>
                <input 
                  type="text" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none outline-none font-serif text-xl md:text-2xl text-matte-black placeholder-matte-black/20"
                  placeholder="e.g. Weekdays afternoon, 2-4 PM"
                />
              </div>

              {/* Message */}
              <div className="border-b border-matte-black/20 pb-4 focus-within:border-champagne-gold transition-colors">
                <label className="text-[10px] font-sans tracking-[0.2em] uppercase text-matte-black/40 block mb-2">Project Brief (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-transparent border-none outline-none font-serif text-xl md:text-2xl text-matte-black placeholder-matte-black/20 resize-none"
                  placeholder="Tell us about your space..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-xs font-sans tracking-[0.1em] text-red-500 uppercase">{error}</p>
              )}

              {/* Submit Button */}
              <div className="flex justify-end mt-4">
                <button 
                  type="submit"
                  className="group flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-matte-black hover:text-champagne-gold transition-colors"
                >
                  Submit Inquiry
                  <span className="w-12 h-px bg-matte-black group-hover:bg-champagne-gold transition-colors"></span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

              <p className="text-[10px] font-sans tracking-[0.1em] text-matte-black/40 uppercase text-right">
                * Required: Name, Time, and either Email or Phone.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
