import React from 'react';
import { User, Phone, MapPin, MessageCircle, Navigation, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const mapLink = 'https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9';

  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/contact_hero.jpg"
          alt="Ecotourism gazebo viewpoint overlooking Chandoli valley at sunset"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
              BIRDWING ECOTOURISM
            </p>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Botanical watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 bottom-8 w-32 opacity-25 pointer-events-none select-none hidden lg:block scale-x-[-1]"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ── Left: Details + Buttons ── */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2 block">DIRECT ASSISTANCE</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B2A] tracking-tight leading-tight mb-3">
                  Plan Your Safari with Local Experts
                </h2>
                <p className="text-sm text-[#202A20]/75 leading-relaxed max-w-md">
                  Reach out directly to Birdwing Ecotourism for guidance on gate entries, best wildlife sighting seasons,
                  naturalist bookings, and stay arrangements near Chandoli.
                </p>
              </div>

              {/* Sage-green organic card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#738258] text-white shadow-xl flex flex-col gap-5 relative overflow-hidden hover-lift transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/65 uppercase tracking-wider block">Lead Ecotourism Guide</span>
                    <span className="text-base font-bold tracking-wide">Pranav Mahajan</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/65 uppercase tracking-wider block">Direct Contact</span>
                    <a href="tel:9657493161" className="text-base font-bold tracking-wide hover:underline">9657493161</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/65 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-medium leading-relaxed">
                      Chandoli, Manadur, Taluka Shirala,<br />Sangli, Maharashtra
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons 2×2 grid */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:9657493161"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#173B2A] text-white text-xs font-semibold tracking-wider hover:bg-[#263D25] shadow hover-lift transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#DDB64C]" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919657493161"
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#25D366] text-white text-xs font-semibold tracking-wider hover:bg-[#1ebe5a] shadow hover-lift transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={mapLink}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#DDB64C] text-[#173B2A] text-xs font-semibold tracking-wider hover:bg-[#c9a43f] shadow transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={mapLink}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#A5AD8A]/30 hover:bg-[#A5AD8A]/50 text-[#202A20] text-xs font-semibold tracking-wider border border-[#A5AD8A]/40 shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#173B2A]" />
                  <span>Share Feedback</span>
                </a>
              </div>
            </div>

            {/* ── Right: Map ── */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-[#202A20]/8 flex flex-col">
              <div className="relative w-full h-72 sm:h-96 bg-stone-100">
                <iframe
                  title="Chandoli National Park — Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122247.74794212527!2d73.75471134999999!3d17.14728565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17e8105d15c1d%3A0xbcfc1186ce6504a7!2sChandoli%20National%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                {/* Open in Google Maps button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href={mapLink}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173B2A] text-white text-xs font-semibold tracking-wider hover:bg-[#263D25] shadow-xl transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#DDB64C]" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              <div className="p-5 bg-[#FAF7F0] flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#173B2A]">Chandoli National Park Entrance Gate</h4>
                  <p className="text-[11px] text-[#202A20]/60 mt-0.5">Taluka Shirala, District Sangli, Maharashtra</p>
                </div>
                <a
                  href={mapLink}
                  target="_blank" rel="noreferrer"
                  className="text-[11px] font-bold text-[#687348] hover:underline whitespace-nowrap"
                >
                  View Route →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
