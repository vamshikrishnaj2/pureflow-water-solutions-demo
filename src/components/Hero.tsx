import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, Droplet, PhoneCall } from 'lucide-react';

interface HeroProps {
  onExploreSolutions: () => void;
  onRequestService: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onRequestService }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80">
      {/* Subtle geometric technical background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 water-pattern-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed metadata with dot separator, no pill badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase">
              <span>PureFlow Water Solutions</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">Residential & Commercial</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded text-[11px] normal-case font-medium">Demo Portfolio</span>
            </div>

            {/* Headline specified in prompt */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] max-w-2xl text-balance">
              Clean water. Reliable service.
            </h1>

            {/* Supporting text specified in prompt */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Water purifier solutions, installation and maintenance support for homes and businesses.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onRequestService}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                Explore Solutions
              </button>
            </div>

            {/* Technical Trust Strip - Unboxed cleanly */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold text-sm">
                  <Droplet className="w-4 h-4 shrink-0" />
                  <span>Multi-Stage RO+UV</span>
                </div>
                <p className="text-xs text-slate-500">TDS calibrated testing</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold text-sm">
                  <Wrench className="w-4 h-4 shrink-0" />
                  <span>Standardized Kits</span>
                </div>
                <p className="text-xs text-slate-500">Food-grade pipe fittings</p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-sky-700 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Proactive AMC</span>
                </div>
                <p className="text-xs text-slate-500">Quarterly preventive checks</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white aspect-[4/3] group">
              <img
                src={heroImage}
                alt="Modern water purifier dispensing pure water on a kitchen counter"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.img-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              
              {/* CSS fallback container if image fails */}
              <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-sky-100 to-slate-100 flex-col items-center justify-center p-6 text-center text-slate-700">
                <Droplet className="w-12 h-12 text-sky-600 mb-2" />
                <p className="font-semibold text-sm">PureFlow Water Purifier System</p>
                <p className="text-xs text-slate-500 mt-1">High-Efficiency Domestic & Commercial Filtration</p>
              </div>

              {/* Informational overlay card in corner */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-3 text-xs shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Sample Demonstration Model</p>
                    <p className="text-slate-500 text-[11px]">Under-Sink & Wall-Mount Configurations</p>
                  </div>
                  <span className="text-[11px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
                    PF-AS8-DEMO
                  </span>
                </div>
              </div>
            </div>

            {/* Quick dispatch note */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Demo Service Dispatch Simulation</span>
              <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
