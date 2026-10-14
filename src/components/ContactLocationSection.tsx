import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            Contact & Office Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reach Out to Our Thamarassery Office
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Have questions about local job openings in Kozhikode or want to schedule an in-person consultation? Get in touch with our team today.
          </p>
        </div>

        {/* Contact Info and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch text-left">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            {/* Primary Details Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-6">
              
              {/* Company & Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-wildo-blue-100 text-wildo-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {COMPANY_INFO.location.displayAddress}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    (Exact office landmark / street address can be updated upon confirmation)
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-wildo-blue-100 text-wildo-blue-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    Telephone Call
                  </h4>
                  <a
                    href={COMPANY_INFO.telLink}
                    className="text-base sm:text-lg font-bold text-wildo-blue-800 hover:text-wildo-blue-900 transition-colors mt-0.5 block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Tap to dial directly from your smartphone
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-wildo-green-100 text-wildo-green-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-wildo-green-600" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    WhatsApp Chat (Primary)
                  </h4>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-wildo-green-700 hover:text-wildo-green-800 transition-colors mt-0.5 block"
                  >
                    +91 85903 00976
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast response during regular consultation hours
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    Consultation Hours (Editable)
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {COMPANY_INFO.businessHours.weekdays}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {COMPANY_INFO.businessHours.sunday}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-whatsapp hover:shadow-lg transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Message Us on WhatsApp Now</span>
            </a>

          </div>

          {/* Right Column: Google Maps Embed Placeholder for Thamarassery, Kozhikode */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden flex-1 shadow-card flex flex-col">
              
              {/* Map Header Bar */}
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-wildo-blue-800" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Location: Thamarassery, Kozhikode, Kerala
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thamarassery+Kozhikode+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-wildo-blue-800 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe showing Thamarassery, Kozhikode */}
              <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-200">
                <iframe
                  title="Wildo Job Consultancy Thamarassery Kozhikode Location Map"
                  src="https://maps.google.com/maps?q=Thamarassery,%20Kozhikode,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Note */}
              <div className="p-4 bg-white/95 text-xs text-slate-500 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <span>Centrally located in Thamarassery on NH 766 (Calicut-Wayanad road corridor)</span>
                <span className="text-wildo-blue-800 font-semibold">Easy access for candidates across Calicut</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
