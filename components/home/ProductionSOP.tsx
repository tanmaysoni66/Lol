"use client";
import React from "react";
import { motion } from "motion/react";
import { Layers, Shield, BookOpen, Sprout } from "lucide-react";

export const ProductionSOP = () => {
  const steps = [
    { title: "Phase-I Composting", days: "8–10 Days", temp: "60–70°C", param: "C:N Ratio Control", icon: Layers },
    { title: "Phase-II Pasteurization", days: "5–7 Days", temp: "57–60°C", param: "Ammonia Level < 10ppm", icon: Shield },
    { title: "Spawning & Incubation", days: "14–16 Days", temp: "22–25°C", param: "Mycelium Run Rate", icon: BookOpen },
    { title: "Casing & Cropping", days: "35–40 Days", temp: "16–18°C", param: "CO2 < 1000ppm", icon: Sprout },
  ];

  return (
    <section className="py-12 md:py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            SCIENTIFIC WORKFLOW
          </div>
          <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight dark:text-white text-slate-900 leading-tight">
            COMMERCIAL <span className="text-purple-600 dark:text-[#8B5CF6]">PRODUCTION</span> <span className="text-emerald-500 dark:text-[#10B981]">CYCLE SOPS</span>
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] font-medium leading-relaxed">
            Standard operating procedures followed in our commercial setups.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-md relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-gradient)] opacity-5 blur-[40px] group-hover:opacity-10 transition-opacity"></div>
              
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-black/10 dark:border-white/10 flex items-center justify-center mb-4">
                <s.icon className="text-purple-600" size={18} />
              </div>
              
              <h3 className="text-sm font-bold mb-3 dark:text-white text-slate-900">{s.title}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Duration</span>
                  <span className="text-[10px] font-bold dark:text-slate-300 text-slate-700">{s.days}</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Temperature</span>
                  <span className="text-[10px] font-bold dark:text-slate-300 text-slate-700">{s.temp}</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Critical Param</span>
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">{s.param}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
