import React from 'react';
import { ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: '1985',
    title: 'Chandoli Wildlife Sanctuary',
    desc: 'Chandoli Wildlife Sanctuary declared to protect the dense forests of the Western Ghats.',
  },
  {
    year: '2004',
    title: 'Chandoli National Park',
    desc: 'Declared a National Park, elevating conservation and biodiversity protection.',
  },
  {
    year: '21 May 2007',
    title: 'Sahyadri Tiger Reserve',
    desc: 'Established under Project Tiger, combining Chandoli National Park and Koyna Wildlife Sanctuary.',
  },
];

export default function History({ setActivePage }) {
  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/history_hero.jpg"
          alt="History of Chandoli — panoramic Sahyadri and fort landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              History of Chandoli
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
              FORESTS · HERITAGE · A LIVING LEGACY
            </p>
          </div>
        </div>
      </div>

      {/* ─── A RICH HERITAGE ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left text */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
              HISTORICAL SIGNIFICANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
              A Rich Heritage
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-4">
              Chandoli's dramatic landscape carries deep historical significance from the Maratha period.
              The formidable Prachitgad Fort stands atop the Sahyadri ridge, once serving as an observation
              post and fortress overseeing the Konkan and Deccan passes during Chhatrapati Shivaji Maharaj's era.
            </p>
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed">
              Surrounded by dense semi-evergreen forests and rugged gorges, the region provided natural
              defense and safe havens throughout centuries of Maratha rule.
            </p>
          </div>

          {/* Right fort image */}
          <div>
            <div className="w-full h-72 sm:h-96 shape-blob-discover overflow-hidden shadow-xl">
              <img
                src="/assets/history_heritage_fort.jpg"
                alt="Prachitgad Fort ruins on Sahyadri escarpment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOURNEY THROUGH TIME ─── */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto border-t border-[#202A20]/10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase">CHRONOLOGY</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173B2A] mt-1">Journey Through Time</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] bg-[#DDB64C]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Circle node */}
                <div className="w-14 h-14 rounded-full bg-[#173B2A] border-4 border-[#F6F0E2] ring-2 ring-[#DDB64C] text-[#DDB64C] flex items-center justify-center font-serif font-bold text-lg shadow-md mb-4">
                  {idx + 1}
                </div>
                <span className="font-serif text-lg font-bold text-[#173B2A] tracking-wide">{item.year}</span>
                <h3 className="text-xs font-bold tracking-widest text-[#687348] uppercase mt-1 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#202A20]/75 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE PARK BANNER ─── */}
      <section className="relative w-full h-60 sm:h-72 overflow-hidden flex items-center justify-center text-white">
        <img
          src="/assets/history_bottom_banner.jpg"
          alt="Protected forest canopy of Chandoli National Park"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase mb-3">About the Park</p>
          <div className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight mb-2">317.67 km²</div>
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/85">
            of protected forests in the heart of the Sahyadris
          </p>
        </div>
      </section>

      {/* ─── EXPLORE SAFARI CTA ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto text-center">
        <p className="text-sm text-[#202A20]/70 mb-5">
          Discover the living legacy of Chandoli through a guided jungle safari.
        </p>
        <button
          onClick={() => setActivePage('safari')}
          className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-2 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md"
        >
          <span>Book a Jungle Safari</span>
          <span className="w-8 h-8 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </button>
      </section>

    </div>
  );
}
