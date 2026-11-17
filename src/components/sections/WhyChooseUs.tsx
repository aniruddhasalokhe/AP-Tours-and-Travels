// ============================================================
// AP Tours & Travels — Why Choose Us Section
// ============================================================
// Highlights key service pillars: Trusted, Premium Vehicle,
// Transparent Pricing, and Easy Booking.
// Content is driven from siteConfig.whyChooseUs.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import useFadeIn from '../../hooks/useFadeIn';

/**
 * Renders an inline SVG icon corresponding to the icon key.
 * Styled in brand amber (#F5B400) at 40px size.
 */
const WhyChooseUsIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconProps = {
    className: 'w-10 h-10 text-[#F5B400] shrink-0',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'shield':
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      );
    case 'car':
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5m-7.5 0l-.375-1.5m7.875 1.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V14.25m-15 0v3.375A1.125 1.125 0 003.375 18.75H4.5m16.5-4.5H3m18 0l-1.875-6.75A2.25 2.25 0 0017.062 6H6.938a2.25 2.25 0 00-2.063 1.5L3 14.25m3 0v-2.25m12 2.25v-2.25"
          />
        </svg>
      );
    case 'wallet':
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
          />
        </svg>
      );
    case 'headset':
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 1.5a9 9 0 00-9 9v3.75a3 3 0 003 3h.75a.75.75 0 00.75-.75V11.25a.75.75 0 00-.75-.75H5.25A7.5 7.5 0 0112 3a7.5 7.5 0 016.75 7.5h-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h.75a3 3 0 003-3V10.5a9 9 0 00-9-9z"
          />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      );
  }
};

const WhyChooseUs: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="fade-in-section py-16 md:py-24 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="Why Choose Us"
          subtitle="Your comfort, safety, and satisfaction are at the heart of everything we do."
        />

        {/* 2x2 Grid of Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {siteConfig.whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="border-l-4 border-[#F5B400] flex items-start gap-5 p-6 md:p-8"
            >
              <div className="p-3 bg-[#F5B400]/10 rounded-xl">
                <WhyChooseUsIcon icon={item.icon} />
              </div>
              <div className="flex-1">
                <h3 className="font-['Poppins'] font-semibold text-lg md:text-xl text-[#0B1530] mb-2">
                  {item.title}
                </h3>
                <p className="font-['Inter'] text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
