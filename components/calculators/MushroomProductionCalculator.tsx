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
    <section className="py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-6 lg:p-10 rounded-[2rem] border border-black/10 dark:border-white/10 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-3 shadow-sm">
              Production Planning
            </div>
            <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight">
              Mushroom <span className="text-amber-600 dark:text-amber-500">Production & Yield</span> Calculator
            </h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Estimate mushroom production based on the number of bags, substrate weight, biological efficiency and production cycles.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Field label="Number of Bags / Blocks" value={bags} setValue={setBags} />
            <Field label="Substrate per Bag (kg)" value={substratePerBag} setValue={setSubstratePerBag} step={0.1} />
            <Field label="Biological Efficiency (%)" value={biologicalEfficiency} setValue={setBiologicalEfficiency} step={1} />
            <Field label="Batches per Year" value={batches} setValue={setBatches} />
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-3 mb-8">
            <ResultCard title="Substrate / Batch" value={`${formatNumber(result.totalSubstrate)} kg`} />
            <ResultCard title="Estimated Yield / Batch" value={`${formatNumber(result.yieldPerBatch)} kg`} highlight />
            <ResultCard title="Annual Production" value={`${formatNumber(result.annualProduction)} kg`} highlight />
          </div>

          <p className="text-[9px] text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
            This calculator provides an estimate only. Actual production depends on mushroom species, substrate quality, environmental conditions, contamination, cultivation practices and biological efficiency.
          </p>
        </div>
      </div>
    </section>
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
    <div className="bg-white/40 dark:bg-slate-800/40 p-4 rounded-xl border border-black/5 dark:border-white/5">
      <label className="block text-[11px] font-bold text-slate-900 dark:text-white mb-2">
        {label}
      </label>
      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(e) => setValue(Math.max(0, Number(e.target.value) || 0))}
        className="w-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-amber-500 dark:focus:border-amber-500 transition-colors"
      />
    </div>
  );
}

function ResultCard({ title, value, highlight = false }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-5 rounded-xl border text-center ${highlight ? 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-500/20 shadow-sm' : 'bg-white/50 dark:bg-slate-800/50 border-black/5 dark:border-white/5'}`}>
      <div className={`text-[9px] font-bold uppercase tracking-wider mb-2 ${highlight ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500'}`}>
        {title}
      </div>
      <div className={`text-xl md:text-2xl font-black tracking-tight ${highlight ? 'text-amber-700 dark:text-amber-300' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </div>
    </div>
  );
}
