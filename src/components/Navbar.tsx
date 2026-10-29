import React, { useState } from 'react';
import { Menu, X, PhoneCall, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onRequestService: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestService, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'AMC', href: '#amc' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-[#0F172A] hover:text-sky-600 transition-colors whitespace-nowrap"
          >
            PureFlow
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-sky-600 transition-colors whitespace-nowrap py-1 relative hover:underline underline-offset-4 decoration-sky-500/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200/60 whitespace-nowrap"
              title="Chat on WhatsApp (Demo Simulation)"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={onRequestService}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-sm hover:shadow whitespace-nowrap active:scale-[0.98]"
            >
              Request Service
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestService();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
            >
              Request Service
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <a
                href="tel:5550192834"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
