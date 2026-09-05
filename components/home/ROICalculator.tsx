"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export const ROICalculator = () => {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);
  
  const yieldPerBag = 1.5; 
  const estimatedInvestment = bags * 1200; 
  
  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * (bags * yieldPerBag);
  }, [sellingPrice, operatingCost, bags]);
  
  const paybackPeriod = useMemo(() => {
    const yearlyProfit = monthlyProfit * 5; 
    if (yearlyProfit <= 0) return 0;
    return (estimatedInvestment / yearlyProfit) * 12;
  }, [monthlyProfit, estimatedInvestment]);

  return (
    <section id="roi-calculator" className="py-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-8 lg:p-12 rounded-[2.5rem] border border-black/10 dark:border-white/10 relative shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
                PROFIT ANALYTICS
              </div>
              <h2 className="text-xl md:text-2xl font-black mb-3 dark:text-white text-slate-900 tracking-tight leading-[1.15]">
                Personalized Mushroom<br/> Business <span className="text-purple-600 dark:text-[#8B5CF6]">ROI</span> <span className="text-emerald-500 dark:text-[#10B981]">Estimator</span>
              </h2>
              <p className="mb-6 text-[10px] md:text-[11px] text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                Estimate your mushroom farming profits based on real-time market averages.
              </p>
              
              <div className="space-y-5 text-left">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="bags-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Number of Bags/Beds</label>
                    <span className="text-sm font-bold dark:text-white text-slate-900">{bags}</span>
                  </div>
                  <input id="bags-input" type="range" min="500" max="10000" step="500" value={bags} onChange={(e) => setBags(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="price-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Market Selling Price (₹/kg)</label>
                    <span className="text-sm font-bold dark:text-white text-slate-900">₹{sellingPrice}</span>
                  </div>
                  <input id="price-input" type="range" min="80" max="250" step="5" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="cost-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Labor/Electricity Cost (₹/kg)</label>
                    <span className="text-sm font-bold dark:text-white text-slate-900">₹{operatingCost}</span>
                  </div>
                  <input id="cost-input" type="range" min="20" max="80" step="2" value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:ml-6">
              <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-center shadow-lg backdrop-blur-md">
                <div className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1.5">Cycle Net Profit</div>
                <div className={`text-2xl font-black ${monthlyProfit > 0 ? "text-green-500" : "text-red-500"}`}>
                  ₹{monthlyProfit.toLocaleString()}
                </div>
              </motion.div>
              <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-black/10 dark:border-white/10 text-center shadow-lg backdrop-blur-md">
                <div className="text-[9px] uppercase font-black text-slate-500 tracking-widest mb-1.5">Estimated Payback Period</div>
                <div className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} Months` : "N/A"}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
