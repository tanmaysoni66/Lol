"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShoppingCart, Layers, Home, Sprout, Zap, TrendingUp, ArrowRight } from "lucide-react";

export function EcosystemFlow() {
  const steps = [
    { label: "Raw Material", icon: ShoppingCart, href: "/process/raw-material" },
    { label: "Compost Prep", icon: Layers, href: "/process/compost-preparation" },
    { label: "Production Room", icon: Home, href: "/process/production-room" },
    { label: "Precision Harvest", icon: Sprout, href: "/process/precision-harvest" },
    { label: "Cold Chain", icon: Zap, href: "/process/cold-chain" },
    { label: "Market Linkage", icon: TrendingUp, href: "/process/market-linkage" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Commercial Operation Model</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            Complete Commercial Farming <span className="gradient-text">Ecosystem Flow & Setup</span>
          </h2>
        </div>
        <div className="flex items-center gap-4 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <Link href={s.href}>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-4 min-w-[140px] md:min-w-[160px] snap-center shrink-0 cursor-pointer group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl dark:bg-white/5 bg-black/5 flex items-center justify-center transition-all group-hover:bg-primary-start group-hover:text-white text-primary-start border dark:border-white/10 border-black/10">
                    <s.icon size={32} />
                  </div>
                  <span className="text-[11px] md:text-[14px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                </motion.div>
              </Link>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-2 md:mx-4">
                  <ArrowRight size={24} className="text-slate-400 dark:text-white/80" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
