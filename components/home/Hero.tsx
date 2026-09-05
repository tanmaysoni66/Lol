"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, Award, ArrowRight, ShieldCheck, Layers, TrendingUp, Zap } from "lucide-react";

export const Hero = () => {
  const features = [
    { text: "Complete Turnkey Project Setup", link: "/articles/turnkey-mushroom-farm-setup-india" },
    { text: "Mushroom Farming Training Program" },
    { text: "Government Subsidy Documentation" },
    { text: "Technical Support India & Worldwide" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-5 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="text-[9px] md:text-[10px] font-bold text-green-700 dark:text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6">
            Button, Oyster, Milky, Shiitake & More | Setup, Training & Business Support
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4 md:mb-5 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-green-500 dark:from-purple-400 dark:to-green-400 drop-shadow-sm">
              Expert Mushroom Farming Training & Setup
            </span>{" "}
            <br />– Complete Solutions for All Mushroom Types
          </h1>
          <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600 mb-5 md:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-8 mb-6 dark:border-white/5 border-black/5 border-y py-3 md:py-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle2 size={14} className="text-green-500" />
                {f.link ? (
                  <Link href={f.link} className="text-[11px] md:text-xs font-bold text-slate-900 dark:text-white tracking-tight hover:text-green-500 transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[11px] md:text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    {f.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto md:mx-0">
            <Link href="/training" className="group flex items-center justify-between p-3 rounded-2xl border border-purple-500/30 bg-purple-500/5 dark:bg-purple-900/10 hover:bg-purple-500/15 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                  <Award size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Mushroom Cultivation Training
                  </span>
                  <span className="block text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400">
                    Comprehensive online & offline certification programs
                  </span>
                </div>
              </div>
              <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
            </Link>
            <Link href="/turnkey-projects" className="group flex items-center justify-between p-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-900/10 hover:bg-emerald-500/15 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <span className="block text-xs md:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Mushroom Farm Setup
                  </span>
                  <span className="block text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400">
                    Turnkey commercial farm setup & consultancy
                  </span>
                </div>
              </div>
              <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8">
            <Link href="/enquiry" className="w-full sm:w-auto px-5 py-3 rounded-xl text-[11px] md:text-xs shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] flex items-center justify-center font-bold bg-white/10 dark:bg-black/20 text-purple-700 dark:text-purple-300 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5">
              Enquiry Now
            </Link>
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-5 py-3 rounded-xl text-[11px] md:text-xs flex items-center justify-center font-bold bg-white/10 dark:bg-black/20 text-green-700 dark:text-green-400 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5">
              WhatsApp Us
            </a>
            <a href="tel:9203544140" className="w-full sm:w-auto px-5 py-3 rounded-xl text-[11px] md:text-xs flex items-center justify-center font-bold bg-white/10 dark:bg-black/20 text-blue-700 dark:text-blue-400 border-t border-l border-white/40 dark:border-white/10 border-r border-b border-black/10 dark:border-black/50 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_10px_rgba(255,255,255,0.05)] transition-all backdrop-blur-xl hover:scale-105 hover:bg-white/20 dark:hover:bg-white/5">
              Call: 9203544140
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <div>
              <div className="text-xl md:text-2xl font-bold dark:text-white text-slate-900">1.5k+</div>
              <div className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Active Commercial Units</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold dark:text-white text-slate-900">98.93%</div>
              <div className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Success Rate Globally</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg mx-auto lg:max-w-none mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative bg-white/40 dark:bg-slate-900/40 rounded-[2rem] p-5 md:p-6 border border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-green-500" size={18} />
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold text-[11px] md:text-xs">Turnkey Setup Project</div>
                  <div className="text-[9px] md:text-[10px] text-slate-500">Quality Certified Infrastructure</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white/60 dark:bg-slate-900/60 border-t border-l border-white/80 dark:border-white/20 border-r border-b border-black/5 dark:border-black/50 rounded-xl p-3 shadow-[8px_8px_20px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.7)] dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-4px_-4px_16px_rgba(255,255,255,0.05)] backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 dark:text-green-400" size={12} />
                  </div>
                  <div>
                    <div className="text-[7px] md:text-[8px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">GLOBAL ROI VERIFIED</div>
                    <div className="text-[10px] md:text-xs text-slate-900 dark:text-white font-bold tracking-tight">120% Yearly Avg</div>
                  </div>
                </div>
                <div className="text-right mt-1">
                  <div className="inline-block px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[7px] md:text-[8px] text-green-700 dark:text-green-400 font-bold tracking-widest uppercase">ACTIVE</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Commercial Room Size", value: "18 x 70 ft Standard", icon: Layers },
                { label: "Annual High Yield", value: "35,000+ kg", icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between dark:bg-white/5 bg-black/5 p-3 rounded-xl border dark:border-white/5 border-black/5">
                  <div className="flex items-center gap-2.5">
                    <stat.icon className="dark:text-slate-400 text-slate-600" size={14} />
                    <span className="text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-[10px] md:text-[11px] dark:text-white text-slate-900 font-bold">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border dark:border-white/10 border-black/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] md:text-[11px] font-semibold dark:text-slate-300 text-slate-700">Phase 1 Commercial Cycle</span>
                <span className="text-[7px] md:text-[8px] text-green-500 font-bold tracking-wider">LIVE PROGRESS</span>
              </div>
              <div className="h-1.5 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} viewport={{ once: false }} transition={{ duration: 2.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-purple-500 to-green-500 dark:from-purple-400 dark:to-green-400"></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[7px] md:text-[8px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
