import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  onOpenWhatsApp: () => void;
  onRequestService: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenWhatsApp, onRequestService }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            08. Direct Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Get in touch with PureFlow support
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about your water supply, filter change schedules, or AMC plans? Reach out via WhatsApp, phone, or our online form.
          </p>
        </div>

        {/* Customer Support Visual */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src={customerSupportImage}
            alt="PureFlow customer support representative"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WhatsApp Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">WhatsApp Support</h3>
              <p className="text-xs text-slate-500 mt-1">Instant chat for quick troubleshooting and photo-sharing of purifier models.</p>
              <div className="mt-4 font-mono font-semibold text-slate-800 text-xs">
                +1 (555) 019-2834
              </div>
            </div>
            <button
              onClick={onOpenWhatsApp}
              className="mt-6 w-full py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Phone Call Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Telephone Dispatch</h3>
              <p className="text-xs text-slate-500 mt-1">Speak directly with our service dispatch coordinator for urgent repairs.</p>
              <div className="mt-4 font-mono font-semibold text-slate-800 text-xs">
                (800) 555-FLOW / 555-019-2834
              </div>
            </div>
            <a
              href="tel:5550192834"
              className="mt-6 w-full py-2 px-3 text-xs font-semibold text-sky-800 bg-sky-100/70 hover:bg-sky-200/80 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Call Helpline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Corporate Email</h3>
              <p className="text-xs text-slate-500 mt-1">Submit inquiries for commercial AMC proposals and bulk office installations.</p>
              <div className="mt-4 font-mono font-semibold text-slate-800 text-xs break-all">
                support@pureflow-demo.example
              </div>
            </div>
            <a
              href="mailto:support@pureflow-demo.example"
              className="mt-6 w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Service Headquarters</h3>
              <p className="text-xs text-slate-500 mt-1">Fictional demonstration depot and technician dispatch center.</p>
              <div className="mt-4 text-slate-700 text-xs leading-relaxed">
                Suite 204, Water Works Boulevard, Fictional Metro District
              </div>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Mon–Sat: 8 AM – 7 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
