import React from 'react';
import { ChevronRight, ShieldCheck, Landmark, Scroll, Compass, Phone } from 'lucide-react';

const milestones = [
  {
    year: '1985',
    title: 'Chandoli Wildlife Sanctuary',
    desc: 'Notified as a Wildlife Sanctuary covering 308.97 km² to protect pristine Western Ghats rainforests and catchments.',
  },
  {
    year: '2004',
    title: 'Chandoli National Park',
    desc: 'Elevated to National Park status with strict core preservation laws and voluntary tribal settlement rehabilitation.',
  },
  {
    year: '21 May 2007',
    title: 'Sahyadri Tiger Reserve',
    desc: 'Combined with Koyna Wildlife Sanctuary under Project Tiger to create Maharashtra’s premier high-altitude tiger reserve.',
  },
  {
    year: '2012',
    title: 'UNESCO World Heritage Site',
    desc: 'Inscribed by UNESCO as part of the Western Ghats natural serial site for exceptional biodiversity and endemism.',
  },
];

export default function History({ setActivePage, openEnquiryModal }) {
  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/history_hero.jpg"
          alt="History of Chandoli — panoramic Sahyadri and fort landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase block mb-2">
              MARATHA EMPIRE · HERITAGE · SACRED FORESTS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              History & Heritage
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
              Centuries of Maratha valour, ancient trade corridors, and an inspiring journey of modern tiger conservation.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1: A RICH HERITAGE (Warm Sandstone #EFE7D8) ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#EFE7D8] border-b border-[#202A20]/8 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left text */}
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                MARATHA LEGACY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
                Guardians of the Ghats
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
              <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-4">
                Chandoli’s dramatic ridges and mist-covered passes served as vital strategic strongholds during the reign of <span className="font-semibold text-[#173B2A]">Chhatrapati Shivaji Maharaj</span> and later <span className="font-semibold text-[#173B2A]">Chhatrapati Sambhaji Maharaj</span> in the late 17th century.
              </p>
              <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-6">
                The rugged Sahyadri escarpments allowed Maratha garrisons to monitor troop movements between the Deccan plateau and the coastal Konkan kingdom, with natural rock fortifications and dense evergreen thickets providing impregnable camouflage.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActivePage('safari')}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#263D25] shadow-md transition-all active:scale-95"
                >
                  <span>Explore Safari Trails</span>
                  <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right fort image */}
            <div>
              <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group hover-lift">
                <img
                  src="/assets/history_heritage_fort.jpg"
                  alt="Prachitgad Fort ruins on Sahyadri escarpment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs text-white/95 font-medium tracking-wide">
                    Prachitgad Fort Citadel · 1,044m Elevation Overlooking Konkan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CONSERVATION TIMELINE (Soft Sage Mist #E8EFE6) ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#E8EFE6] border-b border-[#202A20]/8 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase block mb-1">
              CHRONOLOGY OF PROTECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A]">
              Journey Through Time
            </h2>
            <span className="w-12 h-[3px] bg-[#DDB64C] rounded mx-auto mt-3 block" />
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#202A20]/6 flex flex-col hover-lift transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#173B2A] tracking-tight">
                    {item.year}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#173B2A]/10 text-[#173B2A] font-bold text-xs flex items-center justify-center font-mono">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#173B2A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#202A20]/75 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <span className="w-8 h-[2px] bg-[#DDB64C] mt-4 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ABOUT THE PARK BANNER ─── */}
      <section className="relative w-full h-64 sm:h-80 overflow-hidden flex items-center justify-center text-white">
        <img
          src="/assets/history_bottom_banner.jpg"
          alt="Protected forest canopy of Chandoli National Park"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase mb-2">
            CONSERVATION SANCTUARY
          </p>
          <div className="font-serif text-5xl sm:text-7xl font-bold text-white tracking-tight mb-3">
            317.67 km²
          </div>
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/90">
            of strictly protected rainforests, plateau saddas & river basins
          </p>
        </div>
      </section>

      {/* ─── SECTION 4: BOOKING CTA BANNER ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="rounded-3xl bg-[#173B2A] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase block mb-2">
              DISCOVER LIVING HISTORY
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-2">
              Walk the Historic Sahyadri Trails
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Explore Prachitgad viewpoints, historical trade passes, and ancient forest valleys with local naturalists.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={openEnquiryModal}
              className="px-6 py-3.5 rounded-full bg-[#DDB64C] hover:bg-[#CBA239] text-[#173B2A] text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
            >
              🐾 BOOK A SAFARI ONLINE
            </button>
            <a
              href="tel:9657493161"
              className="px-5 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DDB64C]" />
              <span>Call: 9657493161</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
