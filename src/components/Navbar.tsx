import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  return (
    <header className="absolute top-0 left-0 z-40 w-full transition-all pt-6 sm:pt-8 md:pt-10 lg:pt-12 px-3 sm:px-6 lg:px-8 xl:px-12 pointer-events-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 pt-1 sm:pt-2 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center transition-opacity hover:opacity-90 py-2"
        >
          <img
            src="https://raw.githubusercontent.com/mivsr-spec/assets/main/Artboard%204%404x.png"
            alt="YaroMedia"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a
            href="#"
            id="nav-link-home"
            className="hover:text-white transition-colors tracking-wide"
          >
            Home
          </a>
          <a
            href="#services"
            id="nav-link-services"
            className="hover:text-white transition-colors tracking-wide"
          >
            Services
          </a>
          <a
            href="#solutions"
            id="nav-link-solutions"
            className="hover:text-white transition-colors tracking-wide"
          >
            Packages
          </a>
          <a
            href="#contact"
            id="nav-link-contact"
            className="hover:text-white transition-colors tracking-wide"
          >
            Contact
          </a>
        </nav>

        {/* Action Button - Exact reference style: white pill with rounded orange arrow badge */}
        <div className="flex items-center gap-4">
          <button
            id="nav-btn-quote"
            type="button"
            onClick={() => onOpenQuote()}
            className="group inline-flex items-center justify-center gap-3 pl-5 pr-2.5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-white/95 text-black text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Get in touch</span>
            <span className="w-7 h-7 rounded-full bg-[#ff5216] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
