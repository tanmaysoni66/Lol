"use client";

import { motion } from 'motion/react';

export function ProductionSOP() {
  const steps = [
    { step: "01", title: "Substrate Preparation", desc: "Chopping and wetting agricultural waste." },
    { step: "02", title: "Pasteurization", desc: "Chemical or steam sterilization to remove competitors." },
    { step: "03", title: "Spawning", desc: "Mixing premium F1 mycelium with the cooled substrate." },
    { step: "04", title: "Incubation", desc: "Dark room mycelium run (15-20 days)." },
    { step: "05", title: "Fruiting", desc: "Introducing light and fresh air to trigger pinning." },
    { step: "06", title: "Harvesting", desc: "Plucking, grading, and packing for market." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-slate-900 mb-4">Standard Operating Procedure</h2>
          <p className="text-slate-600 text-lg">A highly structured, scientific approach to commercial mushroom cultivation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="text-6xl font-black text-slate-50 absolute -top-4 -right-4 group-hover:text-emerald-50 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-poppins font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
