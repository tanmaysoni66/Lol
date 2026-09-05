"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";

type Currency = {
  code: string;
  symbol: string;
};

const currencies: Currency[] = [
  { code: "INR", symbol: "₹" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

export const MushroomROICalculator = () => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  const [setupCost, setSetupCost] = useState(500000);
  const [bagsPerBatch, setBagsPerBatch] = useState(1000);
  const [yieldPerBag, setYieldPerBag] = useState(0.8);
  const [sellingPrice, setSellingPrice] = useState(180);
  const [operatingCost, setOperatingCost] = useState(100000);
  const [batchesPerYear, setBatchesPerYear] = useState(6);

  const results = useMemo(() => {
    const productionPerBatch = bagsPerBatch * yieldPerBag;
    const annualProduction = productionPerBatch * batchesPerYear;
    const revenuePerBatch = productionPerBatch * sellingPrice;
    const annualRevenue = revenuePerBatch * batchesPerYear;
    const annualOperatingCost = operatingCost * batchesPerYear;
    const annualProfit = annualRevenue - annualOperatingCost;

    const roi = setupCost > 0 ? (annualProfit / setupCost) * 100 : 0;
    const monthlyProfit = annualProfit / 12;
    const paybackYears = annualProfit > 0 ? setupCost / annualProfit : 0;
    const paybackMonths = paybackYears * 12;

    return {
      productionPerBatch,
      annualProduction,
      revenuePerBatch,
      annualRevenue,
      annualOperatingCost,
      annualProfit,
      roi,
      monthlyProfit,
      paybackMonths,
    };
  }, [
    setupCost,
    bagsPerBatch,
    yieldPerBag,
    sellingPrice,
    operatingCost,
    batchesPerYear,
  ]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  const formatMoney = (value: number) =>
    `${currency.symbol}${formatNumber(Math.max(0, value))}`;

  return (
    <section id="detailed-roi-calculator" className="py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-6 lg:p-10 rounded-[2rem] border border-black/10 dark:border-white/10 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-green-700 dark:text-green-400 mb-3 shadow-sm">
              Mushroom Farming Calculator
            </div>

            <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight">
              Detailed Farm <span className="text-green-600 dark:text-green-500">ROI</span> Calculator
            </h2>

            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Estimate your mushroom farm production, annual revenue, operating costs, profit, ROI and approximate payback period based on your specific setup parameters.
            </p>
          </div>

          {/* Currency Selector */}
          <div className="flex justify-end mb-6">
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Currency
              <select
                value={currency.code}
                onChange={(e) => {
                  const selected = currencies.find((item) => item.code === e.target.value);
                  if (selected) setCurrency(selected);
                }}
                className="ml-2 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-[11px] font-semibold outline-none cursor-pointer"
              >
                {currencies.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} ({item.symbol})
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Calculator Inputs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <InputField
              label="Initial Farm Setup Cost"
              description="Estimated investment for your farm setup."
              value={setupCost}
              onChange={setSetupCost}
              min={0}
              step={1000}
            />
            <InputField
              label="Mushroom Bags Per Batch"
              description="Number of bags or blocks produced in one batch."
              value={bagsPerBatch}
              onChange={setBagsPerBatch}
              min={1}
              step={10}
            />
            <InputField
              label="Expected Yield Per Bag (kg)"
              description="Estimated mushroom yield from one bag/block."
              value={yieldPerBag}
              onChange={setYieldPerBag}
              min={0}
              step={0.1}
            />
            <InputField
              label="Selling Price Per kg"
              description="Expected average selling price of mushrooms."
              value={sellingPrice}
              onChange={setSellingPrice}
              min={0}
              step={1}
            />
            <InputField
              label="Operating Cost Per Batch"
              description="Labour, raw materials, and running costs."
              value={operatingCost}
              onChange={setOperatingCost}
              min={0}
              step={1000}
            />
            <InputField
              label="Batches Per Year"
              description="How many production cycles you expect annually."
              value={batchesPerYear}
              onChange={setBatchesPerYear}
              min={1}
              step={1}
            />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-8">
            <ResultCard title="Production / Batch" value={`${formatNumber(results.productionPerBatch)} kg`} />
            <ResultCard title="Annual Production" value={`${formatNumber(results.annualProduction)} kg`} />
            <ResultCard title="Annual Revenue" value={formatMoney(results.annualRevenue)} />
            <ResultCard title="Annual Operating Cost" value={formatMoney(results.annualOperatingCost)} />
            <ResultCard title="Estimated Annual Profit" value={`${currency.symbol}${formatNumber(results.annualProfit)}`} highlight />
            <ResultCard title="Estimated ROI" value={`${formatNumber(results.roi)}%`} highlight />
            <ResultCard title="Average Monthly Profit" value={`${currency.symbol}${formatNumber(results.monthlyProfit)}`} />
            <ResultCard title="Approx. Payback" value={results.paybackMonths > 0 ? `${formatNumber(results.paybackMonths)} months` : "N/A"} />
          </div>

          {/* Explanation Section */}
          <div className="bg-slate-50/50 dark:bg-slate-800/30 border border-black/5 dark:border-white/5 rounded-2xl p-5 mb-6">
            <h3 className="text-[13px] font-bold text-slate-900 dark:text-white mb-3">How the calculation works</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[10px] md:text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              <p><strong className="text-slate-900 dark:text-slate-300">Production per batch:</strong> Bags × yield per bag.</p>
              <p><strong className="text-slate-900 dark:text-slate-300">Annual revenue:</strong> Annual production × selling price/kg.</p>
              <p><strong className="text-slate-900 dark:text-slate-300">Annual profit:</strong> Annual revenue − annual operating costs.</p>
              <p><strong className="text-slate-900 dark:text-slate-300">Estimated ROI:</strong> (Annual profit ÷ setup cost) × 100.</p>
              <p><strong className="text-slate-900 dark:text-slate-300">Payback period:</strong> Initial setup cost ÷ annual profit.</p>
            </div>
          </div>

          <p className="text-[9px] text-slate-400 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
            <strong>Important:</strong> This calculator provides estimates for planning purposes only. Actual mushroom production, yield, selling price, operating costs and profitability can vary depending on mushroom variety, climate, farm conditions, contamination, production efficiency, local market prices, labour and other factors.
          </p>

          <div className="text-center">
            <a href="/enquiry" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold shadow-md hover:scale-105 transition-transform">
              Enquire About Mushroom Farming
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

type InputFieldProps = {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  step: number;
};

function InputField({ label, description, value, onChange, min, step }: InputFieldProps) {
  return (
    <div className="bg-white/40 dark:bg-slate-800/40 p-4 rounded-xl border border-black/5 dark:border-white/5">
      <label className="block text-[11px] font-bold text-slate-900 dark:text-white mb-1">
        {label}
      </label>
      <p className="text-[9px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed h-6">
        {description}
      </p>
      <input
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        value={value}
        onChange={(e) => {
          const nextValue = Number(e.target.value);
          if (Number.isFinite(nextValue)) {
            onChange(Math.max(min, nextValue));
          }
        }}
        className="w-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-green-500 dark:focus:border-green-500 transition-colors"
      />
    </div>
  );
}

type ResultCardProps = {
  title: string;
  value: string;
  highlight?: boolean;
};

function ResultCard({ title, value, highlight = false }: ResultCardProps) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-green-50/50 dark:bg-green-900/10 border-green-500/20 shadow-sm' : 'bg-white/50 dark:bg-slate-800/50 border-black/5 dark:border-white/5'}`}>
      <div className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${highlight ? 'text-green-600 dark:text-green-400' : 'text-slate-500'}`}>
        {title}
      </div>
      <div className={`text-sm md:text-base font-black tracking-tight ${highlight ? 'text-green-700 dark:text-green-300' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </div>
    </div>
  );
}
