import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultancyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-wildo-blue-600 rounded-lg p-1"
            aria-label="Willdo Job Consultancy Home"
          >
            <div className="relative h-12 sm:h-14 w-auto flex items-center">
              <img
                src="/logo.png"
                alt="Willdo Job Consultancy Logo - Thamarassery, Kozhikode"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden lg:block text-left border-l border-slate-200 pl-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-wildo-blue-800">
                Job Consultancy
              </span>
              <span className="block text-[11px] text-slate-500 font-medium">
                Thamarassery, Kozhikode
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-wildo-blue-800 font-medium text-sm lg:text-[15px] px-3 py-2 rounded-lg transition-colors hover:bg-slate-100/70"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Phone quick call */}
            <a
              href={COMPANY_INFO.telLink}
              className="flex items-center gap-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-wildo-blue-800 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              title="Call Willdo Job Consultancy"
            >
              <Phone className="w-4 h-4 text-wildo-blue-700" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wildo-green-600 hover:bg-wildo-green-700 text-white font-semibold text-xs lg:text-sm px-4 py-2.5 rounded-full shadow-whatsapp hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-wildo-green-600 text-white rounded-full shadow-sm hover:bg-wildo-green-700"
              aria-label="WhatsApp Willdo Consultancy"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-wildo-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:text-wildo-blue-800 hover:bg-slate-50 font-medium px-4 py-3 rounded-lg text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.telLink}
              className="flex items-center justify-center gap-2 text-slate-700 font-semibold py-2.5 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-wildo-blue-700" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-wildo-green-600 hover:bg-wildo-green-700 text-white font-semibold py-3 px-5 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
