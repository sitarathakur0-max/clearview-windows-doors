import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  MapPin, 
  Phone, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Home,
  Wrench,
  ThumbsUp
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              About ClearView Windows & Doors
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Dedicated Window & Door Specialists in London
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Based in London SE5 7HN, ClearView Windows & Doors is dedicated to providing high-quality window and door installations, replacements, and upgrades for London homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Delivering High Standards to Every Home
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              At ClearView Windows & Doors, we recognize that your home is your most valuable asset. Whether you are replacing draughty, single-glazed frames with high-efficiency casement windows or installing a welcoming new composite front entrance door, our approach centers on precision fitting, clear communication, and respect for your property.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Operating directly from London SE5 7HN, we work closely with homeowners across local boroughs, ensuring every project is measured accurately, planned conscientiously, and completed with tidy workmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Accurate On-Site Surveys</span>
                </div>
                <p className="text-xs text-slate-500">
                  Careful assessment of apertures and existing reveals to ensure a snug, draught-free fit.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tidy Workmanship</span>
                </div>
                <p className="text-xs text-slate-500">
                  Protection of interior floorings, neat perimeter trims, and thorough clean-up upon completion.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct Communication</span>
                </div>
                <p className="text-xs text-slate-500">
                  Straightforward advice and prompt contact via {BUSINESS_CONFIG.phone}.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified 5.0/5 Reputation</span>
                </div>
                <p className="text-xs text-slate-500">
                  Backed by 190 genuine reviews reflecting our dedication to quality outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img 
                src={BUSINESS_CONFIG.images.craftsmanship} 
                alt="Glazing craftsmanship and installation detail" 
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">ClearView Standards</span>
                  <span>London SE5 7HN</span>
                </div>
                <p className="text-xs text-slate-600">
                  Precision installation and tight frame seals designed for longevity and thermal comfort.
                </p>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-900 text-white rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-base">Speak With Us Directly</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions about your London home&apos;s windows or doors? Call our local team to discuss your project requirements.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg border border-slate-700 font-semibold"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Verified Performance Metrics */}
      <section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Verified Track Record
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Confidence in Every Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-4xl font-extrabold text-slate-900 mb-1">5.0 / 5.0</div>
              <div className="flex justify-center text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500">Average customer rating across verified feedback</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-4xl font-extrabold text-slate-900 mb-1">190</div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Reviews</div>
              <p className="text-xs text-slate-500">Documented reviews from homeowners</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="text-2xl font-extrabold text-slate-900 mb-2">{BUSINESS_CONFIG.location}</div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Location</div>
              <p className="text-xs text-slate-500">Centrally positioned to serve London properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 max-w-3xl mx-auto shadow-sm space-y-4">
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Plan Your Window or Door Project
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Contact ClearView Windows & Doors for clear, transparent advice. We are ready to assist with single replacements or full property upgrades.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
