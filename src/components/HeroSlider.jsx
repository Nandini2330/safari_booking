import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const slides = [
  {
    image: '/assets/hero_slide_1.jpg',
    heading: 'Chandoli Wilderness',
    subheading: 'Sahyadri Tiger Reserve · Western Ghats',
    alt: 'Panoramic misty green Sahyadri hills, waterfalls and forests in Chandoli National Park',
  },
  {
    image: '/assets/hero_slide_2.jpg',
    heading: 'Jungle Safari Expeditions',
    subheading: 'Guided 4×4 Wildlife Tracking in Pristine Forests',
    alt: 'Safari jeep on forest trail overlooking misty Sahyadri mountain valley',
  },
  {
    image: '/assets/hero_slide_3.jpg',
    heading: 'Vasant Sagar Waters',
    subheading: 'Misty Dawn Across the Western Ghats',
    alt: 'Sunrise over Sahyadri mountain ridges with sea of clouds and waterfalls',
  },
  {
    image: '/assets/hero_slide_4.jpg',
    heading: 'Karvy Wildflower Saddas',
    subheading: 'High-Altitude Blooming Plateaus',
    alt: 'Plateau of blooming purple wildflowers overlooking misty Sahyadri valleys',
  },
];

export default function HeroSlider({ onExploreClick }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 5 second auto rotation
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, goNext, current]);

  // Touch Swipe Handling for Mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext(); // Swiped left -> next
      else          goPrev(); // Swiped right -> prev
    }
    touchStartX.current = null;
  };

  const currentSlide = slides[current];

  return (
    <div
      className="relative w-full overflow-hidden bg-[#173B2A] select-none"
      style={{ height: 'calc(100vh - 72px)', minHeight: 480, maxHeight: 860 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Slide Progress Bar ── */}
      <div className="absolute top-0 inset-x-0 z-30 h-[3px] bg-white/15">
        <div
          key={current}
          className="h-full bg-[#DDB64C] shadow-sm"
          style={{
            animation: !isPaused ? 'slideProgress 5s linear forwards' : 'none',
            width: isPaused ? '100%' : '0%',
          }}
        />
      </div>

      {/* ── Slides ── */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0, pointerEvents: isActive ? 'auto' : 'none' }}
            aria-hidden={!isActive}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover object-center ${isActive ? 'slide-active-img' : ''}`}
            />
            {/* Crystal-clear vignette overlay: leaves middle 70% HD and bright */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 pointer-events-none" />
          </div>
        );
      })}

      {/* ── Refined Luxury Hero Text (Bottom-Third Composition with Breathing Room) ── */}
      <div
        key={`text-${current}`}
        className="absolute inset-x-0 bottom-20 sm:bottom-24 z-20 flex flex-col items-center justify-end text-center px-4 max-w-4xl mx-auto"
      >
        {/* Luxury Gold Subtitle */}
        <p
          className="hero-text-animate text-[#DDB64C] text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-2"
          style={{ animationDelay: '0.06s' }}
        >
          {currentSlide.subheading}
        </p>

        {/* Elegant Grand Serif Title */}
        <h1
          className="hero-text-animate font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-tight mb-5"
          style={{ animationDelay: '0.12s' }}
        >
          {currentSlide.heading}
        </h1>

        {/* Luxury Pill Action Button */}
        <button
          onClick={onExploreClick}
          className="hero-text-animate group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider border border-white/35 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          style={{ animationDelay: '0.2s' }}
          aria-label="Explore Chandoli Sanctuary"
        >
          <span>Explore Sanctuary</span>
          <span className="w-7 h-7 rounded-full bg-[#DDB64C] flex items-center justify-center text-[#173B2A] transition-transform duration-300 group-hover:translate-y-0.5 shadow-sm">
            <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        </button>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={goPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/55 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/55 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Centered Minimalist Dot Indicators (No Badges, Clean & Uncluttered) ── */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 flex items-center justify-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 focus:outline-none ${
              idx === current
                ? 'w-8 h-2 bg-[#DDB64C] shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
