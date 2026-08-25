import React from 'react';
import googleVipImg from '../assets/images/google_vip_card_1787580198316.jpg';
import webDesignUiUxImg from '../assets/images/web_design_uiux_card_1787580236251.jpg';
import videoEditingImg from '../assets/images/video_editing_card_1787622906343.jpg';

interface DigitalSolutionsSectionProps {
  onOpenQuote: (solutionName?: string) => void;
}

interface SolutionCard {
  id: string;
  image: string;
  title: string;
  badge: string;
  description: string;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsSectionProps> = ({
  onOpenQuote,
}) => {
  const solutions: SolutionCard[] = [
    {
      id: 'video-editing-production',
      image: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Add%20a%20heading.png',
      title: 'Video Editing',
      badge: '(Reels, Shorts & Commercials)',
      description: 'High-Retention Cuts, Sound FX, Color Grading, Dynamic Motion Graphics.',
    },
    {
      id: 'google-business-vip',
      image: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Why%20Every%20Business%20Needs%20a%20Google%20Buvsiness%20Profile.jpg',
      title: 'Google Business VIP',
      badge: '(One-Time Setup)',
      description: 'Verified Profile, Professional Photoshoot, Menu Upload, Review QR.',
    },
    {
      id: 'web-designing-ui-ux',
      image: 'https://raw.githubusercontent.com/mivsr-spec/assets/main/Call%20Now%20on%E2%80%9D%20(1).png',
      title: 'Web Designing (UI/UX)',
      badge: '(Complete Business Package)',
      description: 'Wireframing, Design Systems, Mobile-First Layouts, Prototyping.',
    },
  ];

  return (
    <section
      id="solutions"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Subtle Ambient Highlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#ff5216]/10 via-[#ea1d24]/10 to-transparent rounded-full blur-[130px] -z-0"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2
            id="solutions-main-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold font-display tracking-tight text-white leading-tight"
          >
            From Vision to Visibility.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5216] to-[#ff8c00]">
              Our Complete Digital Solutions for Your Local Growth.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/75 font-normal leading-relaxed max-w-2xl mx-auto">
            Your all-in-one partner for everything from professional visuals to complete web presence.{' '}
            <span className="text-white/50 block sm:inline mt-1 sm:mt-0 font-light">
              (Example info: Laxmi Nagar&apos;s Choice for Affordable, Premium Digital Agency Services.)
            </span>
          </p>
        </div>

        {/* Packages / Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {solutions.map((item) => (
            <div
              key={item.id}
              id={`solution-card-${item.id}`}
              onClick={() => onOpenQuote(item.title)}
              className="group relative flex flex-col rounded-[22px] sm:rounded-[26px] bg-[#111111] border border-white/[0.08] hover:border-[#ff5216]/50 p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(255,82,22,0.15)] cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[4/3] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-black/40 border border-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Info Container */}
              <div className="pt-4 pb-1 px-1.5 flex-1 flex flex-col justify-start text-center space-y-2.5">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-display text-white tracking-tight group-hover:text-[#ffae85] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-white/70 tracking-wide">
                    {item.badge}
                  </p>
                </div>

                <p className="text-xs text-white/55 font-light leading-relaxed px-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
