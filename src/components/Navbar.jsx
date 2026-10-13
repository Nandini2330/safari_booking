import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { id: 'home',        label: 'Home' },
  { id: 'land',        label: 'The Land' },
  { id: 'history',     label: 'History' },
  { id: 'safari',      label: 'Jungle Safari' },
  { id: 'experiences', label: 'Moments' },
  { id: 'gallery',     label: 'Gallery' },
  { id: 'contact',     label: 'Contact' },
];

export default function Navbar({ activePage, setActivePage, openEnquiryModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F0E2]/97 backdrop-blur-md shadow-sm border-b border-[#202A20]/8'
          : 'bg-[#F6F0E2] border-b border-[#202A20]/6'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-[68px] sm:h-[72px] gap-4">

        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0"
          aria-label="Chandoli National Park – Home"
        >
          <img
            src="/assets/leaf_icon.svg"
            alt="Leaf logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base sm:text-lg font-semibold text-[#202A20] tracking-wide whitespace-nowrap">
              Chandoli National Park
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] font-bold text-[#687348] uppercase">
              Birdwing Ecotourism
            </span>
          </div>
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative py-1 text-[13px] font-medium tracking-wide transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                  isActive ? 'text-[#173B2A] font-semibold' : 'text-[#202A20]/75 hover:text-[#173B2A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#DDB64C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Book Safari CTA */}
        <button
          onClick={openEnquiryModal}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173B2A] text-white text-[12px] font-semibold tracking-wider hover:bg-[#263D25] active:scale-95 transition-all duration-200 shadow-sm whitespace-nowrap ml-2"
          aria-label="Book a Safari with Birdwing Ecotourism"
        >
          <span>🐾</span>
          <span>BOOK A SAFARI</span>
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#202A20] hover:text-[#173B2A] rounded-md focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F6F0E2] border-t border-[#202A20]/8 px-5 py-5 animate-fade-in">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#173B2A]/10 text-[#173B2A] font-semibold pl-5 border-l-2 border-[#DDB64C]'
                      : 'text-[#202A20] hover:bg-[#173B2A]/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <button
              onClick={() => { setMobileOpen(false); openEnquiryModal(); }}
              className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#173B2A] text-white text-sm font-semibold tracking-wider shadow-md"
            >
              <span>🐾</span>
              <span>BOOK A SAFARI</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
