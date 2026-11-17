import React from 'react';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace(/^#/, '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0B1530] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* --- Three-Column Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 1: Brand & Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.images.logo}
                alt={`${siteConfig.name} Logo`}
                loading="lazy"
                className="h-12 w-auto object-contain rounded-md bg-white p-1"
              />
              <span className="font-['Poppins'] font-bold text-xl text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-['Inter'] text-sm md:text-base text-gray-300 font-medium">
              Based in Kolhapur, Maharashtra
            </p>
            <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-gray-400">
              Chauffeur-driven {siteConfig.vehicle} ({siteConfig.vehicleSeats}-seater) for outstation, intercity, corporate and airport travel.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 md:pl-6">
            <h3 className="font-['Poppins'] font-semibold text-lg text-white tracking-wide border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 font-['Inter'] text-sm md:text-base">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-[#F5B400] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#F5B400] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Google Listing */}
          <div className="space-y-4">
            <h3 className="font-['Poppins'] font-semibold text-lg text-white tracking-wide border-b border-white/10 pb-2 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-3 font-['Inter'] text-sm md:text-base">
              {/* Phone */}
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F5B400] transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F5B400] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span>+91 {siteConfig.phone}</span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F5B400] transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                    </svg>
                  </span>
                  <span>WhatsApp Booking</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F5B400] transition-colors duration-200 break-all"
                >
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#F5B400] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>

            {/* Find us on Google button */}
            <div className="pt-2">
              <a
                href={siteConfig.googleListingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F5B400] text-[#F5B400] hover:bg-[#F5B400] hover:text-[#0B1530] transition-all duration-300 font-['Poppins'] font-semibold text-sm hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Find us on Google</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-400 font-['Inter']">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-gray-400">
            Comfortable Chauffeur-Driven Travel from Kolhapur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
