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
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-6">
          <div className="badge mx-auto mb-4">Commercial Setup Comparison</div>
          <h2 className="mb-4 uppercase tracking-tight">
            The Commercial <span className="gradient-text">Organic Edge</span>
          </h2>
          <p className="max-w-xl mx-auto">Why we are the preferred commercial partner nationwide and globally.</p>
        </div>
        <div className="glass border dark:border-white/10 border-black/10 overflow-hidden relative shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">Features</th>
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black dark:text-white text-slate-900 uppercase tracking-widest gradient-bg">Organic</th>
                  <th className="px-4 md:px-5 py-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 md:px-5 py-5 text-[11px] font-bold dark:text-slate-400 text-slate-600">{row.feature}</td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-bold dark:text-white text-slate-900 tracking-tight">{row.us}</td>
                    <td className="px-4 md:px-5 py-5 text-[12px] font-medium text-slate-500">{row.others}</td>
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
