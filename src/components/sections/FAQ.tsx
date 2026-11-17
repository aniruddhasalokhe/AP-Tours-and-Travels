// ============================================================
// AP Tours & Travels — FAQ Section
// ============================================================
// Answers common customer questions regarding booking, outstation
// minimums, tolls, advance payments, and cancellation.
// Content is driven from siteConfig.faqs.
// ============================================================

import React, { useState } from 'react';
import { siteConfig } from '../../config/site';
import SectionHeading from '../ui/SectionHeading';
import AccordionItem from '../ui/AccordionItem';
import useFadeIn from '../../hooks/useFadeIn';

const FAQ: React.FC = () => {
  const [sectionRef] = useFadeIn<HTMLElement>();
  // Track open item index; start with the first item open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="fade-in-section py-10 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our chauffeur-driven car rental services."
        />

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto bg-gray-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-100 shadow-sm">
          {siteConfig.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              className={index === siteConfig.faqs.length - 1 ? 'border-b-0' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
