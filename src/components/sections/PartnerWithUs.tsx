// ============================================================
// AP Tours & Travels — Partner With Us Section
// ============================================================
// Invites B2B collaboration with travel agencies, tour operators,
// corporates, and event management firms.
// Content is driven from siteConfig.partnerPitch and partnerTypes.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import PartnerForm from '../forms/PartnerForm';
import useFadeIn from '../../hooks/useFadeIn';

const PartnerWithUs: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();

  const partnerHighlights = [
    {
      title: 'Travel Agencies',
      desc: 'Seamless outstation and intercity cab bookings for your domestic & international tourists.',
    },
    {
      title: 'Tour Operators',
      desc: 'Dependable long-distance fleet partner for holiday itineraries across Maharashtra & Goa.',
    },
    {
      title: 'Corporates',
      desc: 'Punctual, executive chauffeur service for client visits, airport runs, and executive delegates.',
    },
    {
      title: 'Event Companies',
      desc: 'Premium wedding and event guest transportation with spacious 7-seater Crysta comfort.',
    },
  ];

  return (
    <section
      id="partner"
      ref={sectionRef}
      className="fade-in-section py-10 md:py-24 bg-[#0B1530] text-white relative overflow-hidden"
    >
      {/* Decorative ambient background blur */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-[#132044] rounded-full blur-3xl pointer-events-none opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading (light=true for dark background) */}
        <SectionHeading
          title="Partner With Us"
          subtitle="Expand your travel offerings with a trusted, chauffeur-driven Innova Crysta partner."
          light={true}
        />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: Pitch & Partner Categories */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-[#F5B400]/20 text-[#F5B400] border border-[#F5B400]/30 uppercase tracking-wider">
                B2B & Corporate Tie-ups
              </span>
              <p className="font-['Inter'] text-gray-200 text-base md:text-lg leading-relaxed">
                {siteConfig.partnerPitch}
              </p>
            </div>

            {/* Partner Types List with Checkmarks */}
            <div className="space-y-4 pt-2">
              <h4 className="font-['Poppins'] font-semibold text-lg text-white">
                Who We Collaborate With:
              </h4>
              <ul className="space-y-3">
                {partnerHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F5B400]/20 text-[#F5B400] flex items-center justify-center border border-[#F5B400]/40">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-['Poppins'] font-medium text-white text-base">
                        {item.title}
                      </span>
                      <p className="font-['Inter'] text-gray-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick trust reassurance */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-gray-300 leading-relaxed font-['Inter']">
              <strong className="text-white block mb-1 font-semibold">
                Transparent & Professional:
              </strong>
              Direct coordination, punctuality guarantee, clean vehicle presentation, and courteous driver conduct for all your valuable guests.
            </div>
          </div>

          {/* Right Column: Partner Enquiry Form wrapped in frosted glass card */}
          <div className="lg:col-span-7">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8 shadow-2xl">
              <PartnerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
