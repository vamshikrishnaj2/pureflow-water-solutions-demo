import React from 'react';
import { Phone, MessageCircle, Wrench } from 'lucide-react';

interface MobileStickyBarProps {
  onRequestService: () => void;
  onOpenWhatsApp: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onRequestService, onOpenWhatsApp }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto h-11">
        
        {/* Quick Call */}
        <a
          href="tel:5550192834"
          className="flex-1 flex items-center justify-center gap-1.5 h-full rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
          aria-label="Call PureFlow helpline"
        >
          <Phone className="w-3.5 h-3.5 text-slate-600" />
          <span>Call</span>
        </a>

        {/* Quick WhatsApp */}
        <button
          onClick={onOpenWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 h-full rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </button>

        {/* Primary Request Service Button */}
        <button
          onClick={onRequestService}
          className="flex-[1.6] flex items-center justify-center gap-1.5 h-full rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          aria-label="Request service"
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Request Service</span>
        </button>

      </div>
    </div>
  );
};
