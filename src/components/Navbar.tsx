import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Phone, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  ChevronRight, 
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'windows', label: 'Windows' },
    { id: 'doors', label: 'Doors' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Projects' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Location & Rating */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{BUSINESS_CONFIG.location}</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <button 
              onClick={() => handleNavClick('reviews')}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
              title="View verified 5.0/5 rating"
            >
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white ml-1">{BUSINESS_CONFIG.rating}</span>
              <span className="text-slate-400">({BUSINESS_CONFIG.reviewsCount} reviews)</span>
            </button>
          </div>

          {/* Direct Phone Link */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden lg:inline">Speak to our London team:</span>
            <a
              id="topbar-phone-link"
              href={BUSINESS_CONFIG.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`bg-white transition-all duration-200 border-b border-slate-200 ${isScrolled ? 'py-3 shadow-md' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shadow-sm group-hover:bg-slate-800 transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                ClearView
              </span>
              <span className="text-xs tracking-wider uppercase text-slate-500 font-semibold block">
                Windows & Doors
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Us</span>
            </a>
            <button
              id="header-quote-cta"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                id="mobile-drawer-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
              >
                <span>Request Quotation</span>
              </button>
              <div className="text-center text-xs text-slate-500 pt-1">
                Serving {BUSINESS_CONFIG.location} & surrounding London areas
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
