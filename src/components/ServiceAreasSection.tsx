import React, { useState } from 'react';
import { DEMO_SERVICE_AREAS } from '../data/mockData';
import { MapPin, Clock, CheckCircle2, Search, ArrowRight } from 'lucide-react';

interface ServiceAreasSectionProps {
  onSelectAreaForBooking: (areaName: string) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onSelectAreaForBooking }) => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>(DEMO_SERVICE_AREAS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = DEMO_SERVICE_AREAS.filter(area =>
    area.zoneName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedZone = DEMO_SERVICE_AREAS.find(a => a.id === selectedZoneId) || DEMO_SERVICE_AREAS[0];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            04. Regional Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Fictional Service Zones & Turnaround Times
          </h2>
          <p className="mt-3 text-base text-slate-600">
            For demonstration purposes, explore our simulated service zones and estimated technician arrival windows.
          </p>
        </div>

        {/* Service Areas Map */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
           <img
            src={serviceAreasMapImage}
            alt="PureFlow local service coverage zone map"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Zone Checker Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Zone List */}
          <div className="lg:col-span-7 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search fictional zones (e.g. North Valley, Metro Central)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-2xs"
              />
            </div>

            {/* Zone Cards */}
            <div className="space-y-2.5">
              {filteredAreas.map((area) => {
                const isSelected = area.id === selectedZoneId;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedZoneId(area.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white border-sky-500 shadow-sm ring-1 ring-sky-500/20'
                        : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{area.zoneName}</h4>
                          <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                            {area.code}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{area.description}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                        {area.coverageStatus}
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                        {area.standardResponse}
                      </span>
                    </div>
                  </button>
                );
              })}

              {filteredAreas.length === 0 && (
                <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
                  No fictional zones matching "{searchQuery}". Try selecting from the standard simulated zones.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Selected Zone Dispatch Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  {selectedZone.code}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedZone.zoneName}</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedZone.description}
            </p>

            <div className="space-y-3 bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Coverage Status:</span>
                <span className="font-semibold text-emerald-700">{selectedZone.coverageStatus}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Target Response Window:</span>
                <span className="font-semibold text-slate-800 font-mono">{selectedZone.standardResponse}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Technician Fleet:</span>
                <span className="font-semibold text-slate-800">Simulated Dedicated Route</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Operating Windows in this zone:</span>
              </div>
              <p className="pl-5 text-slate-500 text-[11px]">8:00 AM – 1:00 PM (Morning Slot) · 2:00 PM – 7:00 PM (Evening Slot)</p>
            </div>

            <button
              onClick={() => onSelectAreaForBooking(selectedZone.zoneName)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Request Service in {selectedZone.zoneName.split('&')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
