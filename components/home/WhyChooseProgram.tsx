"use client";

import React from "react";
import { motion } from "motion/react";

export const WhyChooseProgram = () => {
  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[2rem] bg-white/5 dark:bg-[#090A10]/60 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl p-6 md:p-10 lg:p-12 overflow-hidden">
          
          {/* Subtle Ambient Background Gradients inside the card to keep the old theme alive */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-green-600 dark:text-green-500 mb-6 shadow-sm">
              Commercial Authority
            </div>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-center leading-[1.15] mb-5 tracking-tight uppercase max-w-2xl">
              <span className="dark:text-white text-slate-900">Why Choose Our </span>
              <span className="text-purple-600 dark:text-[#8B5CF6]">Mushroom </span>
              <span className="text-teal-600 dark:text-[#2DD4BF]">Training </span>
              <br className="hidden md:block" />
              <span className="text-green-600 dark:text-[#10B981]">Program?</span>
            </h2>

            <p className="text-[10px] md:text-[11px] lg:text-xs dark:text-slate-300 text-slate-700 font-medium leading-relaxed max-w-3xl text-center mb-8">
              We aren't simple theoreticians or online aggregators. We operate one of the premier physical commercial organic labs and production farms in central India. Sourcing high-grade seed cultures, structuring automated vertical growth rooms, obtaining state agro-subsidies, and closing high-volume commercial vendor deals can be intimidating without expert support.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full mb-8">
              {[
                { value: "5000+", label: "Farmers Trained" },
                { value: "F1 Hybrid", label: "Spawn Quality" },
                { value: "Lifetime", label: "WhatsApp Help" },
                { value: "Turnkey", label: "Setup Experts" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/40 dark:bg-[#11121E]/80 border border-slate-200 dark:border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 text-center flex flex-col items-center justify-center transition-all hover:border-purple-500/30 dark:hover:border-purple-500/30 shadow-sm"
                >
                  <span className="text-sm md:text-base lg:text-lg font-black dark:text-white text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[7px] md:text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1.5 md:mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[9px] md:text-[10px] dark:text-slate-500 text-slate-500 font-medium text-center max-w-2xl mx-auto">
              Join a scientifically validated coaching program designed structurally for modern agricultural success in all major districts of India.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
