import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { QuoteFormData, QuoteFormErrors } from '../types';
import { X, Phone, CheckCircle2, AlertCircle, ArrowRight, Shield } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Window & Door Enquiry'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    postcode: 'SE5',
    serviceType: preselectedService,
    propertyType: 'Terraced Home',
    notes: '',
    contactPreference: 'phone'
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: QuoteFormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number so we can call you.';
    } else if (formData.phone.trim().length < 9) {
      errs.phone = 'Please enter a valid telephone number.';
    }
    if (!formData.postcode.trim()) {
      errs.postcode = 'Please enter your London postcode.';
    }
    if (!formData.serviceType) {
      errs.serviceType = 'Please select the service required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift client processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      postcode: 'SE5',
      serviceType: 'Window & Door Enquiry',
      propertyType: 'Terraced Home',
      notes: '',
      contactPreference: 'phone'
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block mb-1">
              ClearView Windows & Doors
            </span>
            <h3 className="text-xl font-bold text-white">
              Request a London Quotation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              London SE5 7HN • Direct Telephone: {BUSINESS_CONFIG.phone}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Received</h4>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We have registered your enquiry for <strong className="text-slate-900">{formData.serviceType}</strong> in <strong className="text-slate-900">{formData.postcode}</strong>.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 space-y-2">
                <div className="font-semibold text-slate-800">Next Steps:</div>
                <p>• Our team will contact you on <strong className="text-slate-900">{formData.phone}</strong> to discuss your home requirements.</p>
                <p>• Need an immediate response? You can call us right away on <a href={BUSINESS_CONFIG.phoneHref} className="text-amber-600 font-bold underline">{BUSINESS_CONFIG.phone}</a>.</p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick direct telephone banner */}
              <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Prefer to discuss your project directly?</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="font-bold underline text-amber-800 hover:text-amber-950 whitespace-nowrap"
                >
                  Call {BUSINESS_CONFIG.phone}
                </a>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. David Smith"
                  className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-900'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Contact Phone & Postcode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 020 8535 7540"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
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
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    London Postcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                    placeholder="e.g. SE5 7HN"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 ${
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

              {/* Service & Property */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
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
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Property Style
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                  >
                    <option value="Victorian / Period Terrace">Victorian / Period Terrace</option>
                    <option value="Modern Terraced Home">Modern Terraced Home</option>
                    <option value="Semi-Detached House">Semi-Detached House</option>
                    <option value="Detached Residence">Detached Residence</option>
                    <option value="Flat / Apartment">Flat / Apartment</option>
                    <option value="Other Property Type">Other Property Type</option>
                  </select>
                </div>
              </div>

              {/* Project notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Project Details / Specific Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Approximate number of windows, front door style preference, or replacement needs."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing enquiry...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500 pt-1">
                Your enquiry is directly handled by ClearView Windows & Doors in London SE5 7HN.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
