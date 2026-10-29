import React, { useState } from 'react';
import { DEMO_SERVICES, DEMO_AMC_PLANS } from '../data/mockData';
import { ServiceItem, ServiceType } from '../types';
import { Wrench, Hammer, RefreshCw, ShieldCheck, Check, Clock, ArrowRight, Info } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceType: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (category: ServiceType) => {
    switch (category) {
      case 'installation':
        return <Hammer className="w-5 h-5 text-sky-600" />;
      case 'repair':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'maintenance':
        return <RefreshCw className="w-5 h-5 text-emerald-600" />;
      case 'amc':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            01. Professional Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
            Technical expertise for every stage of your water system
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From precision pre-fit installations to emergency repair and all-inclusive Annual Maintenance Contracts (AMC), PureFlow provides structured water purification support.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DEMO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC]/50 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                  {getServiceIcon(service.category)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{service.turnaround}</span>
                  </div>
                  <p className="font-mono text-slate-700 text-[11px]">
                    {service.estimatedPricing}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
                <button
                  onClick={() => onSelectServiceForBooking(service.category)}
                  className="px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition-colors border border-sky-200/60 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: AMC (Annual Maintenance Contract) Section */}
        <div id="amc" className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
                Annual Maintenance Contracts (AMC)
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Predictable upkeep. Guaranteed pure water year-round.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
                Avoid sudden breakdown expenses and membrane fouling. Our AMC packages include scheduled quarterly checkups, filter replacements, and prioritized technician response.
              </p>
            </div>
            <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap self-start md:self-auto">
              Sample Fictional Rates & Plans
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_AMC_PLANS.map((plan) => {
              const isPopular = plan.badge === 'Most Popular';
              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    isPopular
                      ? 'border-sky-500 bg-sky-50/30 shadow-md relative'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 right-6 bg-sky-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                      Recommended
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{plan.title}</h4>
                    <div className="mt-2 text-2xl font-bold font-mono text-[#0F172A]">
                      {plan.priceNote}
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-normal">
                      {plan.idealFor}
                    </p>

                    <div className="my-5 border-t border-slate-200/80 pt-4 space-y-3">
                      <div className="text-xs text-slate-700 font-medium">
                        <span className="text-slate-500 block text-[11px]">Scheduled Audits:</span>
                        {plan.visitsPerYear} Preventive Visits / Year
                      </div>
                      <div className="text-xs text-slate-700 font-medium">
                        <span className="text-slate-500 block text-[11px]">Included Consumables:</span>
                        {plan.filterReplacements}
                      </div>
                      <div className="text-xs text-slate-700 font-medium">
                        <span className="text-slate-500 block text-[11px]">Breakdown Coverage:</span>
                        {plan.breakdownVisits}
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking('amc')}
                    className={`mt-6 w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
                      isPopular
                        ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    Enquire for {plan.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                  {getServiceIcon(selectedServiceModal.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedServiceModal.name}</h3>
                  <p className="text-xs text-slate-500">{selectedServiceModal.turnaround}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="text-slate-400 hover:text-slate-700 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-4 space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Technical Protocol & Checkpoints
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {selectedServiceModal.keyCheckpoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs text-slate-500 mb-6">
              <span className="font-semibold text-slate-700">Suitable For: </span>
              {selectedServiceModal.recommendedFor}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const cat = selectedServiceModal.category;
                  setSelectedServiceModal(null);
                  onSelectServiceForBooking(cat);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
              >
                Proceed to Book Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
