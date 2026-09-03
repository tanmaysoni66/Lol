"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function FarmingModels() {
  const [activeTab, setActiveTab] = useState("fixed");
  const [customArea, setCustomArea] = useState(2500);
  const [customBudget, setCustomBudget] = useState(1500000);

  const getRecommendedSetup = () => {
    if (customArea < 1000 || customBudget < 500000) {
      return { title: "Small Scale Polyhouse Unit", desc: "Perfect for beginners. Focus on seasonal growing with minimal climate control." };
    } else if (customArea < 3000 || customBudget < 2000000) {
      return { title: "Standard Commercial Unit (2 Rooms)", desc: "Ideal for steady income. Includes basic climate control and insulated rooms." };
    }
    return { title: "Industrial Factory Unit (4+ Rooms)", desc: "High-yield commercial setup with full automation, PUF panels, and compost yard." };
  };

  const models = [
    {
      name: "Small Scale Unit",
      size: "1 Grow Room",
      investment: "₹3L - 5L",
      yield: "500-800 kg/cycle",
      features: ["Basic Climate Control", "Local Market Focus", "Easy Management"],
      label: "Starter",
      recommended: false,
    },
    {
      name: "Standard Commercial",
      size: "2 Grow Rooms",
      investment: "₹8L - 12L",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true,
    },
    {
      name: "Industrial Factory Unit",
      size: "Compost + 4 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "Global B2B Supply"],
      label: "Business Pro",
      recommended: false,
    },
  ];

  return (
    <section id="farming-models" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 md:mb-6 gap-6 text-center lg:text-left items-center lg:items-end">
          <div className="max-w-xl">
            <div className="badge mb-4 mx-auto lg:mx-0">Investment Paths</div>
            <h2 className="mb-4">
              Commercial Farming <span className="gradient-text">Models</span>, Setup Cost & ROI
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Scientifically designed mushroom grow rooms optimized for Indian and diverse global climate conditions.
            </p>
          </div>
          <div className="glass p-1 rounded-xl flex gap-1 w-fit">
            <button
              onClick={() => setActiveTab("fixed")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "fixed" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Fixed Models
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "custom" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Custom Build
            </button>
          </div>
        </div>
        {activeTab === "fixed" ? (
          <div className="grid lg:grid-cols-3 gap-6 md:gap-5">
            {models.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 1, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`relative glass card-padding flex flex-col ${m.recommended ? "border-primary-mid/40 shadow-2xl lg:scale-105 z-10" : "dark:border-white/5 border-black/5"}`}>
                {m.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest dark:text-white text-slate-900 shadow-xl">
                    Recommended Model
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-primary-start text-[9px] font-black uppercase tracking-[0.2em] mb-2">{m.label}</div>
                  <h3 className="dark:text-white text-slate-900 tracking-tight">{m.name}</h3>
                  <div className="mt-2 text-slate-500 text-[12px] font-medium">{m.size} Space Required</div>
                </div>
                <div className="space-y-3 mb-5 flex-1">
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Investment Setup Cost</div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">{m.investment}</div>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Expected Yield</div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">{m.yield}</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 dark:text-slate-400 text-slate-600 text-[12px] md:text-sm">
                      <CheckCircle2 size={14} className="text-primary-start" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/model-details" className={`w-full min-h-[44px] py-2 rounded-xl font-bold transition-all text-sm flex justify-center items-center ${m.recommended ? "btn-primary" : "btn-outline"}`}>
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass p-3 md:p-12 rounded-[3rem] border dark:border-white/10 border-black/10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-6">Interactive Custom Mushroom Setup Builder</h3>
                <div className="space-y-8">
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Area</span>
                      <span className="text-primary-start">{customArea} sq. ft.</span>
                    </label>
                    <input type="range" min="100" max="10000" step="100" value={customArea} onChange={(e) => setCustomArea(Number(e.target.value))} className="w-full form-range" />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Budget</span>
                      <span className="text-primary-start">₹{(customBudget / 100000).toFixed(1)} Lakhs</span>
                    </label>
                    <input type="range" min="50000" max="10000000" step="50000" value={customBudget} onChange={(e) => setCustomBudget(Number(e.target.value))} className="w-full form-range" />
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-[2rem] dark:bg-white/5 bg-black/5 border border-primary-start/20 text-center flex flex-col items-center justify-center">
                <ShieldCheck size={48} className="text-primary-start mb-6" />
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">Recommended Commercial Setup</div>
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-4 leading-tight">{getRecommendedSetup().title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-5 max-w-sm">{getRecommendedSetup().desc}</p>
                <Link href="/model-details" className="btn-primary px-5 py-2 rounded-xl text-sm font-bold">
                  View Detailed Specs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
