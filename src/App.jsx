import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
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

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        return <TheLand setActivePage={navigateTo} openEnquiryModal={() => setIsEnquiryOpen(true)} />;
      case 'history':
        return <History setActivePage={navigateTo} />;
      case 'safari':
        return <JungleSafari openEnquiryModal={() => setIsEnquiryOpen(true)} />;
      case 'experiences':
        return (
          <Experiences 
            setActivePage={navigateTo} 
            openEnquiryModal={() => setIsEnquiryOpen(true)}
            setLightboxImages={setLightboxImages}
            setLightboxIndex={setLightboxIndex}
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
            openEnquiryModal={() => setIsEnquiryOpen(true)}
            setLightboxIndex={setLightboxIndex}
            setLightboxImages={setLightboxImages}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E2] selection:bg-[#687348] selection:text-white">
      {/* Slim Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={navigateTo} 
        openEnquiryModal={() => setIsEnquiryOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={navigateTo} />

      {/* Safari Booking Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
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
    </div>
  );
}
