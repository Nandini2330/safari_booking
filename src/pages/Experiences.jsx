import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Birdwatching',
    category: 'Birds',
    image: '/assets/exp_birdwatching.jpg',
    desc: 'Spot rare Western Ghats endemics including the Malabar Pied Hornbill, Indian Roller, and Crimson-backed Sunbird.',
    page: 'gallery',
  },
  {
    title: 'Wildflowers',
    category: 'Wildflowers',
    image: '/assets/exp_wildflowers.jpg',
    desc: 'Witness seasonal floral carpets like the mass blooming of Karvy (Strobilanthes callosa) and rare terrestrial orchids.',
    page: 'gallery',
  },
  {
    title: 'Wildlife',
    category: 'Wildlife',
    image: '/assets/exp_wildlife.jpg',
    desc: 'Track leopards, Indian Bison (Gaur), sambar deer, barking deer and elusive nocturnal creatures.',
    page: 'gallery',
  },
  {
    title: 'Nature Walks',
    category: 'Nature Walks',
    image: '/assets/exp_walks.jpg',
    desc: 'Guided interpretive walks along ancient canopy corridors, listening to the symphony of the undisturbed forest.',
    page: 'safari',
  },
  {
    title: 'Landscapes',
    category: 'Landscapes',
    image: '/assets/exp_landscapes.jpg',
    desc: 'Marvel at misty valleys, sheer basalt escarpments, and crystal-clear reservoir backwaters stretching to the horizon.',
    page: 'gallery',
  },
  {
    title: 'Eco Tourism',
    category: 'Eco Tourism',
    image: '/assets/exp_ecotourism.jpg',
    desc: 'Community-led conservation, responsible exploration, and immersive nature observation with Birdwing Ecotourism.',
    page: 'contact',
  },
];

export default function Experiences({ setActivePage, openEnquiryModal, setLightboxImages, setLightboxIndex }) {

  const handleCardClick = (idx) => {
    setLightboxImages(experiences.map(e => ({ src: e.image, title: e.title, category: e.category })));
    setLightboxIndex(idx);
  };

  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-end pb-0">
        <img
          src="/assets/experiences_hero.jpg"
          alt="Vibrant Chandoli wildflower macro close-up"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 pb-14">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
            Nature<br />Experiences
          </h1>
          <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
            BIRDS · WILDLIFE · WILDFLOWERS · LANDSCAPES
          </p>
        </div>
      </div>

      {/* ─── 6 EXPERIENCE CARDS ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover-lift transition-all duration-300 border border-[#202A20]/5 flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#173B2A] flex items-center justify-center shadow group-hover:bg-[#173B2A] group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4 stroke-[2]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-[#173B2A] group-hover:text-[#687348] transition-colors mb-1">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#202A20]/65 leading-relaxed flex-1">{exp.desc}</p>
                <div className="mt-4 pt-3 border-t border-[#202A20]/6 flex items-center justify-between text-[10px] font-bold text-[#687348] tracking-widest uppercase">
                  <span>View Images</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTA band ─── */}
        <div className="mt-16 px-8 sm:px-12 py-10 rounded-3xl bg-[#173B2A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase">CUSTOM GUIDED VISITS</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">Want a Tailored Nature Experience?</h3>
            <p className="text-xs text-white/70 mt-1">Pranav Mahajan and Birdwing Ecotourism arrange specialised birdwatching and photography circuits.</p>
          </div>
          <button
            onClick={openEnquiryModal}
            className="px-6 py-3 rounded-full bg-[#DDB64C] text-[#173B2A] text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#c9a43f] transition-all shadow-md whitespace-nowrap"
          >
            Enquire With Us
          </button>
        </div>
      </section>

    </div>
  );
}
