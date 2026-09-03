"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { PlayCircle, ArrowRight, ShieldCheck, MapPin, Zap, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png')] bg-cover bg-center opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div initial={{ opacity: 1, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 md:space-y-8 text-center lg:text-left pt-12 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-md shadow-lg shadow-black/5 animate-fade-in mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-start opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-primary-start"></span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-slate-600 dark:text-slate-300 tracking-wider uppercase">
                Global Leader in Industrial Farming
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black dark:text-white text-slate-900 tracking-tighter leading-[1.05] drop-shadow-sm">
              Modernise Your <br className="hidden md:block" />
              <span className="gradient-text drop-shadow-md">Mushroom</span> Business
            </h1>
            <p className="text-[14px] sm:text-sm md:text-xl dark:text-slate-400 text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium md:px-0">
              We design, build, and train for high-yield automated commercial mushroom farms across India and the USA. Turnkey setups for Button and Oyster mushrooms.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-5 justify-center lg:justify-start">
              <Link href="#contact" className="w-full sm:w-auto btn-primary group rounded-xl px-5 md:px-8 py-3.5 md:py-4 flex items-center justify-center gap-2 shadow-xl">
                <span className="text-[13px] md:text-[15px] font-bold tracking-wide">Start Farm</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/training" className="w-full sm:w-auto group flex items-center justify-center gap-3 px-5 md:px-8 py-3.5 md:py-4 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 hover:dark:bg-white/10 hover:bg-black/10 transition-all font-bold dark:text-white text-slate-900 tracking-wide text-[13px] md:text-[15px]">
                <PlayCircle size={18} className="text-primary-start group-hover:scale-110 transition-transform" />
                <span>Join Training</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4 md:pt-6 border-t dark:border-white/10 border-black/10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" />
                <span className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Govt Subsidy Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Pan India & USA</span>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 1, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative mx-auto w-full max-w-[450px] lg:max-w-none perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-start/20 to-primary-end/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 p-3 md:p-6 glass border dark:border-white/10 border-black/10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden transform-gpu hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-700 ease-out">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end"></div>
              <div className="aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative group">
                <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Commercial Mushroom Cultivation Facility" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" width="600" height="450" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-8">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]"></div>
                    <span className="text-white text-[11px] md:text-xs font-bold tracking-widest uppercase">Live Production</span>
                  </div>
                  <h3 className="text-white font-bold text-[15px] md:text-xl leading-tight">100+ Tonnes Monthly Yield <br />Capacity Infrastructure</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4">
                <div className="dark:bg-white/5 bg-black/5 rounded-[1.2rem] md:rounded-2xl p-3 md:p-5 border dark:border-white/5 border-black/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                  <div className="text-primary-start mb-1 md:mb-2"><Zap size={20} className="md:w-6 md:h-6" /></div>
                  <div className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest mb-0.5 md:mb-1">Climate</div>
                  <div className="text-[13px] md:text-base font-bold dark:text-white text-slate-900 tracking-tight">Fully Automated</div>
                </div>
                <div className="dark:bg-white/5 bg-black/5 rounded-[1.2rem] md:rounded-2xl p-3 md:p-5 border dark:border-white/5 border-black/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                  <div className="text-accent mb-1 md:mb-2"><Activity size={20} className="md:w-6 md:h-6" /></div>
                  <div className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest mb-0.5 md:mb-1">Yield</div>
                  <div className="text-[13px] md:text-base font-bold dark:text-white text-slate-900 tracking-tight">High Density</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
