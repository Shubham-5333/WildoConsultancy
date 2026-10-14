import React from 'react';
import { Compass, UserCheck, MessageCircle, HeartHandshake } from 'lucide-react';
import { TRUST_INDICATORS } from '../data/consultancyData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  UserCheck,
  MessageCircle,
  HeartHandshake,
};

export const TrustIndicators: React.FC = () => {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 p-6 sm:p-8">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-bold text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1 rounded-full">
            Our Commitment to Candidates & Employers
          </span>
        </div>

        {/* 4 Verifiable Trust Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {TRUST_INDICATORS.map((indicator, index) => {
            const IconComponent = iconMap[indicator.icon] || UserCheck;
            return (
              <div
                key={indicator.title}
                className={`flex flex-col text-left items-start ${index > 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wildo-blue-50 to-wildo-green-50 border border-slate-200 flex items-center justify-center text-wildo-blue-800 mb-3.5 shrink-0 shadow-xs">
                  <IconComponent className="w-6 h-6 text-wildo-blue-800" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {indicator.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verifiable Transparency Note */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-wildo-green-500" />
            <span>Honest, verifiable guidance for job seekers in Thamarassery and Kozhikode district</span>
          </div>
          <span className="italic">No false placement promises &bull; Dedicated one-to-one consultation</span>
        </div>

      </div>
    </section>
  );
};
