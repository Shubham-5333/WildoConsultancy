import React, { useState } from 'react';
import { MapPin, Clock, MessageCircle, Award } from 'lucide-react';
import { SAMPLE_JOB_OPPORTUNITIES } from '../data/consultancyData';
import { getJobInquiryWhatsAppUrl, getWhatsAppUrl } from '../utils/whatsapp';

export const JobOpportunitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Sales & Retail',
    'Finance & Accounts',
    'Administration',
    'Marketing',
    'Customer Support',
    'Operations',
  ];

  const filteredJobs = selectedCategory === 'All'
    ? SAMPLE_JOB_OPPORTUNITIES
    : SAMPLE_JOB_OPPORTUNITIES.filter((j) => j.category === selectedCategory);

  return (
    <section id="jobs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-wildo-green-800 bg-wildo-green-50 px-3.5 py-1.5 rounded-full inline-block">
            Explore Openings & Roles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Job Opportunities in Thamarassery & Kozhikode
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Browse through representative openings frequently sourced for local businesses. Contact our consultancy directly via WhatsApp to submit your resume or check live vacancy statuses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-wildo-blue-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 hover:bg-white hover:shadow-card hover:border-wildo-blue-200 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header Tag and Type */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide bg-wildo-blue-100/70 text-wildo-blue-900">
                    {job.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {job.type}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-wildo-blue-800 transition-colors mb-2 leading-snug">
                  {job.title}
                </h3>

                {/* Location & Experience Badges */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-4">
                  <div className="flex items-center gap-1 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-wildo-green-600 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Award className="w-3.5 h-3.5 text-wildo-blue-600 shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {job.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Quick WhatsApp Application</span>
                <a
                  href={getJobInquiryWhatsAppUrl(job.title, job.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-wildo-green-600 hover:bg-wildo-green-700 shadow-xs hover:shadow transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Apply via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Submission Banner */}
        <div className="mt-14 bg-gradient-to-r from-wildo-blue-900 via-wildo-blue-800 to-wildo-blue-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Don't See Your Exact Role Listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We frequently receive new requirements for retail, accounts, teaching, sales, and office management across Thamarassery and Kozhikode. Send us your resume via WhatsApp and we will match suitable openings as soon as they arise.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl("Hello Wildo Job Consultancy, I am submitting my resume to register for upcoming job openings in Thamarassery / Kozhikode.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-wildo-blue-950 bg-white hover:bg-slate-100 shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-wildo-green-600 text-wildo-green-600" />
              <span>Send Your Resume on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
