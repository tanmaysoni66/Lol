"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';

export function ROICalculator() {
  const [bags, setBags] = useState<number>(1000);
  
  // Simplified calculation logic based on standard Indian commercial farming estimates
  const yieldPerBag = 1.5; // kg
  const costPerBag = 60; // INR
  const sellingPricePerKg = 150; // INR
  
  const totalYield = bags * yieldPerBag;
  const totalCost = bags * costPerBag;
  const totalRevenue = totalYield * sellingPricePerKg;
  const netProfit = totalRevenue - totalCost;

  return (
    <section className="py-24 bg-emerald-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-white p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
              <Calculator size={28} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-slate-900">ROI Calculator</h2>
              <p className="text-slate-500">Estimate your potential returns (Oyster Mushroom estimate)</p>
            </div>
          </div>
          
          <div className="mb-10">
            <label className="block text-sm font-semibold text-slate-700 mb-4">
              Number of Spawn Bags: <span className="text-emerald-600 text-xl ml-2">{bags}</span>
            </label>
            <input 
              type="range" 
              min="100" 
              max="10000" 
              step="100"
              value={bags} 
              onChange={(e) => setBags(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
              <span>100 Bags</span>
              <span>10,000 Bags</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="text-slate-500 text-sm mb-1">Estimated Yield</div>
              <div className="text-3xl font-black text-slate-800">{totalYield.toLocaleString()} <span className="text-lg font-medium text-slate-500">kg</span></div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <div className="text-emerald-700 text-sm mb-1">Estimated Net Profit</div>
              <div className="text-3xl font-black text-emerald-600">₹{netProfit.toLocaleString()}</div>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 text-center">
            * Note: This is a simplified projection. Actual returns depend on infrastructure, climate control, market rates, and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
