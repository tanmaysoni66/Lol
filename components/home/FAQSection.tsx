"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "What is the duration of this commercial mushroom farming training course?",
    a: "Our online mushroom training course offers lifetime on-demand access to premium step-by-step video modules, allowing you to learn at your personal speed. For offline physical training at our central farm in Jabalpur (Madhya Pradesh), we conduct intensive 2 to 3-day practical commercial sessions covering commercial bulk composting, spawning, and harvesting hands-on."
  },
  {
    q: "Do I need prior agricultural experience to join your mushroom cultivation course?",
    a: "No prior experience in agriculture is required at all! This mushroom cultivation training is developed and designed structurally from scratch for absolute beginners. We cover basic biology, room preparation, substrate sterilization, hygienic standards, temperature monitoring, and commercial packaging, guiding you step-by-step."
  },
  {
    q: "Is there any certificate provided upon completion of the training?",
    a: "Yes, absolutely. Once you complete our commercial training modules, you will receive our professional, certified mushroom cultivation training credential. This certificate helps you secure agricultural loans, pitch to retail store chains, and satisfy safety compliance procedures for your company startup."
  },
  {
    q: "How can I locate certified mushroom training near me in my state?",
    a: "Whether you seek mushroom training in Madhya Pradesh, Uttar Pradesh, Delhi, Maharashtra, or Rajasthan, you can easily access our high-value online training portal globally. For those looking for practical mushroom growing training nearby, our offline practical academy offers masterclasses that students from all across India visit monthly."
  },
  {
    q: "What are the hot state-wise opportunities for mushroom training in Madhya Pradesh and Uttar Pradesh?",
    a: "Madhya Pradesh and Uttar Pradesh are top tier regions for mushroom cultivation due to high local availability of wheat straw, which reduces raw composting costs. In Bihar, Haryana, and Punjab, students can start with relatively simple semi-closed setups and ramp up to automated commercial climate-controlled farms."
  },
  {
    q: "Can I truly start a premium commercial mushroom business with low investment?",
    a: "Yes, organic oyster and milky varieties make for a solid low investment farming business setup. Beginners can launch their first crop in a simple insulated room or temporary bamboo structure with an investment of ₹10,000 to ₹15,000. For large industrial button mushrooms, our clients scale up to modern pasteurization tunnels and climate-insulated growth sections."
  },
  {
    q: "Is a government subsidy available for a mushroom cultivation business setup globally/in India?",
    a: "Yes, several states offer rich subsidies of up to 40% to 50% under National Horticulture Board (NHB) and Rashtriya Krishi Vikas Yojana (RKVY) schemes. Our comprehensive mushroom business training guides you through preparing your project report and technical documentation needed to secure state subsidies."
  },
  {
    q: "What are the core differences between online and offline practical training?",
    a: "Online mushroom training gives you flexible lifetime access to HD videos, charts, SOP templates, and technical forums at an extremely nominal cost. Offline practical training takes place at our high-yield farm, offering hands-on compost heap turning, inoculation (spawning) practice, casing formulation, and real-time environment sensor training."
  },
  {
    q: "What key mushroom types are covered in this crop cultivation syllabus?",
    a: "Our certified mushroom cultivation training covers White Button Mushrooms (commercial composting focus), Oyster Mushrooms (beginner-friendly substrate hydration), Milky Mushrooms (high-temperature tolerance), and specialty medicinal/decorative strains like Ganoderma."
  },
  {
    q: "How can I source pure quality first-generation mushroom spawn (seed) pan India?",
    a: "We manufacture high-grade F1 laboratory-tested hybrid spawn in-house and supply them safely in thermal boxes to farmers in Uttar Pradesh, Delhi, Bihar, West Bengal, Maharashtra, Rajasthan, Karnataka, and beyond. We guarantee high mycelium colonization rates and contamination-free deliveries."
  },
  {
    q: "Do you assist with commercial business registration, licenses, and marketing?",
    a: "Yes! Part of our professional agriculture business training India roadmap includes training on FSSAI food licensing, local MSME registration, packaging guidelines, branding, and establishing direct global and domestic B2B links with leading supermarket chains and dried export traders."
  },
  {
    q: "Is commercial button mushroom cultivation more profitable than oyster?",
    a: "Commercial button mushrooms enjoy persistent high-volume demand in hotels, restaurant kitchens, and supermarkets, making them highly profitable at scale. Oyster mushrooms are simpler to grow with lower operating costs, offering higher profit margins on local retail sales with minimal risk."
  },
  {
    q: "What temperature and climate controls are required for high-yield commercial cultivation?",
    a: "White button mushrooms require 22°C - 25°C for the early spawn run (mycelium growth) and 14°C - 18°C with high relative humidity (85%-90%) and fresh air exchange for maximum pinning. We teach you how to build cost-effective automated climate growth chambers during our program."
  },
  {
    q: "What post-training support do you offer to students when they launch their farm?",
    a: "Our students gain exclusive access to our VIP WhatsApp support channel, direct telephone consultation with master agriculturalists, commercial product marketing support, bulk spawn discounts, and diagnostic troubleshooting assistance for any mycelium growth issues."
  },
  {
    q: "How can agricultural beginners start successfully in Rajasthan, Haryana, and Punjab?",
    a: "In arid regions like Rajasthan, indoor farming protects crops from intense heat waves. In Haryana and Punjab, abundant wheat straw compost material offers high cost optimization potentials. Our tailored plans optimize water use and energy efficiency based on local regional logistics."
  },
  {
    q: "Why is high-quality compost referred to as the heart of professional button mushroom training?",
    a: "Button mushrooms can only feed on complex, pasteurized chemical blocks of composted straw, gypsum, and urea. Our course provides the exact proportions to complete compost fermentation safely, eliminating wild molds and maximizing organic matter intake."
  },
  {
    q: "What are the major b2b market linkages available after completing agriculture business training in India?",
    a: "We connect our trained network with dry mushroom exporters, local wholesale Mandis, retail supermarkets, pharmaceuticals buying medicinal Ganoderma, and local agri-cooperatives. We also train you in sun-drying or cold-dehydrating techniques to preserve surplus crops safely."
  },
  {
    q: "How does the quality of spawn (seed) impact overall yield?",
    a: "Low-quality, aged, or contaminated seeds can lead to complete mycelium failure or weak pinning. Sourcing fresh, pure F1 grain spawn ensures aggressive mycelium colonization, which naturally crowd out competing molds and boost your overall harvest yield by up to 25%."
  },
  {
    q: "What are the common pests/diseases in commercial setups, and how are they managed?",
    a: "Green mold, wet bubble disease, and flies can impact yield under low hygienic standards. Our training focuses extensively on strict sanitation protocols, organic pesticide formulas, and correct pasteurization of composting layers to keep crops perfectly clean."
  },
  {
    q: "Why is your program recognized as the best mushroom training institute in India?",
    a: "We combine decades of real commercial farming experience with high-tech laboratory infrastructure and an easy-to-learn educational style. Rather than just offering simple theories, we provide validated scientific SOPs, live support, reliable seed supply chains, and actual turnkey consulting globally."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden bg-white/5 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-purple-500/30 bg-white/50 dark:bg-purple-900/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-purple-400 mb-5 backdrop-blur-md shadow-sm">
            Frequently Asked Questions
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.15] mb-4 tracking-tight uppercase">
            CULTIVATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 dark:from-purple-400 dark:to-green-400">KNOWLEDGE</span>
          </h2>
          
          <p className="text-[11px] md:text-[13px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto font-medium">
            Get detailed answers to highly searched technical, financial, and regulatory questions about starting a modern agriculture business in India.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-2 md:gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border border-white/20 dark:border-white/10 dark:hover:border-purple-500/30 bg-white/5 dark:bg-black/10 rounded-xl backdrop-blur-md overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-2 md:p-3 text-left focus:outline-none group"
                >
                  <div className="flex items-start gap-2 md:gap-3 pr-4">
                    <span className="text-purple-600 dark:text-purple-400 font-black text-[9px] md:text-[10px] tracking-tight mt-0.5">
                      {index + 1}.
                    </span>
                    <span className="font-bold text-slate-800 dark:text-white text-[9px] md:text-[10px] leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-purple-500 transition-colors">
                    <ChevronDown 
                      size={12} 
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-600 dark:text-purple-400" : ""}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-2 md:px-3 pb-3 pt-0.5 ml-4 md:ml-6 text-[8px] md:text-[9px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
