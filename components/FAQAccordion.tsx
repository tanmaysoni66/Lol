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
          className="bg-white/5 dark:bg-black/10 backdrop-blur-md rounded-xl overflow-hidden shadow-sm border border-white/20 dark:border-white/10 transition-all duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
          >
            <span className="font-medium text-gray-900 dark:text-gray-100 text-xs sm:text-sm pr-4">
              {faq.q}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-4 pb-3 text-gray-700 dark:text-gray-300 text-[11px] sm:text-xs leading-relaxed border-t border-black/5 dark:border-white/10 pt-2">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
