"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

export function MushroomProductionCalculator() {
  const [bags, setBags] = useState(1000);
  const [substratePerBag, setSubstratePerBag] = useState(2);
  const [biologicalEfficiency, setBiologicalEfficiency] = useState(80);
  const [batches, setBatches] = useState(6);

  const result = useMemo(() => {
    const totalSubstrate = bags * substratePerBag;
    const yieldPerBatch = totalSubstrate * (biologicalEfficiency / 100);
    const annualProduction = yieldPerBatch * batches;

    return {
      totalSubstrate,
      yieldPerBatch,
      annualProduction,
    };
  }, [bags, substratePerBag, biologicalEfficiency, batches]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="py-4 md:py-6 px-2 md:px-4 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-transparent">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2 shadow-sm backdrop-blur-md">
              Yield Estimation Model
            </div>
            <h3 className="text-lg md:text-xl font-black dark:text-white text-slate-900 leading-tight mb-2 tracking-tight">
              Mushroom <span className="text-amber-600 dark:text-amber-500">Production & Yield</span> Parameters
            </h3>
            <p className="text-[11px] md:text-xs dark:text-slate-400 text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
              Adjust block count, substrate weight, biological efficiency (B.E. %), and cycle frequency.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
            <Field label="Number of Bags / Blocks" value={bags} setValue={setBags} />
            <Field label="Substrate per Bag (kg)" value={substratePerBag} setValue={setSubstratePerBag} step={0.1} />
            <Field label="Biological Efficiency (%)" value={biologicalEfficiency} setValue={setBiologicalEfficiency} step={1} />
            <Field label="Batches per Year" value={batches} setValue={setBatches} />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <ResultCard title="Substrate / Batch" value={`${formatNumber(result.totalSubstrate)} kg`} />
            <ResultCard title="Estimated Yield / Batch" value={`${formatNumber(result.yieldPerBatch)} kg`} highlight />
            <ResultCard title="Annual Production" value={`${formatNumber(result.annualProduction)} kg`} highlight />
          </div>

          <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            * Estimates based on commercial standard cultivation averages. Actual performance depends on strain vigor, room environmental management, and compost nutrition.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  setValue,
  step = 1,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  step?: number;
}) {
  return (
    <div className="bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-white/60 dark:border-white/10 backdrop-blur-md shadow-sm transition-all hover:border-amber-500/40">
      <label className="block text-[11px] font-bold text-slate-900 dark:text-white mb-2">
        {label}
      </label>
      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(e) => setValue(Math.max(0, Number(e.target.value) || 0))}
        className="w-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-amber-500 dark:focus:border-amber-500 transition-colors"
      />
    </div>
  );
}

function ResultCard({ title, value, highlight = false }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-5 rounded-2xl border text-center backdrop-blur-md transition-all ${highlight ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/30 shadow-md shadow-amber-500/5' : 'bg-white/50 dark:bg-white/5 border-white/60 dark:border-white/10 shadow-sm'}`}>
      <div className={`text-[9px] font-bold uppercase tracking-wider mb-1.5 ${highlight ? 'text-amber-700 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'}`}>
        {title}
      </div>
      <div className={`text-xl md:text-2xl font-black tracking-tight ${highlight ? 'text-amber-700 dark:text-amber-300' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </div>
    </div>
  );
}
