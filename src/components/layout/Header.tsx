import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site';
import useScrollSpy from '../../hooks/useScrollSpy';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent background scrolling when mobile overlay is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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
      <div className="px-4 md:px-8 lg:px-16 py-3">
        <div className="flex items-center justify-between">
          {/* --- Left: Logo --- */}
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
              className="h-10 md:h-12 w-auto object-contain rounded-md"
            />
          </a>

          {/* --- Center: Desktop Navigation --- */}
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

          {/* --- Right: CTA & Mobile Hamburger --- */}
          <div className="flex items-center gap-3">
            {/* Desktop WhatsApp Us Button */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#F5B400] text-[#0B1530] font-semibold text-sm md:text-base px-5 py-2 hover:bg-[#D49E00] hover:scale-105 transition-all duration-300 shadow-md font-['Poppins']"
              aria-label="WhatsApp Us"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-[#F5B400] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B400] rounded-lg transition-colors cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {/* 3 lines SVG */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Full-Screen Overlay Slide-In Nav --- */}
      <div
        className={`fixed inset-0 z-50 bg-[#0B1530] text-white flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Top bar inside mobile overlay */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <img
            src={siteConfig.images.logo}
            alt={siteConfig.name}
            loading="lazy"
            className="h-10 w-auto object-contain rounded-md"
          />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white hover:text-[#F5B400] rounded-lg transition-colors cursor-pointer"
            aria-label="Close navigation menu"
          >
            {/* Close X SVG */}
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Stacked Nav Links */}
        <nav className="flex flex-col items-center justify-center gap-5 my-auto py-6 font-['Poppins']">
          {siteConfig.navLinks.map((link) => {
            const cleanHref = link.href.replace(/^#/, '');
            const isActive = activeId === cleanHref;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl font-medium tracking-wide transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#F5B400] font-bold border-b-2 border-[#F5B400]'
                    : 'text-white hover:text-[#F5B400]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* WhatsApp Button at Bottom */}
        <div className="pt-4 border-t border-white/10">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-full bg-[#F5B400] text-[#0B1530] font-semibold text-center flex items-center justify-center gap-2 hover:bg-[#D49E00] transition-colors shadow-lg font-['Poppins'] text-lg"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.058.376-.058c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
