import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { ChevronRight, Phone, MessageCircle, Navigation, MessageSquare, User, MapPin } from 'lucide-react';

export default function Home({ setActivePage, openEnquiryModal, setLightboxIndex, setLightboxImages }) {

  const scrollToDiscover = () => {
    const el = document.getElementById('discover-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryCollage = [
    { src: '/assets/gallery_lake.jpg',   title: 'Chandoli Reservoir & Sahyadri Hills', category: 'Landscapes' },
    { src: '/assets/gallery_flower.jpg', title: 'Karvy Wildflower Bloom',               category: 'Wildflowers' },
    { src: '/assets/gallery_bird.jpg',   title: 'Indian Roller / Kingfisher',            category: 'Birds' },
    { src: '/assets/gallery_snake.jpg',  title: 'Green Pit Viper in Sahyadri Foliage',  category: 'Wildlife' },
    { src: '/assets/gallery_mist.jpg',   title: 'Misty Dawn over Chandoli Canopy',      category: 'Landscapes' },
  ];

  const handleOpenCollage = (idx) => {
    setLightboxImages(galleryCollage);
    setLightboxIndex(idx);
  };

  return (
    <div className="w-full bg-[#F6F0E2] text-[#202A20] overflow-x-hidden">

      {/* ═══════════════════════════════════════════
          SECTION 2 — HERO SLIDER
      ═══════════════════════════════════════════ */}
      <HeroSlider onExploreClick={scrollToDiscover} />

      {/* ═══════════════════════════════════════════
          SECTION 3 — DISCOVER CHANDOLI
          (Reference: home page 2, upper section)
      ═══════════════════════════════════════════ */}
      <section
        id="discover-section"
        className="relative py-16 sm:py-24 bg-[#F6F0E2] overflow-hidden"
      >
        {/* Botanical watermark left edge */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-10 w-24 sm:w-36 opacity-35 pointer-events-none select-none hidden md:block"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="flex flex-col items-start z-10">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                DISCOVER
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#202A20] leading-none tracking-tight mb-3">
                Chandoli
              </h2>
              {/* Gold underline accent */}
              <span className="w-12 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
              <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-8 max-w-sm">
                Lush forests, misty hills and a rich world of wildlife in the heart of the Sahyadris.
              </p>
              <button
                onClick={() => setActivePage('land')}
                className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#263D25] hover:bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Explore the Land</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — organic landscape image */}
            <div className="flex justify-end">
              <div
                className="relative w-full max-w-lg h-72 sm:h-96 lg:h-[420px] overflow-hidden shadow-xl shape-blob-discover group cursor-pointer"
                onClick={() => setActivePage('land')}
              >
                <img
                  src="/assets/discover_landscape.jpg"
                  alt="Panoramic Chandoli reservoir and Sahyadri hills landscape"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ── Four Nature Category Cards ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-20">
            {[
              { src: '/assets/card_wildflowers.jpg', label: 'Wildflowers',   page: 'experiences', alt: 'Purple wildflowers of Chandoli' },
              { src: '/assets/card_birdwatching.jpg',label: 'Birdwatching',  page: 'experiences', alt: 'Indian Roller bird on branch' },
              { src: '/assets/card_wildlife.jpg',    label: 'Wildlife',      page: 'experiences', alt: 'Leopard in Chandoli National Park' },
              { src: '/assets/card_safari.jpg',      label: 'Jungle Safari', page: 'safari',      alt: 'Jeep safari on forest road' },
            ].map(({ src, label, page, alt }) => (
              <div
                key={label}
                onClick={() => setActivePage(page)}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-stone-200">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-3 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#202A20] uppercase group-hover:text-[#173B2A] transition-colors">
                  {label}
                </span>
                <span className="w-7 h-[2px] bg-[#DDB64C] mt-1.5 group-hover:w-11 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — NATURE AND HISTORY
          (Reference: home page 2 bottom, wide split)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#F6F0E2]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — full bleed cliff image */}
          <div className="relative h-72 sm:h-96 lg:h-[480px]">
            <img
              src="/assets/history_prachitgad.jpg"
              alt="Prachitgad Fort on Sahyadri cliff overlooking Chandoli forests"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft fade to right */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#F6F0E2] to-transparent pointer-events-none" />
          </div>

          {/* Right — cream text */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-0 bg-[#F6F0E2]">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
              A LAND OF
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#202A20] leading-tight tracking-tight mb-3">
              Nature and History
            </h2>
            <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
            <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-8 max-w-md">
              Chandoli's landscape holds historical significance from the Maratha period,
              with Prachitgad Fort overlooking its vast forests.
            </p>
            <button
              onClick={() => setActivePage('history')}
              className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#263D25] hover:bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md w-fit"
            >
              <span>Explore History</span>
              <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — INTO THE FOREST
          (Reference: home page lower, 1st section)
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#F6F0E2] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Left — wide jeep image */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/forest_jeep.jpg"
                alt="Safari jeep driving through Chandoli forest trail at golden hour"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Centre — text */}
            <div className="lg:col-span-4 flex flex-col items-start py-4 lg:px-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                JUNGLE SAFARI
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#202A20] leading-tight tracking-tight mb-3">
                Into the Forest
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
              <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-8 max-w-xs">
                Experience the wilderness of Chandoli through guided jungle safaris with Birdwing Ecotourism.
              </p>
              <button
                onClick={() => setActivePage('safari')}
                className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#263D25] hover:bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Safari Details</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — tall arch road image */}
            <div className="lg:col-span-3 h-56 sm:h-72 lg:h-[360px] shape-arch-tall overflow-hidden shadow-lg hidden sm:block">
              <img
                src="/assets/forest_road_tall.jpg"
                alt="Green canopy arch over Chandoli forest road"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — NATURE IN EVERY MOMENT
          (Reference: home page lower, 2nd section)
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#F6F0E2] overflow-hidden">
        {/* Left botanical watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-6 w-20 opacity-30 pointer-events-none select-none hidden md:block"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text + 4 circle thumbnails */}
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                EXPERIENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#202A20] leading-tight tracking-tight mb-8">
                Nature in Every Moment
              </h2>

              {/* Four circles */}
              <div className="grid grid-cols-4 gap-4 sm:gap-6 w-full max-w-sm">
                {[
                  { src: '/assets/circle_wildflowers.jpg', label: 'Wildflowers' },
                  { src: '/assets/circle_bird.jpg',        label: 'Birdwatching' },
                  { src: '/assets/circle_wildlife.jpg',    label: 'Wildlife' },
                  { src: '/assets/circle_landscape.jpg',   label: 'Landscape' },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    onClick={() => setActivePage('experiences')}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                  >
                    <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#DDB64C] transition-all duration-300">
                      <img
                        src={src}
                        alt={label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#202A20] uppercase text-center group-hover:text-[#173B2A] transition-colors">
                      {label}
                    </span>
                    <span className="w-5 h-[2px] bg-[#DDB64C] group-hover:w-7 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — large landscape with curved left edge */}
            <div className="h-72 sm:h-96 lg:h-[440px] shape-curved-left overflow-hidden shadow-xl">
              <img
                src="/assets/nature_large_landscape.jpg"
                alt="Chandoli reservoir hills and valley panoramic view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — CHANDOLI THROUGH OUR LENS
          (Reference: dark green gallery mosaic)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#173B2A] text-white overflow-hidden">
        {/* Botanical watermark */}
        <img
          src="/assets/botanical_branch_dark.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-8 w-28 sm:w-40 opacity-20 pointer-events-none select-none"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left — title + button */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#A5AD8A] uppercase mb-2">
                PHOTO GALLERY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
                Chandoli Through Our Lens
              </h2>
              <button
                onClick={() => setActivePage('gallery')}
                className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-white/12 hover:bg-white/22 text-white text-xs sm:text-sm font-semibold tracking-wider border border-white/20 backdrop-blur transition-all duration-300"
              >
                <span>View Gallery</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — asymmetric mosaic */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-12 gap-2.5 sm:gap-3">
                {/* Top row */}
                <div
                  onClick={() => handleOpenCollage(0)}
                  className="col-span-6 h-36 sm:h-44 lg:h-48 rounded-xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img src="/assets/gallery_lake.jpg"   alt="Chandoli Lake Sahyadri Hills" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div
                  onClick={() => handleOpenCollage(1)}
                  className="col-span-3 h-36 sm:h-44 lg:h-48 rounded-xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img src="/assets/gallery_flower.jpg" alt="Karvy Wildflower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div
                  onClick={() => handleOpenCollage(2)}
                  className="col-span-3 h-36 sm:h-44 lg:h-48 rounded-xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img src="/assets/gallery_bird.jpg"   alt="Kingfisher" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* Bottom row */}
                <div
                  onClick={() => handleOpenCollage(3)}
                  className="col-span-5 h-32 sm:h-40 lg:h-44 rounded-xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img src="/assets/gallery_snake.jpg"  alt="Green Pit Viper" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div
                  onClick={() => handleOpenCollage(4)}
                  className="col-span-7 h-32 sm:h-40 lg:h-44 rounded-xl overflow-hidden cursor-pointer group shadow-md"
                >
                  <img src="/assets/gallery_mist.jpg"   alt="Misty Sahyadri Peaks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — PLAN YOUR VISIT
          (Reference: cream contact section)
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#F6F0E2] overflow-hidden">
        {/* Botanical right watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-12 w-28 opacity-30 pointer-events-none select-none hidden md:block scale-x-[-1]"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left — heading + desc */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                BIRDWING ECOTOURISM
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#202A20] leading-tight tracking-tight mb-3">
                Plan Your Visit
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-5 block" />
              <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed max-w-xs">
                Get in touch for safari enquiries, local guidance and a memorable ecotourism experience in Chandoli.
              </p>
            </div>

            {/* Centre — sage-green contact badge */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#738258] text-white shadow-xl flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold tracking-wide">Pranav Mahajan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:9657493161" className="text-sm sm:text-base font-semibold tracking-wide hover:underline">
                    9657493161
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    Chandoli, Manadur, Taluka Shirala,<br />Sangli, Maharashtra
                  </span>
                </div>
              </div>
            </div>

            {/* Right — gazebo photo */}
            <div className="lg:col-span-4 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/visit_gazebo.jpg"
                alt="Ecotourism viewpoint gazebo overlooking Chandoli valley at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 pt-8 border-t border-[#202A20]/10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:9657493161"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#263D25] shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-[#DDB64C]" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919657493161"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#1ebe5a] shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DDB64C] text-[#173B2A] text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#c9a43f] shadow-md transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
            <a
              href="https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A5AD8A]/30 hover:bg-[#A5AD8A]/50 text-[#202A20] text-xs sm:text-sm font-semibold tracking-wider shadow-md transition-all border border-[#A5AD8A]/40"
            >
              <MessageSquare className="w-4 h-4 text-[#173B2A]" />
              <span>Share Feedback</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
