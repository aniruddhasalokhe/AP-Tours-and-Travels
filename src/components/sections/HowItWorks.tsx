// ============================================================
// AP Tours & Travels — How It Works Section
// ============================================================
// Simple 3-step booking flow showing how easy it is to
// hire our chauffeur-driven Innova Crysta.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { useFadeIn } from '../../hooks/useFadeIn';

const stepIcons: Record<number, React.ReactNode> = {
  1: (
    <svg className="w-7 h-7 text-[#0B1530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  2: (
    <svg className="w-7 h-7 text-[#0B1530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  3: (
    <svg className="w-7 h-7 text-[#0B1530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
};

const HowItWorks: React.FC = () => {
  const [howRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="how-it-works"
      ref={howRef}
      className="py-16 md:py-24 bg-white fade-in-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Booking your comfortable Innova Crysta ride is quick and straightforward — no complicated apps or login needed."
        />

        <div className="relative mt-8 md:mt-12">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {siteConfig.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-md text-center flex flex-col items-center hover:shadow-lg transition-all duration-300"
              >
                {/* Step number badge & icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center border-2 border-[#F5B400] shadow-sm">
                    {stepIcons[item.step]}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0B1530] text-[#F5B400] font-['Poppins'] font-bold text-xs flex items-center justify-center shadow">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-['Poppins'] font-bold text-lg sm:text-xl text-[#0B1530] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner below steps */}
        <div className="mt-12 text-center bg-[#0B1530] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <h4 className="font-['Poppins'] font-bold text-xl sm:text-2xl text-white mb-3">
            Ready to Plan Your Journey?
          </h4>
          <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Reach out directly by phone or WhatsApp. We provide prompt quotes and clear travel coordination.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="amber"
              size="md"
              href={siteConfig.whatsappLink}
            >
              Enquire on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              href={siteConfig.phoneLink}
              className="border-white text-white hover:bg-white hover:text-[#0B1530]"
            >
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
