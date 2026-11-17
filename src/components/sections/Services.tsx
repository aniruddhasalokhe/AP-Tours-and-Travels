// ============================================================
// AP Tours & Travels — Services Section
// ============================================================
// Displays 5 core service offerings with custom SVG icons,
// descriptive copy, and direct WhatsApp enquiry CTAs.
// Content is driven from siteConfig.services.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import useFadeIn from '../../hooks/useFadeIn';
import { buildWhatsAppLink } from '../../utils/whatsapp';

/**
 * Service icon renderer based on icon type (48px in amber color)
 */
const ServiceIcon: React.FC<{ icon: string }> = ({ icon }) => {
  const iconProps = {
    className: 'w-12 h-12 text-[#F5B400] shrink-0',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'plane':
      // Airplane
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 3.75a1.5 1.5 0 013 0v5.25h5.25a1.5 1.5 0 010 3H13.5v6l2.25 1.5v1.5l-3.75-1.125L8.25 21v-1.5l2.25-1.5v-6H5.25a1.5 1.5 0 010-3h5.25V3.75z"
          />
        </svg>
      );
    case 'briefcase':
      // Corporate briefcase
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.25v4.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-4.5m16.5 0l-1.5-6.75A2.25 2.25 0 0016.562 5.25H7.438a2.25 2.25 0 00-2.188 2.25L3.75 14.25m16.5 0h-3.75a2.25 2.25 0 01-2.25-2.25V12m-6 0v.001A2.25 2.25 0 016 14.25H2.25"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5.25V3.75A1.5 1.5 0 0110.5 2.25h3a1.5 1.5 0 011.5 1.5v1.5"
          />
        </svg>
      );
    case 'road':
      // Road / Highway
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 21L8 3h8l4 18M12 4v4m0 4v4m0 4v2"
          />
        </svg>
      );
    case 'mountain':
      // Mountains / Outstation
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 20.25L10.5 6l4.5 7.5L18 9.75 22.5 20.25H2.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 12l2.25 3.75L13.5 12.5"
          />
        </svg>
      );
    case 'family':
      // Family / Group travel
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

const Services: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="fade-in-section py-10 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="Our Services"
          subtitle="From local airport runs to multi-day outstation pilgrimages and corporate travel — we deliver seamless, chauffeur-driven journeys."
        />

        {/* 5 Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop (last 2 centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {siteConfig.services.map((service, index) => {
            const whatsappMessage = `Hi AP Tours & Travels, I would like to enquire about your ${service.title} service. Please share availability and rates.`;
            const whatsappUrl = buildWhatsAppLink(siteConfig.whatsappNumber, whatsappMessage);

            // Positioning:
            // 6-col grid on lg:
            // items 0, 1, 2 take 2 cols each (cols 1-2, 3-4, 5-6)
            // item 3 takes 2 cols, starting at col 2 (cols 2-3)
            // item 4 takes 2 cols, starting at col 4 (cols 4-5)
            // This cleanly centers the last 2 cards on desktop!
            const colPlacement =
              index === 3
                ? 'md:col-span-1 lg:col-span-2 lg:col-start-2'
                : index === 4
                ? 'md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2 lg:col-start-4'
                : 'md:col-span-1 lg:col-span-2';

            return (
              <article
                key={service.id || index}
                className={`${colPlacement} flex flex-col`}
              >
                <Card className="h-full flex flex-col items-start justify-between p-4 sm:p-6 border border-gray-100 hover:border-[#F5B400]/40 transition-all duration-300">
                  <div className="w-full">
                    <div className="p-2 sm:p-3 bg-[#F5B400]/10 rounded-xl sm:rounded-2xl inline-block mb-3 sm:mb-5">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <h3 className="font-['Poppins'] font-semibold text-lg sm:text-xl text-[#0B1530] mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="font-['Inter'] text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Button
                    href={whatsappUrl}
                    variant="outline"
                    size="sm"
                    className="mt-auto group text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <span>Enquire</span>
                    <svg
                      className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Button>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
