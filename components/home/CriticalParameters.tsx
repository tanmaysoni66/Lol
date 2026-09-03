"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Zap, Waves, Info, TrendingUp, ShoppingCart, Layers, Home, Sprout, ArrowRight } from "lucide-react";
import { Counter } from "./ProductionSOP";

export default function CriticalParameters() {
  const params = [
    { label: "Production Temp", value: "14–18", unit: "°C", icon: Zap, color: "text-blue-400" },
    { label: "Air Humidity", value: "85–95", unit: "%", icon: Waves, color: "text-cyan-400" },
    { label: "CO₂ Level", value: "< 1000", unit: "ppm", icon: Info, color: "text-green-400" },
    { label: "Spawn Run Temp", value: "24–26", unit: "°C", icon: TrendingUp, color: "text-orange-400" },
  ];

  return (
    <>
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-5">
            <div className="badge mx-auto mb-4">Precision Metrics</div>
            <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
              <Link href="/mushroom-types" className="hover:text-current transition-colors">
                Critical <span className="gradient-text">Parameters for High-Yield Production</span>
              </Link>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-[13px] md:text-sm">
              Scientific boundaries for consistent commercial yields in organic mushroom farming across India and USA.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {params.map((p, i) => (
              <motion.div key={i} whileHover={{ translateZ: 20 }} className="glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group">
                <div className="w-8 h-8 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                  <p.icon size={22} className={p.color} />
                </div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">{p.label}</div>
                <div className="flex items-baseline justify-center gap-1">
                  <Counter value={p.value} />
                  <span className="text-[14px] font-black text-slate-500">{p.unit}</span>
                </div>
                <div className="mt-4 h-1 w-12 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: i * 0.2 }} className={`h-full bg-gradient-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-purple-500"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <EcosystemFlow />
    </>
  );
}

const EcosystemFlow = () => {
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
};
