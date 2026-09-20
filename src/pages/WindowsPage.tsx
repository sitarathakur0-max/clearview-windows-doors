import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, WINDOW_CATEGORIES, WindowCategory } from '../config/business';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Sparkles, 
  SlidersHorizontal,
  Home,
  ShieldCheck,
  Search
} from 'lucide-react';

interface WindowsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const WindowsPage: React.FC<WindowsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredWindows = WINDOW_CATEGORIES.filter((win) => {
    const matchesCat = selectedCategory === 'all' || win.id === selectedCategory;
    const matchesSearch = win.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          win.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          win.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              ClearView Window Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Bespoke Windows for London Homes
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore our editable range of window styles designed to complement classic London properties and modern developments alike.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Windows ({WINDOW_CATEGORIES.length})
              </button>
              {WINDOW_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search window styles..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Window Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredWindows.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-sm text-slate-500">No window categories matched your search.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-amber-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWindows.map((win) => (
              <div 
                key={win.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image Header */}
                <div className="h-56 sm:h-64 relative overflow-hidden bg-slate-100">
                  <img 
                    src={win.image} 
                    alt={win.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {win.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{win.title}</h2>
                      <p className="text-xs text-amber-700 font-medium">{win.subtitle}</p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {win.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2">
                        Key Features:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {win.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Ideal For: </span>
                      <span className="text-slate-600">{win.idealFor}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>Ask about {win.title}</span>
                    </a>

                    <button
                      onClick={() => onOpenQuoteModal(win.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              London SE5 7HN Glazing Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Unsure which window style suits your property?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our team can provide guidance on balancing architectural heritage with modern thermal performance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors"
            >
              Call {BUSINESS_CONFIG.phone}
            </a>
            <button
              onClick={() => onOpenQuoteModal('Window Consultation')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
