import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Compass, ExternalLink, ChevronRight } from 'lucide-react';

export default function Footer({ setActivePage, openEnquiryModal }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home',        label: 'Home' },
    { id: 'land',        label: 'The Land' },
    { id: 'history',     label: 'History & Heritage' },
    { id: 'safari',      label: 'Jungle Safari' },
    { id: 'experiences', label: 'Moments & Flora' },
    { id: 'gallery',     label: 'Photo Gallery' },
    { id: 'contact',     label: 'Contact & Map' },
  ];

  return (
    <footer className="relative bg-[#0F241A] text-white overflow-hidden border-t border-[#DDB64C]/20">
      {/* ═══════════════════════════════════════════
          MAIN FOOTER: 4 RICH COLUMNS
      ═══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-4 sm:pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-7 border-b border-white/10">

          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group mb-4"
              aria-label="Chandoli National Park Home"
            >
              <img
                src="/assets/leaf_icon.svg"
                alt="Chandoli National Park Leaf Logo"
                className="w-10 h-10 object-contain brightness-110 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold text-white tracking-wide">
                  Chandoli National Park
                </span>
                <span className="text-[10px] tracking-[0.22em] font-bold text-[#DDB64C] uppercase">
                  Birdwing Ecotourism
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
              Official ecotourism initiative inside the northern Western Ghats UNESCO World Heritage site and Sahyadri Tiger Reserve. Promoting sustainable forest conservation, community livelihoods, and wildlife observation.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center gap-2.5 text-[11px] text-[#DDB64C] bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-medium text-white/85">Authorized Sahyadri Tiger Reserve Ecotourism</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-[#DDB64C] bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <Compass className="w-4 h-4 shrink-0" />
                <span className="font-medium text-white/85">Strict Leave-No-Trace & Zero Plastic Zone</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#DDB64C] tracking-wide mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-[#DDB64C] transition-colors duration-200 text-left flex items-center gap-1.5 group focus:outline-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DDB64C]/50 group-hover:bg-[#DDB64C] transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Safari Schedules & Gates (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#DDB64C] tracking-wide mb-4">
              Safari Timings & Entry
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/8">
                <Clock className="w-4 h-4 text-[#DDB64C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-[11px] uppercase tracking-wider">Morning Safari Slot</span>
                  <p className="text-white/70 text-xs">06:00 AM – 10:00 AM (Best for Birds & Predators)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/8">
                <Clock className="w-4 h-4 text-[#DDB64C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-[11px] uppercase tracking-wider">Evening Safari Slot</span>
                  <p className="text-white/70 text-xs">03:00 PM – 06:30 PM (Golden Hour Landscapes)</p>
                </div>
              </div>

              <p className="text-[11px] text-white/60 leading-relaxed">
                * Safaris operate via open 4×4 Gypsy. Advance permits and valid Government photo ID are mandatory for park entry.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#DDB64C] tracking-wide mb-4">
              Direct Helpdesk
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#DDB64C]" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider block">Lead Naturalist</span>
                  <span className="font-semibold text-white">Pranav Mahajan</span>
                  <a href="tel:9657493161" className="block text-white hover:text-[#DDB64C] font-mono text-sm mt-0.5 font-bold transition-colors">
                    9657493161
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DDB64C]" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider block">Base Camp</span>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Chandoli, Manadur, Taluka Shirala, Sangli District, Maharashtra 415408
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#DDB64C] font-semibold hover:underline mt-1"
                  >
                    <span>Get GPS Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM LEGAL & SOCIAL ROW (Tight, no extra gaps)
        ═══════════════════════════════════════════ */}
        <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70 pr-0 sm:pr-24 lg:pr-28">
          <p className="tracking-normal whitespace-nowrap text-center sm:text-left">
            © {new Date().getFullYear()} Chandoli National Park · Birdwing Ecotourism | Sahyadri Tiger Reserve, Western Ghats, Maharashtra
          </p>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919657493161"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <a
              href="tel:9657493161"
              aria-label="Direct Call"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#DDB64C] hover:text-[#173B2A] hover:border-[#DDB64C] transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/20 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
