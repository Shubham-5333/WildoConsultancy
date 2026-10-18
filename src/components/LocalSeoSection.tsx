import React from 'react';
import { MapPin, Search, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SEO_KEYWORD_CLUSTERS } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const LocalSeoSection: React.FC = () => {
  return (
    <section id="seo-local" className="py-20 md:py-28 bg-slate-100/60 relative border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wildo-blue-100/80 text-wildo-blue-900 text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Local Career & Recruitment Guide</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Looking for a Job Consultancy Near You?
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Willdo Job Consultancy serves job seekers and regional business owners throughout Thamarassery, Calicut, and the broader Kozhikode district. Read our localized guide below to understand available employment channels.
          </p>
        </div>

        {/* Content Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SEO_KEYWORD_CLUSTERS.map((cluster) => (
            <article
              key={cluster.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-card transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-wildo-blue-800 bg-wildo-blue-50 px-2.5 py-1 rounded-md">
                    {cluster.badge}
                  </span>
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>

                {/* Sub-heading incorporating exact keyword target */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {cluster.heading}
                </h3>

                {/* Tagged keyword indicator */}
                <div className="inline-block text-[11px] font-semibold text-wildo-green-700 bg-wildo-green-50 px-2 py-0.5 rounded mb-3">
                  Key focus: {cluster.keyword}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cluster.content}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Thamarassery &bull; Kozhikode</span>
                <a
                  href={getWhatsAppUrl(`Hello Willdo Job Consultancy, I am inquiring regarding "${cluster.keyword}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-wildo-blue-800 hover:text-wildo-green-600 transition-colors"
                >
                  <span>Connect with us</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="mt-12 bg-white/90 border border-slate-200 rounded-2xl p-6 text-left max-w-4xl mx-auto shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-wildo-blue-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                Ethical Advisory Standards
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Willdo Job Consultancy operates with complete transparency. We connect candidates with legitimate employers and provide realistic guidance on interview processes and workplace requirements. We do not charge deceptive advance fees, make unrealistic guarantees of immediate placement, or publish unsubstantiated claims.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
