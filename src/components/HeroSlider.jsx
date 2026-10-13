import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const slides = [
  {
    image: '/assets/hero_slide_1.jpg',
    alt: 'Panoramic misty green Sahyadri hills, waterfalls and forests in Chandoli National Park',
  },
  {
    image: '/assets/hero_slide_2.jpg',
    alt: 'Safari jeep on forest trail overlooking misty Sahyadri mountain valley',
  },
  {
    image: '/assets/hero_slide_3.jpg',
    alt: 'Sunrise over Sahyadri mountain ridges with sea of clouds and waterfalls',
  },
  {
    image: '/assets/hero_slide_4.jpg',
    alt: 'Plateau of blooming purple wildflowers overlooking misty Sahyadri valleys',
  },
];

export default function HeroSlider({ onExploreClick }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setPrev(current);
    setCurrent(idx);
  }, [current]);

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, goNext]);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#173B2A] select-none"
      style={{ height: 'calc(100vh - 72px)', minHeight: 480, maxHeight: 860 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* ── Slides ── */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
            aria-hidden={!isActive}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover object-center ${isActive ? 'slide-active-img' : ''}`}
            />
            {/* Gradient overlays for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15 pointer-events-none" />
          </div>
        );
      })}

      {/* ── Hero Text ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Eyebrow */}
        <span
          className="hero-text-animate text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.32em] uppercase drop-shadow mb-2"
          style={{ animationDelay: '0.1s' }}
        >
          SAHYADRI TIGER RESERVE · MAHARASHTRA
        </span>

        {/* Main heading */}
        <h1
          className="hero-text-animate font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-[0.1em] text-white drop-shadow-2xl uppercase leading-none"
          style={{ animationDelay: '0.2s', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
        >
          CHANDOLI
        </h1>

        {/* Supporting line */}
        <p
          className="hero-text-animate text-[#DDB64C] text-xs sm:text-sm lg:text-base font-semibold tracking-[0.38em] uppercase drop-shadow mt-2 sm:mt-3 mb-7 sm:mb-9"
          style={{ animationDelay: '0.3s' }}
        >
          INTO THE WILD.
        </p>

        {/* CTA button */}
        <button
          onClick={onExploreClick}
          className="hero-text-animate group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold tracking-wider backdrop-blur border border-white/30 transition-all duration-300 shadow-xl"
          style={{ animationDelay: '0.45s' }}
          aria-label="Explore Chandoli — scroll to Discover section"
        >
          <span>Explore Chandoli</span>
          <span className="w-8 h-8 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-x-0.5">
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </button>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ── Bottom bar: indicators + location ── */}
      <div className="absolute bottom-5 sm:bottom-7 inset-x-0 z-30 px-6 sm:px-10 flex items-center justify-between">
        {/* spacer */}
        <div className="hidden sm:block w-36" />

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mx-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-400 focus:outline-none ${
                idx === current
                  ? 'w-8 h-2.5 bg-[#DDB64C]'
                  : 'w-2.5 h-2.5 bg-white/45 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium tracking-wide drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#DDB64C] shrink-0" />
          <span>Chandoli, Maharashtra</span>
        </div>
      </div>
    </div>
  );
}
