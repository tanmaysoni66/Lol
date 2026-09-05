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
    <section className="py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            PRECISION METRICS
          </div>
          <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight dark:text-white text-slate-900 leading-tight">
            <Link href="/mushroom-types" className="hover:text-current transition-colors">
              CRITICAL <span className="text-purple-600 dark:text-[#8B5CF6]">PARAMETERS FOR HIGH-YIELD</span> <span className="text-emerald-500 dark:text-[#10B981]">PRODUCTION</span>
            </Link>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] font-medium max-w-2xl mx-auto">
            Scientific boundaries for consistent commercial yields in organic mushroom farming across India and USA.
          </p>
        </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {params.map((p, i) => (
              <motion.div key={i} whileHover={{ translateZ: 20 }} className="glass p-4 rounded-2xl border dark:border-white/5 border-black/5 text-center group">
                <div className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-start group-hover:text-white transition-all">
                  <p.icon size={18} className={p.color} />
                </div>
                <div className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{p.label}</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl md:text-2xl font-black dark:text-white text-slate-900">{p.value}</span>
                  <span className="text-[10px] md:text-[11px] font-black text-slate-500">{p.unit}</span>
                </div>
                <div className="mt-3 h-1 w-8 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: i * 0.2 }} className={`h-full bg-gradient-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-purple-500"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
