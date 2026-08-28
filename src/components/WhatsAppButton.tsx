import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      id="floating-whatsapp-btn"
      href="https://wa.me/918958123147"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with YaroMedia"
      title="Chat with us on WhatsApp"
      className="!fixed bottom-5 right-5 sm:bottom-6 sm:right-6 !z-[99999] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer select-none"
      style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full select-none transform-gpu drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        {/* Solid Black Base Circle & Bubble Shape */}
        <circle cx="50" cy="50" r="46" fill="#000000" />
        <path
          d="M24 76 L13 87 L24.5 83.5 Z"
          fill="#000000"
        />

        {/* Outer White Contour Speech Ring with Smooth Tail */}
        <path
          d="M50 8C26.8 8 8 26.8 8 50C8 57.9 10.2 65.4 14.1 71.8L8.5 88.5C8.1 89.6 9.1 90.7 10.2 90.3L27.4 85.2C34.1 89.4 41.8 92 50 92C73.2 92 92 73.2 92 50C92 26.8 73.2 8 50 8Z"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#000000"
        />

        {/* Crisp, Smooth White Phone Receiver */}
        <path
          d="M68.8 61.6C67.7 61.1 62.5 58.5 61.6 58.1C60.6 57.7 59.9 57.5 59.2 58.6C58.5 59.7 56.4 62.2 55.8 62.9C55.2 63.6 54.5 63.7 53.4 63.2C52.3 62.6 48.7 61.4 44.5 57.6C41.2 54.7 39 51.1 38.3 50C37.7 48.9 38.2 48.3 38.8 47.7C39.3 47.3 39.9 46.4 40.5 45.8C41 45.2 41.2 44.7 41.6 44C42 43.3 41.8 42.6 41.5 42C41.2 41.5 39 36 38.1 33.8C37.2 31.7 36.3 32 35.6 32C35 32 34.2 32 33.5 32C32.7 32 31.5 32.3 30.5 33.4C29.4 34.6 26.5 37.3 26.5 42.8C26.5 48.3 30.5 53.6 31.1 54.3C31.7 55 38.9 66.2 50.1 70.8C52.8 71.9 54.9 72.6 56.5 73.1C59.2 74 61.6 73.8 63.5 73.5C65.6 73.2 70 70.8 70.9 68.3C71.9 65.7 71.9 63.6 71.6 63.1C71.3 62.6 70.4 62.1 68.8 61.6Z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
};


