"use client";

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    "High-yielding F1 Commercial Spawn",
    "Real-world farming experience",
    "Dedicated agronomist support",
    "Customized infrastructure solutions",
    "ISO Certified training programs",
    "Guaranteed buyback options"
  ];

  return (
    <section className="py-24 bg-[#0a0f16] relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-[#131b26] overflow-hidden relative border border-white/10 shadow-2xl">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-emerald-500/5 flex items-center justify-center text-emerald-800/20 font-bold text-4xl">
                  Farm Setup Image
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1a2332] p-6 rounded-2xl shadow-xl border border-white/10">
                <div className="text-4xl font-black text-gradient mb-1">10+</div>
                <div className="text-slate-400 font-medium text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">Why Partner With Organic Mushrooms Farm?</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We aren't just consultants; we are commercial growers. Our methodologies are tested in our own farms before being recommended to you. We ensure your investment yields maximum returns through scientific cultivation practices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-300 font-medium">{reason}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="https://wa.me/919203544140" className="inline-flex items-center justify-center bg-white hover:bg-slate-200 text-[#0B0F19] px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
