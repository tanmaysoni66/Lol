"use client";

import { motion } from 'motion/react';
import { Sprout, TestTube2, Home, Truck, CircleDollarSign } from 'lucide-react';

export function EcosystemFlow() {
  const steps = [
    { icon: <TestTube2 size={24} />, title: "Premium Genetics", desc: "Lab-cultured F1 generation spawn" },
    { icon: <Sprout size={24} />, title: "Compost & Substrate", desc: "Optimized pasteurized growing medium" },
    { icon: <Home size={24} />, title: "Turnkey Setup", desc: "Climate-controlled smart farming" },
    { icon: <CircleDollarSign size={24} />, title: "Market Linkage", desc: "B2B buyback & marketplace access" },
    { icon: <Truck size={24} />, title: "Global Logistics", desc: "Pan India, USA & Australia delivery" },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">Complete Mushroom Ecosystem</h2>
          <p className="text-slate-400 text-lg">We support you at every step of your commercial farming journey, from genetics to market realization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#161d2b] border border-white/10 rounded-[24px] p-6 flex flex-col items-center text-center relative z-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981]/20 to-teal-500/20 border border-[#10b981]/30 rounded-2xl flex items-center justify-center text-[#10b981] mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                {step.icon}
              </div>
              <h3 className="font-poppins font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
