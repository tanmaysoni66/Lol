"use client";
import React from "react";

export default function ComparisonTable() {
  const data = [
    { feature: "Commercial Insulation", us: "80-100mm PUF", others: "40-50mm" },
    { feature: "Commercial AC Systems", us: "Daikin Industrial", others: "Split ACs" },
    { feature: "Commercial Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Global Support", us: "Lifetime Video", others: "1 Year" },
    { feature: "Government Subsidy", us: "Full Document Support", others: "No Support" },
  ];

  return (
    <section className="py-12 md:py-16 px-4 lg:px-8 relative z-10 w-full overflow-hidden bg-white/5 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 mb-4 backdrop-blur-md shadow-sm">
            Commercial Setup Comparison
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black dark:text-white text-slate-900 leading-[1.15] mb-4 tracking-tight uppercase">
            The Commercial <span className="text-purple-600 dark:text-[#8B5CF6]">Organic</span> <span className="text-emerald-600 dark:text-[#10B981]">Edge</span>
          </h2>
          
          <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed max-w-xl mx-auto font-medium">
            Why we are the preferred commercial partner nationwide and globally.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden relative shadow-lg bg-white/40 dark:bg-[#11121E]/60 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-[40%] border-b border-slate-200 dark:border-white/5">
                    Features
                  </th>
                  <th className="px-4 py-3 text-[9px] font-bold text-white uppercase tracking-widest bg-gradient-to-r from-[#7b51f8] to-[#2fd17b] w-[30%] border-b border-transparent">
                    Organic
                  </th>
                  <th className="px-4 py-3 text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest w-[30%] border-b border-slate-200 dark:border-white/5">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 md:py-4 text-[9px] md:text-[10px] font-semibold dark:text-slate-300 text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 md:py-4 text-[9px] md:text-[10px] font-bold dark:text-white text-slate-900 tracking-tight">
                      {row.us}
                    </td>
                    <td className="px-4 py-3 md:py-4 text-[9px] md:text-[10px] font-medium text-slate-500 dark:text-slate-500">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
