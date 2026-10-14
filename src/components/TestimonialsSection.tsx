import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/consultancyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1.5 rounded-full inline-block">
            Candidate Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Job Seekers Appreciate About Our Consultation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Personalized guidance, fast WhatsApp communication, and honest role matching form the foundation of our work in Thamarassery and Kozhikode.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover border border-slate-200/90 transition-all duration-300 flex flex-col justify-between text-left relative group"
            >
              {/* Quote icon background decoration */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-wildo-blue-50 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed italic mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name} - Job seeker Thamarassery`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-wildo-blue-100 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-wildo-blue-800 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Content Transparency Notice */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto text-left shadow-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-bold">Publishing Note for Business Owners:</span> The reviews above are formatted sample candidate experiences to illustrate layout styling. Before launch, replace sample records inside <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono text-[11px]">src/data/consultancyData.ts</code> with genuine, permission-approved reviews from your candidates.
          </div>
        </div>

      </div>
    </section>
  );
};
