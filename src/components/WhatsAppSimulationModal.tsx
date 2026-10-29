import React, { useState } from 'react';
import { MessageCircle, X, Send, Copy, Check, ExternalLink } from 'lucide-react';

interface WhatsAppSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const WhatsAppSimulationModal: React.FC<WhatsAppSimulationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Service'
}) => {
  const [selectedTopic, setSelectedTopic] = useState(defaultTopic);
  const [customNotes, setCustomNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getTemplateText = () => {
    switch (selectedTopic) {
      case 'Installation':
        return `Hello PureFlow Water Solutions! I would like to request an installation for a water purifier. Please share availability and technician schedule. ${customNotes ? `Note: ${customNotes}` : ''}`;
      case 'Repair / Breakdown':
        return `Hello PureFlow Support! My water purifier needs repair / diagnosis (issue: low output/vibration/leak). Please assist with a service visit. ${customNotes ? `Details: ${customNotes}` : ''}`;
      case 'AMC Enquiry':
        return `Hi PureFlow Team! I'm interested in an Annual Maintenance Contract (AMC) for my home/office purifier. Please send plan details and quarterly schedule.`;
      case 'New Product':
        return `Hi PureFlow! I'm evaluating your water purifier models for my household/office. Could you advise on the best system for my water supply?`;
      default:
        return `Hello PureFlow Water Solutions! I have an enquiry regarding water purifier sales and service.`;
    }
  };

  const messageText = getTemplateText();

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* WhatsApp Styled Header */}
        <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm">PureFlow Water Support</h3>
              <p className="text-[11px] text-emerald-200">Demonstration WhatsApp Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-md cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Select Enquiry Topic:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['General Service', 'Installation', 'Repair / Breakdown', 'AMC Enquiry', 'New Product'].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-2 rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                    selectedTopic === topic
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Add Specific Details (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Model PF-AS8, borewell water 800 ppm..."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Simulated Chat Bubble */}
          <div className="bg-[#EFEAE2] p-3 rounded-xl border border-[#DFD8CE] space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
              Simulated Message Preview:
            </span>
            <div className="bg-white rounded-lg p-3 shadow-xs text-xs text-slate-800 leading-relaxed max-w-[95%] ml-auto relative">
              <p>{messageText}</p>
              <div className="text-[10px] text-slate-400 text-right mt-1 font-mono">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ✓✓
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            Clicking <strong>Open WhatsApp</strong> will trigger your device's WhatsApp app or web portal with this pre-formatted message.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>

          <button
            onClick={handleOpenWhatsApp}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Open WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
