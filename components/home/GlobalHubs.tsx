"use client";

import React from "react";

export const GlobalHubs = () => {
  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      {/* Ambient Liquid 3D Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[200px] bg-purple-500/5 dark:bg-purple-900/10 blur-[80px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest dark:text-purple-300 text-purple-700 mb-4 shadow-sm">
          TRAINING ACADEMY
        </div>
        
        <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight uppercase">
          LOCATION-BASED <span className="text-purple-600 dark:text-[#8B5CF6]">LEARNING</span> <span className="text-emerald-500 dark:text-[#10B981]">VERTICALS</span>
        </h2>
        
        <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Comprehensive Mushroom Training
        </p>
      </div>
    </section>
  );
};
