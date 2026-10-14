import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SeoHelmet } from './components/SeoHelmet';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { LocalSeoSection } from './components/LocalSeoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';

export function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-wildo-green-200 selection:text-wildo-blue-900">
        {/* Dynamic SEO Meta */}
        <SeoHelmet />

        {/* Sticky Header & Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Section B: Hero */}
          <Hero />

          {/* Section C: Trust Indicators */}
          <TrustIndicators />

          {/* Section D: About Wildo Job Consultancy */}
          <AboutSection />

          {/* Section E: Our Services */}
          <ServicesSection />

          {/* Section F: SEO-Focused Local Service Section */}
          <LocalSeoSection />

          {/* Section G: How It Works */}
          <HowItWorksSection />

          {/* Section H: Testimonials */}
          <TestimonialsSection />

          {/* Section I: WhatsApp Contact Hub */}
          <WhatsAppContactSection />

          {/* Section J: Contact & Location */}
          <ContactLocationSection />
        </main>

        {/* Section K: Footer */}
        <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />

        {/* Privacy Policy & Disclaimer Modal */}
        <PrivacyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
