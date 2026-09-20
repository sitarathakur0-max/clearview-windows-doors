import React from 'react';
import { PageId } from '../types';
import { BUSINESS_CONFIG, SERVICES_LIST } from '../config/business';
import { 
  AppWindow, 
  DoorClosed, 
  RefreshCw, 
  ShieldCheck, 
  SlidersHorizontal,
  CheckCircle2,
  Phone,
  ArrowRight,
  ClipboardList,
  Hammer,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'AppWindow':
        return <AppWindow className="w-6 h-6" />;
      case 'DoorClosed':
        return <DoorClosed className="w-6 h-6" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <SlidersHorizontal className="w-6 h-6" />;
    }
  };

  const steps = [
    {
      step: "01",
      title: "Consultation & Property Survey",
      description: "We discuss your requirements, measure opening apertures accurately, and evaluate wall reveals and aesthetic goals."
    },
    {
      step: "02",
      title: "Transparent Quotation",
      description: "We provide clear, itemized details outlining the selected window or door styles and specifications."
    },
    {
      step: "03",
      title: "Careful Fitting & Clean Workmanship",
      description: "Our installers fit each unit securely with protective sheeting, level alignment, and weather-tight perimeter sealing."
    },
    {
      step: "04",
      title: "Quality Check & Handover",
      description: "We inspect smooth opening mechanisms, test all security locks, clean the work area, and demonstrate hardware operation."
    }
  ];

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Professional Installations & Upgrades
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Glazing & Fitting Services in London
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Dependable window and door services covering new installations, replacements, and performance upgrades across London SE5 7HN.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {SERVICES_LIST.map((srv, index) => (
            <div 
              key={srv.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
                    {getIcon(srv.iconName)}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">
                      Service {index + 1} of {SERVICES_LIST.length}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {srv.title}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.detailedDesc}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                      Key Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between space-y-4">
                  <div className="text-xs text-slate-500 space-y-1.5">
                    <span className="font-bold text-slate-800 block">Service Scope:</span>
                    <p>• London SE5 7HN & neighbouring areas</p>
                    <p>• On-site survey and tailored quotation</p>
                    <p>• Direct telephone support: {BUSINESS_CONFIG.phone}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <button
                      onClick={() => onOpenQuoteModal(srv.title)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire for {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="w-full py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>Call to Discuss</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Installation Workflow */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Methodical Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              How Our Installation Process Works
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From first survey through to completed handover, we keep the process organized, tidy, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div 
                key={st.step}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center mb-4">
                    {st.step}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-display">Discuss Your Service Requirements</h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Reach out to our team in London SE5 7HN on {BUSINESS_CONFIG.phone} to discuss window or door installations, upgrades, or replacements.
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
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-colors text-sm"
            >
              <span>Request Quotation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
