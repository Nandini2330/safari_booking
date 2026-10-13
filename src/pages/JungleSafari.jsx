import React from 'react';
import { Clock, Car, Users, Info, ChevronRight } from 'lucide-react';

const infoItems = [
  { icon: Clock, title: 'Safari Timings',     desc: 'Contact us for current timings.' },
  { icon: Car,   title: 'Safari Options',     desc: 'Gypsy / Guided Safari' },
  { icon: Users, title: 'Booking',            desc: 'Contact for booking details.' },
  { icon: Info,  title: 'Visitor Guidelines', desc: 'Essential information before your visit.' },
];

export default function JungleSafari({ openEnquiryModal }) {
  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/safari_hero.jpg"
          alt="Jungle safari jeep in Chandoli forest"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Jungle Safari
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
              EXPLORE · DISCOVER · EXPERIENCE
            </p>
          </div>
        </div>
      </div>

      {/* ─── EXPERIENCE CHANDOLI ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left text */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
              GUIDED WILDLIFE EXPEDITIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
              Experience Chandoli
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-8 max-w-md">
              Drive through lush forests, scenic trails and wildlife habitats with Birdwing Ecotourism.
              Our experienced naturalists navigate the rugged terrain of the Sahyadri Tiger Reserve,
              introducing you to rare endemic birds, unique flora, and untamed wildlife.
            </p>
            <button
              onClick={openEnquiryModal}
              className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md"
            >
              <span>Enquire for Safari</span>
              <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>
          </div>

          {/* Right arch image */}
          <div>
            <div className="w-full h-72 sm:h-96 shape-arch-tall overflow-hidden shadow-xl">
              <img
                src="/assets/safari_arch.jpg"
                alt="Green forest canopy arch road in Chandoli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 INFO ITEMS ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto border-t border-[#202A20]/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              onClick={openEnquiryModal}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/50 hover:bg-white/90 border border-[#202A20]/6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center mb-4 group-hover:bg-[#173B2A] group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#173B2A] mb-1">{title}</h3>
              <p className="text-xs text-[#202A20]/65 leading-relaxed">{desc}</p>
              <span className="mt-3 text-[10px] font-bold text-[#687348] tracking-wider uppercase group-hover:underline">
                Click to enquire →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PANORAMIC BOTTOM BANNER ─── */}
      <section className="relative w-full h-56 sm:h-72 overflow-hidden">
        <img
          src="/assets/safari_bottom_banner.jpg"
          alt="Sahyadri hills and Chandoli lake waters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-7 text-center z-10">
          <p className="text-white text-[10px] sm:text-xs tracking-[0.22em] font-semibold uppercase drop-shadow">
            Sahyadri Tiger Reserve · Chandoli National Park · Maharashtra
          </p>
        </div>
      </section>

    </div>
  );
}
