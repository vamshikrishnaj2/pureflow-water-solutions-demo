import React from 'react';
import { ArrowRight, MessageCircle, PhoneCall, Check } from 'lucide-react';

interface FinalCtaSectionProps {
  onRequestService: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRequestService, onOpenWhatsApp }) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sky-900 via-[#0F172A] to-[#0A1120] text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 water-pattern-subtle pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 tracking-wider uppercase">
          <span>PureFlow Water Solutions</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Sample Portfolio Showcase</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto text-balance">
          Ensure safe, tested drinking water for your home or workspace
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book an installation, schedule emergency repair, or secure year-round purity with an Annual Maintenance Contract.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={onRequestService}
            className="px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Request Service Now</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>

          <button
            onClick={onOpenWhatsApp}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer border border-emerald-500"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-sky-400" />
            <span>Digital TDS Quality Benchmark</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-sky-400" />
            <span>Calibrated Food-Grade Spares</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-sky-400" />
            <span>Simulated Instant Dispatch Queue</span>
          </span>
        </div>

      </div>
    </section>
  );
};
