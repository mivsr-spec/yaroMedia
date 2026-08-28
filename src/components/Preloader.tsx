import React, { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number; // duration in milliseconds (default 4000ms)
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  duration = 4000,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isGone, setIsGone] = useState(false);
  const [wavePath, setWavePath] = useState('');
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Prevent background scrolling while loading
    document.body.style.overflow = 'hidden';

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth custom easing that accelerates slightly then finishes smoothly
      // Cubic ease-in-out or standard smooth progression
      const easeProgress =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      const currentPercent = Math.min(Math.floor(rawProgress * 100), 100);
      setProgress(currentPercent);

      // Calculate Wave Parameters
      // ViewBox dimensions: 1200 wide x 340 high
      // Text baseline is around y = 190, bounding box roughly y: 40 to 250
      const viewBoxWidth = 1200;
      const viewBoxHeight = 340;
      const bottomY = viewBoxHeight + 50;

      // Base Y translates from y = 300 (0% fill) to y = 10 (100% fill)
      const startY = 290;
      const targetY = 20;
      const currentBaseY = startY - easeProgress * (startY - targetY);

      // Oscillating wave parameters
      const frequency = 0.0075;
      const amplitude = Math.sin(rawProgress * Math.PI) * 14 + 10; // wave height peaks mid-animation
      const phase = elapsed * 0.006; // speed of horizontal ripple

      // Build SVG Wave Path
      let path = `M 0 ${bottomY} L 0 ${currentBaseY}`;
      const step = 15;
      for (let x = 0; x <= viewBoxWidth; x += step) {
        // Double sine harmonics for natural organic water feel
        const y =
          currentBaseY +
          Math.sin(x * frequency + phase) * amplitude +
          Math.cos(x * frequency * 1.6 - phase * 0.8) * (amplitude * 0.35);
        path += ` L ${x} ${y.toFixed(2)}`;
      }
      path += ` L ${viewBoxWidth} ${bottomY} Z`;
      setWavePath(path);

      if (rawProgress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        // Short pause at 100% before starting exit transition (300ms)
        setTimeout(() => {
          setIsExiting(true);
          // Restore body scrolling
          document.body.style.overflow = '';
          // Remove from DOM after exit animation completes
          setTimeout(() => {
            setIsGone(true);
            onComplete?.();
          }, 800);
        }, 250);
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      document.body.style.overflow = '';
    };
  }, [duration, onComplete]);

  if (isGone) return null;

  return (
    <div
      id="preloader-overlay"
      role="status"
      aria-label="Loading YaroMedia"
      className={`fixed inset-0 z-[999999] bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? 'opacity-0 -translate-y-8 pointer-events-none scale-[0.99]'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Ambient background glow for luxury depth */}
      <div className="absolute w-[600px] h-[350px] bg-[#ff5216]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1240px] px-6 sm:px-10 md:px-14 flex flex-col items-center justify-center">
        
        {/* SVG Container for Dual-Layer Wave Fill Text */}
        <div className="w-full flex items-center justify-center">
          <svg
            viewBox="0 0 1200 320"
            className="w-full h-auto max-h-[45vh] overflow-visible drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Dynamic Wave Clipping Path */}
              <clipPath id="yaro-wave-clip">
                <path d={wavePath} />
              </clipPath>

              {/* Gradient for subtle liquid depth */}
              <linearGradient id="waveGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="85%" stopColor="#f4f4f5" />
                <stop offset="100%" stopColor="#e4e4e7" />
              </linearGradient>
            </defs>

            {/* Base Layer: Dark Gray Text */}
            <text
              x="600"
              y="200"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#242426"
              className="font-display font-black tracking-tight"
              style={{
                fontSize: '175px',
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                letterSpacing: '-0.035em',
                fontWeight: 900,
              }}
            >
              YaroMedia
            </text>

            {/* Top Layer: Bright White Wave-Clipped Text */}
            <g clipPath="url(#yaro-wave-clip)">
              <text
                x="600"
                y="200"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#waveGlowGrad)"
                className="font-display font-black tracking-tight"
                style={{
                  fontSize: '175px',
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                  letterSpacing: '-0.035em',
                  fontWeight: 900,
                }}
              >
                YaroMedia
              </text>
            </g>
          </svg>
        </div>

      </div>
    </div>
  );
};
