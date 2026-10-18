import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppContactSection: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    {
      label: 'Jobs in Thamarassery',
      text: 'Hello Willdo Job Consultancy, I am looking for job opportunities in Thamarassery. Could you please provide more information?',
    },
    {
      label: 'Career Guidance in Kozhikode',
      text: 'Hello Willdo Job Consultancy, I would like to schedule a career guidance session for jobs in Kozhikode.',
    },
    {
      label: 'Accounts / Office Roles',
      text: 'Hello Willdo Job Consultancy, I am an accounting / office administration professional looking for job vacancies in Malabar.',
    },
    {
      label: 'Hiring Staff (For Employers)',
      text: 'Hello Willdo Job Consultancy, we are an employer in Kozhikode looking to hire staff. Please share your recruitment assistance details.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-wildo-green-900 via-slate-900 to-wildo-blue-950 text-white relative overflow-hidden">
      
      {/* Decorative gradient glowing balls */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wildo-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wildo-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wildo-green-500/20 text-wildo-green-300 border border-wildo-green-400/30 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Instant Direct Communication</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Connect Instantly with Willdo Job Consultancy on WhatsApp
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No waiting for email replies or filling complex forms. Send a direct WhatsApp message to our team in Thamarassery, Kozhikode for immediate career assistance.
          </p>

          {/* Number Display & Call Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-2">
            <a
              href={COMPANY_INFO.telLink}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all"
            >
              <Phone className="w-5 h-5 text-wildo-green-400" />
              <span>Tel: {COMPANY_INFO.phone}</span>
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-wildo-green-600/30 border border-wildo-green-400/30 text-wildo-green-200 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-wildo-green-400 animate-pulse" />
              <span>Available on WhatsApp</span>
            </div>
          </div>

          {/* Quick Prefilled Message Buttons */}
          <div className="pt-4 text-left bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Choose a prefilled message or write your own:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {quickMessages.map((msg, index) => (
                <a
                  key={index}
                  href={getWhatsAppUrl(msg.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 hover:border-wildo-green-400 text-left transition-all group flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-wildo-green-300 group-hover:text-white mb-1">
                    {msg.label} &rarr;
                  </span>
                  <span className="text-xs text-slate-300 line-clamp-2">
                    "{msg.text}"
                  </span>
                </a>
              ))}
            </div>

            {/* Custom Input to WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                placeholder="Type your question or career interest here..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-wildo-green-400"
              />
              <a
                href={getWhatsAppUrl(customMsg || COMPANY_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-whatsapp transition-all text-sm shrink-0"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Open in WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wildo-green-400" />
              Direct Consultant Reply
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wildo-green-400" />
              Official WhatsApp: +91 85903 00976
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-wildo-green-400" />
              Zero Registration Fee
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
