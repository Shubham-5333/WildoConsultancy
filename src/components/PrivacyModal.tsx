import React from 'react';
import { X, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 text-left relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-wildo-blue-50 text-wildo-blue-800 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Privacy Policy & Terms of Service
            </h3>
            <p className="text-xs text-slate-500">
              {COMPANY_INFO.name} &bull; Thamarassery, Kozhikode, Kerala
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <Lock className="w-4 h-4 text-wildo-blue-700" />
              1. Candidate Information & WhatsApp Privacy
            </h4>
            <p>
              When you contact Wildo Job Consultancy via WhatsApp or phone, any personal information, resumes, or contact details you share are strictly utilized for career guidance and matching you with suitable employers in Thamarassery and the Kozhikode region. We do not sell or rent your personal information to third-party marketing entities.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-wildo-green-600" />
              2. Ethical Advisory & Representation
            </h4>
            <p>
              Wildo Job Consultancy acts as an intermediary connecting candidates and employers. Employment decisions, compensation packages, and workplace rules are finalized between the hiring employer and the candidate. We strive to provide transparent and factual information about all roles presented.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-800">
              3. Data Retention & Deletion
            </h4>
            <p>
              Candidates can request the removal of their resume or profile from our database at any time by sending a message to our official WhatsApp (+91 85903 00976).
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-800">
              4. Contact for Inquiries
            </h4>
            <p>
              For questions regarding privacy practices, please contact Wildo Job Consultancy at our office in Thamarassery, Kozhikode, Kerala or via phone at +91 85903 00976.
            </p>
          </div>
        </div>

        {/* Close Action */}
        <div className="mt-8 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-wildo-blue-800 hover:bg-wildo-blue-900 text-white font-bold text-sm transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
