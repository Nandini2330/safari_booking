import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
          ? 'bg-[#F6F0E2]/95 backdrop-blur-md shadow-sm border-b border-[#202A20]/10'
          : 'bg-[#F6F0E2] border-b border-[#202A20]/8'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-[68px] sm:h-[72px] gap-3 sm:gap-4">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          className="flex items-center gap-2.5 text-left group focus:outline-none shrink-0"
          aria-label="Chandoli National Park – Home"
        >
          <img
            src="/assets/leaf_icon.svg"
            alt="Chandoli National Park Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base sm:text-lg font-bold text-[#173B2A] tracking-wide whitespace-nowrap">
              Chandoli National Park
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] font-bold text-[#687348] uppercase">
              Birdwing Ecotourism
            </span>
          </div>
        </a>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
                className={`relative py-1 text-[13px] tracking-wide transition-colors duration-200 focus:outline-none whitespace-nowrap ${
                  isActive ? 'text-[#173B2A] font-bold' : 'text-[#202A20]/75 hover:text-[#173B2A] font-medium'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#DDB64C] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Quick Action Pill */}
        <button
          onClick={openEnquiryModal}
          className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DDB64C] hover:bg-[#CBA239] text-[#173B2A] text-[11px] font-extrabold tracking-wider active:scale-95 transition-all shadow-sm"
          aria-label="Book a Safari"
        >
          <span>🐾</span>
          <span>BOOK</span>
        </button>

        {/* Desktop Book Safari CTA */}
        <button
          onClick={openEnquiryModal}
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DDB64C] hover:bg-[#CBA239] text-[#173B2A] text-[12px] font-extrabold tracking-wider active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap ml-2"
          aria-label="Book a Safari with Birdwing Ecotourism"
        >
          <span>🐾</span>
          <span>BOOK A SAFARI</span>
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#202A20] hover:text-[#173B2A] rounded-lg focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer with backdrop blur */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F6F0E2]/98 backdrop-blur-lg border-t border-[#202A20]/8 px-5 py-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#173B2A]/10 text-[#173B2A] pl-5 border-l-4 border-[#DDB64C]'
                      : 'text-[#202A20] hover:bg-[#173B2A]/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <button
              onClick={() => { setMobileOpen(false); openEnquiryModal(); }}
              className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#DDB64C] hover:bg-[#CBA239] text-[#173B2A] text-sm font-extrabold tracking-wider shadow-md active:scale-95"
            >
              <span>🐾</span>
              <span>BOOK A SAFARI ONLINE</span>
            </button>

            <a
              href="tel:9657493161"
              className="w-full flex items-center justify-center gap-2 px-6 py-2.5 text-[#173B2A] text-xs font-bold tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-[#DDB64C]" />
              <span>Call Pranav: 9657493161</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
