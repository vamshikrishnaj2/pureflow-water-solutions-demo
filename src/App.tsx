import React, { useState } from 'react';
import { DemoNotice } from './components/DemoNotice';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ServiceRequestForm } from './components/ServiceRequestForm';
import { WhyUsSection } from './components/WhyUsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { WhatsAppSimulationModal } from './components/WhatsAppSimulationModal';
import { ServiceType } from './types';

export default function App() {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppDefaultTopic, setWhatsAppDefaultTopic] = useState('General Service');

  // Form pre-fill states when users click buttons on cards
  const [formServiceType, setFormServiceType] = useState<ServiceType>('installation');
  const [formLocationArea, setFormLocationArea] = useState<string>('');
  const [formCustomMessage, setFormCustomMessage] = useState<string>('');

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestService = () => {
    scrollToSection('#service-form');
  };

  const handleExploreSolutions = () => {
    scrollToSection('#products');
  };

  const handleSelectServiceForBooking = (serviceType: ServiceType) => {
    setFormServiceType(serviceType);
    if (serviceType === 'amc') {
      setFormCustomMessage('Enquiring about an Annual Maintenance Contract (AMC) plan.');
    } else {
      setFormCustomMessage(`Requesting service for: ${serviceType.toUpperCase()}`);
    }
    scrollToSection('#service-form');
  };

  const handleEnquireProduct = (productName: string) => {
    setFormServiceType('new_purifier_consult');
    setFormCustomMessage(`I am interested in specifications, pricing, and demo availability for the model: ${productName}.`);
    scrollToSection('#service-form');
  };

  const handleSelectAreaForBooking = (areaName: string) => {
    setFormLocationArea(areaName);
    scrollToSection('#service-form');
  };

  const handleOpenWhatsApp = (topic: string = 'General Service') => {
    setWhatsAppDefaultTopic(topic);
    setWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] pb-14 md:pb-0">
      {/* 1. DEMO NOTICE BANNER */}
      <DemoNotice />

      {/* 2. NAVBAR (Strict Top Bar Contract) */}
      <Navbar
        onRequestService={handleRequestService}
        onOpenWhatsApp={() => handleOpenWhatsApp('General Service')}
      />

      <main className="flex-grow">
        {/* 3. HERO SECTION */}
        <Hero
          onExploreSolutions={handleExploreSolutions}
          onRequestService={handleRequestService}
        />

        {/* 4. SERVICES & AMC SECTION */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 5. PRODUCTS SECTION */}
        <ProductsSection
          onEnquireProduct={handleEnquireProduct}
        />

        {/* 6. SERVICE PROCESS (4 Steps) */}
        <ProcessSection
          onRequestService={handleRequestService}
        />

        {/* 7. SERVICE AREAS (Interactive Zone Checker) */}
        <ServiceAreasSection
          onSelectAreaForBooking={handleSelectAreaForBooking}
        />

        {/* 8. SERVICE REQUEST FORM (Ready for CRM / API) */}
        <ServiceRequestForm
          initialServiceType={formServiceType}
          initialArea={formLocationArea}
          initialMessage={formCustomMessage}
        />

        {/* 9. WHY PUREFLOW (Generic Benefits) */}
        <WhyUsSection />

        {/* 10. FAQ SECTION */}
        <FaqSection />

        {/* 11. CONTACT SECTION */}
        <ContactSection
          onOpenWhatsApp={() => handleOpenWhatsApp('General Service')}
          onRequestService={handleRequestService}
        />

        {/* 12. FINAL CTA */}
        <FinalCtaSection
          onRequestService={handleRequestService}
          onOpenWhatsApp={() => handleOpenWhatsApp('General Service')}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenWhatsApp={() => handleOpenWhatsApp('General Service')}
        onRequestService={handleRequestService}
      />

      {/* MOBILE STICKY ACTION BAR */}
      <MobileStickyBar
        onRequestService={handleRequestService}
        onOpenWhatsApp={() => handleOpenWhatsApp('General Service')}
      />

      {/* WHATSAPP INTERACTIVE MODAL */}
      <WhatsAppSimulationModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        defaultTopic={whatsAppDefaultTopic}
      />
    </div>
  );
}
