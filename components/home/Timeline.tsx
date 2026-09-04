"use client";
import React from "react";
import { motion } from "motion/react";
import { Info, Zap, BookOpen, Sprout } from "lucide-react";

export const Timeline = () => {
  const steps = [
    { title: "Consultation", days: "Day 1-7", desc: "Site survey, feasibility study, and project proposal.", icon: Info },
    { title: "Setup & Build", days: "Day 15-60", desc: "Turnkey construction of grow rooms and compost tunnels.", icon: Zap },
    { title: "Training", days: "Day 61-75", desc: "Hands-on training on mushroom substrate preparation.", icon: BookOpen },
    { title: "Production Begins", days: "Day 76+", desc: "Casing, pinning, and first commercial harvest.", icon: Sprout },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">Commercial Process Flow</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
            Your <span className="bg-clip-text text-transparent bg-[var(--primary-gradient)]">Journey</span> to First Commercial Harvest
          </h2>
          <p className="max-w-xl mx-auto text-slate-500">
            A data-driven approach to building a highly successful mushroom farm.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px dark:bg-white/5 bg-black/5 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary-gradient)] flex items-center justify-center mx-auto mb-6 shadow-xl text-white transition-transform group-hover:scale-110 group-hover:-translate-y-2">
                  <s.icon size={28} />
                </div>
                <div className="text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase mb-2 tracking-widest">
                  {s.days}
                </div>
                <h3 className="dark:text-white text-slate-900 mb-3 font-bold text-lg tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
