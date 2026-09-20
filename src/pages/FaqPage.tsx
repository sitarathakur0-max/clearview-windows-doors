import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, FAQ_LIST, FaqItem } from '../config/business';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Search, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Quotes & Pricing', 'Installation', 'Products'];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Information & Guidance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Find useful guidance regarding window and door enquiries, surveys, product selection, and contacting ClearView Windows & Doors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600">No matching questions found.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs font-bold text-amber-600 hover:underline"
            >
              View all questions
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${isOpen ? 'text-amber-600' : 'text-slate-400'}`} />
                      <span className="font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150 pl-11">
                      <p>{faq.answer}</p>
                      <div className="mt-3">
                        <span className="inline-block text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still have questions prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-display">Have a specific enquiry not listed here?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Our London team is available by telephone to address any individual queries regarding your property, sizing, or door configurations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs border border-slate-700 transition-colors"
            >
              Send Online Enquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
