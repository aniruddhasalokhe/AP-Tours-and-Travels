// ============================================================
// AP Tours & Travels — Hero Section
// ============================================================
// Features hero banner, headline, tagline, primary CTAs
// (WhatsApp & Call), and embedded Quick Quote Form.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import { Button } from '../ui/Button';
import QuickQuoteForm from '../forms/QuickQuoteForm';
import { useFadeIn } from '../../hooks/useFadeIn';

const Hero: React.FC = () => {
  const [heroRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex items-center justify-center pt-8 pb-10 sm:pt-14 sm:pb-14 md:py-24 bg-[#0B1530] text-white overflow-hidden fade-in-section"
    >
      {/* Background Hero Banner with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.images.heroWide}
          alt="Toyota Innova Crysta Chauffeur Service Kolhapur"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1530]/95 via-[#0B1530]/85 to-[#0B1530]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Tagline, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#F5B400]/15 border border-[#F5B400]/30 text-[#F5B400] text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#F5B400] animate-ping" />
              Chauffeur-Driven Silver Innova Crysta (7-Seater)
            </div>

            <h1 className="font-['Poppins'] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-tight text-white">
              Experience Premium Travel, <br className="hidden sm:inline" />
              <span className="text-[#F5B400]">Every Mile.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-200 font-['Inter'] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <Button
                variant="amber"
                size="md"
                href={siteConfig.whatsappLink}
                className="flex-1 sm:flex-initial shadow-md shadow-[#F5B400]/20 text-xs sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.153.57 4.173 1.564 5.926l-1.657 6.052 6.208-1.629c1.704.933 3.659 1.472 5.741 1.472 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>WhatsApp Us</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href={siteConfig.phoneLink}
                className="flex-1 sm:flex-initial border-white text-white hover:bg-white hover:text-[#0B1530] text-xs sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Now</span>
              </Button>
            </div>

            {/* Quick feature highlights below CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#F5B400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Base: Kolhapur
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#F5B400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Maharashtra & All-India Permits
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#F5B400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Punctual & Courteous Driver
              </span>
            </div>
          </div>

          {/* Right Column: Quick Quote Form */}
          <div className="lg:col-span-5 w-full">
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
