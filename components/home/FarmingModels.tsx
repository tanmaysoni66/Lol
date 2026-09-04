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
    <section id="farming-models" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6 text-center lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200 dark:border-slate-700">Investment Paths</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Farming <span className="bg-clip-text text-transparent bg-[var(--primary-gradient)]">Models</span>,<br/> Setup Cost & ROI
            </h2>
            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base">
              Scientifically designed mushroom grow rooms optimized for Indian and diverse global climate conditions.
            </p>
          </div>
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-1.5 rounded-xl flex gap-1 w-fit mx-auto lg:mx-0 border border-black/5 dark:border-white/5">
            <button onClick={() => setActiveTab("fixed")} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "fixed" ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}>Fixed Models</button>
            <button onClick={() => setActiveTab("custom")} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "custom" ? "bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}>Custom Build</button>
          </div>
        </div>

        {activeTab === "fixed" ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl flex flex-col ${m.recommended ? "border-purple-500/40 shadow-2xl lg:scale-105 z-10 bg-purple-50/30 dark:bg-purple-900/10" : "border border-black/5 dark:border-white/5 shadow-lg"}`}>
                {m.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Recommended Model
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{m.label}</div>
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">{m.name}</h3>
                  <div className="mt-2 text-slate-500 text-xs font-medium">{m.size} Space Required</div>
                </div>
                <div className="space-y-4 mb-6 flex-1">
                  <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Investment Setup Cost</div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">{m.investment}</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-black/5 dark:border-white/5">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Expected Yield</div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">{m.yield}</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 dark:text-slate-400 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-purple-500" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/model-details" className={`w-full min-h-[50px] rounded-xl font-bold transition-all text-sm flex justify-center items-center ${m.recommended ? "bg-purple-600 text-white shadow-xl hover:bg-purple-700" : "bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-8 lg:p-12 rounded-[2.5rem] border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Design Your Custom Plant</h3>
                  <p className="text-sm text-slate-500">Adjust the sliders to see what infrastructure fits your budget and space.</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Available Area (Sq.Ft)</label>
                      <span className="text-xl font-bold dark:text-white text-slate-900">{customArea.toLocaleString()}</span>
                    </div>
                    <input type="range" min="500" max="10000" step="500" value={customArea} onChange={(e) => setCustomArea(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Budget (₹)</label>
                      <span className="text-xl font-bold dark:text-white text-slate-900">₹{(customBudget / 100000).toFixed(1)} Lakh</span>
                    </div>
                    <input type="range" min="200000" max="10000000" step="100000" value={customBudget} onChange={(e) => setCustomBudget(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500" />
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-purple-500/20 text-center flex flex-col items-center justify-center h-full">
                <ShieldCheck size={56} className="text-purple-600 mb-6" />
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-3">Recommended Commercial Setup</div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 leading-tight">{getRecommendedSetup().title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">{getRecommendedSetup().desc}</p>
                <Link href="/model-details" className="bg-[var(--primary-gradient)] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
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
