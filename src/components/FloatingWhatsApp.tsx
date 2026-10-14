import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');

  const sampleQuestions = [
    "I am looking for jobs in Thamarassery",
    "What openings are available in Kozhikode?",
    "Need career guidance for freshers",
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-left">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-wildo-green-700 to-wildo-green-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-wildo-green-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Wildo Job Consultancy</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Thamarassery &bull; Typically replies fast
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-slate-200/80 text-slate-700 max-w-[85%]">
              Hello! 👋 Welcome to Wildo Job Consultancy in Thamarassery. How can we help your career today?
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-500">Quick inquiries:</p>
              {sampleQuestions.map((q, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppUrl(`Hello Wildo Job Consultancy, ${q}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 bg-white hover:bg-wildo-green-50 border border-slate-200 hover:border-wildo-green-300 rounded-lg text-slate-700 hover:text-wildo-green-800 font-medium transition-colors"
                >
                  {q} &rarr;
                </a>
              ))}
            </div>
          </div>

          {/* Footer input */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type message to WhatsApp..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.open(getWhatsAppUrl(userInput || COMPANY_INFO.defaultWhatsAppMessage), '_blank');
                  setUserInput('');
                  setIsOpen(false);
                }
              }}
              className="flex-1 px-3 py-2 text-xs bg-slate-100 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-wildo-green-600"
            />
            <a
              href={getWhatsAppUrl(userInput || COMPANY_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setUserInput('');
                setIsOpen(false);
              }}
              className="p-2 bg-wildo-green-600 hover:bg-wildo-green-700 text-white rounded-lg transition-colors shrink-0"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-wildo-green-600 hover:bg-wildo-green-700 text-white px-4 py-3.5 rounded-full shadow-whatsapp hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-whatsapp-pulse cursor-pointer"
        aria-label="Chat on WhatsApp with Wildo Job Consultancy"
      >
        <MessageCircle className="w-6 h-6 fill-white shrink-0" />
        <span className="font-bold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-200 animate-ping sm:hidden" />
      </button>

    </div>
  );
};
