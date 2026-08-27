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
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Black Background Filled Speech Bubble */}
        <path
          d="M50 94C42.1 94 34.6 91.8 28.1 87.9L8 94L14.3 74.4C10.1 67.4 7.7 59.2 7.7 50.4C7.7 27 26.6 8 50 8C73.4 8 92.3 27 92.3 50.4C92.3 73.8 73.4 94 50 94Z"
          fill="#000000"
        />

        {/* Outer White Contour Stroke */}
        <path
          d="M50 90C42.7 90 35.7 88 29.6 84.4L28.3 83.6L14.6 87.8L18.8 74.4L18 73C14.1 66.5 12 58.9 12 50.4C12 29.4 29 12.4 50 12.4C71 12.4 88 29.4 88 50.4C88 71.4 71 90 50 90Z"
          stroke="#FFFFFF"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* White Phone Handset Icon */}
        <path
          d="M68.5 61.2C67.5 60.7 62.4 58.2 61.5 57.8C60.5 57.5 59.8 57.3 59.1 58.4C58.4 59.4 56.4 61.8 55.8 62.5C55.2 63.2 54.6 63.3 53.5 62.8C52.5 62.3 49.1 61.2 45.1 57.6C42 54.8 39.8 51.3 39.2 50.3C38.6 49.2 39.1 48.7 39.7 48.1C40.1 47.7 40.7 46.9 41.2 46.3C41.7 45.7 41.9 45.3 42.3 44.6C42.6 43.9 42.5 43.3 42.2 42.8C41.9 42.3 39.8 37.1 39 35C38.1 33 37.3 33.2 36.6 33.2C36 33.2 35.3 33.2 34.6 33.2C33.9 33.2 32.8 33.5 31.8 34.5C30.8 35.6 28.1 38.1 28.1 43.3C28.1 48.5 31.9 53.5 32.4 54.2C33 54.9 39.8 65.6 50.4 70.2C52.9 71.3 54.9 71.9 56.4 72.4C58.9 73.2 61.2 73.1 63 72.8C65 72.5 69.2 70.3 70.1 67.8C71 65.4 71 63.3 70.7 62.8C70.5 62.4 69.6 61.7 68.5 61.2Z"
          fill="#FFFFFF"
        />
      </svg>
    </a>
  );
};

