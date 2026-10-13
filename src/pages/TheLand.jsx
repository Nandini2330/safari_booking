import React from 'react';
import { ChevronRight, Mountain, Droplets, Compass, ShieldCheck } from 'lucide-react';

const highlights = [
  { metric: '317.67 km²',           title: 'Western Ghats Biodiversity',    desc: 'Part of the UNESCO World Heritage Western Ghats chain, with rare evergreen and semi-evergreen forest patches.' },
  { metric: 'Warna River Basin',     title: 'Water Catchments & Reservoir',  desc: 'The park serves as the pristine catchment for the Warna River and the magnificent Vasant Sagar reservoir.' },
  { metric: '589m – 1044m Altitude', title: 'Elevations & Flat-top Saddles', desc: 'Distinct Sahyadri basalt plateaus, known as Saddas, blanketed with endemic monsoon wildflowers.' },
  { metric: 'Sahyadri Tiger Reserve','title': 'Tiger Reserve Corridor',       desc: 'Vital wildlife dispersal corridor connecting Koyna Sanctuary to Radhanagari and the southern Ghats.' },
];

export default function TheLand({ setActivePage, openEnquiryModal }) {
  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/theland_hero.jpg"
          alt="The Land of Chandoli National Park — Sahyadri hills and reservoir"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              The Land
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
              RUGGED SAHYADRI RIDGES · SACRED FORESTS · RIVER HEADWATERS
            </p>
          </div>
        </div>
      </div>

      {/* ─── OVERVIEW ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">PHYSICAL GEOGRAPHY</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
              Heart of the Sahyadri Tiger Reserve
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-4">
              Spanning across four districts of Maharashtra — Sangli, Satara, Kolhapur, and Ratnagiri —
              Chandoli National Park is one of the most untouched wilderness areas in the northern Western Ghats.
            </p>
            <p className="text-sm sm:text-base text-[#202A20]/70 leading-relaxed mb-8">
              The undulating terrain features steep volcanic cliffs, dense moist-deciduous forest valleys,
              and high-altitude rocky plateaus known as 'Saddas'. During the monsoon, these plateaus transform
              into kaleidoscopic blankets of blooming wildflowers.
            </p>
            <button
              onClick={() => setActivePage('safari')}
              className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#263D25] shadow-md transition-all"
            >
              <span>Explore Safari Circuits</span>
              <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>
          </div>

          <div>
            <div className="w-full h-80 sm:h-96 shape-organic-lake overflow-hidden shadow-xl">
              <img
                src="/assets/nature_large_landscape.jpg"
                alt="Panoramic view of Chandoli hills and reservoir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ECOLOGICAL HIGHLIGHTS ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto border-t border-[#202A20]/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white shadow-md border border-[#202A20]/5 flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#687348] mb-2">{item.metric}</span>
              <h3 className="font-serif text-lg font-bold text-[#173B2A] mb-2">{item.title}</h3>
              <p className="text-xs text-[#202A20]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
