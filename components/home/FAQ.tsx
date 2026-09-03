"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "How much does a commercial mushroom farm setup cost?",
      a: "The cost of a commercial mushroom farm setup varies depending on the scale and infrastructure. We offer turnkey setup solutions starting from small-scale models to large commercial units. Contact us for a custom quote based on your land area."
    },
    {
      q: "Do you provide online mushroom farming training?",
      a: "Yes, we provide comprehensive online and offline training programs covering everything from spawn preparation to commercial cultivation techniques. Certification is provided upon completion."
    },
    {
      q: "Which mushroom is best for beginners?",
      a: "Oyster mushrooms are highly recommended for beginners due to their fast crop cycle (30-45 days), lower risk of contamination, and adaptability to a wide range of temperatures."
    },
    {
      q: "Do you supply mushroom spawn across India?",
      a: "Yes, we supply premium F1 generation spawn across PAN India with secure, temperature-controlled logistics to ensure high viability upon arrival."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Clear your doubts about commercial mushroom farming.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="font-poppins font-semibold text-slate-800">{faq.q}</span>
                <ChevronDown className={`text-slate-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
