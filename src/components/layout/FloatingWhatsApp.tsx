import React from 'react';
import { siteConfig } from '../../config/site';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center group">
      {/* Tooltip on hover */}
      <div
        className="absolute right-full mr-3 px-3 py-1.5 bg-[#0B1530] text-white text-xs font-['Poppins'] font-medium rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:border-4 after:border-transparent after:border-l-[#0B1530]"
        role="tooltip"
      >
        Chat with us
      </div>

      {/* Floating Button */}
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 wa-pulse"
        aria-label="Chat with AP Tours & Travels on WhatsApp"
      >
        {/* 28px (w-7 h-7) WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
