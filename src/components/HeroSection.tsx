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

        {/* Large Person Image blending seamlessly on the right side - 80% Scale Prominence */}
        <div
          id="hero-person-visual"
          className="pointer-events-none absolute right-[-8%] sm:right-[-4%] md:right-[-2%] lg:right-[1%] xl:right-[3%] bottom-0 top-0 sm:top-2 md:top-4 lg:top-0 w-[95%] sm:w-[85%] md:w-[78%] lg:w-[68%] xl:w-[62%] max-w-[960px] h-[95%] sm:h-[98%] md:h-full flex items-end justify-end overflow-visible z-[5]"
        >
          {/* Ambient Glow behind portrait */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 right-1/4 w-[400px] sm:w-[550px] lg:w-[650px] h-[400px] sm:h-[550px] lg:h-[650px] bg-[#ff5216]/30 rounded-full blur-[110px] -z-10"
          />
          <img
            src="https://raw.githubusercontent.com/mivsr-spec/assets/main/167774-Photoroom.png"
            alt="Creative Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-bottom md:object-right-bottom scale-110 sm:scale-120 md:scale-125 lg:scale-130 xl:scale-135 origin-bottom-right drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)] select-none opacity-95 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
          />
        </div>

        {/* Inner Padding container - expanded length, generous bottom spacing, and vertical breathing room */}
        <div className="relative z-10 w-full pt-28 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-28 px-6 sm:px-12 lg:px-16 xl:px-20 min-h-[640px] sm:min-h-[740px] md:min-h-[820px] lg:min-h-[880px] flex flex-col justify-between">
          
          {/* Main Hero Row: Left Big Headline vs Right Statement */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 sm:py-12">
            {/* Left Side: Hey, we're + Massive Bold Title */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 tracking-wide">
                Hey, we&apos;re a
              </p>
              <h1
                id="hero-main-title"
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.75rem] font-extrabold tracking-tight font-display text-white leading-[0.95] drop-shadow-md"
              >
                Creative <br />
                Agency
              </h1>
            </div>

            {/* Right Side: Philosophy Headline & Description (positioned below shoulder line) */}
            <div className="lg:col-span-5 lg:pl-6 space-y-3 sm:space-y-4 pt-6 sm:pt-10 lg:pt-24 xl:pt-28">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-display leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                Great design should feel impossible to ignore.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/85 font-light leading-relaxed max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                From Google Business VIP rank to bespoke brand identity and retention reels — we build brands that connect and convert.
              </p>
            </div>
          </div>

          {/* Bottom Numbered Skill Pillars (Exact match to reference #01, #02, #03, #04) */}
          <div className="relative z-10 w-full mt-20 sm:mt-32 pt-10 sm:pt-12 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {/* #01 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider">
                #01
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Brand Strategy
              </p>
            </div>

            {/* #02 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider">
                #02
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Brand Identity Design
              </p>
            </div>

            {/* #03 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider">
                #03
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Google VIP Setup
              </p>
            </div>

            {/* #04 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider">
                #04
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Reels &amp; Media Editing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TRUSTED BY BRANDS RIBBON - Directly under the hero card as in reference */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto mt-8 sm:mt-12 px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-4">
          <div className="text-xs sm:text-sm font-medium text-white/50 tracking-wide max-w-xs">
            Trusted by Brands We&apos;ve Helped Shape
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-14 text-sm sm:text-base font-semibold text-white/80">
            {/* Supa Blox */}
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="w-4 h-4 rounded-full border border-white/60 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              <span>Supa Blox</span>
            </div>

            {/* Hype Blox */}
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="text-base font-serif">⧖</span>
              <span>Hype Blox</span>
            </div>

            {/* Frame Blox */}
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="w-4 h-4 rounded-full bg-white/20 border border-white/80 overflow-hidden flex">
                <span className="w-2 h-full bg-white" />
              </span>
              <span>Frame Blox</span>
            </div>

            {/* Ultra Blox */}
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-[9px]">
                ●
              </span>
              <span>Ultra Blox</span>
            </div>

            {/* Apex Scale */}
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <span className="w-2 h-2 rotate-45 bg-[#ff5216]" />
              <span>Apex Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
