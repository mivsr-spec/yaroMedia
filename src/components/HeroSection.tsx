import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full pt-2 sm:pt-4 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 xl:px-12 bg-[#050505] text-white">
      {/* ========================================================================= */}
      {/* 1. TOP HERO CARD - Exact match to reference with clean sunset glow & curvature */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1440px] mx-auto rounded-[32px] sm:rounded-[48px] overflow-hidden bg-gradient-to-b from-[#ff5216] via-[#ea1d24] to-[#0c0402] border border-white/10 shadow-[0_30px_100px_rgba(255,82,22,0.25)]">
        {/* Subtle Ambient Radial Lighting Highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[#ff7a00] to-transparent rounded-full opacity-60 blur-3xl -z-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[#ea1d24] rounded-full opacity-40 blur-3xl -z-0"
        />

        {/* Futuristic Concentric Ambient Rings behind person */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] lg:w-[950px] h-[650px] sm:h-[850px] lg:h-[950px] border border-white/[0.07] rounded-full flex items-center justify-center -z-0"
        >
          <div className="w-[80%] h-[80%] border border-white/[0.06] rounded-full flex items-center justify-center">
            <div className="w-[75%] h-[75%] border border-white/[0.05] rounded-full" />
          </div>
        </div>

        {/* Large Person Image blending seamlessly: left side on mobile, right side on desktop as specified */}
        <div
          id="hero-person-visual"
          className="pointer-events-none absolute left-[-8%] sm:left-[-4%] md:left-auto md:right-[-2%] lg:right-[1%] xl:right-[3%] top-0 bottom-0 w-[100%] xs:w-[94%] sm:w-[86%] md:w-[62%] lg:w-[54%] xl:w-[48%] max-w-[1050px] h-full flex items-end justify-start md:justify-end overflow-visible z-[5]"
        >
          {/* Ambient Glow behind portrait */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-1/4 md:left-auto md:right-1/4 w-[340px] sm:w-[520px] lg:w-[580px] h-[340px] sm:h-[520px] lg:h-[580px] bg-[#ff5216]/35 rounded-full blur-[90px] sm:blur-[120px] -z-10"
          />
          <img
            src="https://raw.githubusercontent.com/mivsr-spec/assets/main/167774-Photoroom.png"
            alt="Creative Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-bottom-left md:object-bottom-right scale-[1.48] xs:scale-[1.52] sm:scale-[1.5] md:scale-[1.36] lg:scale-[1.4] xl:scale-[1.44] origin-bottom-left md:origin-bottom-right -translate-y-6 sm:-translate-y-10 md:-translate-y-3 lg:-translate-y-5 xl:-translate-y-7 drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] select-none opacity-95 [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]"
          />
        </div>

        {/* Inner Padding container - optimized height, tight mobile rhythm, and balanced breathing room */}
        <div className="relative z-10 w-full pt-14 sm:pt-24 md:pt-32 lg:pt-36 pb-8 sm:pb-14 lg:pb-16 px-5 sm:px-10 lg:px-14 xl:px-16 min-h-[460px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
          
          {/* Main Hero Row: Left Big Headline vs Right Statement */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start lg:items-center my-auto py-2 sm:py-6 mt-[128px]">
            {/* Left Side: Hey, we're + Massive Bold Title */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm md:text-base font-medium text-white/90 tracking-wide">
                Hey, we&apos;re a
              </p>
              <h1
                id="hero-main-title"
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] font-extrabold tracking-tight font-display text-white leading-[1.02] sm:leading-[0.98] drop-shadow-md"
              >
                Creative <br />
                Marketing Agency
              </h1>
            </div>

            {/* Right Side: Philosophy Headline & Description */}
            <div className="lg:col-span-5 lg:pl-4 space-y-2 sm:space-y-3 pt-3 sm:pt-6 lg:pt-28 xl:pt-36 max-w-sm sm:max-w-md">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white font-display leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                Great design should feel impossible to ignore.
              </h2>
              <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                From Google Business VIP rank to bespoke brand identity and retention reels — we build brands that connect and convert.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. NUMBERED SERVICE PILLARS (#01 - #04) - Placed directly below the hero card */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto mt-6 sm:mt-10 px-4 sm:px-8">
        <div className="bg-[#121212]/80 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* 1 */}
            <div className="space-y-1 sm:space-y-1.5 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                1
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Brand Strategy
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-1 sm:space-y-1.5 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                2
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Brand Identity Design
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-1 sm:space-y-1.5 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                3
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Google VIP Setup
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-1 sm:space-y-1.5 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                4
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Reels &amp; Media Editing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
