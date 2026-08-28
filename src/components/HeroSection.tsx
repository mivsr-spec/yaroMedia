import React from 'react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full pt-2 sm:pt-4 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 xl:px-12 bg-[#050505] text-white">
      {/* ========================================================================= */}
      {/* 1. TOP HERO CARD - Desktop has original tall layout with right-side image, Mobile has custom left-side layout */}
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

        {/* Person Image: Left-side on Mobile, Original Right-side & Sizing on Desktop */}
        <div
          id="hero-person-visual"
          className="pointer-events-none absolute left-[-8%] sm:left-[-4%] md:left-auto md:right-[-2%] lg:right-[1%] xl:right-[3%] bottom-0 top-0 sm:top-2 md:top-4 lg:top-0 w-[100%] xs:w-[94%] sm:w-[86%] md:w-[78%] lg:w-[68%] xl:w-[62%] max-w-[960px] h-full flex items-end justify-start md:justify-end overflow-visible z-[5]"
        >
          {/* Ambient Glow behind portrait */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-1/4 md:left-auto md:right-1/4 w-[340px] sm:w-[520px] md:w-[550px] lg:w-[650px] h-[340px] sm:h-[520px] md:h-[550px] lg:h-[650px] bg-[#ff5216]/35 md:bg-[#ff5216]/30 rounded-full blur-[90px] sm:blur-[120px] md:blur-[110px] -z-10"
          />
          <img
            src="https://raw.githubusercontent.com/mivsr-spec/assets/main/167774-Photoroom.png"
            alt="Creative Marketing Professional"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-bottom-left md:object-right-bottom scale-[1.48] xs:scale-[1.52] sm:scale-[1.5] md:scale-125 lg:scale-130 xl:scale-135 origin-bottom-left md:origin-bottom-right -translate-y-6 sm:-translate-y-10 md:-translate-y-14 lg:-translate-y-18 drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] md:drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)] select-none opacity-95 [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] md:[mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
          />
        </div>

        {/* Inner Padding container: Mobile custom height vs Desktop original expansive breathing room */}
        <div className="relative z-10 w-full pt-14 sm:pt-24 md:pt-40 lg:pt-48 pb-8 sm:pb-14 md:pb-24 lg:pb-28 px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 min-h-[460px] sm:min-h-[560px] md:min-h-[820px] lg:min-h-[880px] flex flex-col justify-between">
          
          {/* Main Hero Row: Left Big Headline vs Right Statement */}
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 md:gap-12 items-start md:items-center my-auto py-2 sm:py-6 md:py-12 mt-[128px] md:mt-0">
            {/* Left Side: Hey, we're + Massive Bold Title */}
            <div className="md:col-span-7 space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-xs sm:text-sm md:text-lg font-medium text-white/90 tracking-wide">
                Hey, we&apos;re a
              </p>
              <h1
                id="hero-main-title"
                className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] font-extrabold tracking-tight font-display text-white leading-[1.02] sm:leading-[0.98] md:leading-[0.95] drop-shadow-md"
              >
                Creative <br />
                Marketing Agency
              </h1>
            </div>

            {/* Right Side: Philosophy Headline & Description */}
            <div className="md:col-span-5 md:pl-6 space-y-2 sm:space-y-3 md:space-y-4 pt-3 sm:pt-6 md:pt-16 lg:pt-44 xl:pt-52 max-w-sm sm:max-w-md md:max-w-lg">
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-display leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                Great design should feel impossible to ignore.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/85 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                From Google Business VIP rank to bespoke brand identity and retention reels — we build brands that connect and convert.
              </p>
            </div>
          </div>

          {/* Bottom Numbered Skill Pillars inside hero card on Desktop (#01, #02, #03, #04) */}
          <div className="hidden md:grid relative z-10 w-full mt-20 sm:mt-32 pt-10 sm:pt-12 border-t border-white/15 grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {/* #01 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider font-mono">
                #01
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Brand Strategy
              </p>
            </div>

            {/* #02 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider font-mono">
                #02
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Brand Identity Design
              </p>
            </div>

            {/* #03 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider font-mono">
                #03
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide">
                Google VIP Setup
              </p>
            </div>

            {/* #04 */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold text-[#ffae85] tracking-wider font-mono">
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
      {/* 2. NUMBERED SERVICE PILLARS (Mobile only) */}
      {/* ========================================================================= */}
      <div className="block md:hidden max-w-[1440px] mx-auto mt-6 sm:mt-10 px-4 sm:px-8">
        <div className="bg-[#121212]/80 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {/* 1 */}
            <div className="space-y-1 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                1
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Brand Strategy
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-1 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                2
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Brand Identity Design
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-1 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                3
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Google VIP Setup
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-1 group">
              <span className="text-xs sm:text-sm font-bold text-[#ff5216] tracking-wider font-sans">
                4
              </span>
              <p className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-[#ffae85] transition-colors">
                Reels &amp; Media Editing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. TRUSTED BY BRANDS RIBBON (Desktop only - exact original position & style) */}
      {/* ========================================================================= */}
      <div className="hidden md:block max-w-[1440px] mx-auto mt-8 sm:mt-12 px-4 sm:px-8">
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
