import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: 'Birdwatching',
    category: 'Birdwatching',
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

export default function Experiences({ setActivePage, openEnquiryModal, setLightboxImages, setLightboxIndex, initialFilter = 'All' }) {
  const [activeFilter, setActiveFilter] = React.useState(initialFilter || 'All');

  React.useEffect(() => {
    if (initialFilter) {
      setActiveFilter(initialFilter);
    }
  }, [initialFilter]);

  const categories = ['All', 'Wildflowers', 'Birdwatching', 'Wildlife', 'Landscapes', 'Nature Walks', 'Eco Tourism'];

  const filteredExperiences = activeFilter === 'All'
    ? experiences
    : experiences.filter(e => e.category.toLowerCase() === activeFilter.toLowerCase() || e.title.toLowerCase() === activeFilter.toLowerCase());

  const handleCardClick = (idx) => {
    setLightboxImages(filteredExperiences.map(e => ({ src: e.image, title: e.title, category: e.category })));
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

      {/* ─── 6 EXPERIENCE CARDS WITH CATEGORY FILTER TABS ─── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-[#173B2A] text-white shadow-md scale-105'
                    : 'bg-white text-[#202A20]/75 hover:text-[#173B2A] hover:bg-stone-50 border border-[#202A20]/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredExperiences.map((exp, idx) => (
            <div
              key={exp.title}
              onClick={() => handleCardClick(idx)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover-lift transition-all duration-300 border border-[#202A20]/5 flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#173B2A] flex items-center justify-center shadow group-hover:bg-[#173B2A] group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4 stroke-[2]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-[#687348] tracking-widest uppercase mb-1">
                  {exp.category}
                </span>
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

        {/* ─── SEASONAL SIGHTING CALENDAR ─── */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#E8EFE6] border border-[#202A20]/8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-bold tracking-[0.28em] text-[#687348] uppercase block mb-1">
              BEST TIME TO VISIT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173B2A]">
              Seasonal Wildlife Calendar
            </h3>
            <span className="w-10 h-[2.5px] bg-[#DDB64C] rounded mx-auto mt-2.5 block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white shadow-sm border border-[#202A20]/5">
              <span className="text-[10px] font-bold text-[#DDB64C] tracking-wider uppercase block mb-1">
                JULY – SEPTEMBER
              </span>
              <h4 className="font-serif font-bold text-base text-[#173B2A] mb-1.5">Monsoon Blooms</h4>
              <p className="text-xs text-[#202A20]/75 leading-relaxed">
                Spectacular mass Karvy flowerings on basalt Saddas, thundering forest waterfalls, and vibrant endemic amphibians.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-sm border border-[#202A20]/5">
              <span className="text-[10px] font-bold text-[#DDB64C] tracking-wider uppercase block mb-1">
                OCTOBER – NOVEMBER
              </span>
              <h4 className="font-serif font-bold text-base text-[#173B2A] mb-1.5">Post-Monsoon Green</h4>
              <p className="text-xs text-[#202A20]/75 leading-relaxed">
                Crystal clear lake waters, lush emerald valleys, butterfly migrations, and ideal weather for walking trails.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-sm border border-[#202A20]/5">
              <span className="text-[10px] font-bold text-[#DDB64C] tracking-wider uppercase block mb-1">
                DECEMBER – FEBRUARY
              </span>
              <h4 className="font-serif font-bold text-base text-[#173B2A] mb-1.5">Winter Predator Tracking</h4>
              <p className="text-xs text-[#202A20]/75 leading-relaxed">
                Crisp misty mornings, high predator movement along safari tracks, and migratory raptors arriving in the reserve.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white shadow-sm border border-[#202A20]/5">
              <span className="text-[10px] font-bold text-[#DDB64C] tracking-wider uppercase block mb-1">
                MARCH – JUNE
              </span>
              <h4 className="font-serif font-bold text-base text-[#173B2A] mb-1.5">Summer Waterholes</h4>
              <p className="text-xs text-[#202A20]/75 leading-relaxed">
                Maximum wildlife congregation at Vasant Sagar backwaters — Indian Gaur herds, leopards, sloth bears, and hornbills.
              </p>
            </div>
          </div>
        </div>

        {/* ─── CTA band ─── */}
        <div className="mt-12 sm:mt-16 px-8 sm:px-12 py-10 rounded-3xl bg-[#173B2A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.28em] text-[#DDB64C] uppercase">CUSTOM GUIDED EXPEDITIONS</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">Want a Tailored Nature Experience?</h3>
            <p className="text-xs sm:text-sm text-white/75 mt-1.5 leading-relaxed">
              Pranav Mahajan and Birdwing Ecotourism arrange specialised birdwatching expeditions, macro photography tours, and botanic walks.
            </p>
          </div>
          <button
            onClick={openEnquiryModal}
            className="px-7 py-3.5 rounded-full bg-[#DDB64C] hover:bg-[#CBA239] text-[#173B2A] text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-200 shadow-md active:scale-95 whitespace-nowrap"
          >
            🐾 ENQUIRE WITH US
          </button>
        </div>
      </section>

    </div>
  );
}
