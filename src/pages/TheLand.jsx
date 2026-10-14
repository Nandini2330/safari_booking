import React from 'react';
import { ChevronRight, Mountain, Droplets, Compass, ShieldCheck, TreePine, Trees, Wind, Phone, Sparkles } from 'lucide-react';

const ecosystems = [
  {
    title: 'High-Altitude Basalt Saddas',
    tag: 'FLAT-TOP PLATEAUS',
    image: '/assets/card_wildflowers.jpg',
    elevation: '850m – 1044m',
    desc: 'Rocky laterite plateaus devoid of tall trees that erupt into kaleidoscopic blankets of endemic wildflowers and rare Karvy blossoms during the monsoon.',
  },
  {
    title: 'Vasant Sagar Reservoir Basin',
    tag: 'PERENNIAL CATCHMENT',
    image: '/assets/gallery_lake.jpg',
    elevation: '589m Elevation',
    desc: 'The pristine catchment of the Warna River forming a vast freshwater inland sea flanked by emerald rainforest ridges and mist-covered peaks.',
  },
  {
    title: 'Moist Semi-Evergreen Valleys',
    tag: 'WILDLIFE CORRIDOR',
    image: '/assets/forest_jeep.jpg',
    elevation: '600m – 900m',
    desc: 'Dense ancient canopies sheltering Bengal Tigers, Indian Leopards, giant squirrels, and herds of magnificent Indian Gaur (Bison).',
  },
  {
    title: 'Sahyadri Crest Escarpments',
    tag: 'VOLCANIC RIDGES',
    image: '/assets/history_prachitgad.jpg',
    elevation: 'Up to 1044m',
    desc: 'Dramatic sheer volcanic cliffs dropping thousands of feet into the Konkan plains, guarding ancient trade passes and the historic Prachitgad Fort.',
  },
];

const highlights = [
  { metric: '317.67 km²',           title: 'Protected Wilderness',        desc: 'Core sanctuary territory in the northern Western Ghats UNESCO World Heritage chain with virgin evergreen forest patches.' },
  { metric: 'Warna River Basin',     title: 'Perennial Headwaters',        desc: 'Critical water security lifeline feeding agricultural valleys, reservoirs, and perennial forest cascades across Maharashtra.' },
  { metric: '589m – 1044m Altitude', title: 'Topographical Gradient',     desc: 'Dramatic elevation rise from river valleys to wind-swept Saddas, creating varied microclimates and habitats.' },
  { metric: 'Sahyadri Tiger Reserve',title: 'Continuous Eco-Corridor',     desc: 'Vital wildlife dispersal route connecting Koyna Wildlife Sanctuary to Radhanagari and the Karnataka rainforests.' },
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase block mb-2">
              NORTHERN WESTERN GHATS · UNESCO HERITAGE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              The Land
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
              Rugged Sahyadri ridges, sacred evergreen groves, mist-bathed plateaus, and pristine river headwaters.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1: PHYSICAL GEOGRAPHY (Warm Cream #F6F0E2) ─── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto overflow-hidden">
        {/* Subtle botanical watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-10 w-28 sm:w-36 opacity-25 pointer-events-none select-none hidden md:block"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
              PHYSICAL GEOGRAPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
              Heart of the Sahyadri Tiger Reserve
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-4">
              Spanning across four districts of southern Maharashtra — Sangli, Satara, Kolhapur, and Ratnagiri —
              Chandoli National Park forms one of the most contiguous and untamed wilderness sanctuaries in the northern Western Ghats.
            </p>
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-6">
              The landscape is defined by rugged Deccan volcanic geology: sheer basalt drop-offs, deep moist-deciduous forest valleys,
              and expansive flat plateaus known locally as <span className="font-semibold text-[#173B2A]">'Saddas'</span> that transform into floral sanctuaries during the monsoon season.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('safari')}
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#263D25] shadow-md transition-all active:scale-95"
              >
                <span>Explore Safari Circuits</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
              <button
                onClick={openEnquiryModal}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#173B2A]/30 text-[#173B2A] text-xs sm:text-sm font-bold hover:bg-[#173B2A]/5 transition-all"
              >
                <span>Book Guided Drive</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-80 sm:h-96 shape-curved-left overflow-hidden shadow-2xl border-4 border-white relative group hover-lift">
              <img
                src="/assets/nature_large_landscape.jpg"
                alt="Panoramic view of Chandoli hills and reservoir"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-white/95 font-medium tracking-wide">
                  Vasant Sagar Reservoir Catchment & Sahyadri Peaks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: DISTINCT ECOSYSTEM ZONES (Soft Sage Mist #E8EFE6) ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#E8EFE6] border-y border-[#202A20]/8 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase block mb-2">
              NATURAL DIVERSITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] tracking-tight leading-tight mb-3">
              Four Distinct Ecosystems
            </h2>
            <span className="w-12 h-[3px] bg-[#DDB64C] rounded mx-auto mb-4 block" />
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed">
              From river catchments to high wind-swept saddles, Chandoli harbors microclimates that nurture endangered endemic species found nowhere else on earth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystems.map((eco, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover-lift transition-all duration-300 border border-white flex flex-col group"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-200">
                  <img
                    src={eco.image}
                    alt={eco.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur text-[10px] font-bold text-[#DDB64C] tracking-wider uppercase">
                    {eco.tag}
                  </div>
                  <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/50 text-[10px] text-white/90 font-mono">
                    {eco.elevation}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#173B2A] mb-2 leading-snug">
                    {eco.title}
                  </h3>
                  <p className="text-xs text-[#202A20]/70 leading-relaxed flex-1">
                    {eco.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ECOLOGICAL HIGHLIGHTS (Warm Cream #F6F0E2) ─── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase block mb-1">
            KEY METRICS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B2A]">
            Sanctuary Dimensions & Geography
          </h2>
          <span className="w-10 h-[3px] bg-[#DDB64C] rounded mx-auto mt-3 block" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white shadow-md border border-[#202A20]/8 flex flex-col hover-lift transition-all duration-300"
            >
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#DDB64C] mb-2 block font-mono">
                {item.metric}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#173B2A] mb-2">{item.title}</h3>
              <p className="text-xs text-[#202A20]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: BOOKING CTA BANNER ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="rounded-3xl bg-[#173B2A] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src="/assets/botanical_branch.svg"
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-0 w-48 opacity-15 pointer-events-none select-none scale-x-[-1]"
          />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase block mb-2">
              PLAN YOUR JOURNEY
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight mb-2">
              Experience the Living Sahyadri Wilderness
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Book your 4×4 open Gypsy expedition with Birdwing Ecotourism. Certified guides, forest permits, and memorable wildlife encounters.
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
