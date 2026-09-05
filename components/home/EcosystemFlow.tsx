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
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            COMMERCIAL OPERATION MODEL
          </div>
          <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight uppercase">
            COMPLETE COMMERCIAL FARMING <span className="text-purple-600 dark:text-[#8B5CF6]">ECOSYSTEM FLOW & SETUP</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-2 min-w-[90px] md:min-w-[110px] snap-center shrink-0 cursor-pointer group">
                <s.icon size={32} className="text-emerald-500 dark:text-[#10B981] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mb-1 transition-colors" />
                <span className="text-[9px] md:text-[10px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {s.label}
                </span>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-1 md:mx-2">
                  <ArrowRight size={16} className="text-slate-300 dark:text-slate-600" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
