"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShoppingCart, Layers, Home, Sprout, Zap, TrendingUp, ArrowRight } from "lucide-react";

export function EcosystemFlow() {
  const steps = [
    { label: "RAW MATERIAL", icon: ShoppingCart },
    { label: "COMPOST PREP", icon: Layers },
    { label: "PRODUCTION ROOM", icon: Home },
    { label: "PRECISION HARVEST", icon: Sprout },
    { label: "COLD CHAIN", icon: Zap },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            COMMERCIAL OPERATION MODEL
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight uppercase">
            COMPLETE COMMERCIAL FARMING <span className="bg-purple-900/40 text-white px-2 py-0.5 rounded-md">ECOSYSTEM FLOW & SETUP</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-4 min-w-[120px] md:min-w-[140px] snap-center shrink-0 cursor-pointer group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl dark:bg-[#161326] bg-slate-100 flex items-center justify-center transition-all border dark:border-purple-600/50 border-purple-500/50">
                  <s.icon size={28} className="text-green-500 group-hover:text-green-400" />
                </div>
                <span className="text-[11px] md:text-[13px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {s.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-2 md:mx-4">
                  <ArrowRight size={20} className="text-green-500" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
