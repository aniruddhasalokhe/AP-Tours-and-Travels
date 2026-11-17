// ============================================================
// AP Tours & Travels — Popular Routes Section
// ============================================================
// Showcases popular outstation routes from Kolhapur with
// one-click pre-filled WhatsApp quote buttons.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { buildRouteQuoteMessage, buildWhatsAppLink } from '../../utils/whatsapp';
import { useFadeIn } from '../../hooks/useFadeIn';

const PopularRoutes: React.FC = () => {
  const [routesRef] = useFadeIn<HTMLElement>();

  return (
    <section
      id="routes"
      ref={routesRef}
      className="hidden md:block py-16 md:py-24 bg-gray-50 fade-in-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Popular Travel Routes"
          subtitle="Frequent chauffeur-driven Innova Crysta trips from Kolhapur to major destinations across Maharashtra and neighboring states."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.routes.map((route, index) => {
            const quoteMessage = buildRouteQuoteMessage(route.from, route.to);
            const waLink = buildWhatsAppLink(siteConfig.whatsappNumber, quoteMessage);

            return (
              <Card
                key={index}
                className="flex flex-col justify-between border border-gray-100 hover:border-[#F5B400]/40 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#0B1530]">
                      <svg className="w-3 h-3 text-[#F5B400]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                      Innova Crysta 7-Seater
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Chauffeur Driven</span>
                  </div>

                  <div className="my-4">
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Origin & Destination</div>
                    <div className="mt-1 flex items-center gap-2 text-lg sm:text-xl font-bold font-['Poppins'] text-[#0B1530]">
                      <span>{route.from}</span>
                      <svg
                        className="w-5 h-5 text-[#F5B400] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <span className="text-[#0B1530]">{route.to}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-5">
                    Doorstep pickup anywhere in {route.from}, smooth highway drive, and on-time drop at {route.to}.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="whatsapp"
                    size="sm"
                    href={waLink}
                    className="w-full text-sm font-semibold justify-center shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.153.57 4.173 1.564 5.926l-1.657 6.052 6.208-1.629c1.704.933 3.659 1.472 5.741 1.472 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Get Quote on WhatsApp
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 p-4 sm:p-5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 font-medium">
            <span className="font-semibold text-[#0B1530]">Note:</span> {siteConfig.routesDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
