import React from 'react';
import { siteConfig } from '../../config/site';

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  className = '',
}) => {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left font-['Poppins'] font-semibold text-[#0B1530] text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B400] transition-colors gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex-1">{question}</span>
        <span
          className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-[#0B1530] transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-[#F5B400]/20 text-[#0B1530]' : ''
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <p className="font-['Inter'] text-gray-600 text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
