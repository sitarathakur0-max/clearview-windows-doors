import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, WINDOW_CATEGORIES, DOOR_CATEGORIES, SERVICES_LIST, FAQ_LIST } from '../config/business';
import { 
  Phone, 
  Star, 
  ArrowRight, 
  Shield, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Sparkles,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Subtle architectural background texture */}
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
          <img 
            src={BUSINESS_CONFIG.images.hero} 
            alt="London home architectural windows and doors" 
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-semibold text-amber-400 shadow-sm backdrop-blur-sm">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold">{BUSINESS_CONFIG.rating}</span>
                <span className="text-slate-300">from {BUSINESS_CONFIG.reviewsCount} verified reviews</span>
              </div>

              {/* Exact Requested Hero Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
                Quality Windows & Doors for Your London Home
              </h1>

              {/* Professional Supporting Message (without unsupported claims) */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {BUSINESS_CONFIG.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  id="hero-primary-call-cta"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 text-base"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>

                <button
                  id="hero-quote-btn"
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-colors text-base"
                >
                  <span>Request a Quotation</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Location & Response highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Based in {BUSINESS_CONFIG.location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated Home Consultation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Advice</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group bg-slate-900">
                <img 
                  src={BUSINESS_CONFIG.images.hero} 
                  alt="Quality London residence architectural glazing" 
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-slate-950/85 backdrop-blur-xs border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-amber-400 mb-1 font-semibold">
                    <span>ClearView Windows & Doors</span>
                    <span className="text-slate-300">{BUSINESS_CONFIG.location}</span>
                  </div>
                  <p className="text-sm font-medium text-white">
                    Tailored window and door installations for London residences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Verification Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          <div className="flex items-start gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-slate-900">{BUSINESS_CONFIG.rating} Rating</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                From {BUSINESS_CONFIG.reviewsCount} customer reviews highlighting dependable service and quality finishes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900">{BUSINESS_CONFIG.location}</span>
              <p className="text-xs text-slate-500 mt-1">
                Centrally situated to attend to homeowner consultations across South London and surrounding boroughs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <a 
                href={BUSINESS_CONFIG.phoneHref}
                className="text-xl font-bold text-slate-900 hover:text-amber-600 transition-colors block"
              >
                {BUSINESS_CONFIG.phone}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Direct telephone access to discuss your specifications, queries, or booking an on-site survey.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Windows Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-amber-600 block mb-1">
              Window Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Bespoke Window Solutions
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Engineered to complement both classic Victorian streetscapes and contemporary architecture across London.
            </p>
          </div>
          <button
            onClick={() => onNavigate('windows')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
          >
            <span>Explore all window categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WINDOW_CATEGORIES.slice(0, 3).map((win) => (
            <div 
              key={win.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img 
                  src={win.image} 
                  alt={win.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium">
                  {win.title}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{win.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{win.subtitle}</p>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">{win.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('windows')}
                    className="text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(win.title)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Enquire &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doors Overview Section */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-amber-600 block mb-1">
                Door Systems
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Entrances, Patio & Bi-Fold Doors
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                High-security front doors, elegant composite profiles, and expansive bi-fold and sliding systems.
              </p>
            </div>
            <button
              onClick={() => onNavigate('doors')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
            >
              <span>View all door options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOOR_CATEGORIES.slice(0, 3).map((door) => (
              <div 
                key={door.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={door.image} 
                    alt={door.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    {door.title}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{door.title}</h3>
                    <p className="text-xs text-slate-500 mb-3">{door.subtitle}</p>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">{door.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('doors')}
                      className="text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(door.title)}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700"
                    >
                      Enquire &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-amber-600 block mb-1">
            Installation & Replacement
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Professional Glazing Services
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Structured installation and replacement services designed for London properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div 
              key={srv.id}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors shadow-xs"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{srv.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{srv.shortDesc}</p>
              <ul className="space-y-1.5 text-xs text-slate-500 mb-5">
                {srv.keyPoints.slice(0, 2).map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-slate-900 hover:text-amber-600 inline-flex items-center gap-1"
              >
                <span>Read more about this service</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section (Verified, honest advantages) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-wider uppercase text-amber-400 block mb-1">
              Why London Homeowners Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Dedicated Standards for Windows & Doors
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We focus on thorough surveys, direct communication, and respectful on-site care for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">London Focus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Based in London SE5 7HN, we understand local property layouts and residential architecture.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">5.0/5 Rated</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reflected in 190 customer reviews acknowledging our professional service and tidy work.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Tailored Fitting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Each window and door is individually planned to ensure accurate fitment into existing reveals.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-1">Direct Contact</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with our team on {BUSINESS_CONFIG.phone} for clear quotations and advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Imagery Showcase Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-amber-600 block mb-1">
              Visual Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Glazing & Entrance Showcase
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore design inspirations and architectural solutions for London properties.
            </p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-slate-200 group relative">
            <img 
              src={BUSINESS_CONFIG.images.windows} 
              alt="Casement and sash window inspiration" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">Inspirational Showcase</span>
                <h4 className="text-base font-bold">Precision Casement & Sash Windows</h4>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 group relative">
            <img 
              src={BUSINESS_CONFIG.images.doors} 
              alt="Bi-fold patio doors opening to garden" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">Inspirational Showcase</span>
                <h4 className="text-base font-bold">Contemporary Bi-Fold Doors</h4>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 group relative">
            <img 
              src={BUSINESS_CONFIG.images.frontDoor} 
              alt="Composite front entrance door design" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">Inspirational Showcase</span>
                <h4 className="text-base font-bold">High-Security Composite Entrances</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Summary Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-amber-500 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
            ))}
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            {BUSINESS_CONFIG.rating} from {BUSINESS_CONFIG.reviewsCount} Reviews
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            ClearView Windows & Doors maintains a 5.0 out of 5.0 rating based on 190 customer reviews across London. We take pride in delivering honest recommendations, dependable installations, and respect for our clients&apos; homes.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:border-slate-400 rounded-lg text-sm font-semibold text-slate-900 shadow-xs"
            >
              <span>Read Verified Review Metrics</span>
              <ChevronRight className="w-4 h-4 text-amber-500" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-amber-600 block mb-1">
            Answers & Advice
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.slice(0, 3).map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-start gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-slate-600 pl-7 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors"
          >
            <span>Browse all questions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Strong Final Enquiry CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8 sm:p-12 text-white border border-slate-800 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              London SE5 7HN • ClearView Windows & Doors
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
              Ready to Upgrade Your Windows & Doors?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Contact our London team today to discuss your replacement or new installation project. We are ready to answer your questions and arrange a consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                id="final-cta-call-btn"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-md text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <button
                id="final-cta-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors text-sm"
              >
                <span>Request a Quotation</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
