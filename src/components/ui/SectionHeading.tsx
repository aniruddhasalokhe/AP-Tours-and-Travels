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
    <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 ${className}`}>
      <h2
        className={`font-['Poppins'] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight ${
          light ? 'text-white' : 'text-[#0B1530]'
        }`}
      >
        {title}
      </h2>
      {/* Amber underline accent bar */}
      <div className="w-16 h-1 bg-[#F5B400] mx-auto mt-3 rounded-full" />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-['Inter'] leading-relaxed ${
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
