// ============================================================
// AP Tours & Travels — Trust Strip Component
// ============================================================
// Highlights 5 key trust factors with icons on a brand amber strip.
// Content is driven from siteConfig.trustItems.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import useFadeIn from '../../hooks/useFadeIn';

/**
 * Render inline SVG icon for trust strip based on icon name
 */
const TrustIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconProps = {
    className: 'w-6 h-6 text-[#0B1530] shrink-0',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'driver':
      // Person with steering wheel
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" />
          <path strokeLinecap="round" d="M12 14.5V21M9.8 10.7L3.6 7.2M14.2 10.7l6.2-3.5" />
        </svg>
      );
    case 'car':
      // Car
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5m-7.5 0l-.375-1.5m7.875 1.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V14.25m-15 0v3.375A1.125 1.125 0 003.375 18.75H4.5m16.5-4.5H3m18 0l-1.875-6.75A2.25 2.25 0 0017.062 6H6.938a2.25 2.25 0 00-2.063 1.5L3 14.25"
          />
        </svg>
      );
    case 'clock':
      // Clock
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
        </svg>
      );
    case 'price':
      // Rupee sign
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 4h10M6 8h10M6 4v16m0-8h4.5a3.5 3.5 0 000-7H6m3.5 7L16 20"
          />
        </svg>
      );
    case 'map':
      // Map pin
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-7-6.5-7-11.5a7 7 0 1114 0c0 5-7 11.5-7 11.5z"
          />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
  }
};

const TrustStrip: React.FC = () => {
  const [stripRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="trust-strip"
      ref={stripRef}
      aria-label="Trust and reliability highlights"
      className="fade-in-section bg-[#F5B400] text-[#0B1530] py-4 md:py-6 shadow-sm relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-0 lg:flex-nowrap">
          {siteConfig.trustItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 px-3 md:px-5 lg:px-6 justify-center ${
                index < siteConfig.trustItems.length - 1
                  ? 'lg:border-r lg:border-[#0B1530]/20'
                  : ''
              }`}
            >
              <TrustIcon icon={item.icon} />
              <span className="font-semibold text-sm md:text-base font-['Inter'] whitespace-normal md:whitespace-nowrap text-center sm:text-left">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
