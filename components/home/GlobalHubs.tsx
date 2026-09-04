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
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-[#11121E]/60 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-800 dark:text-slate-300 mb-6 backdrop-blur-xl shadow-sm">
          Global & National Service Area
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.2] mb-6 tracking-tight uppercase">
          Active Commercial Project <span className="text-purple-600 dark:text-[#8B5CF6]">Hubs</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 dark:from-[#8B5CF6] dark:to-[#10B981]">Globally</span>
        </h2>
        
        <p className="text-[11px] md:text-xs dark:text-slate-300 text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          We provide commercial mushroom farming training and turnkey setup services across all states of India and key international markets, ensuring precision and high yield for every climate zone globally.
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] md:text-xs font-bold text-white bg-gradient-to-r from-[#7b51f8] to-[#2fd17b] hover:opacity-90 shadow-[0_0_20px_rgba(47,209,123,0.25)] transition-all hover:scale-105"
        >
          <Globe size={16} />
          Pan India & Global Operations
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};
