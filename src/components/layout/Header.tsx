import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import useScrollSpy from '../../hooks/useScrollSpy';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Extract section IDs from navLinks for scroll spy
  const sectionIds = siteConfig.navLinks.map((link) => link.href.replace(/^#/, ''));
  const activeId = useScrollSpy(sectionIds);

  // Track scroll position to apply subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.replace(/^#/, '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0B1530] text-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/25' : ''
      }`}
    >
      <div className="px-4 md:px-8 lg:px-16 py-2.5 md:py-3">
        {/* --- Top Row: Logo & CTAs --- */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B400] rounded-md"
            aria-label={`${siteConfig.name} - Home`}
          >
            <img
              src={siteConfig.images.logo}
              alt={`${siteConfig.name} Logo`}
              loading="lazy"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain rounded-md"
            />
          </a>

          {/* Desktop Navigation (PC) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-['Poppins'] text-sm xl:text-base">
            {siteConfig.navLinks.map((link) => {
              const cleanHref = link.href.replace(/^#/, '');
              const isActive = activeId === cleanHref;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 transition-colors duration-200 border-b-2 ${
                    isActive
                      ? 'text-[#F5B400] border-[#F5B400] font-semibold'
                      : 'text-white border-transparent hover:text-[#F5B400]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#F5B400] text-[#0B1530] font-semibold text-xs sm:text-sm md:text-base px-3.5 py-1.5 sm:px-5 sm:py-2 hover:bg-[#D49E00] hover:scale-105 transition-all duration-300 shadow-md font-['Poppins']"
              aria-label="WhatsApp Us"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* --- Mobile Horizontal Navigation Strip (Matches PC strip style) --- */}
        <nav
          className="lg:hidden flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-2 pb-0.5 mt-1 border-t border-white/10 text-xs sm:text-sm font-['Poppins'] whitespace-nowrap scroll-smooth"
          aria-label="Mobile Navigation Bar"
        >
          {siteConfig.navLinks.map((link) => {
            const cleanHref = link.href.replace(/^#/, '');
            const isActive = activeId === cleanHref;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-1 transition-colors duration-200 border-b-2 shrink-0 ${
                  isActive
                    ? 'text-[#F5B400] border-[#F5B400] font-semibold'
                    : 'text-gray-200 border-transparent hover:text-[#F5B400]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
