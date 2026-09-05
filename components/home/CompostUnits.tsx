"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function CompostUnits() {
  return (
    <section id="compost-units" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            RAW MATERIAL INFRASTRUCTURE
          </div>
          <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight dark:text-white text-slate-900 leading-tight">
            <Link href="/equipment" className="hover:text-current transition-colors">
              STANDARD COMMERCIAL <span className="text-purple-600 dark:text-[#8B5CF6]">COMPOST</span> <span className="text-emerald-500 dark:text-[#10B981]">UNITS</span>
            </Link>
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] font-medium leading-relaxed">
            Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "2000-Bag Commercial Unit (20T)",
              desc: "14x30 System",
              investment: "₹15-17 Lakh",
              stats: { bags: "2,000", cap: "20t", cycle: "15d" },
            },
            {
              name: "3000-Bag Industrial Unit (30T)",
              desc: "14x40 System",
              investment: "₹19-21 Lakh",
              stats: { bags: "3,000", cap: "30t", cycle: "15d" },
              recommended: true,
            },
          ].map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`glass p-4 rounded-2xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-xl shadow-brand-blue/10 border-primary-mid/30" : ""}`}
            >
              {comp.recommended && (
                <div className="absolute top-3 right-4 badge text-[7px] py-0.5 px-2">
                  Best Value
                </div>
              )}
              <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1">
                {comp.name}
              </h3>
              <div className="text-slate-500 mb-4 font-medium text-[10px]">
                {comp.desc}
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(comp.stats).map(([k, v]) => (
                  <div key={k} className="p-1.5 md:p-2 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center">
                    <div className="text-[7px] text-slate-500 font-bold uppercase mb-0.5">
                      {k}
                    </div>
                    <div className="text-xs md:text-sm font-bold dark:text-white text-slate-900">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-4">
                <span className="text-[9px] font-semibold dark:text-slate-400 text-slate-600">
                  Est. CapEx
                </span>
                <span className="text-xs font-bold dark:text-white text-slate-900">
                  {comp.investment}
                </span>
              </div>
              <Link href="/compost-unit-specs" className="w-full min-h-[36px] rounded-lg text-[9px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 bg-white/10 dark:bg-black/20 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5 flex justify-center items-center">
                Get Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
