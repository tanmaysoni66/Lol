"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Info, Zap, BookOpen, Sprout } from "lucide-react";

export default function ROICalculator() {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);
  const yieldPerBag = 2.5;

  const totalYield = bags * yieldPerBag;
  const totalRevenue = totalYield * sellingPrice;
  const totalCost = totalYield * operatingCost;
  const monthlyProfit = totalRevenue - totalCost;
  const setupCost = bags * 150;
  const paybackPeriod = setupCost / monthlyProfit;

  return (
    <>
      <section id="roi-calculator" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] border dark:border-white/10 border-black/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 items-center">
              <div>
                <div className="badge mb-4">Financial Projections</div>
                <h2 className="mb-4">
                  <Link href="/roi-calculator" className="hover:opacity-80 transition-opacity">
                    Personalized Mushroom Business <span className="gradient-text">ROI Estimator</span>
                  </Link>
                </h2>
                <p className="mb-5 max-w-lg mx-auto lg:mx-0 text-slate-500">
                  Estimate your mushroom farming profits based on real-time market averages.
                </p>
                <div className="space-y-8 text-left">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label id="bags-label" htmlFor="bags-range-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Number of Bags/Beds
                      </label>
                      <span className="text-xl font-bold dark:text-white text-slate-900">{bags}</span>
                    </div>
                    <input type="range" min="500" max="10000" step="500" value={bags} onChange={(e) => setBags(Number(e.target.value))} className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label id="price-label" htmlFor="price-range-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Market Selling Price (₹/kg)
                      </label>
                      <span className="text-xl font-bold dark:text-white text-slate-900">₹{sellingPrice}</span>
                    </div>
                    <input type="range" min="80" max="250" step="5" value={sellingPrice} onChange={(e) => setSellingPrice(Number(e.target.value))} className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label id="cost-label" htmlFor="cost-range-input" className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                        Labor/Electricity Cost (₹/kg)
                      </label>
                      <span className="text-xl font-bold dark:text-white text-slate-900">₹{operatingCost}</span>
                    </div>
                    <input type="range" min="20" max="80" step="2" value={operatingCost} onChange={(e) => setOperatingCost(Number(e.target.value))} className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-green-500" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                  <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">Cycle Net Profit</div>
                  <div className={monthlyProfit > 0 ? "text-xl font-black text-green-400" : "text-xl font-black text-red-400"}>
                    ₹{monthlyProfit.toLocaleString()}
                  </div>
                </div>
                <div className="glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                  <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">Estimated Payback Period</div>
                  <div className="text-xl font-black text-primary-start">
                    {paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} Months` : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Timeline />
    </>
  );
}

const Timeline = () => {
  const steps = [
    { title: "Consultation", days: "Day 1-7", desc: "Site survey, feasibility study, and project proposal.", icon: Info },
    { title: "Setup & Build", days: "Day 15-60", desc: "Turnkey construction of grow rooms and compost tunnels.", icon: Zap },
    { title: "Training", days: "Day 61-75", desc: "Hands-on training on mushroom substrate preparation.", icon: BookOpen },
    { title: "Production Begins", days: "Day 76+", desc: "Casing, pinning, and first commercial harvest.", icon: Sprout },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 md:mb-20">
          <div className="badge mx-auto mb-4">Commercial Process Flow</div>
          <h2 className="mb-4 uppercase">Your <span className="gradient-text">Journey</span> to First Commercial Harvest</h2>
          <p className="max-w-xl mx-auto text-slate-500">A data-driven approach to building a highly successful mushroom farm.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px dark:bg-white/5 bg-black/5 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-start to-primary-end flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30 transition-transform">
                  <s.icon className="dark:text-white text-slate-900" size={24} />
                </div>
                <div className="text-primary-start text-[9px] font-black uppercase mb-1 tracking-widest">{s.days}</div>
                <h3 className="dark:text-white text-slate-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
