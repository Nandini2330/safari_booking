import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const allItems = [
  // ── Authentic Guest & Safari Expedition Photos ──
  { id: 1,  src: '/assets/safari_tourists_jeep.jpg',   title: 'Open 4×4 Gypsy Safari Expedition',        category: 'Safari',      cols: 'col-span-12 sm:col-span-7',  aspect: 'h-64 sm:h-72' },
  { id: 2,  src: '/assets/safari_udagiri_gate.jpg',    title: 'UNESCO Sahyadri Check Post (Range Amba)', category: 'Safari',      cols: 'col-span-12 sm:col-span-5',  aspect: 'h-64 sm:h-72' },
  { id: 3,  src: '/assets/safari_field_expedition.jpg', title: 'Chandoli Meadows & Open Gypsy Tour',     category: 'Safari',      cols: 'col-span-12 sm:col-span-6',  aspect: 'h-64 sm:h-72' },
  { id: 4,  src: '/assets/safari_homestay_group.jpg',  title: 'Birdwing Ecotourism Station & Homestay',  category: 'Safari',      cols: 'col-span-12 sm:col-span-6',  aspect: 'h-64 sm:h-72' },
  { id: 5,  src: '/assets/birdwing_safari_poster.jpg', title: 'Official Safari Guide & Souvenir Service', category: 'Safari',     cols: 'col-span-12 sm:col-span-4',  aspect: 'h-64 sm:h-72' },

  // ── Nature, Landscapes & Wildlife ──
  { id: 6,  src: '/assets/grid_lake.jpg',              title: 'Chandoli Lake Backwaters',                category: 'Landscapes',  cols: 'col-span-12 sm:col-span-8',  aspect: 'h-64 sm:h-72' },
  { id: 7,  src: '/assets/grid_flower.jpg',            title: 'Karvy Blossom Close-up',                  category: 'Wildflowers', cols: 'col-span-6 sm:col-span-4',   aspect: 'h-60 sm:h-64' },
  { id: 8,  src: '/assets/grid_bird.jpg',              title: 'Kingfisher on River Perch',               category: 'Birds',       cols: 'col-span-6 sm:col-span-4',   aspect: 'h-60 sm:h-64' },
  { id: 9,  src: '/assets/grid_leopard.jpg',           title: 'Leopard in Dense Undergrowth',            category: 'Wildlife',    cols: 'col-span-12 sm:col-span-4',  aspect: 'h-60 sm:h-64' },
  { id: 10, src: '/assets/grid_snake.jpg',             title: 'Bamboo Pit Viper on Mossy Branch',        category: 'Wildlife',    cols: 'col-span-12 sm:col-span-4',  aspect: 'h-60 sm:h-64' },
  { id: 11, src: '/assets/grid_jeep.jpg',              title: 'Safari Jeep on Forest Trail',             category: 'Safari',      cols: 'col-span-6 sm:col-span-4',   aspect: 'h-60 sm:h-64' },
  { id: 12, src: '/assets/grid_waterfall.jpg',         title: 'Monsoon Cascade in Sahyadris',            category: 'Landscapes',  cols: 'col-span-6 sm:col-span-4',   aspect: 'h-60 sm:h-64' },
  { id: 13, src: '/assets/grid_mist.jpg',              title: 'Misty Dawn Ridges over Chandoli',         category: 'Landscapes',  cols: 'col-span-12 sm:col-span-6',  aspect: 'h-60 sm:h-64' },
  { id: 14, src: '/assets/grid_meadow.jpg',            title: 'Wildflower Plateau Meadow',               category: 'Wildflowers', cols: 'col-span-12 sm:col-span-6',  aspect: 'h-60 sm:h-64' },
  { id: 15, src: '/assets/card_birdwatching.jpg',      title: 'Endemic Sahyadri Avifauna',               category: 'Birds',       cols: 'col-span-6 sm:col-span-6',   aspect: 'h-56 sm:h-60' },
  { id: 16, src: '/assets/forest_jeep.jpg',            title: 'Birdwing Ecotourism Safari Patrol',       category: 'Safari',      cols: 'col-span-6 sm:col-span-6',   aspect: 'h-56 sm:h-60' },
];

const filters = ['All', 'Safari', 'Landscapes', 'Wildlife', 'Birds', 'Wildflowers'];

export default function Gallery({ setLightboxIndex, setLightboxImages }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allItems
    : allItems.filter(item => item.category === activeFilter);

  const handleClick = (item) => {
    const idx = filtered.findIndex(i => i.id === item.id);
    setLightboxImages(filtered.map(i => ({ src: i.src, title: i.title, category: i.category })));
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20]">

      {/* ─── HERO ─── */}
      <div className="relative w-full h-[60vh] sm:h-[68vh] bg-[#173B2A] overflow-hidden flex items-center">
        <img
          src="/assets/gallery_hero.jpg"
          alt="Panoramic Chandoli National Park landscape"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15 pointer-events-none" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Photo Gallery
          </h1>
          <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#DDB64C] uppercase">
            MOMENTS FROM CHANDOLI
          </p>
        </div>
      </div>

      {/* ─── FILTER PILLS ─── */}
      <section className="py-8 sm:py-10 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const active = f === activeFilter;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none ${
                  active
                    ? 'bg-[#173B2A] text-white shadow-md scale-105'
                    : 'bg-white/70 hover:bg-white text-[#202A20] border border-[#202A20]/10 hover:border-[#173B2A]/25'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── ASYMMETRIC PHOTO GRID ─── */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-8 lg:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className={`${item.cols} ${item.aspect} relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300 bg-stone-200`}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-full object-cover ${item.objectPos || 'object-top'} group-hover:scale-105 transition-transform duration-700`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] tracking-widest uppercase font-bold text-[#DDB64C]">{item.category}</span>
                <p className="font-serif text-sm font-semibold leading-snug mt-0.5">{item.title}</p>
                <div className="mt-1.5 flex items-center gap-1 text-[10px] text-white/75">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#202A20]/50 text-sm">No images in this category.</div>
        )}
      </section>

    </div>
  );
}
