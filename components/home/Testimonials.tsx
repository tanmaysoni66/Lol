"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Farmer Testimonials</div>
          <h2 className="mb-4 uppercase">
            Real Commercial <span className="gradient-text">Voices</span>
          </h2>
          <p>Join 5000+ commercial farmers trained by our expert team.</p>
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
