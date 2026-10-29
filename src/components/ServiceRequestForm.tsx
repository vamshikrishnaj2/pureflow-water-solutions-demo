import React, { useState, useEffect } from 'react';
import { ServiceType, ServiceRequestSubmission } from '../types';
import { DEMO_SERVICE_AREAS } from '../data/mockData';
import { 
  Send, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  MessageSquare, 
  FileText, 
  Copy, 
  Check, 
  MessageCircle, 
  AlertTriangle,
  Code
} from 'lucide-react';

interface ServiceRequestFormProps {
  initialServiceType?: ServiceType;
  initialArea?: string;
  initialMessage?: string;
}

export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({
  initialServiceType = 'installation',
  initialArea = '',
  initialMessage = '',
}) => {
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState<ServiceType>(initialServiceType);
  const [locationArea, setLocationArea] = useState(initialArea || DEMO_SERVICE_AREAS[0].zoneName);
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (8:00 AM - 1:00 PM)');
  const [waterSource, setWaterSource] = useState('Municipal / Tap Water');
  const [message, setMessage] = useState(initialMessage);

  // Sync props if changed from outside
  useEffect(() => {
    if (initialServiceType) setServiceType(initialServiceType);
  }, [initialServiceType]);

  useEffect(() => {
    if (initialArea) setLocationArea(initialArea);
  }, [initialArea]);

  useEffect(() => {
    if (initialMessage) setMessage(initialMessage);
  }, [initialMessage]);

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<ServiceRequestSubmission | null>(null);
  const [copiedTicket, setCopiedTicket] = useState(false);
  const [showJsonPayload, setShowJsonPayload] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Future-proof submission handler:
   * Structured so a real backend / CRM (Firebase, Supabase, Cloud SQL, Zapier, Twilio/WhatsApp)
   * can seamlessly replace the simulated timeout.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare clean structured payload ready for API/CRM
    const payload: ServiceRequestSubmission = {
      id: `PF-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      serviceType,
      locationArea,
      preferredDate,
      timeSlot,
      waterSource,
      message: message.trim(),
      status: 'Simulation Created'
    };

    // Simulate async API call with latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(payload);
    }, 600);
  };

  const handleCopyTicket = () => {
    if (!submissionSuccess) return;
    const textToCopy = `PureFlow Demo Service Ticket: ${submissionSuccess.id}\nCustomer: ${submissionSuccess.name}\nService: ${submissionSuccess.serviceType}\nDate: ${submissionSuccess.preferredDate} (${submissionSuccess.timeSlot})\nLocation: ${submissionSuccess.locationArea}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2000);
  };

  const handleOpenWhatsAppSim = () => {
    if (!submissionSuccess) return;
    const text = encodeURIComponent(
      `Hello PureFlow Water Solutions! I just created Demo Ticket ${submissionSuccess.id} for ${submissionSuccess.serviceType} in ${submissionSuccess.locationArea}.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setPreferredDate('');
  };

  return (
    <section id="service-form" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
            05. Request Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Schedule an installation, repair, or maintenance visit
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Submit your details below. For this demonstration, submissions generate a simulated service ticket and structured payload.
          </p>
        </div>

        {/* Clear Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-950">Demonstration Form Notice:</p>
            <p className="text-amber-800 leading-relaxed">
              This form is for demonstration and UX evaluation only. No real technicians will visit and no phone calls will be made. You can safely test the input validation and simulated ticket generation.
            </p>
          </div>
        </div>

        {/* Main Form or Success Card */}
        {submissionSuccess ? (
          <div className="bg-[#F8FAFC] border border-sky-300 rounded-2xl p-6 sm:p-8 max-w-3xl shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-3 text-emerald-600 mb-4">
              <CheckCircle className="w-7 h-7 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Demo Service Ticket Generated Successfully
                </h3>
                <p className="text-xs text-slate-500">
                  Simulation Reference: <span className="font-mono font-bold text-sky-700">{submissionSuccess.id}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 my-6 space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-slate-400 block text-xs">Customer Name</span>
                  <span className="font-semibold text-slate-800">{submissionSuccess.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Contact Phone</span>
                  <span className="font-semibold text-slate-800 font-mono">{submissionSuccess.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Service Type</span>
                  <span className="font-semibold text-sky-700 capitalize">{submissionSuccess.serviceType.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Location Zone</span>
                  <span className="font-semibold text-slate-800">{submissionSuccess.locationArea}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Requested Schedule</span>
                  <span className="font-semibold text-slate-800">{submissionSuccess.preferredDate} ({submissionSuccess.timeSlot})</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Water Source</span>
                  <span className="font-semibold text-slate-800">{submissionSuccess.waterSource}</span>
                </div>
              </div>

              {submissionSuccess.message && (
                <div className="pt-2 text-xs">
                  <span className="text-slate-400 block">Notes & Description:</span>
                  <p className="text-slate-700 mt-1 italic">"{submissionSuccess.message}"</p>
                </div>
              )}
            </div>

            {/* Actions on Ticket */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopyTicket}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedTicket ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedTicket ? 'Copied to Clipboard' : 'Copy Ticket Info'}</span>
              </button>

              <button
                onClick={handleOpenWhatsAppSim}
                className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Simulate WhatsApp Notification</span>
              </button>

              <button
                onClick={() => setShowJsonPayload(!showJsonPayload)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-transparent rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Code className="w-3.5 h-3.5" />
                <span>{showJsonPayload ? 'Hide API Payload' : 'View CRM Payload'}</span>
              </button>

              <button
                onClick={handleReset}
                className="ml-auto px-4 py-2 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>

            {/* Structured Developer Architecture Payload */}
            {showJsonPayload && (
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto">
                <div className="text-[11px] text-slate-400 mb-2">// Ready for REST API / Database / CRM Webhook</div>
                <pre>{JSON.stringify(submissionSuccess, null, 2)}</pre>
              </div>
            )}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl shadow-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.name ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Type <span className="text-rose-500">*</span>
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value as ServiceType)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="installation">New Purifier Installation</option>
                  <option value="repair">Repair & Troubleshooting (Motor / Leak / Flow)</option>
                  <option value="maintenance">Maintenance & Filter Change</option>
                  <option value="amc">Annual Maintenance Contract (AMC)</option>
                  <option value="new_purifier_consult">New Purifier Model Consultation</option>
                </select>
              </div>

              {/* Location Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Demo Location / Zone <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={locationArea}
                    onChange={(e) => setLocationArea(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {DEMO_SERVICE_AREAS.map((area) => (
                      <option key={area.id} value={area.zoneName}>
                        {area.zoneName} ({area.code})
                      </option>
                    ))}
                    <option value="Other Demo Zone">Other Fictional Suburb</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full pl-9 pr-3 py-2.5 bg-white border rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.preferredDate ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.preferredDate && <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>}
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Arrival Window
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Morning (8:00 AM - 1:00 PM)">Morning (8:00 AM – 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM – 7:30 PM)</option>
                </select>
              </div>

              {/* Water Supply Source */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Water Supply Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Municipal / Tap',
                    'Borewell / Deep Well',
                    'Water Tanker',
                    'Unsure / Mixed'
                  ].map((source) => (
                    <button
                      type="button"
                      key={source}
                      onClick={() => setWaterSource(source)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        waterSource === source
                          ? 'bg-sky-50 border-sky-500 text-sky-800 shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {source}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Symptoms */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Machine Details
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="Provide machine model or describe issues (e.g. low pressure, bad taste, routine filter replacement)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

            </div>

            {/* Submit Button */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Safe demo simulation · No charges or spam
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span>Generating Demo Ticket...</span>
                ) : (
                  <>
                    <span>Submit Service Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
