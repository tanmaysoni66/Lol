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
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            SCIENTIFIC WORKFLOW
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight dark:text-white text-slate-900 leading-[1.15]">
            COMMERCIAL <span className="text-purple-600 dark:text-[#8B5CF6]">PRODUCTION</span> <span className="text-emerald-500 dark:text-[#10B981]">CYCLE SOPS</span>
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-600 text-[11px] md:text-[13px] font-medium leading-relaxed">
            Standard operating procedures followed in our commercial setups.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-gradient)] opacity-5 blur-[50px] group-hover:opacity-10 transition-opacity"></div>
              
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6">
                <s.icon className="text-purple-600" size={24} />
              </div>
              
              <h3 className="text-lg font-bold mb-4 dark:text-white text-slate-900">{s.title}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</span>
                  <span className="text-sm font-bold dark:text-slate-300 text-slate-700">{s.days}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Temperature</span>
                  <span className="text-sm font-bold dark:text-slate-300 text-slate-700">{s.temp}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Critical Param</span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{s.param}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
