import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DigitalSolutionsSection } from './components/DigitalSolutionsSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] selection:bg-[#ff5216]/30 selection:text-white flex flex-col justify-between relative">
      {/* Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection onOpenQuote={() => handleOpenQuote()} />

        {/* 2. The Services Section (2x2 Numbered Grid) */}
        <ServicesSection
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 3. Digital Solutions for Local Growth (Reference Package Cards) */}
        <DigitalSolutionsSection
          onOpenQuote={(solutionName) => handleOpenQuote(solutionName)}
        />
      </main>

      {/* 4. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialServiceId={selectedServiceId}
      />

      {/* Sticky Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
