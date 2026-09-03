"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Zap, Droplets, ThermometerSun, Leaf, PlayCircle, Star, Quote, Award, Users } from "lucide-react";

export default function MushroomComparison() {
  const comparisonData = [
    {
      title: "Commercial Setup (Recommended)",
      type: "Commercial",
      yield: "3000-5000 kg",
      climate: "Fully Automated PUF",
      labor: "Optimized (2-3 pax)",
      margin: "40-45%",
      icon: Zap,
      recommended: true,
      points: [
        "Consistent 365-day production",
        "Export quality white button",
        "Lowest per-kg production cost",
        "Highly scalable architecture",
      ],
    },
    {
      title: "Traditional Polyhouse",
      type: "Seasonal",
      yield: "500-1000 kg",
      climate: "Semi-Controlled",
      labor: "High (Manual)",
      margin: "20-25%",
      icon: Leaf,
      recommended: false,
      points: [
        "Dependent on outside weather",
        "High risk of contamination",
        "Inconsistent crop quality",
        "Limited to 1-2 crops per year",
      ],
    },
  ];

  const valueProps = [
    {
      icon: ThermometerSun,
      title: "Climate Precision",
      speed: "Auto-Tune",
      text: "Maintain exact 14-18°C temperature for Pinning.",
    },
    {
      icon: Droplets,
      title: "Humidity Control",
      speed: "95% RH",
      text: "Automated misting for perfect fruiting bodies.",
    },
    {
      icon: ShieldCheck,
      title: "Contamination Free",
      speed: "0.01% Risk",
      text: "Sterile PUF panels prevent Trichoderma.",
    },
  ];

  return (
    <section id="compare" className="section-padding relative">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <div className="badge mx-auto mb-4">Why Commercial Matters</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            Commercial vs <span className="gradient-text">Traditional Farming</span>
          </h2>
          <p className="max-w-xl mx-auto text-[13px] md:text-sm text-slate-500">
            See why our automated PUF-panel commercial setups deliver up to 5x more profit than traditional seasonal farming.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 md:gap-5 mb-5 md:mb-20">
          {comparisonData.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className={`glass p-3 md:p-10 rounded-[3rem] border ${d.recommended ? "border-primary-mid/40 shadow-[0_0_40px_rgba(34,197,94,0.1)] relative" : "dark:border-white/10 border-black/10"}`}
            >
              {d.recommended && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-primary-start to-primary-end text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  High Yield Choice
                </div>
              )}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${d.recommended ? "bg-primary-start/10 text-primary-start" : "dark:bg-white/5 bg-black/5 text-slate-400"}`}>
                  <d.icon size={28} />
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white text-slate-900">{d.title}</h3>
                  <div className="text-[12px] font-medium text-slate-500">{d.type} Production</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Expected Yield</div>
                  <div className={`text-sm font-bold ${d.recommended ? "text-primary-start" : "dark:text-white text-slate-900"}`}>{d.yield}</div>
                </div>
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Profit Margin</div>
                  <div className={`text-sm font-bold ${d.recommended ? "text-primary-start" : "dark:text-white text-slate-900"}`}>{d.margin}</div>
                </div>
              </div>
              <ul className="space-y-4">
                {d.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${d.recommended ? "text-primary-start" : "text-slate-400"}`} />
                    <span className="text-[13px] font-medium dark:text-slate-300 text-slate-700 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {valueProps.map((m, i) => (
            <div key={i} className="glass border dark:border-white/10 border-black/10 rounded-[2rem] p-3 md:p-6 group hover:dark:bg-white/5 hover:bg-black/5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-start/10 text-primary-start flex items-center justify-center shrink-0">
                  <m.icon size={24} />
                </div>
                <div>
                  <h3 className="dark:text-white text-slate-900 font-bold text-sm tracking-tight">{m.title}</h3>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700 uppercase tracking-widest">{m.speed}</div>
                </div>
              </div>
              <p className="text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const CompanyProfile = () => {
  return (
    <section id="profile" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 1, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass border dark:border-white/10 border-black/10 rounded-[3rem] p-3 md:p-12 relative shadow-2xl group overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-start/20 blur-[100px] rounded-full group-hover:bg-primary-start/30 transition-all"></div>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden p-3 group-hover:scale-105 transition-all">
                <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Organic Mushrooms Farm" className="w-full h-full object-contain" referrerPolicy="no-referrer" width="120" height="120" />
              </div>
              <div>
                <h2 className="text-sm font-bold dark:text-white text-slate-900 mb-1">Organic Mushrooms Farm</h2>
                <p className="text-primary-start font-black text-[10px] uppercase tracking-[0.3em]">Premium Infrastructure Partner</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {[
                { label: "Founder", value: "Tanish Soni", spanClass: "col-span-1" },
                { label: "Co-Founder", value: "Dwarka Prasad", spanClass: "col-span-1" },
                { label: "Established", value: "2021", spanClass: "col-span-1" },
                { label: "Base", value: "Pan India & Global Operations", spanClass: "col-span-1" },
                { label: "Business Type", value: "Leading Exporter, Manufacturer & Service Provider of Mushroom Farming, Spawn Supply, Training & Turnkey Farm Setup in India, USA, Australia", spanClass: "col-span-2" },
              ].map((item, i) => (
                <div key={i} className={`space-y-1 ${item.spanClass || ""}`}>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                  <div className="text-sm font-bold dark:text-white text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-5">
              <p className="dark:text-slate-400 text-slate-600 text-[14px] leading-relaxed font-medium">
                Established as India's leading mushroom ecosystem architect, we bridge the gap between traditional farming and industrial precision. Our mission is to democratize <span className="dark:text-white text-slate-900 font-bold">organic farming</span> across India and global markets with high-yield <span className="dark:text-white text-slate-900 font-bold">spawn quality</span>, comprehensive <span className="dark:text-white text-slate-900 font-bold">training</span> modules, and unmatched <span className="dark:text-white text-slate-900 font-bold">India-wide & international support</span> systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Industrial Design", "Turnkey Builds", "Export Quality", "PAN-India Ops", "Global Setup Consultant"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border dark:border-white/10 border-black/10 text-[10px] font-bold text-slate-500 dark:bg-white/5 bg-black/5">{tag}</span>
              ))}
            </div>
          </motion.div>
          <div className="space-y-8 mt-12">
            <div className="badge">Our Technical Expertise</div>
            <h2 className="text-[18px] md:text-xl tracking-tight leading-tight uppercase">Bridging Technology & <span className="gradient-text">Organic Cultivation Setup</span></h2>
            <div className="grid gap-4">
              {[
                { icon: Award, title: "Precision Engineering", desc: "Scientific mushroom grow room design optimized for specific climatic zones in India and globally." },
                { icon: Users, title: "Expert Training", desc: "Hands-on certification and online training courses from industry pioneers." },
                { icon: ShieldCheck, title: "Quality Guarantee", desc: "Standardized materials with long-term structural durability for button mushroom setups." },
              ].map((b, i) => (
                <Link href="/expertise-details" key={i} className="flex gap-5 p-3 glass border dark:border-white/5 border-black/5 rounded-2xl group hover:dark:bg-white/5 bg-black/5 transition-all text-left">
                  <div className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all shrink-0">
                    <b.icon size={22} />
                  </div>
                  <div>
                    <h3 className="dark:text-white text-slate-900 font-bold text-[14px] mb-1">{b.title}</h3>
                    <p className="text-slate-500 text-[12px] leading-snug">{b.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
