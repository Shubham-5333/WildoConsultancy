import React from 'react';
import { Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-left">
          
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-md">
              <img
                src="/logo.png"
                alt="Wildo Job Consultancy Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Wildo Job Consultancy is an ethical recruitment and career advisory service based in Thamarassery, Kozhikode. Helping candidates connect with genuine employment opportunities across Northern Kerala.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-wildo-green-600 hover:bg-wildo-green-700 text-white text-xs font-bold shadow-whatsapp transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 85903 00976)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#seo-local" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Local SEO Hub</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-wildo-green-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultancy Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_LIST.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Location & Phone
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-wildo-green-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location.displayAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-wildo-green-400 shrink-0" />
                <a href={COMPANY_INFO.telLink} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-wildo-green-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-wildo-green-400"
                >
                  WhatsApp: +91 85903 00976
                </a>
              </div>
            </div>
            
            <div className="pt-2 text-xs text-slate-500">
              <span>{COMPANY_INFO.businessHours.weekdays}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Thamarassery, Kozhikode, Kerala.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 underline underline-offset-4 cursor-pointer"
            >
              Privacy Policy & Disclaimer
            </button>
            <span className="text-slate-600">&bull;</span>
            <a
              href="#home"
              className="hover:text-slate-300"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
