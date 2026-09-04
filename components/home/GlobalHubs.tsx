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
    <section className="py-24 px-6 lg:px-8 relative z-10 w-full overflow-hidden">
      {/* Ambient Liquid 3D Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] bg-purple-500/10 dark:bg-purple-900/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-5 py-2 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-[#11121E]/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-slate-800 dark:text-slate-300 mb-8 backdrop-blur-xl shadow-sm">
          Global & National Service Area
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black dark:text-white text-slate-900 leading-[1.2] mb-8 tracking-tight uppercase">
          Active Commercial Project <span className="text-purple-600 dark:text-[#8B5CF6]">Hubs</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 dark:from-[#8B5CF6] dark:to-[#10B981]">Globally</span>
        </h2>
        
        <p className="text-[13px] md:text-base dark:text-slate-300 text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
          We provide commercial mushroom farming training and turnkey setup services across all states of India and key international markets, ensuring precision and high yield for every climate zone globally.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14 max-w-4xl mx-auto">
          {states.map((state, i) => (
            <div 
              key={i} 
              className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-[#161726]/80 text-[11px] md:text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all cursor-default shadow-sm"
            >
              {state}
            </div>
          ))}
        </div>

        <Link 
          href="/states" 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#7b51f8] to-[#2fd17b] hover:opacity-90 shadow-[0_0_20px_rgba(47,209,123,0.25)] hover:shadow-[0_0_30px_rgba(123,81,248,0.4)] transition-all hover:scale-105"
        >
          <Globe size={18} />
          Pan India & Global Operations
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};
