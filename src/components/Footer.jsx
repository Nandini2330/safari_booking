import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { id: 'home',        label: 'Home' },
    { id: 'land',        label: 'The Land' },
    { id: 'history',     label: 'History' },
    { id: 'safari',      label: 'Jungle Safari' },
    { id: 'experiences', label: 'Moments' },
    { id: 'contact',     label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#173B2A] text-white overflow-hidden">
      {/* Subtle botanical watermark */}
      <img
        src="/assets/botanical_branch_dark.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-6 w-40 h-40 opacity-10 pointer-events-none select-none"
      />
      <img
        src="/assets/botanical_branch_dark.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-4 w-28 h-28 opacity-8 pointer-events-none select-none rotate-180"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 pb-8">

          {/* Left: Brand */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
            aria-label="Chandoli National Park Home"
          >
            <img
              src="/assets/leaf_icon.svg"
              alt="Chandoli National Park Logo"
              className="w-9 h-9 object-contain brightness-110 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-white tracking-wide">
                Chandoli National Park
              </span>
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#A5AD8A] uppercase">
                Birdwing Ecotourism
              </span>
            </div>
          </button>

          {/* Middle: Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 lg:gap-x-6 gap-y-2 text-[12px] sm:text-[13px] text-white/75" aria-label="Footer navigation">
            {links.map((link, i) => (
              <React.Fragment key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className="hover:text-white transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none"
                >
                  {link.label}
                </button>
                {i < links.length - 1 && (
                  <span className="text-white/20 text-xs select-none" aria-hidden="true">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Social icons */}
          <div className="flex items-center gap-3 text-white/70 shrink-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/15 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/15 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/15 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon fill="#173B2A" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider between content and copyright */}
        <div className="w-full border-t border-white/12" />

        {/* Copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-white/50 tracking-wide text-center sm:text-left">
          <p>© 2025 Chandoli National Park &nbsp;|&nbsp; Birdwing Ecotourism</p>
          <p>Sahyadri Tiger Reserve · Sangli, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
