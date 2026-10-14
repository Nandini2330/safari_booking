import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { ChevronRight, Phone, MessageCircle, Navigation, MessageSquare, User, MapPin, Check, Clock, Users, Sparkles, ShieldCheck } from 'lucide-react';

export default function Home({ setActivePage, openEnquiryModal, setLightboxIndex, setLightboxImages }) {

  const scrollToDiscover = () => {
    const el = document.getElementById('discover-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryCollage = [
    { src: '/assets/safari_tourists_jeep.jpg',    title: 'Sahyadri Tiger Reserve Open 4×4 Gypsy Safari', category: 'Safari' },
    { src: '/assets/safari_udagiri_gate.jpg',     title: 'UNESCO Sahyadri Check Post (Range Amba)',      category: 'Safari' },
    { src: '/assets/safari_field_expedition.jpg', title: 'Chandoli Meadows & Jungle Safari Tour',        category: 'Safari' },
    { src: '/assets/safari_homestay_group.jpg',   title: 'Birdwing Ecotourism Station & Homestay',       category: 'Safari' },
    { src: '/assets/gallery_lake.jpg',            title: 'Chandoli Lake Backwaters & Sahyadri Hills',    category: 'Landscapes' },
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
      ═══════════════════════════════════════════ */}
      <section
        id="discover-section"
        className="relative py-8 sm:py-12 bg-[#F6F0E2] overflow-hidden"
      >
        {/* Botanical watermark left edge */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-10 w-24 sm:w-36 opacity-30 pointer-events-none select-none hidden md:block"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left — Clean, Balanced Editorial Typography (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start z-10">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                SAHYADRI TIGER RESERVE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold text-[#202A20] leading-[1.15] tracking-tight mb-3">
                Discover Chandoli
              </h2>
              {/* Gold underline accent */}
              <span className="w-12 h-[3px] bg-[#DDB64C] rounded mb-4 block" />
              <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-6 max-w-sm">
                Lush evergreen forests, mist-shrouded basalt peaks, and an untouched world of wildlife in the heart of the northern Western Ghats.
              </p>

              {/* 3 Clean Visual Highlight Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#202A20]/10 text-xs font-semibold text-[#173B2A] shadow-sm">
                  <span>🌿</span> UNESCO Buffer
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#202A20]/10 text-xs font-semibold text-[#173B2A] shadow-sm">
                  <span>🐾</span> Tiger Habitat
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#202A20]/10 text-xs font-semibold text-[#173B2A] shadow-sm">
                  <span>🌺</span> Karvy Flora
                </span>
              </div>

              <button
                onClick={() => setActivePage('land')}
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover-lift active:scale-95"
              >
                <span>Explore the Land</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — WIDER Landscape Frame (7 cols, expanded to the left, height restrained so it doesn't get taller) */}
            <div className="lg:col-span-7 flex justify-end">
              <div
                className="relative w-full h-72 sm:h-80 lg:h-[370px] rounded-t-[140px] rounded-b-[36px] sm:rounded-t-[180px] sm:rounded-b-[42px] overflow-hidden shadow-2xl border-4 sm:border-[5px] border-white hover-lift cursor-pointer group"
                onClick={() => setActivePage('land')}
              >
                <img
                  src="/assets/discover_landscape.jpg"
                  alt="Panoramic Chandoli reservoir and Sahyadri hills landscape"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Clean, high-contrast, perfectly visible caption badge — zero clipping */}
                <div className="absolute bottom-4 left-4 sm:left-6 flex items-center pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium tracking-wide border border-white/25 shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#DDB64C] shrink-0" />
                    <span>Vasant Sagar Catchment · Sahyadri Tiger Reserve</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Four Nature Category Cards (Immediately visible in viewport) ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
            {[
              { src: '/assets/card_wildflowers.jpg', label: 'Wildflowers',   page: 'experiences', alt: 'Purple wildflowers of Chandoli' },
              { src: '/assets/card_birdwatching.jpg',label: 'Birdwatching',  page: 'experiences', alt: 'Indian Roller bird on branch' },
              { src: '/assets/card_wildlife.jpg',    label: 'Wildlife',      page: 'experiences', alt: 'Leopard in Chandoli National Park' },
              { src: '/assets/card_safari.jpg',      label: 'Jungle Safari', page: 'safari',      alt: 'Jeep safari on forest road' },
            ].map(({ src, label, page, alt }) => (
              <div
                key={label}
                onClick={() => setActivePage(page)}
                className="flex flex-col items-center group cursor-pointer hover-lift p-2 rounded-2xl transition-all duration-300"
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-stone-200 border-2 border-white">
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
          SECTION 5.5 — SAFARI BOOKING PACKAGES
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 bg-[#F6F0E2] overflow-hidden">
        {/* Subtle Watermarks */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-12 w-28 opacity-20 pointer-events-none select-none hidden md:block scale-x-[-1]"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-7 sm:mb-9">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#687348] uppercase block mb-1.5">
              OFFICIAL SAFARI BOOKING
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-[#173B2A] tracking-tight mb-2">
              Safari Packages
            </h2>
            <span className="w-10 h-[2.5px] bg-[#DDB64C] rounded mx-auto mb-2 block" />
            <p className="text-xs sm:text-sm text-[#202A20]/75">
              Official 4×4 open Gypsy safaris in Chandoli. Up to 6 guests per vehicle.
            </p>
          </div>

          {/* 3 Compact Safari Package Cards (Clean Font-sans, Simple Words, Reduced Height) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            
            {/* Card 1: Morning Safari */}
            <div className="relative flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#202A20]/10 shadow-sm hover-lift transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold text-[#687348] tracking-[0.2em] uppercase">
                    MORNING SLOT
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full border border-[#202A20]/8">
                    <Clock className="w-2.5 h-2.5 text-[#687348]" />
                    <span>6:00 AM – 10:00 AM</span>
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#173B2A] tracking-tight mb-1">
                  Morning Safari
                </h3>
                <p className="text-xs text-[#202A20]/70 mb-3">
                  Best for tiger & bird tracking at dawn.
                </p>

                {/* Price Display */}
                <div className="pb-3 mb-3 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#173B2A] tracking-tight">₹8,000</span>
                    <span className="text-xs text-[#202A20]/60 font-bold uppercase">/ Gypsy</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-0.5">
                    Up to 6 Guests · Entry Included
                  </span>
                </div>

                {/* Minimal Bullets */}
                <ul className="space-y-1.5 mb-4 text-xs text-[#202A20]/80 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Open 4×4 Gypsy vehicle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Forest entry permit included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Certified guide & driver</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-2.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95"
                >
                  Book Morning Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Morning%20Safari%20(%E2%82%B98000)."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1 text-[#25D366] hover:underline text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Card 2: Evening Safari (Most Popular) */}
            <div className="relative flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#DDB64C] shadow-md hover-lift transition-all duration-300 group">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#DDB64C] text-[#173B2A] text-[9px] font-extrabold tracking-widest uppercase shadow-sm">
                MOST POPULAR
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold text-[#687348] tracking-[0.2em] uppercase">
                    EVENING SLOT
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full border border-[#202A20]/8">
                    <Clock className="w-2.5 h-2.5 text-[#687348]" />
                    <span>3:00 PM – 6:30 PM</span>
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#173B2A] tracking-tight mb-1">
                  Evening Safari
                </h3>
                <p className="text-xs text-[#202A20]/70 mb-3">
                  Sunset lake views & evening wildlife.
                </p>

                {/* Price Display */}
                <div className="pb-3 mb-3 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#173B2A] tracking-tight">₹9,000</span>
                    <span className="text-xs text-[#202A20]/60 font-bold uppercase">/ Gypsy</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-0.5">
                    Up to 6 Guests · Weekend Prime
                  </span>
                </div>

                {/* Minimal Bullets */}
                <ul className="space-y-1.5 mb-4 text-xs text-[#202A20]/80 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Open 4×4 Gypsy vehicle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Forest entry permit included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Certified guide & driver</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-2.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95"
                >
                  Book Evening Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Evening%20Safari%20(%E2%82%B99000)."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1 text-[#25D366] hover:underline text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Card 3: Full Day Safari */}
            <div className="relative flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-[#202A20]/10 shadow-sm hover-lift transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold text-[#687348] tracking-[0.2em] uppercase">
                    FULL DAY VIP
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#173B2A] bg-[#F6F0E2] px-2.5 py-0.5 rounded-full border border-[#202A20]/8">
                    <Clock className="w-2.5 h-2.5 text-[#687348]" />
                    <span>Morning & Evening</span>
                  </span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#173B2A] tracking-tight mb-1">
                  Full Day Safari
                </h3>
                <p className="text-xs text-[#202A20]/70 mb-3">
                  Both morning & evening safaris in one day.
                </p>

                {/* Price Display */}
                <div className="pb-3 mb-3 border-b border-[#202A20]/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans text-3xl sm:text-4xl font-extrabold text-[#173B2A] tracking-tight">₹10,800</span>
                    <span className="text-xs text-[#202A20]/60 font-bold uppercase">/ Day</span>
                  </div>
                  <span className="text-[11px] text-[#687348] font-semibold block mt-0.5">
                    Both Safari Permits & Dedicated Guide
                  </span>
                </div>

                {/* Minimal Bullets */}
                <ul className="space-y-1.5 mb-4 text-xs text-[#202A20]/80 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Morning & evening gate permits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Full-day reserved 4×4 Gypsy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#173B2A]/10 text-[#173B2A] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>Dedicated senior guide</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <button
                  onClick={openEnquiryModal}
                  className="w-full py-2.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 shadow-sm hover:shadow active:scale-95"
                >
                  Book Full Day Safari
                </button>
                <a
                  href="https://wa.me/919657493161?text=Hello%2C%20I%20want%20to%20book%20the%20Full%20Day%20Safari."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1 text-[#25D366] hover:underline text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

          </div>

          {/* Daily Safari Timings & Schedule Strip */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#202A20]/10 flex flex-wrap items-center justify-around gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">🌅</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Morning Safari Slot</span>
                <span className="text-[#202A20]/75">06:00 AM – 10:00 AM</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[#202A20]/15 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">🌇</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Evening Safari Slot</span>
                <span className="text-[#202A20]/75">02:30 PM – 06:30 PM</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[#202A20]/15 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">Jeep</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Jeep Capacity</span>
                <span className="text-[#202A20]/75">6 Adults + 2 Kids (Under 8)</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-[#202A20]/15 hidden sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#173B2A]/10 flex items-center justify-center text-[#173B2A] font-bold">✓</span>
              <div>
                <span className="font-bold text-[#173B2A] block">Included in Price</span>
                <span className="text-[#202A20]/75">Gypsy + Driver + Permits + Guide</span>
              </div>
            </div>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="mt-8 pt-6 border-t border-[#202A20]/10 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-[#202A20]/80 text-center">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#687348]" />
              <span>Official Tiger Reserve Permits Handled</span>
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#687348]" />
              <span>Private 4×4 Gypsys (No Strangers)</span>
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DDB64C]" />
              <span>Verified Local STR Naturalists</span>
            </span>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — NATURE IN EVERY MOMENT
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left — Editorial heading + 2x2 visual preview cards + CTA button */}
            <div className="lg:col-span-6 flex flex-col items-start z-10">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                EXPERIENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#202A20] leading-tight tracking-tight mb-3">
                Nature in Every Moment
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-4 block" />
              <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-2 max-w-md">
                Lush forests, misty hills, and an untouched world of wildlife across the Sahyadris.
              </p>

              {/* Four Circular Category Items in One Line (A little bit bigger) */}
              <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg my-6">
                {[
                  { src: '/assets/circle_wildflowers.jpg', title: 'Wildflowers', tag: 'Karvy Bloom' },
                  { src: '/assets/circle_bird.jpg',        title: 'Birdwatching', tag: '122+ Species' },
                  { src: '/assets/circle_wildlife.jpg',    title: 'Wildlife',     tag: 'Leopard & Gaur' },
                  { src: '/assets/circle_landscape.jpg',   title: 'Landscapes',   tag: 'Cascade Falls' },
                ].map(({ src, title, tag }) => (
                  <div
                    key={title}
                    onClick={() => setActivePage('experiences')}
                    className="flex flex-col items-center text-center cursor-pointer group hover-lift transition-all duration-300"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#DDB64C] group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={src}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="mt-2 text-xs sm:text-[13px] font-serif font-bold text-[#173B2A] leading-tight group-hover:text-[#687348] transition-colors">
                      {title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#687348] font-bold tracking-wider uppercase mt-0.5">
                      {tag}
                    </span>
                    <span className="w-5 h-[2px] bg-[#DDB64C] mt-1.5 group-hover:w-9 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* CTA Action Button */}
              <button
                onClick={() => setActivePage('experiences')}
                className="group mt-2 inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover-lift active:scale-95"
              >
                <span>View All Moments</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — large landscape with curved left edge */}
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-[440px] shape-curved-left overflow-hidden shadow-2xl relative group border-4 border-white hover-lift">
              <img
                src="/assets/nature_large_landscape.jpg"
                alt="Secluded monsoon waterfall in Chandoli rainforest"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs text-white/95 font-medium tracking-wide">
                  Secluded Rainforest Cascade · Chandoli Tiger Reserve Backwaters
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — CHANDOLI THROUGH OUR LENS
          (Matching homepage signature botanical cream background #F6F0E2 — all faces & tourists 100% visible)
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#F6F0E2] overflow-hidden">
        {/* Subtle botanical watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-8 w-28 sm:w-40 opacity-20 pointer-events-none select-none"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left — title + description + button */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                PHOTO GALLERY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
                Chandoli Through Our Lens
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-4 block" />
              <p className="text-sm sm:text-base text-[#202A20]/75 leading-relaxed mb-6 max-w-xs">
                Real safari expeditions, wildlife sightings, and memories captured by our travellers across Sahyadri Tiger Reserve.
              </p>
              <button
                onClick={() => setActivePage('gallery')}
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#173B2A] hover:bg-[#263D25] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover-lift active:scale-95"
              >
                <span>View Full Gallery</span>
                <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Right — Curated photo showcase where ALL FACES ARE 100% VISIBLE */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-12 gap-3 sm:gap-4">
                
                {/* Row 1, Photo 1: Open 4x4 Gypsy Group (6 cols, 2.15:1 aspect) — all 9 faces visible */}
                <div
                  onClick={() => handleOpenCollage(0)}
                  className="col-span-12 sm:col-span-6 aspect-[2/1] sm:aspect-[2.15/1] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover-lift border-4 border-white transition-all duration-300 bg-stone-200 relative"
                >
                  <img
                    src="/assets/safari_tourists_jeep.jpg"
                    alt="Sahyadri Tiger Reserve Open Gypsy Safari group"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow">
                      4×4 Gypsy Safari · Sahyadri Tiger Reserve
                    </span>
                  </div>
                </div>

                {/* Row 1, Photo 2: UNESCO Heritage Check Post (6 cols, 2.15:1 aspect) — all 4 tourists visible */}
                <div
                  onClick={() => handleOpenCollage(1)}
                  className="col-span-12 sm:col-span-6 aspect-[2/1] sm:aspect-[2.15/1] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover-lift border-4 border-white transition-all duration-300 bg-stone-200 relative"
                >
                  <img
                    src="/assets/safari_udagiri_gate.jpg"
                    alt="UNESCO Sahyadri Tiger Reserve Check Post Range Amba"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow">
                      UNESCO Heritage Post · Range Amba
                    </span>
                  </div>
                </div>

                {/* Row 2, Photo 3: Chandoli Meadows & Jungle Tour (4 cols, 3:2 exact aspect) — all faces visible */}
                <div
                  onClick={() => handleOpenCollage(2)}
                  className="col-span-12 sm:col-span-4 aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover-lift border-4 border-white transition-all duration-300 bg-stone-200 relative"
                >
                  <img
                    src="/assets/safari_field_expedition.jpg"
                    alt="Chandoli Meadows & Jungle Safari Tour"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow">
                      Meadows & Green Safari Tour
                    </span>
                  </div>
                </div>

                {/* Row 2, Photo 4: Homestay Station & Families (4 cols, 3:2 exact aspect) — all 7 top faces + families visible */}
                <div
                  onClick={() => handleOpenCollage(3)}
                  className="col-span-12 sm:col-span-4 aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover-lift border-4 border-white transition-all duration-300 bg-stone-200 relative"
                >
                  <img
                    src="/assets/safari_homestay_group.jpg"
                    alt="Birdwing Ecotourism Station & Homestay Group"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow">
                      Ecotourism Homestay & Tours
                    </span>
                  </div>
                </div>

                {/* Row 2, Photo 5: Scenic Chandoli Lake Sunset (4 cols, 3:2 aspect) */}
                <div
                  onClick={() => handleOpenCollage(4)}
                  className="col-span-12 sm:col-span-4 aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl hover-lift border-4 border-white transition-all duration-300 bg-stone-200 relative"
                >
                  <img
                    src="/assets/gallery_lake.jpg"
                    alt="Chandoli Lake Backwaters and Sahyadri Hills"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-semibold text-white tracking-wide drop-shadow">
                      Vasant Sagar Catchment
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — PLAN YOUR VISIT
      ═══════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 bg-[#F6F0E2] overflow-hidden">
        {/* Botanical right watermark */}
        <img
          src="/assets/botanical_branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-12 w-28 opacity-25 pointer-events-none select-none hidden md:block scale-x-[-1]"
        />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left — heading + desc + action buttons */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#687348] uppercase mb-2">
                BIRDWING ECOTOURISM
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173B2A] leading-tight tracking-tight mb-3">
                Plan Your Visit
              </h2>
              <span className="w-10 h-[3px] bg-[#DDB64C] rounded mb-4 block" />
              <p className="text-sm sm:text-base text-[#202A20]/80 leading-relaxed mb-6">
                Get in touch for safari enquiries, custom birdwatching circuits, gate entry guidelines, and authentic local stay guidance near Chandoli.
              </p>

              {/* Direct Action Buttons directly under text */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <a
                  href="tel:9657493161"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#173B2A] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#263D25] shadow-md hover-lift transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#DDB64C]" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919657493161"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#1ebe5a] shadow-md hover-lift transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/ufNzEfhqcwrK7QKd9"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#DDB64C] text-[#173B2A] text-xs sm:text-sm font-bold tracking-wider hover:bg-[#eac45f] shadow-md hover-lift transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Centre — sage-green naturalist contact card */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#738258] text-white shadow-lg flex flex-col gap-4 hover-lift transition-all duration-300">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">Verified Local Naturalist</span>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-base font-bold tracking-wide block">Pranav Mahajan</span>
                    <span className="text-xs text-white/80">Authorized Guide · STR</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/70 uppercase">Direct Booking</span>
                    <a href="tel:9657493161" className="text-sm font-bold tracking-wide hover:underline block font-mono">
                      9657493161
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/70 uppercase">Office Location</span>
                    <span className="text-xs font-medium leading-relaxed block text-white/90">
                      Chandoli, Manadur, Taluka Shirala, Sangli, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Gazebo viewpoint photo */}
            <div className="lg:col-span-3 h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg border-2 border-white relative group">
              <img
                src="/assets/visit_gazebo.jpg"
                alt="Ecotourism viewpoint gazebo overlooking Chandoli valley at sunset"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                <span className="text-[11px] text-white/90 font-medium">
                  Sunset Viewpoint · Sahyadri Crest
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
