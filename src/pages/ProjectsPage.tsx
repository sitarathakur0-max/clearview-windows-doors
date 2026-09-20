import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/gallery';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Info, 
  Search, 
  Maximize2, 
  X, 
  Phone, 
  ArrowRight,
  Sparkles,
  Layers,
  MapPin
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'windows' | 'doors' | 'glazing'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Visual Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Glazing Projects & Design Gallery
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore architectural window and door design styles for London residences.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Accuracy & Transparency Disclaimer as specified in prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 text-amber-950">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 text-sm">
              Architectural Showcase & Inspiration Notice
            </h3>
            <p className="text-slate-700 leading-relaxed">
              The visuals in this gallery represent architectural concepts, style configurations, and glazing inspirations for residential properties. We do not present unverified stock imagery as specific customer installations. If you would like to discuss verified case studies or local installations in the <strong>London SE5 7HN</strong> area, please contact our team directly at <a href={BUSINESS_CONFIG.phoneHref} className="font-bold text-amber-800 underline">{BUSINESS_CONFIG.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap pb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Showcase ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('windows')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'windows'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Windows
          </button>
          <button
            onClick={() => setFilter('doors')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'doors'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Doors
          </button>
          <button
            onClick={() => setFilter('glazing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'glazing'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Façades & Architectural Glazing
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col"
            >
              <div 
                className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-2.5 rounded-full bg-white/90 text-slate-900 shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-amber-400 text-xs px-2.5 py-1 rounded-md font-semibold">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveItem(item)}
                    className="text-xs font-semibold text-slate-700 hover:text-slate-950"
                  >
                    Expand View
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(item.title)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Enquire on Style &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-80 sm:h-96 bg-slate-950">
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                    {activeItem.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{activeItem.title}</h3>
                </div>
                <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md capitalize">
                  {activeItem.category}
                </span>
              </div>
              <p className="text-sm text-slate-600">{activeItem.description}</p>
              
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-xs font-bold text-slate-800 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ask about this concept: {BUSINESS_CONFIG.phone}</span>
                </a>
                <button
                  onClick={() => {
                    const title = activeItem.title;
                    setActiveItem(null);
                    onOpenQuoteModal(title);
                  }}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
                >
                  Request Consultation on this Style
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-display">Have a specific design in mind?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Call us on {BUSINESS_CONFIG.phone} or request a survey in London SE5 7HN.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors"
          >
            Start Your Project Enquiry
          </button>
        </div>
      </section>
    </div>
  );
};
