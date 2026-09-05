"use client";

import React from "react";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GlobalHubs = () => {
  const states = [
    "Madhya Pradesh", "Maharashtra", "Uttar Pradesh", "Bihar", "Delhi", 
    "Rajasthan", "Gujarat", "Punjab", "Haryana", "Chhattisgarh", 
    "Jharkhand", "West Bengal", "Uttarakhand", "Karnataka", 
    "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala", "Himachal Pradesh"
  ];

  return (
    <section className="py-20 md:py-24 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      {/* Ambient Liquid 3D Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[300px] bg-purple-500/10 dark:bg-purple-900/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
          TRAINING ACADEMY
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight uppercase">
          LOCATION-BASED <span className="text-purple-600 dark:text-[#8B5CF6]">LEARNING</span> <span className="text-emerald-500 dark:text-[#10B981]">VERTICALS</span>
        </h2>
        
        <p className="text-[11px] md:text-[13px] dark:text-slate-400 text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Comprehensive Mushroom Training in India: Detailed offline & online coaching curriculums covering region-specific commercial farming standards across all major agricultural states.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10 max-w-4xl mx-auto">
          {states.map((state, i) => (
            <div 
              key={i} 
              className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-[#161726]/80 text-[10px] md:text-[11px] font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all cursor-default shadow-sm"
            >
              {state}
            </div>
          ))}
        </div>

        <Link 
          href="/states" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-white/10 dark:bg-black/20 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5"
        >
          <Globe size={14} />
          Pan India & Global Operations
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};
