import React from 'react';
import { FileText, MessageSquareShare, GitCommit, PhoneCall, ShieldCheck, Check } from 'lucide-react';

interface WhyUsSectionProps {
  onLearnMore?: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = () => {
  const genericBenefits = [
    {
      title: 'Clear Service Information',
      icon: <FileText className="w-5 h-5 text-sky-600" />,
      description: 'Transparent pricing guidelines, defined consumable lifespans, and clear scope of work before any technician starts on your purifier.'
    },
    {
      title: 'Easy Enquiry',
      icon: <MessageSquareShare className="w-5 h-5 text-sky-600" />,
      description: 'Multiple low-friction booking channels including fast online forms, instant WhatsApp messaging, and direct local telephone dispatch.'
    },
    {
      title: 'Service Request Workflow',
      icon: <GitCommit className="w-5 h-5 text-sky-600" />,
      description: 'Structured 4-step dispatch with appointment confirmation, calibrated diagnostic testing, and digital service receipts for every visit.'
    },
    {
      title: 'Local Contact',
      icon: <PhoneCall className="w-5 h-5 text-sky-600" />,
      description: 'Dedicated regional coordinators familiar with local municipal water supplies, ground water hardness, and neighborhood plumbing configurations.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-[4/3] relative group">
              <img
                src={technicianImage}
                alt="Service technician inspecting an under-sink water purification system"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.tech-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="tech-fallback hidden absolute inset-0 bg-slate-100 flex-col items-center justify-center p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-sky-600 mb-2" />
                <span className="text-sm font-bold text-slate-800">Trained Technical Service Specialist</span>
                <span className="text-xs text-slate-500 mt-1">Calibrated Equipment & Standardized Kits</span>
              </div>

              {/* Informative overlay banner */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-xl p-3 text-xs shadow-xs">
                <p className="font-semibold text-slate-900">Standardized Technical Protocol</p>
                <p className="text-slate-500 text-[11px]">Calibrated digital TDS testing and food-grade components.</p>
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-400 text-center">
              Fictional Service Representative Visual Asset
            </div>
          </div>

          {/* Right Column: Generic Benefits */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
                06. Why PureFlow
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
                Built on dependability, transparency, and responsive support
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                We believe water purification service should be simple, punctual, and straightforward. Here is how our operational model works for you:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {genericBenefits.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dedicated customer care hours: Monday through Saturday 8:00 AM – 7:00 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
