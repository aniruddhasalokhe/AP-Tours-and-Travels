// ============================================================
// AP Tours & Travels — Our Vehicle Section
// ============================================================
// Showcases our actual Toyota Innova Crysta fleet vehicle with
// actual photographs, key features checklist, and booking CTA.
// Content is driven from siteConfig.vehicleFeatures & images.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import useFadeIn from '../../hooks/useFadeIn';
import { buildWhatsAppLink } from '../../utils/whatsapp';

const OurVehicle: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();

  const bookingMessage = `Hi AP Tours & Travels, I would like to book your Toyota Innova Crysta (${siteConfig.vehicleSeats}-seater with chauffeur). Please share availability and rates.`;
  const bookingUrl = buildWhatsAppLink(siteConfig.whatsappNumber, bookingMessage);

  return (
    <section
      id="vehicle"
      ref={sectionRef}
      className="fade-in-section py-10 md:py-16 bg-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="Our Vehicle"
          subtitle="Travel with complete peace of mind in a pristine, chauffeur-driven Toyota Innova Crysta."
        />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* Left Column: Real Vehicle Photos (Side by side on mobile for compact view) */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
            {/* Top Photo with Floating 7-Seater Badge */}
            <div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg bg-gray-200">
                <img
                  src={siteConfig.images.crystaFront}
                  alt="Toyota Innova Crysta front angle view - AP Tours & Travels Kolhapur"
                  loading="lazy"
                  className="w-full h-36 sm:h-52 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#F5B400] text-[#0B1530] px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm shadow-md">
                  7 Seater
                </span>
              </div>
              <p className="mt-1.5 text-center sm:text-left italic text-xs sm:text-sm text-gray-500 font-['Inter']">
                Our actual vehicle
              </p>
            </div>

            {/* Bottom Photo */}
            <div>
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg bg-gray-200">
                <img
                  src={siteConfig.images.crystaSide}
                  alt="Toyota Innova Crysta side profile view - AP Tours & Travels Kolhapur"
                  loading="lazy"
                  className="w-full h-36 sm:h-52 md:h-72 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-1.5 text-center sm:text-left italic text-xs sm:text-sm text-gray-500 font-['Inter']">
                Our actual vehicle
              </p>
            </div>
          </div>

          {/* Right Column: Vehicle Info & Features */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5B400]" />
              <span className="text-xs uppercase tracking-wider font-bold text-[#F5B400] font-['Inter']">
                Premium Fleet
              </span>
            </div>

            <h3 className="font-['Poppins'] font-bold text-3xl sm:text-4xl text-[#0B1530] mb-2">
              Toyota Innova Crysta
            </h3>

            <p className="font-['Inter'] text-lg text-gray-600 font-medium mb-6">
              {siteConfig.vehicleColor} · {siteConfig.vehicleSeats}-Seater · With Professional Driver
            </p>

            {/* Vehicle Features Checklist */}
            <ul className="space-y-3.5 mb-8">
              {siteConfig.vehicleFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 font-['Inter']"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F5B400]/20 text-[#0B1530] font-bold text-sm shrink-0">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <Button
                href={bookingUrl}
                variant="amber"
                size="lg"
                className="shadow-md hover:shadow-lg w-full sm:w-auto"
                aria-label="Book Toyota Innova Crysta via WhatsApp"
              >
                <span>Book This Vehicle</span>
                <svg
                  className="w-5 h-5 text-current"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVehicle;
