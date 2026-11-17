import React from 'react';
import { siteConfig } from '../../config/site';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0B1530] shadow-[0_-2px_10px_rgba(0,0,0,0.2)] pb-[env(safe-area-inset-bottom,0px)]"
      role="region"
      aria-label="Quick contact mobile bar"
    >
      <div className="flex h-14 w-full">
        {/* Call Button */}
        <a
          href={siteConfig.phoneLink}
          className="flex-1 h-full bg-[#0B1530] text-white flex items-center justify-center gap-2.5 font-['Poppins'] font-semibold text-base active:bg-[#132044] transition-colors duration-150 border-r border-white/10"
          aria-label={`Call AP Tours & Travels at ${siteConfig.phone}`}
        >
          <svg
            className="w-5 h-5 fill-none stroke-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-full bg-[#25D366] text-white flex items-center justify-center gap-2.5 font-['Poppins'] font-semibold text-base active:bg-[#20ba5a] transition-colors duration-150"
          aria-label="Chat with AP Tours & Travels on WhatsApp"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
