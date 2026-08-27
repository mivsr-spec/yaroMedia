import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Check,
  Copy,
  Send,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    service: '',
  });

  const email = 'vsrx74@gmail.com';
  const phone = '+91 89 5812 3147';
  const location = 'Banbasa, Uttarakhand IND - 262310';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="relative w-full bg-[#050505] text-white pt-12 sm:pt-16 md:pt-20 pb-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16">
        {/* ========================================================================= */}
        {/* CONTACT FORM CONTAINER */}
        {/* ========================================================================= */}
        <div
          id="contact-form-container"
          className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#0c0c0e] border border-white/[0.08] shadow-[0_20px_70px_rgba(0,0,0,0.85)] p-5 sm:p-8 md:p-10 lg:p-12 overflow-hidden"
        >
          {/* Subtle Ambient Background Lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/4 w-[400px] h-[400px] bg-[#ff5216]/15 rounded-full blur-[120px] -z-0"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* ========================================================================= */}
            {/* LEFT COLUMN: Badge, Title, Paragraph, & Contact Badges */}
            {/* ========================================================================= */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              {/* Top Tag / Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5216]/10 border border-[#ff5216]/35 text-[#ff5216] text-xs font-bold tracking-wide">
                <span className="w-4 h-4 rounded-full bg-[#ff5216]/20 flex items-center justify-center text-[#ff5216]">
                  <Mail className="w-2.5 h-2.5" />
                </span>
                <span>Start A Project</span>
              </div>

              {/* Bold Headline */}
              <h2
                id="contact-main-headline"
                className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold font-display text-white tracking-tight leading-[1.1]"
              >
                Let&apos;s Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5216] to-[#ff8c00]">
                  Digital Future
                </span>
              </h2>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed max-w-md">
                Ready to launch your next project? Fill out the form below or reach out directly to start a conversation about your brand's needs and how we can help you grow.
              </p>

              {/* Contact Info Pills with White Circular Icon Badges */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Phone Badge */}
                  <a
                    id="contact-phone-badge"
                    href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2.5 pr-3.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#ff5216]/40 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-white/90 group-hover:text-[#ffae85] transition-colors">
                      {phone}
                    </span>
                  </a>

                  {/* Location Badge */}
                  <div
                    id="contact-location-badge"
                    className="inline-flex items-center gap-2.5 pr-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]"
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-md shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-white/90">
                      {location}
                    </span>
                  </div>
                </div>

                {/* Email Badge */}
                <div>
                  <div
                    id="contact-email-badge"
                    className="inline-flex items-center gap-2.5 pr-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#ff5216]/40 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-semibold text-white/90 group-hover:text-[#ffae85] transition-colors"
                    >
                      {email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="ml-1 p-1 rounded text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Radiant YaroMedia Orange Form Card  */}
            {/* ========================================================================= */}
            <div className="lg:col-span-6">
              <div
                id="contact-form-yellow-card"
                className="relative w-full rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#ff5216] via-[#f74911] to-[#ea1d24] text-white p-5 sm:p-7 md:p-8 shadow-[0_15px_50px_rgba(255,82,22,0.35)]"
              >
                {formSubmitted ? (
                  /* Success Confirmation View */
                  <div className="py-10 px-3 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-black text-[#ff5216] flex items-center justify-center mx-auto shadow-xl">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                      Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xs mx-auto leading-relaxed">
                      Thank you, <span className="font-bold underline">{formData.name}</span>. The YaroMedia creative team will reach out to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phoneOrEmail: '', service: '' });
                      }}
                      className="mt-3 px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-black/80 transition-transform active:scale-95 shadow-md"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* Active Form View */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Field 1: Your Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-input-name"
                        className="block text-xs font-bold text-white tracking-tight"
                      >
                        Your name
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 sm:py-3 rounded-[12px] sm:rounded-[14px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                      />
                    </div>

                    {/* Field 2: Your Phone / Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-input-phone"
                        className="block text-xs font-bold text-white tracking-tight"
                      >
                        Your Phone
                      </label>
                      <input
                        id="contact-input-phone"
                        type="text"
                        required
                        placeholder="Email or Phone Number"
                        value={formData.phoneOrEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneOrEmail: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2.5 sm:py-3 rounded-[12px] sm:rounded-[14px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                      />
                    </div>

                    {/* Field 3: Services Select Dropdown */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-select-service"
                        className="block text-xs font-bold text-white tracking-tight"
                      >
                        Services
                      </label>
                      <div className="relative">
                        <select
                          id="contact-select-service"
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              service: e.target.value,
                            })
                          }
                          className="w-full appearance-none px-4 py-2.5 sm:py-3 rounded-[12px] sm:rounded-[14px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm pr-10"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="Photography & Videography">
                            Photography &amp; Videography (On-site &amp; Studio)
                          </option>
                          <option value="Editing (Photo & Video)">
                            Editing (Photo &amp; Video - Reels, Retouching)
                          </option>
                          <option value="Graphic Design">
                            Graphic Design (Branding, Logos, Print, Web)
                          </option>
                          <option value="Website Development">
                            Website Development (Custom &amp; Responsive)
                          </option>
                          <option value="Google Business VIP">
                            Google Business VIP (One-Time Setup)
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-black/60">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1.5">
                      <button
                        id="contact-form-submit-btn"
                        type="submit"
                        className="group inline-flex items-center justify-center gap-3 pl-3 pr-6 py-2.5 rounded-full bg-[#0d0d0f] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:scale-[1.03] active:scale-[0.98]"
                      >
                        <span className="w-7 h-7 rounded-full bg-white text-[#ff5216] flex items-center justify-center shadow-sm transition-transform group-hover:translate-x-0.5">
                          <Send className="w-3 h-3 -rotate-12 translate-x-0.5" />
                        </span>
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM MULTI-COLUMN FOOTER NAVIGATION */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-t border-white/[0.06]">
          {/* Column 1: Brand & Socials (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block transition-opacity hover:opacity-90">
              <img
                src="https://raw.githubusercontent.com/mivsr-spec/assets/main/Artboard%204%404x.png"
                alt="YaroMedia"
                referrerPolicy="no-referrer"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm font-light">
              YaroMedia — we specialize in scaling your brand perception, dominating Google local search rankings, and engineering cinematic retention reels.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                id="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ff5216] border border-white/[0.1] hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                id="footer-social-twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ff5216] border border-white/[0.1] hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              <a
                id="footer-social-linkedin"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-[#ff5216] border border-white/[0.1] hover:border-transparent text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Menu (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Menu
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Span 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/60">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Photography &amp; Videography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Editing (Photo &amp; Video)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Graphic Design &amp; Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 3 cols with badge list) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-display">
              Contact Us
            </h4>
            <div className="space-y-2.5">
              {/* Phone Badge */}
              <a
                id="footer-contact-phone"
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="group flex items-center gap-2.5 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/[0.06] group-hover:bg-[#ff5216]/20 border border-white/[0.1] group-hover:border-[#ff5216]/40 flex items-center justify-center text-white/80 group-hover:text-[#ff5216] transition-colors shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="truncate">{phone}</span>
              </a>

              {/* Email Badge with copy action */}
              <div className="group flex items-center justify-between gap-2 text-xs sm:text-sm text-white/70">
                <a
                  id="footer-contact-email"
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors truncate"
                >
                  <div className="w-7 h-7 rounded-full bg-white/[0.06] group-hover:bg-[#ff5216]/20 border border-white/[0.1] group-hover:border-[#ff5216]/40 flex items-center justify-center text-white/80 group-hover:text-[#ff5216] transition-colors shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="truncate">{email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="p-1 rounded text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Address Badge */}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/60">
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/80 shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </div>
                <span className="leading-snug">{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        {/* ========================================================================= */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>©YaroMedia {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white/80 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

