import React from 'react';
import { Send, PhoneCall, UserCheck, FileBadge, ArrowRight } from 'lucide-react';
import serviceProcessImage from '../assets/images/service_process_professional_1793215142064.jpg';

interface ProcessSectionProps {
  onRequestService: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onRequestService }) => {
  const steps = [
    {
      number: '01',
      title: 'Request',
      icon: <Send className="w-5 h-5 text-sky-600" />,
      description: 'Submit your requirement online, initiate a WhatsApp chat, or call our local dispatch line with your water type and machine symptoms.'
    },
    {
      number: '02',
      title: 'Confirmation',
      icon: <PhoneCall className="w-5 h-5 text-sky-600" />,
      description: 'Our customer support confirms your address, assesses cartridge compatibility, and reserves a 2-hour appointment window.'
    },
    {
      number: '03',
      title: 'Technician Visit',
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      description: 'A trained technical specialist visits your premises with calibrated digital TDS meters, pressure gauges, and sealed replacement components.'
    },
    {
      number: '04',
      title: 'Service Completion',
      icon: <FileBadge className="w-5 h-5 text-sky-600" />,
      description: 'Following a mandatory post-service purity test and leak check, you receive a digital service record and warranty verification.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            03. Service Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            A structured 4-step dispatch from request to pure water
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            No unexpected delays or guesswork. Every service visit follows a verified technical standard.
          </p>
        </div>

        {/* Visual Process Illustration */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <img
            src={serviceProcessImage}
            alt="PureFlow 4-step service process workflow"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-sky-300 hover:shadow-md transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-sky-500 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Step {idx + 1}. {step.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center text-xs text-slate-400 group-hover:text-sky-600 transition-colors font-medium">
                <span>Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 bg-sky-50/60 rounded-2xl p-6 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-base">Ready to book an inspection or filter check?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Fill in the demo form below or initiate an enquiry on WhatsApp.</p>
          </div>
          <button
            onClick={onRequestService}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm whitespace-nowrap cursor-pointer transition-all active:scale-[0.98]"
          >
            Start Service Request
          </button>
        </div>

      </div>
    </section>
  );
};
