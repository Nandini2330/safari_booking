import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Lightbox from './components/Lightbox';

import Home from './pages/Home';
import TheLand from './pages/TheLand';
import History from './pages/History';
import JungleSafari from './pages/JungleSafari';
import Experiences from './pages/Experiences';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const pageTitles = {
  home: 'Chandoli National Park — Birdwing Ecotourism',
  land: 'The Land & Sahyadri Biodiversity — Chandoli National Park',
  history: 'History & Prachitgad Fort — Chandoli National Park',
  safari: 'Jungle Safari & Timings — Chandoli National Park',
  experiences: 'Nature Moments & Flora — Chandoli National Park',
  gallery: 'HD Photo Gallery — Chandoli National Park',
  contact: 'Contact & Safari Bookings — Chandoli National Park',
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryPackage, setEnquiryPackage] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showMobileQuickBar, setShowMobileQuickBar] = useState(false);
  
  // Lightbox State
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Sync with URL Hash for direct link access
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'land', 'history', 'safari', 'experiences', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track scroll position to show sticky mobile quick-action bar past hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowMobileQuickBar(true);
      } else {
        setShowMobileQuickBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Browser Title for SEO and clarity
  useEffect(() => {
    document.title = pageTitles[activePage] || 'Chandoli National Park — Birdwing Ecotourism';
  }, [activePage]);

  const navigateTo = (pageId, category = 'All') => {
    setActivePage(pageId);
    window.location.hash = pageId;
    if (category) {
      setCategoryFilter(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (pkgName = '') => {
    setEnquiryPackage(pkgName || '');
    setIsEnquiryOpen(true);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null && lightboxImages.length > 0) {
      setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null && lightboxImages.length > 0) {
      setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
    }
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'land':
        return <TheLand setActivePage={navigateTo} openEnquiryModal={handleOpenEnquiry} />;
      case 'history':
        return <History setActivePage={navigateTo} openEnquiryModal={handleOpenEnquiry} />;
      case 'safari':
        return <JungleSafari openEnquiryModal={handleOpenEnquiry} />;
      case 'experiences':
        return (
          <Experiences 
            setActivePage={navigateTo} 
            openEnquiryModal={handleOpenEnquiry}
            setLightboxImages={setLightboxImages}
            setLightboxIndex={setLightboxIndex}
            initialFilter={categoryFilter}
          />
        );
      case 'gallery':
        return (
          <Gallery 
            setLightboxIndex={setLightboxIndex} 
            setLightboxImages={setLightboxImages} 
          />
        );
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <Home 
            setActivePage={navigateTo} 
            openEnquiryModal={handleOpenEnquiry}
            setLightboxIndex={setLightboxIndex}
            setLightboxImages={setLightboxImages}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E2] selection:bg-[#687348] selection:text-white relative">
      {/* Slim Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={navigateTo} 
        openEnquiryModal={handleOpenEnquiry} 
      />

      {/* Main Content Area with Smooth Fade-in */}
      <main key={activePage} className="flex-grow animate-fade-in">
        {renderCurrentPage()}
      </main>

      {/* Enhanced Luxury 4-Column Footer */}
      <Footer 
        setActivePage={navigateTo} 
        openEnquiryModal={handleOpenEnquiry} 
      />

      {/* Safari Booking Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        initialPackage={enquiryPackage}
      />

      {/* Photo Gallery Lightbox */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        currentIndex={lightboxIndex}
        images={lightboxImages}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {/* Sticky Mobile "Book Safari" Quick-Action Bar (< 640px) */}
      {showMobileQuickBar && (
        <div className="sm:hidden fixed bottom-3 inset-x-3 z-[9990] flex items-center justify-between gap-2 p-1.5 pl-3 rounded-full bg-[#173B2A]/95 backdrop-blur-md shadow-2xl border border-[#DDB64C]/40 animate-fade-in">
          <button
            onClick={() => handleOpenEnquiry('Morning Safari — ₹8,000 / Gypsy')}
            className="flex-1 py-2 px-3 rounded-full bg-[#DDB64C] hover:bg-[#cfa53b] text-[#173B2A] text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
          >
            <span>Book Safari</span>
            <span className="text-[10px] font-bold opacity-80">(₹8,000)</span>
          </button>
          
          <a
            href="tel:9657493161"
            className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 active:scale-95 transition-all shrink-0"
            aria-label="Call Naturalist"
            title="Call 9657493161"
          >
            <Phone className="w-4 h-4 text-[#DDB64C]" />
          </a>

          <a
            href="https://wa.me/919657493161?text=Hello%20Birdwing%20Ecotourism!%20I%20would%20like%20to%20enquire%20about%20a%20Chandoli%20safari."
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center active:scale-95 transition-all shadow shrink-0"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp with Birdwing Ecotourism"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      )}

      {/* Official Circular WhatsApp Floating Button (Desktop & Tablet) */}
      <a
        href="https://wa.me/919657493161?text=Hello%20Birdwing%20Ecotourism!%20I%20would%20like%20to%20enquire%20about%20a%20Chandoli%20safari."
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-10 sm:bottom-12 right-6 z-[9990] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] animate-whatsapp-pulse flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group ${
          showMobileQuickBar ? 'hidden sm:flex' : 'flex'
        }`}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Birdwing Ecotourism"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-white transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
