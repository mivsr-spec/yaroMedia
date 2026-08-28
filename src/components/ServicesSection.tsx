import React from 'react';
import { servicesData, ExtendedServiceItem } from '../data/servicesData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuote,
}) => {
  const leftColumnServices = servicesData.filter(
    (item) => item.number === '1' || item.number === '2'
  );
  const rightColumnServices = servicesData.filter(
    (item) => item.number === '3' || item.number === '4'
  );

  const renderServiceItem = (service: ExtendedServiceItem) => {
    const whatsappUrl = `https://wa.me/918958123147?text=${encodeURIComponent(
      `Hi YaroMedia, I would like to inquire about your ${service.title} service.`
    )}`;

    return (
      <a
        key={service.id}
        id={`service-item-${service.id}`}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Inquire about ${service.title} on WhatsApp`}
        className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#ff5216]/60 transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(255,82,22,0.18)] overflow-hidden cursor-pointer block"
      >
        <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
          {/* Orange Number */}
          <div className="shrink-0 select-none">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black font-display text-[#ff5216] leading-none tracking-tight inline-block transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(255,82,22,0.25)]">
              {service.number}
            </span>
          </div>

          {/* Text Details */}
          <div className="space-y-1.5 pt-0.5 min-w-0">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-white tracking-tight leading-snug group-hover:text-[#ffae85] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white/90 tracking-wide mt-0.5">
                {service.subheading}
              </p>
            </div>

            {/* Example info paragraph */}
            <p className="text-xs sm:text-sm text-white/55 font-light leading-relaxed max-w-md">
              <span className="text-white/75 font-normal">Example info:</span>{' '}
              {service.exampleInfo}
            </p>
          </div>
        </div>

        {/* Attached Image / Visual Space */}
        <div className="shrink-0 w-full sm:w-32 md:w-40 lg:w-36 xl:w-44 aspect-[16/9] sm:aspect-square rounded-xl overflow-hidden bg-black/50 border border-white/[0.08] group-hover:border-[#ff5216]/40 transition-all duration-300 flex items-center justify-center p-2">
          <img
            src={service.cardImage || 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Your%20paragraph%20text.png'}
            alt={`${service.title} asset`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
    );
  };

  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050505] text-white overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff5216]/10 rounded-full blur-[130px] -z-0"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-white/[0.08]">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff5216]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Specializations</span>
            </div>
            <h2
              id="services-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white leading-tight"
            >
              Services We Provide. <br />
              <span className="text-white/60">Engineered for Impact.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2.5">
            <p className="text-xs sm:text-sm text-white/50 max-w-sm md:text-right font-light leading-relaxed">
              Every deliverable is crafted in-house to turn raw ideas into high-converting visual assets.
            </p>
            <button
              id="services-btn-custom-package"
              type="button"
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ff5216] hover:text-[#ffae85] transition-colors"
            >
              <span>Request custom quote or bundle</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 2x2 Services Grid - Exact layout as in reference (Col 1: 1 & 2, Col 2: 3 & 4) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {/* Column 1: Items 1 and 2 */}
          <div className="space-y-6 lg:space-y-8">
            {leftColumnServices.map(renderServiceItem)}
          </div>

          {/* Column 2: Items 3 and 4 */}
          <div className="space-y-6 lg:space-y-8">
            {rightColumnServices.map(renderServiceItem)}
          </div>
        </div>
      </div>
    </section>
  );
};
