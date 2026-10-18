import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, MapPin, Sparkles, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50">
      {/* Decorative background blurs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-wildo-blue-100/40 via-wildo-green-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-To-Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wildo-blue-50 border border-wildo-blue-200/60 text-wildo-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-wildo-blue-600" />
              <span>Thamarassery &bull; Kozhikode, Kerala</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-wildo-green-500 animate-pulse" />
              <span className="hidden sm:inline text-wildo-green-700 font-bold">Open for Candidates</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Find the Right Job Opportunity with{' '}
              <span className="text-wildo-blue-800 relative inline-block">
                Willdo Job Consultancy
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-wildo-green-500/80" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text incorporating mandatory keywords naturally */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Your trusted <strong className="text-slate-900 font-semibold">Job Consultancy in Thamarassery</strong> and{' '}
              <strong className="text-slate-900 font-semibold">Job Consultancy in Kozhikode</strong>, connecting job seekers
              with career opportunities and helping candidates take the next step toward their future. Whether you are looking for
              entry-level or experienced <strong className="text-slate-900 font-semibold">Jobs in Thamarassery</strong>, our team provides
              personalized guidance every step of the way.
            </p>

            {/* Primary Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-wildo-blue-800 hover:bg-wildo-blue-900 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-whatsapp hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.telLink}
                className="inline-flex sm:hidden items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-wildo-blue-700" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Direct Highlights list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wildo-green-600 shrink-0" />
                <span>Zero complicated registration forms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wildo-green-600 shrink-0" />
                <span>Direct WhatsApp contact with consultant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wildo-green-600 shrink-0" />
                <span>Local positions in Thamarassery & Calicut</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-wildo-green-600 shrink-0" />
                <span>Ethical, transparent guidance for candidates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual and Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-wildo-blue-600 to-wildo-green-500 rounded-3xl opacity-20 blur-lg" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/hero-consultation.jpg"
                  alt="Career consultation at Willdo Job Consultancy in Thamarassery Kozhikode"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Caption on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-xs uppercase tracking-wider font-semibold text-wildo-green-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Personalized Guidance
                  </p>
                  <p className="text-sm sm:text-base font-bold drop-shadow-sm">
                    Connecting Candidates with Employers Across Malabar
                  </p>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-lg rounded-2xl p-3 sm:p-4 text-left max-w-[210px] animate-bounce-slow">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-wildo-green-100 flex items-center justify-center text-wildo-green-600 font-bold shrink-0">
                    <MessageCircle className="w-5 h-5 fill-wildo-green-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Fast Connect</p>
                    <p className="text-xs font-bold text-slate-900">Direct WhatsApp Help</p>
                  </div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-lg rounded-2xl p-3 sm:p-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-wildo-blue-100 flex items-center justify-center text-wildo-blue-700 font-bold shrink-0">
                    <MapPin className="w-5 h-5 text-wildo-blue-800" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Headquartered in</p>
                    <p className="text-xs sm:text-sm font-bold text-wildo-blue-900">Thamarassery, Kozhikode</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
