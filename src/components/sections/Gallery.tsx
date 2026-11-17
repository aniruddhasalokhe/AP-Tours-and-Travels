// ============================================================
// AP Tours & Travels — Gallery Section
// ============================================================
// Showcases real photos of our Toyota Innova Crysta and service.
// Uses images from siteConfig.images.
// ============================================================

import React from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import useFadeIn from '../../hooks/useFadeIn';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
}

const Gallery: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();

  const galleryItems: GalleryItem[] = [
    {
      src: siteConfig.images.crystaFront,
      alt: 'AP Tours & Travels Toyota Innova Crysta Front View - Clean and Well-Maintained',
      caption: 'Our actual vehicle',
      subcaption: 'Toyota Innova Crysta — Front View',
    },
    {
      src: siteConfig.images.crystaSide,
      alt: 'AP Tours & Travels Toyota Innova Crysta Side Profile - Spacious 7-Seater',
      caption: 'Our actual vehicle',
      subcaption: 'Toyota Innova Crysta — Side Profile',
    },
    {
      src: siteConfig.images.promoSquare,
      alt: 'AP Tours & Travels - Chauffeur-driven Innova Crysta in Kolhapur',
      caption: 'AP Tours & Travels',
      subcaption: 'Comfortable & Reliable Travel',
    },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="fade-in-section py-10 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="Gallery"
          subtitle="Real photos of our actual Innova Crysta — maintained to the highest standards of cleanliness and comfort."
        />

        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 flex flex-col"
            >
              {/* Image Container with zoom effect */}
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-gray-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark gradient overlay at the bottom of the image */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                  aria-hidden="true"
                />

                {/* Caption overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-[#F5B400] text-[#0B1530] mb-1 shadow-sm">
                    {item.caption}
                  </span>
                  {item.subcaption && (
                    <p className="font-['Poppins'] font-medium text-sm sm:text-base text-white drop-shadow-sm">
                      {item.subcaption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
