import { COMPANY_INFO } from '../data/consultancyData';

/**
 * Generates a direct WhatsApp link with an optional prefilled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
}

/**
 * Generates an inquiry link for a specific job title
 */
export function getJobInquiryWhatsAppUrl(jobTitle: string, location: string): string {
  const message = `Hello Willdo Job Consultancy, I am interested in applying for the position: "${jobTitle}" in ${location}. Could you please guide me on the requirements and interview process?`;
  return getWhatsAppUrl(message);
}

/**
 * Generates an inquiry link for a specific consultancy service
 */
export function getServiceInquiryWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello Willdo Job Consultancy, I would like to get more information regarding your "${serviceTitle}" service in Thamarassery.`;
  return getWhatsAppUrl(message);
}
