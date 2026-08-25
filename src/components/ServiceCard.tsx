import React from 'react';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelectService: (serviceId: string) => void;
  onOpenDetail: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onSelectService,
  onOpenDetail,
}) => {
  return (
    <div
      id={`service-card-${service.id}`}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#0b0b0e] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-500 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(255,82,22,0.12)]"
    >
      {/* Top Image Container - Taking up most of the space as requested */}
      <div 
        onClick={() => onOpenDetail(service)}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-black cursor-pointer"
      >
        <img
          id={`service-img-${service.id}`}
          src={service.image}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
        />

        {/* Subtle Dark Vignette & Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/20 to-transparent pointer-events-none" />

        {/* Floating Top Badge */}
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-xs font-semibold text-white tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5216]" />
            {service.badge}
          </span>
        </div>

        {/* Quick View Button on Image */}
        <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(service);
            }}
            className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            aria-label={`View ${service.title} details`}
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 space-y-6">
        <div>
          {/* Card Number & Subtitle */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5216]">
              0{index + 1} / SERVICE
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/50">
              <Clock className="w-3.5 h-3.5" />
              {service.timeline}
            </span>
          </div>

          {/* Requested Exact Title Text */}
          <h3
            id={`service-title-${service.id}`}
            onClick={() => onOpenDetail(service)}
            className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight font-display group-hover:text-white cursor-pointer transition-colors"
          >
            {service.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-white/60 leading-relaxed font-light line-clamp-2">
            {service.tagline}
          </p>

          {/* Deliverables Checklist */}
          <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-2.5">
            {service.deliverables.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-[#ff5216]/15 text-[#ff5216] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-6 border-t border-white/[0.06] flex items-center gap-3">
          <button
            id={`service-btn-quote-${service.id}`}
            type="button"
            onClick={() => onSelectService(service.id)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#ff5216] hover:bg-[#ea1d24] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(255,82,22,0.3)] hover:shadow-[0_0_28px_rgba(234,29,36,0.5)]"
          >
            <span>Request Setup</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onOpenDetail(service)}
            className="py-3 px-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/80 hover:text-white text-xs font-medium tracking-wide transition-colors"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
