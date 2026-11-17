import React from 'react';
import { siteConfig } from '../../config/site';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  light = false,
  className = '',
}) => {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 ${className}`}>
      <h2
        className={`font-['Poppins'] font-bold text-xl sm:text-2xl md:text-3xl tracking-tight ${
          light ? 'text-white' : 'text-[#0B1530]'
        }`}
      >
        {title}
      </h2>
      {/* Amber underline accent bar */}
      <div className="w-12 sm:w-16 h-1 bg-[#F5B400] mx-auto mt-2 sm:mt-3 rounded-full" />
      {subtitle && (
        <p
          className={`mt-2 sm:mt-4 text-xs sm:text-base md:text-lg font-['Inter'] leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
