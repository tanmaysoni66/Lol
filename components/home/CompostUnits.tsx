"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function CompostUnits() {
  return (
    <section id="compost-units" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            RAW MATERIAL INFRASTRUCTURE
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight dark:text-white text-slate-900 leading-[1.15]">
            <Link href="/equipment" className="hover:text-current transition-colors">
              STANDARD COMMERCIAL <span className="text-purple-600 dark:text-[#8B5CF6]">COMPOST</span> <span className="text-emerald-500 dark:text-[#10B981]">UNITS</span>
            </Link>
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-600 text-[11px] md:text-[13px] font-medium leading-relaxed">
            Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-6">
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
              className={`glass card-padding rounded-3xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-2xl shadow-brand-blue/10 border-primary-mid/30" : ""}`}
            >
              {comp.recommended && (
                <div className="absolute top-4 right-5 badge text-[8px]">
                  Best Value
                </div>
              )}
              <h3 className="dark:text-white text-slate-900 mb-2">
                {comp.name}
              </h3>
              <div className="text-slate-500 mb-6 font-medium text-[13px]">
                {comp.desc}
              </div>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {Object.entries(comp.stats).map(([k, v]) => (
                  <div key={k} className="p-2 md:p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center">
                    <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">
                      {k}
                    </div>
                    <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6">
                <span className="text-[11px] font-semibold dark:text-slate-400 text-slate-600">
                  Est. CapEx
                </span>
                <span className="text-sm font-bold dark:text-white text-slate-900">
                  {comp.investment}
                </span>
              </div>
              <Link href="/compost-unit-specs" className="btn-primary w-full py-2 rounded-xl text-[12px] font-bold min-h-[44px] flex items-center justify-center">
                Get Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
