"use client";

import React from "react";
import { TrendingUp, Zap, Sprout, ShieldCheck, Target, Award } from "lucide-react";

export const BenefitsCultivation = () => {
  const benefits = [
    {
      title: "High Return on Investment",
      desc: "Convert small agricultural spaces into high-yield commercial crop units with rapid cycles.",
      icon: TrendingUp
    },
    {
      title: "Low Capital Setup Setup",
      desc: "A great low investment farming business option requiring fractional resource base compared to regular dairy/crop projects.",
      icon: Zap
    },
    {
      title: "Vertical Farming Adaptable",
      desc: "Maximize spatial cube layouts, perfect for indoor climate control systems and city outskirts.",
      icon: Sprout
    },
    {
      title: "Waste Recycling Power",
      desc: "Utilizes common agricultural waste products such as wheat or paddy straw, promoting local circular ecosystem loops.",
      icon: ShieldCheck
    },
    {
      title: "Year-Round Production",
      desc: "No dependency on unpredictable weather conditions when operating standard commercial climate setups.",
      icon: Target
    },
    {
      title: "Certified Accreditation",
      desc: "Boost credibility in B2B and export marketplaces with our specialized mushroom farming training with certificate.",
      icon: Award
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 lg:px-8 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 dark:bg-purple-900/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-yellow-600/30 bg-yellow-600/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-yellow-700 dark:text-[#EAB308] mb-5 shadow-sm backdrop-blur-md">
            Socio-Economic Value
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 leading-[1.15] mb-5 tracking-tight uppercase">
            Benefits of <span className="text-purple-600 dark:text-[#8B5CF6]">Mushroom</span> <span className="text-emerald-600 dark:text-[#10B981]">Cultivation</span>
          </h2>
          
          <p className="text-[11px] md:text-[13px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto font-medium">
            A climate-resilient crop that delivers structural financial advantages over classic agro-business setups.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="flex gap-4 p-4 md:p-5 rounded-2xl border border-slate-200 dark:border-purple-900/40 bg-white/40 dark:bg-[#0B0C16]/80 backdrop-blur-md hover:border-purple-500/40 transition-colors shadow-sm group"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 shrink-0 rounded-xl bg-purple-100 dark:bg-[#151226] border border-purple-200 dark:border-purple-900/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                <benefit.icon className="text-purple-600 dark:text-[#8B5CF6]" size={16} />
              </div>
              <div>
                <h3 className="text-[11px] md:text-[12px] font-bold dark:text-white text-slate-900 mb-1.5 tracking-tight group-hover:text-purple-600 dark:group-hover:text-[#8B5CF6] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
