import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  Sparkles,
  Copy,
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    service: initialServiceId || '',
    projectNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'hello@yaromedia.com';
  const phone = '+1 (555) 839-2044';
  const location = 'Laxmi Nagar, New Delhi';

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({
        ...prev,
        service: initialServiceId,
      }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phoneOrEmail.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phoneOrEmail: '',
      service: '',
      projectNotes: '',
    });
    onClose();
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quote-modal-container"
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[28px] sm:rounded-[36px] bg-[#0c0c0e] border border-white/[0.12] p-5 sm:p-8 md:p-10 text-white shadow-[0_25px_90px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="quote-modal-close"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white/70 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Spotlight Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 w-[400px] h-[400px] bg-[#ff5216]/15 rounded-full blur-[120px] -z-0"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Start a Project Info */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ff5216]/10 border border-[#ff5216]/35 text-[#ff5216] text-xs font-bold tracking-wide">
              <span className="w-5 h-5 rounded-full bg-[#ff5216]/20 flex items-center justify-center text-[#ff5216]">
                <Mail className="w-3 h-3" />
              </span>
              <span>Start A Project</span>
            </div>

            {/* Massive Heading */}
            <h2
              id="modal-project-headline"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]"
            >
              Let&apos;s Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5216] to-[#ff8c00]">
                Digital Future
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed max-w-md">
              Ready to launch your next project? Fill out the quick details and our creative team will reach out directly to discuss your business goals and custom package.
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-3 pr-3.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#ff5216]/40 transition-all text-xs font-medium text-white/90 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="group-hover:text-[#ffae85] transition-colors">{phone}</span>
                </a>

                <div className="inline-flex items-center gap-3 pr-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/90">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>{location}</span>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 pr-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#ff5216]/40 transition-all text-xs font-medium text-white/90 group">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="group-hover:text-[#ffae85] transition-colors"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email"
                    className="ml-1 p-1 rounded text-white/40 hover:text-white transition-colors"
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
          {/* RIGHT COLUMN: Radiant YaroMedia Form Card */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6">
            <div
              id="modal-start-project-card"
              className="relative w-full rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-[#ff5216] via-[#f74911] to-[#ea1d24] text-white p-5 sm:p-8 shadow-[0_15px_50px_rgba(255,82,22,0.35)]"
            >
              {isSubmitted ? (
                /* Success View */
                <div className="py-10 px-3 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-black text-[#ff5216] flex items-center justify-center mx-auto shadow-xl">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-display text-white">
                    Project Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-medium max-w-xs mx-auto leading-relaxed">
                    Thank you, <span className="font-bold underline">{formData.name}</span>. The YaroMedia team will connect with you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-black/80 transition-transform active:scale-95 shadow-md"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Your Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-input-name"
                      className="block text-xs font-bold text-white tracking-tight"
                    >
                      Your name
                    </label>
                    <input
                      id="modal-input-name"
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[14px] sm:rounded-[16px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-sm font-semibold transition-all shadow-md"
                    />
                  </div>

                  {/* Field 2: Your Phone / Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-input-phone"
                      className="block text-xs font-bold text-white tracking-tight"
                    >
                      Your Phone / Email
                    </label>
                    <input
                      id="modal-input-phone"
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
                      className="w-full px-4 py-3 rounded-[14px] sm:rounded-[16px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-sm font-semibold transition-all shadow-md"
                    />
                  </div>

                  {/* Field 3: Services Select */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-select-service"
                      className="block text-xs font-bold text-white tracking-tight"
                    >
                      Services
                    </label>
                    <div className="relative">
                      <select
                        id="modal-select-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value,
                          })
                        }
                        className="w-full appearance-none px-4 py-3 rounded-[14px] sm:rounded-[16px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-sm font-semibold transition-all cursor-pointer shadow-md pr-10"
                      >
                        <option value="">Select a service / package</option>
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
                        <option value="Professional Portfolio">
                          Professional Portfolio (Personal Brand)
                        </option>
                        <option value="Custom Bundle">
                          Custom All-In-One Agency Bundle
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-black/60">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Field 4: Project Note (Optional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-input-notes"
                      className="block text-xs font-bold text-white tracking-tight"
                    >
                      Project Note (Optional)
                    </label>
                    <textarea
                      id="modal-input-notes"
                      rows={2}
                      placeholder="Briefly describe your goals or requirements..."
                      value={formData.projectNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectNotes: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-[14px] sm:rounded-[16px] bg-white/[0.92] hover:bg-white focus:bg-white text-black placeholder:text-black/50 border border-black/10 focus:border-black/30 focus:outline-none text-xs sm:text-sm font-semibold transition-all shadow-md resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="modal-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-3 pl-3 pr-6 py-2.5 rounded-full bg-[#0d0d0f] hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50"
                    >
                      <span className="w-7 h-7 rounded-full bg-white text-[#ff5216] flex items-center justify-center shadow-sm transition-transform group-hover:translate-x-0.5">
                        <Send className="w-3 h-3 -rotate-12 translate-x-0.5" />
                      </span>
                      <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
