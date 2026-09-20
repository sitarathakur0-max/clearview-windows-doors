import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { BUSINESS_CONFIG } from './config/business';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WindowsPage } from './pages/WindowsPage';
import { DoorsPage } from './pages/DoorsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Window & Door Enquiry');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize document title with verified page context
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: `ClearView Windows & Doors | Quality Windows & Doors London SE5 7HN`,
      about: `About ClearView Windows & Doors | London SE5 7HN`,
      windows: `Windows Solutions | Casement, Sash & uPVC Windows London | ClearView`,
      doors: `Doors | Composite, Bi-Fold & Sliding Patio Doors London | ClearView`,
      services: `Window & Door Services | Installation & Replacement London SE5 7HN`,
      gallery: `Projects & Design Gallery | ClearView Windows & Doors London`,
      reviews: `Customer Reviews (5.0/5 from 190 Reviews) | ClearView Windows & Doors`,
      faq: `Frequently Asked Questions | ClearView Windows & Doors London`,
      contact: `Contact ClearView Windows & Doors | London SE5 7HN | ${BUSINESS_CONFIG.phone}`,
    };

    document.title = titles[currentPage] || `${BUSINESS_CONFIG.name} | London SE5 7HN`;
  }, [currentPage]);

  // Track scroll position for "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('Window & Door Enquiry');
    }
    setIsQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={() => handleOpenQuoteModal()} 
          />
        )}
        {currentPage === 'windows' && (
          <WindowsPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'doors' && (
          <DoorsPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'gallery' && (
          <ProjectsPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentPage === 'reviews' && (
          <ReviewsPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={() => handleOpenQuoteModal()} 
          />
        )}
        {currentPage === 'faq' && (
          <FaqPage 
            onNavigate={handleNavigate} 
            onOpenQuoteModal={() => handleOpenQuoteModal()} 
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quick Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Mobile Floating Quick-Call Sticky Strip */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40">
        <a
          id="mobile-floating-phone-btn"
          href={BUSINESS_CONFIG.phoneHref}
          className="w-full flex items-center justify-between px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-xl font-bold text-sm transition-transform active:scale-98 border border-amber-600/30"
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-slate-950 text-amber-400">
              <Phone className="w-4 h-4" />
            </span>
            <span className="leading-tight text-left">
              <span className="block text-[10px] uppercase tracking-wider font-semibold text-slate-900">
                Direct Line:
              </span>
              <span>{BUSINESS_CONFIG.phone}</span>
            </span>
          </div>
          <span className="text-xs bg-slate-950 text-white px-2.5 py-1 rounded-md font-semibold">
            Call Now
          </span>
        </a>
      </div>

      {/* Desktop Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
