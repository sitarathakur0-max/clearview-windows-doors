import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Phone, 
  MapPin, 
  Star, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Overview & Verified Details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  London Glazing Specialists
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Quality windows and doors tailored for London properties. Providing dedicated window and door installations, replacements, and upgrades across London SE5 7HN and nearby districts.
            </p>

            {/* Verified Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">{BUSINESS_CONFIG.rating} Customer Rating</span>
                <span className="text-slate-400">Based on {BUSINESS_CONFIG.reviewsCount} verified reviews</span>
              </div>
            </div>

            {/* Verified Contact Details */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>{BUSINESS_CONFIG.location} (Serving SE5 & surrounding London areas)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  id="footer-phone-link"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Windows */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Windows
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Casement Windows', 'Sash Windows', 'uPVC Windows', 'Aluminium Windows', 'Replacement Windows'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav('windows')}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Doors */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Doors
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Front Doors', 'Composite Doors', 'Patio Doors', 'French Doors', 'Sliding Doors', 'Bi-Fold Doors'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav('doors')}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span>
                    <span>{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="text-slate-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-slate-400 hover:text-white transition-colors">
                  About ClearView
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="text-slate-400 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="text-slate-400 hover:text-white transition-colors">
                  Projects & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="text-slate-400 hover:text-white transition-colors">
                  Customer Reviews (5.0/5)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-slate-400 hover:text-white transition-colors">
                  Contact & Quotations
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.</span>
            <span>•</span>
            <span>Registered Service Area: {BUSINESS_CONFIG.location}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Direct Line:</span>
            <a 
              href={BUSINESS_CONFIG.phoneHref}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
