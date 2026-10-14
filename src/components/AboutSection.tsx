import React from 'react';
import { Target, Users, Building2, CheckCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual feature card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Background gradient border card */}
              <div className="bg-gradient-to-br from-wildo-blue-800 to-wildo-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden text-left">
                
                {/* Decorative background circle */}
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-wildo-green-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-wildo-green-400 text-xs font-semibold backdrop-blur-sm">
                    <Target className="w-3.5 h-3.5" />
                    <span>Candidate-Centric Mission</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    Rooted in Thamarassery, Serving the Entire Malabar District
                  </h3>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    At Wildo Job Consultancy, we believe every individual deserves clarity and genuine guidance when navigating employment opportunities. Based in Thamarassery, we maintain strong relationships with regional businesses to help candidates find sustainable positions.
                  </p>

                  <div className="pt-4 border-t border-white/15 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wildo-green-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Direct Guidance</h4>
                        <p className="text-xs text-slate-300">Understanding your profile, preferences, and long-term career aspirations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wildo-green-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Transparent Role Details</h4>
                        <p className="text-xs text-slate-300">We outline working hours, location proximity, and remuneration before introducing you.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl("Hello Wildo Job Consultancy, I would like to learn more about your career guidance process in Thamarassery.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-wildo-green-300 hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-wildo-green-400" />
                      <span>Chat with our career counselor &rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 right-4 sm:right-8 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-wildo-blue-50 flex items-center justify-center text-wildo-blue-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase text-slate-400">Headquarters</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800">Thamarassery, Kozhikode</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-blue-800 bg-wildo-blue-50 px-3.5 py-1.5 rounded-full inline-block">
                About Wildo Job Consultancy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Local Career Partner in Thamarassery
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Wildo Job Consultancy is an independent recruitment and career advisory service established in{' '}
              <strong className="text-slate-900 font-semibold">Thamarassery, Kozhikode</strong>. We assist job seekers
              across Northern Kerala in finding suitable employment avenues that match their individual talents, qualifications,
              and aspirations.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Navigating today's job market can be challenging, especially for fresh graduates, career switchers, and job seekers
              who want opportunities close to home. Rather than overwhelming candidates with unverified listings, our consultancy
              takes time to understand each applicant's background, recommending relevant positions in retail, administration, accounts,
              sales, and specialized services throughout Thamarassery, Calicut, and adjacent districts.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-wildo-blue-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-wildo-blue-100 text-wildo-blue-800 flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">For Job Seekers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear resume assessment, advice on in-demand skills in Kozhikode, and direct employer interview coordination.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-wildo-blue-200 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-wildo-green-100 text-wildo-green-800 flex items-center justify-center mb-2.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">For Local Employers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dependable talent sourcing in Thamarassery and Calicut without advertising hassles or sorting hundreds of irrelevant CVs.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello Wildo Job Consultancy, I would like to schedule a career guidance session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-whatsapp transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-wildo-blue-800 hover:text-wildo-blue-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <span>Explore all services</span>
                <span>&darr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
