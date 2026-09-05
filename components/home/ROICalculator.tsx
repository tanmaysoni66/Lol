"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator } from "lucide-react";

export const ROICalculator = () => {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [costPrice, setCostPrice] = useState(40);
  const [yieldPerBag] = useState(1.5); // Assuming 1.5kg per bag based on standard

  const revenue = bags * yieldPerBag * sellingPrice;
  const cost = bags * yieldPerBag * costPrice;
  const netProfit = revenue - cost;
  const setupCost = 1500000; // Estimated 15L setup
  const paybackMonths = setupCost / netProfit;

  return (
    <section className="py-6 md:py-10 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-2 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[7px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-2 shadow-sm">
            PROFIT ANALYTICS
          </div>
          <h2 className="text-sm md:text-base font-black dark:text-white text-slate-900 leading-tight mb-2 tracking-tight">
            Personalized Mushroom <span className="text-blue-600 dark:text-blue-500">Business ROI Estimator</span>
          </h2>
          <p className="text-[9px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-lg mx-auto font-medium">
            Estimate your mushroom farming profits based on real-time market averages.
          </p>
        </div>

        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border-t border-l border-white/80 dark:border-white/20 border-r border-b border-black/5 dark:border-black/50 shadow-[8px_8px_20px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.7)] dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-4px_-4px_16px_rgba(255,255,255,0.05)] rounded-2xl p-4 flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-[9px] font-bold text-slate-900 dark:text-white mb-1.5">Number of Bags/Beds</label>
              <input type="range" min="500" max="10000" step="500" value={bags} onChange={(e) => setBags(Number(e.target.value))} className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <div className="text-right text-[9px] font-bold text-blue-600 dark:text-blue-400 mt-1">{bags.toLocaleString()} Bags</div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-slate-900 dark:text-white mb-1.5">Market Selling Price (₹/kg)</label>
              <input type="range" min="80" max="250" step="10" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <div className="text-right text-[9px] font-bold text-blue-600 dark:text-blue-400 mt-1">₹{sellingPrice}</div>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-slate-900 dark:text-white mb-1.5">Labor/Electricity Cost (₹/kg)</label>
              <input type="range" min="20" max="100" step="5" value={costPrice} onChange={(e) => setCostPrice(Number(e.target.value))} className="w-full accent-blue-600 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <div className="text-right text-[9px] font-bold text-blue-600 dark:text-blue-400 mt-1">₹{costPrice}</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2">
            <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-500/20 rounded-lg py-2 px-3 text-center shadow-inner">
              <div className="text-[7px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-0.5">Cycle Net Profit</div>
              <div className="text-lg md:text-xl font-black text-slate-900 dark:text-white tracking-tight">₹{netProfit.toLocaleString()}</div>
            </div>
            <div className="bg-slate-50/50 dark:bg-slate-800/30 border border-black/5 dark:border-white/5 rounded-lg py-2 px-3 text-center shadow-inner">
              <div className="text-[7px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Estimated Payback Period</div>
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {paybackMonths > 0 && paybackMonths < 100 ? paybackMonths.toFixed(1) : "N/A"} Months
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
