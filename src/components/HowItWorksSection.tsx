import React from 'react';
import { PhoneCall, FileSpreadsheet, UserCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  PhoneCall,
  FileSpreadsheet,
  UserCheck,
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Starting your job search or finding staff shouldn't be complicated. We keep the entire consultation workflow straightforward and accessible over WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || UserCheck;
            return (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50/80 rounded-2xl p-8 border border-slate-200/90 hover:border-wildo-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-wildo-blue-200 group-hover:text-wildo-blue-700 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-wildo-blue-800 flex items-center justify-center shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-wildo-blue-800 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress arrow indicator between steps on desktop */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl("Hello Willdo Job Consultancy, I would like to begin Step 1 and explore career opportunities in Thamarassery.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-whatsapp hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Begin Step 1: Send a Message on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
