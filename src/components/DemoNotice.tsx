import React, { useState } from 'react';
import { AlertCircle, X, ExternalLink } from 'lucide-react';

export const DemoNotice: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside aria-label="Demo Disclaimer" className="bg-amber-500/10 border-b border-amber-500/20 text-slate-800 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
          <p className="font-medium text-slate-700">
            <span className="font-bold text-amber-800">Portfolio Demonstration Only:</span> PureFlow Water Solutions is a fictional business concept. Products, service areas, and pricing are simulated. No actual technicians will be dispatched.
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors shrink-0"
          aria-label="Dismiss demo notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
