"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export const JourneyCTA = () => {
  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2rem] bg-white/5 dark:bg-[#11121E]/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl p-6 md:p-12 lg:p-16 text-center overflow-hidden">
          
          {/* Subtle Ambient Background Gradients inside the card */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight uppercase max-w-4xl">
              Ready to Start Your High-Yield
              <br className="hidden md:block" />
              Mushroom Farming Journey?
            </h2>

            <p className="text-[10px] md:text-xs dark:text-slate-300 text-slate-700 font-medium leading-relaxed max-w-3xl mb-6">
              Stop waiting and start your journey with India's best practical education system. Learn correct composting techniques, buy contaminated-free pure grains, get certified status, and secure maximum local state marketing setup linkages!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 w-full sm:w-auto">
              <Link 
                href="/training" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-white/10 dark:bg-black/20 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5 w-full sm:w-auto"
              >
                Enroll In Training Online
                <ArrowRight size={14} />
              </Link>
              
              <Link 
                href="/enquiry" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-white/10 dark:bg-black/20 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5 w-full sm:w-auto"
              >
                Book 1-on-1 Consultation
                <Zap size={14} />
              </Link>
            </div>

            <div className="text-[8px] md:text-[9px] dark:text-slate-400 text-slate-600 font-bold max-w-2xl">
              Looking for mushroom training near me? We ship lab-grade F1 hybrid spawn safely to every pin code in MP, UP, Bihar, Delhi & all Indian states.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
