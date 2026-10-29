import React from 'react';
import { Droplet, Phone, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onRequestService: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onRequestService }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1120] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-xl font-bold text-white tracking-tight inline-block">
              PureFlow
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Demonstration portfolio project for PureFlow Water Solutions. Showcasing water purification systems, residential installations, breakdown troubleshooting, and proactive Annual Maintenance Contracts (AMC).
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-400/90 leading-normal">
              <strong>Portfolio Notice:</strong> Fictional demonstration concept. No real commercial sales, product approvals, certifications, or on-site visits occur.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('#products')} className="hover:text-white transition-colors cursor-pointer">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#amc')} className="hover:text-white transition-colors cursor-pointer">
                  AMC Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors cursor-pointer">
                  Why PureFlow
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onRequestService} className="hover:text-white transition-colors cursor-pointer text-left">
                  RO Installation
                </button>
              </li>
              <li>
                <button onClick={onRequestService} className="hover:text-white transition-colors cursor-pointer text-left">
                  Motor & Leak Repair
                </button>
              </li>
              <li>
                <button onClick={onRequestService} className="hover:text-white transition-colors cursor-pointer text-left">
                  Filter Replacement
                </button>
              </li>
              <li>
                <button onClick={onRequestService} className="hover:text-white transition-colors cursor-pointer text-left">
                  Annual AMC Shield
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Demo Dispatch</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+1 (555) 019-2834</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Instant Demo</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>support@pureflow-demo.example</span>
              </p>
              <p className="text-slate-500 pt-1 text-[11px]">
                Mon–Sat: 8:00 AM – 7:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} PureFlow Water Solutions. Fictional Portfolio Project.
          </div>
          <div className="flex items-center gap-4">
            <span>Clean Water Solutions</span>
            <span>·</span>
            <span>Reliable Local Support</span>
            <span>·</span>
            <span>Demo Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
