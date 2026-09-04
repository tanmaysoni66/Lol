"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-5 shadow-sm">
            SUCCESS STORIES
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight dark:text-white text-slate-900 leading-[1.15]">
            REAL <span className="text-purple-600 dark:text-[#8B5CF6]">COMMERCIAL</span> <span className="text-emerald-500 dark:text-[#10B981]">VOICES</span>
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-600 text-[11px] md:text-[13px] font-medium leading-relaxed">
            Join 5000+ commercial farmers trained by our expert team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Rahul S.",
              location: "Bhopal",
              text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
              avatar: "RS",
            },
            {
              name: "Deepak M.",
              location: "Indore",
              text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
              avatar: "DM",
            },
            {
              name: "Suresh K.",
              location: "Sagar",
              text: "Honest ROI analysis. No hidden costs, just pure business growth.",
              avatar: "SK",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full"
            >
              <Quote size={20} className="text-primary-start mb-4 opacity-40" />
              <p className="dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold text-[12px] tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
