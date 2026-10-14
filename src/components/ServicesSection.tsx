import React from 'react';
import { Search, Compass, Briefcase, FileCheck, Network, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data/consultancyData';
import { getServiceInquiryWhatsAppUrl } from '../utils/whatsapp';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Search,
  Compass,
  Briefcase,
  FileCheck,
  Network,
  MapPin,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            Our Consultancy Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Employment Solutions for Job Seekers & Businesses
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From discovering entry-level roles in Thamarassery to professional career roadmaps across Kozhikode, our core services are structured to provide practical, accessible support.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-wildo-blue-50 group-hover:bg-wildo-blue-800 text-wildo-blue-800 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5 shadow-xs">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-wildo-blue-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-wildo-green-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={getServiceInquiryWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-wildo-blue-800 group-hover:text-wildo-green-700 py-2 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      Inquire about this service
                    </span>
                    <span className="text-base">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Custom Services */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 max-w-3xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600">
            <strong>Need specialized guidance?</strong> We adapt our advisory to individual career backgrounds and distinct hiring requirements. Contact Wildo Job Consultancy directly to discuss your requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
