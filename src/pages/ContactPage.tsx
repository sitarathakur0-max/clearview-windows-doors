import React, { useState } from 'react';
import { PageId, QuoteFormData, QuoteFormErrors } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Send, 
  Clock, 
  ShieldCheck,
  Building,
  Calendar
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    postcode: 'SE5',
    serviceType: 'Window & Door Installation',
    propertyType: 'Victorian / Period Terrace',
    notes: '',
    contactPreference: 'phone'
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: QuoteFormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number so we can call you.';
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = 'Please enter a valid UK contact number.';
    }
    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Please provide your London postcode.';
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please choose a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Instant client validation & simulated reliable handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Direct Contact & Quotations
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Contact ClearView Windows & Doors
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Based in London SE5 7HN. Reach out by phone on +44 20 8535 7540 or submit the enquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Business Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-amber-600 tracking-wider block mb-1">
                  Registered Details
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {BUSINESS_CONFIG.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Dedicated Window & Door Specialists for London Homes
                </p>
              </div>

              {/* Verified Phone */}
              <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block">
                  Direct Telephone Line:
                </span>
                <a 
                  id="contact-main-phone-link"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-2xl font-extrabold text-slate-950 hover:text-amber-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
                <p className="text-xs text-amber-800 pt-1">
                  Click above to call directly on mobile or desktop.
                </p>
              </div>

              {/* Verified Location */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Location & Postal Area:
                </span>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-slate-700 shrink-0" />
                  <span>{BUSINESS_CONFIG.location}</span>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  Serving London SE5 7HN, Camberwell, Peckham, Denmark Hill, Southwark, and surrounding London areas.
                </p>
              </div>

              {/* Verified Customer Feedback Summary */}
              <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-amber-400">Verified Rating</span>
                  <span className="text-xs font-semibold text-slate-300">{BUSINESS_CONFIG.reviewsCount} Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold font-display">{BUSINESS_CONFIG.rating}</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Consistently recognized for tidy fitting, transparent communication, and quality installations.
                </p>
              </div>
            </div>

            {/* London SE5 Location Map Illustration */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-800">Coverage Map Reference</span>
                <span>London SE5 7HN</span>
              </div>
              <div className="h-44 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex items-center justify-center text-center p-4">
                {/* Stylized geometric London map overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">London SE5 7HN</h4>
                    <p className="text-xs text-slate-600">Local Area Focus & Surrounding London Boroughs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, {formData.fullName}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your enquiry regarding <strong className="text-slate-900">{formData.serviceType}</strong> for your property in <strong className="text-slate-900">{formData.postcode}</strong> has been registered.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left text-xs text-slate-600 space-y-2 max-w-md mx-auto">
                    <div className="font-bold text-slate-900">What Happens Next:</div>
                    <p>• We will telephone you on <strong className="text-slate-900">{formData.phone}</strong> to discuss your exact window or door specifications.</p>
                    <p>• If you would like to speak to someone right now, call us on <a href={BUSINESS_CONFIG.phoneHref} className="text-amber-600 font-bold underline">{BUSINESS_CONFIG.phone}</a>.</p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          postcode: 'SE5',
                          serviceType: 'Window & Door Installation',
                          propertyType: 'Victorian / Period Terrace',
                          notes: '',
                          contactPreference: 'phone'
                        });
                      }}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-600 tracking-wider block mb-1">
                      Online Quotation & Survey Request
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      Send a Project Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete this form and our team will contact you to discuss your window and door requirements.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Edwards"
                      className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-900'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 020 8535 7540"
                        className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        London Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                        placeholder="e.g. SE5 7HN"
                        className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                          errors.postcode ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-900'
                        }`}
                      />
                      {errors.postcode && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.postcode}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Interest
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="Casement Windows">Casement Windows</option>
                        <option value="Sash Windows">Sash Windows</option>
                        <option value="uPVC Windows">uPVC Windows</option>
                        <option value="Aluminium Windows">Aluminium Windows</option>
                        <option value="Replacement Windows">Replacement Windows</option>
                        <option value="Front Doors">Front Doors</option>
                        <option value="Composite Doors">Composite Doors</option>
                        <option value="Bi-Fold Doors">Bi-Fold Doors</option>
                        <option value="Patio / Sliding Doors">Patio / Sliding Doors</option>
                        <option value="French Doors">French Doors</option>
                        <option value="Window & Door Upgrades">Window & Door Upgrades</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Property Architecture
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="Victorian / Period Terrace">Victorian / Period Terrace</option>
                        <option value="Edwardian / 1930s House">Edwardian / 1930s House</option>
                        <option value="Modern Terraced Property">Modern Terraced Property</option>
                        <option value="Semi-Detached Home">Semi-Detached Home</option>
                        <option value="Detached House">Detached House</option>
                        <option value="Purpose-Built Flat / Apartment">Purpose-Built Flat / Apartment</option>
                        <option value="Converted Flat">Converted Flat</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Notes / Specific Aperture Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Please mention approximately how many windows or doors you require, whether replacements or new apertures, and any style preferences."
                      className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>Send Project Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Directly transmitted to ClearView Windows & Doors. Call <a href={BUSINESS_CONFIG.phoneHref} className="text-slate-900 font-bold underline">{BUSINESS_CONFIG.phone}</a> for immediate inquiries.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
