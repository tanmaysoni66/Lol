"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Layers, Shield, Sprout, Clock, Zap, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";

// Local Collapsible for Mobile View
const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border dark:border-white/5 border-black/5 mb-3 overflow-hidden rounded-xl">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-3 text-left font-bold text-sm dark:text-white text-slate-900">
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 1 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="p-3 pt-0 text-[13px] dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ProductionSOP() {
  const steps = [
    { title: "Phase-I Composting", days: "8–10 Days", temp: "60–70°C", param: "C:N Ratio Control", icon: Layers },
    { title: "Phase-II Pasteurization", days: "5–7 Days", temp: "57–60°C", param: "Ammonia Level < 10ppm", icon: Shield },
    { title: "Filling & Spawning", days: "1–2 Days", temp: "25–28°C", param: "Sterile Handling", icon: Sprout },
    { title: "Spawn Run", days: "14–16 Days", temp: "24–26°C", param: "90% Rel. Humidity", icon: Clock },
    { title: "Casing Application", days: "1–2 Days", temp: "22–24°C", param: "Soil pH 7.5-8.0", icon: Layers },
    { title: "Pinning Initiation", days: "7–10 Days", temp: "16–18°C", param: "CO2 Flush < 800ppm", icon: Zap },
    { title: "Cropping", days: "25–30 Days", temp: "14–16°C", param: "Peak Harvest Quality", icon: ShoppingCart },
  ];

  return (
    <section id="sop" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5 md:mb-20">
          <div className="badge mx-auto mb-4">60-Day Commercial Cycle</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            Commercial Mushroom Production Cycle <span className="gradient-text">SOPs</span>
          </h2>
          <p className="max-w-lg mx-auto text-[11px] md:text-sm dark:text-slate-400 text-slate-600">
            Standardized operational procedures for high-yield button and oyster mushroom cultivation globally.
          </p>
        </div>
        <div className="hidden md:flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {steps.map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02, y: -5 }} className="min-w-[300px] snap-center glass border dark:border-white/5 border-black/5 p-3 rounded-3xl relative group transition-all">
              <div className="absolute top-0 right-0 p-3 font-black text-slate-800 text-sm -z-10 group-hover:text-primary-start/10 transition-colors">{i + 1}</div>
              <div className="w-8 h-8 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start group-hover:bg-primary-start group-hover:text-white transition-all">
                <s.icon size={20} />
              </div>
              <h3 className="dark:text-white text-slate-900 font-bold text-sm mb-4">{s.title}</h3>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Duration</span>
                  <span className="dark:text-white text-slate-900">{s.days}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Temperature</span>
                  <span className="text-accent">{s.temp}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">Key Param</span>
                  <span className="text-green-400">{s.param}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden space-y-2">
          {steps.map((s, i) => (
            <Collapsible key={i} title={`${i + 1}. ${s.title}`}>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Duration</div>
                  <div className="dark:text-white text-slate-900 font-bold">{s.days}</div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Temp</div>
                  <div className="text-accent font-bold">{s.temp}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Key Parameter</div>
                  <div className="text-green-400 font-bold">{s.param}</div>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>
        <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto px-4">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-start to-primary-end flex items-center justify-center text-[10px] font-bold dark:text-white text-slate-900 shadow-lg">{i + 1}</div>
              {i < steps.length - 1 && <div className="flex-1 h-px dark:bg-white/10 bg-black/10 mx-2"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Counter = ({ value, duration = 1.5 }: { value: string; duration?: number; }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      if (!isNaN(numericValue) && !value.includes("–")) {
        const totalFrames = Math.min(60, duration * 60);
        let frame = 0;
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const current = Math.round(numericValue * progress);
          if (frame === totalFrames) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            const prefix = value.match(/^[^\d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      } else {
        setDisplayValue(value);
      }
    }
  }, [value, isInView, duration]);

  return (
    <motion.span ref={nodeRef} initial={{ opacity: 1, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-sm md:text-sm font-bold dark:text-white text-slate-900 tracking-tighter">
      {displayValue}
    </motion.span>
  );
};
