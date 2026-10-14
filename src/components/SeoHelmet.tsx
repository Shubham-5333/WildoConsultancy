import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/consultancyData';

export const SeoHelmet: React.FC = () => {
  const pageTitle = "Wildo Job Consultancy Thamarassery | Jobs in Kozhikode";
  const pageDescription = "Wildo Job Consultancy in Thamarassery, Kozhikode helps job seekers discover verified career opportunities, resume guidance, and recruitment support across Kerala. Contact on WhatsApp.";
  const canonicalUrl = "https://wildojobconsultancy.com/";
  const imageUrl = "https://wildojobconsultancy.com/logo.png";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="Job Consultancy in Thamarassery, Best Job Consultancy in Thamarassery, Job Placement Agency Thamarassery, Recruitment Agency in Thamarassery, Job Consultancy in Calicut, Job Consultancy in Kozhikode, Employment Agency Thamarassery, Jobs in Thamarassery, Job opportunities in Kozhikode" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};
