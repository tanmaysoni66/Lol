"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Zap, Waves, Info, TrendingUp, ShoppingCart, Layers, Home, Sprout, ArrowRight } from "lucide-react";

export default function CriticalParameters() {
  const params = [
    { label: "Production Temp", value: "14–18", unit: "°C", icon: Zap, color: "text-blue-400" },
    { label: "Air Humidity", value: "85–95", unit: "%", icon: Waves, color: "text-cyan-400" },
    { label: "CO₂ Level", value: "< 1000", unit: "ppm", icon: Info, color: "text-green-400" },
    { label: "Spawn Run Temp", value: "24–26", unit: "°C", icon: TrendingUp, color: "text-orange-400" },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            PRECISION METRICS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight dark:text-white text-slate-900 leading-[1.15]">
            <Link href="/mushroom-types" className="hover:text-current transition-colors">
              CRITICAL <span className="text-purple-600 dark:text-[#8B5CF6]">PARAMETERS FOR HIGH-YIELD</span> <span className="text-emerald-500 dark:text-[#10B981]">PRODUCTION</span>
            </Link>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[11px] md:text-[13px] font-medium">
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
                  <span className="text-[28px] font-black dark:text-white text-slate-900">{p.value}</span>
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
  );
}
