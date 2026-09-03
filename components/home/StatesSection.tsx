"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";

export default function StatesSection() {
  const STATES = [
    "Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand", "Uttar Pradesh",
    "Madhya Pradesh", "Rajasthan", "Bihar", "Maharashtra", "Karnataka",
    "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"
  ];
  const [showAllStates, setShowAllStates] = useState(false);
  const displayedStates = showAllStates ? STATES : STATES.slice(0, 8);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 mb-4">
            <MapPin size={16} className="text-primary-start" />
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 tracking-widest uppercase">
              Nationwide Presence
            </span>
          </div>
          <h2 className="text-[18px] md:text-xl uppercase tracking-tight mb-4">
            Available across <span className="gradient-text">India & USA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[13px] md:text-sm text-slate-500">
            We provide turnkey mushroom farming setups, raw materials, and consulting across major states in India and expanding to the USA.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          <AnimatePresence>
            {displayedStates.map((state, i) => (
              <motion.div key={state} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="glass border dark:border-white/10 border-black/10 p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-center text-center group hover:bg-primary-start/5 transition-colors">
                <span className="text-[12px] md:text-sm font-bold dark:text-white text-slate-900 tracking-tight group-hover:text-primary-start transition-colors">
                  {state}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {!showAllStates && STATES.length > 8 && (
          <div className="text-center mt-8">
            <button onClick={() => setShowAllStates(true)} className="px-6 py-2 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-colors">
              View All States
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
