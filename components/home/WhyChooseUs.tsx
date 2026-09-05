"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { TrendingUp, Briefcase, MapPin, ShieldCheck, Award, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const chooseItems = [
    { title: "Cost Efficiency (15–25% Savings)", subtitle: "Direct manufacturing eliminates middlemen.", points: ["In-house PUF panel production", "Own rack fabrication unit", "Direct pricing advantage", "Strict quality control"], icon: TrendingUp, color: "from-blue-500/20 to-purple-500/20" },
    { title: "Smart B2B Pricing", subtitle: "Wholesale pricing model for every farmer.", points: ["Wholesale pricing model", "Volume discounts", "Transparent breakdown", "No hidden costs"], icon: Briefcase, color: "from-purple-500/20 to-pink-500/20" },
    { title: "Nationwide & Global Execution", subtitle: "Delivery and execution across India & worldwide.", points: ["Coverage across all states", "International project support", "Local installation teams", "End-to-end logistics"], icon: MapPin, color: "from-blue-600/20 to-cyan-500/20" },
    { title: "Price Match Guarantee", subtitle: "Lowest cost guarantee without compromising quality.", points: ["Guaranteed lowest pricing", "Market comparison support", "Extra discount on matching", "No quality compromise"], icon: ShieldCheck, color: "from-indigo-500/20 to-blue-500/20" },
    { title: "Certified Quality", subtitle: "Built on internationally recognized standards.", points: ["Premium materials only", "Multi-level quality checks", "Standardized processes", "Long-term durability"], icon: Award, color: "from-amber-400/20 to-orange-500/20" },
    { title: "Reliable Partnership", subtitle: "We help you build profitable businesses.", points: ["Lifetime technical support", "Expert B2B consultation", "Proven project success", "Farmer-first approach"], icon: Users, color: "from-emerald-500/20 to-teal-500/20" },
  ];

  return (
    <section id="why-us" className="py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-3 shadow-sm">
            Mushroom Infrastructure Leaders
          </div>
          <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight">
            Why Choose <span className="text-purple-600 dark:text-[#8B5CF6]">Organic Mushrooms</span> Farm for Your Project?
          </h2>
          <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto font-medium">
            India's most trusted commercial mushroom farming infrastructure partner delivering unmatched value, transparency, and high-yield performance globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chooseItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative">
              <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md h-full p-5 rounded-2xl border border-black/5 dark:border-white/5 flex flex-col shadow-md relative overflow-hidden transition-all hover:-translate-y-1">
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${item.color} blur-[40px] pointer-events-none opacity-40`}></div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-black/10 dark:border-white/10 flex items-center justify-center mb-4">
                  <item.icon className="text-purple-600" size={18} />
                </div>
                <h3 className="text-[13px] md:text-sm font-bold dark:text-white text-slate-900 mb-2">{item.title}</h3>
                <p className="mb-4 flex-1 text-[11px] text-slate-500">{item.subtitle}</p>
                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-[10px] md:text-[11px] font-medium dark:text-slate-400 text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
