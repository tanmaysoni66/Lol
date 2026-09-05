"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100 text-sm sm:text-base pr-4">
              {faq.q}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-5 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-700/50 pt-3">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
