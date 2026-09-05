"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const FarmingModels = () => {
  const [activeTab, setActiveTab] = useState<"fixed" | "custom">("fixed");
  const [customArea, setCustomArea] = useState<number>(1000);
  const [customBudget, setCustomBudget] = useState<number>(500000);

  const getRecommendedSetup = () => {
    if (customArea >= 5000 || customBudget >= 5000000) {
      return { title: "Industrial Turnkey Mushroom Unit", desc: "Fully automated climate control with Phase-II bunker integration for high commercial yield." };
    }
    if (customArea >= 1500 || customBudget >= 1500000) {
      return { title: "Automated Climate Control Room", desc: "Ideal for year-round commercial button mushroom production with PUF panels." };
    }
    return { title: "Small-Scale Mushroom Tray System", desc: "Cost-effective manual setup for seasonal farming and beginners." };
  };

  const models = [
    { name: "Starter Package", size: "18 x 30 ft", investment: "₹2-12 Lakh", yield: "800-1000 kg/cycle", features: ["Small Scale", "Manual Ops", "Local Markets"], label: "Beginner Choice", recommended: false },
    { name: "Standard Commercial Model", size: "18 x 70 ft", investment: "₹15-42 Lakh", yield: "3000-3500 kg/cycle", features: ["Automated Climate", "Export Ready", "High ROI"], label: "Most Popular", recommended: true },
    { name: "Industrial Factory Unit", size: "Compost + 4 Rooms", investment: "₹1.5Cr - 2.5Cr", yield: "15,000+ kg/cycle", features: ["Full Ecosystem", "Full Automation", "Global B2B Supply"], label: "Business Pro", recommended: false },
  ];

  return (
    <section id="farming-models" className="py-12 md:py-16 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
              INVESTMENT PATHS
            </div>
            <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-[1.15] mb-3 tracking-tight">
              Commercial Farming <br/>
              <span className="text-purple-600 dark:text-[#8B5CF6]">Models</span>, Setup Cost & ROI
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
              Scientifically designed mushroom grow rooms optimized for Indian and diverse global climate conditions.
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-1 rounded-lg flex gap-1 w-fit mx-auto lg:mx-0 border border-black/5 dark:border-white/5">
            <button onClick={() => setActiveTab("fixed")} className={`px-4 py-2 rounded-md text-[11px] font-bold transition-all ${activeTab === "fixed" ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}>Fixed Models</button>
            <button onClick={() => setActiveTab("custom")} className={`px-4 py-2 rounded-md text-[11px] font-bold transition-all ${activeTab === "custom" ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}>Custom Build</button>
          </div>
        </div>

        {activeTab === "fixed" ? (
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {models.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl flex flex-col ${m.recommended ? "border-purple-500/40 shadow-xl lg:scale-105 z-10 bg-purple-50/30 dark:bg-purple-900/10" : "border border-black/5 dark:border-white/5 shadow-md"}`}>
                {m.recommended && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-purple-600 text-white text-[8px] font-black uppercase tracking-widest shadow-md">
                    Recommended Model
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-purple-600 dark:text-purple-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1.5">{m.label}</div>
                  <h3 className="text-sm md:text-base font-bold dark:text-white text-slate-900 tracking-tight">{m.name}</h3>
                  <div className="mt-1 text-slate-500 text-[10px] font-medium">{m.size} Space Required</div>
                </div>
                <div className="space-y-3 mb-5 flex-1">
                  <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-0.5">Investment Setup Cost</div>
                    <div className="text-sm font-bold dark:text-white text-slate-900">{m.investment}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-0.5">Expected Yield</div>
                    <div className="text-sm font-bold dark:text-white text-slate-900">{m.yield}</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] font-medium">
                      <CheckCircle2 size={12} className="text-purple-500" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/model-details" className={`w-full min-h-[36px] rounded-lg text-[9px] font-black uppercase tracking-widest transition-all flex justify-center items-center backdrop-blur-xl hover:scale-105 border-t border-l border-r border-b ${m.recommended ? "text-purple-700 dark:text-purple-300 bg-white/10 dark:bg-black/20 border-white/40 dark:border-white/10 border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] hover:bg-white/20 dark:hover:bg-white/5" : "text-slate-700 dark:text-slate-300 bg-white/5 dark:bg-black/10 border-white/20 dark:border-white/5 border-black/5 dark:border-black/20 shadow-[2px_2px_5px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.05)] hover:bg-white/10 dark:hover:bg-white/10"}`}>
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-6 lg:p-8 rounded-[2rem] border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[300px] h-[300px] bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Design Your Custom Plant</h3>
                  <p className="text-[11px] text-slate-500">Adjust the sliders to see what infrastructure fits your budget and space.</p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Available Area (Sq.Ft)</label>
                      <span className="text-sm font-bold dark:text-white text-slate-900">{customArea.toLocaleString()}</span>
                    </div>
                    <input type="range" min="500" max="10000" step="500" value={customArea} onChange={(e) => setCustomArea(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Estimated Budget (₹)</label>
                      <span className="text-sm font-bold dark:text-white text-slate-900">₹{(customBudget / 100000).toFixed(1)} Lakh</span>
                    </div>
                    <input type="range" min="200000" max="10000000" step="100000" value={customBudget} onChange={(e) => setCustomBudget(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500" />
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-purple-500/20 text-center flex flex-col items-center justify-center h-full">
                <ShieldCheck size={36} className="text-purple-600 mb-4" />
                <div className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-2">Recommended Commercial Setup</div>
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2 leading-tight">{getRecommendedSetup().title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-[11px] leading-relaxed mb-6 max-w-sm">{getRecommendedSetup().desc}</p>
                <Link href="/model-details" className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-2 rounded-lg text-[11px] font-bold shadow-md transition-colors">
                  View Detailed Specs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
