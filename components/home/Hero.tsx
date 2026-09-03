"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Award, CheckCircle } from "lucide-react";

const MyceliumBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute w-full h-full opacity-[0.25] dark:opacity-40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mycelium-net" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          {/* Nodes */}
          <circle cx="30" cy="30" r="2" className="fill-purple-500" />
          <circle cx="120" cy="40" r="2" className="fill-emerald-500" />
          <circle cx="50" cy="110" r="2" className="fill-purple-500" />
          <circle cx="130" cy="120" r="2" className="fill-emerald-500" />
          <circle cx="75" cy="75" r="1.5" className="fill-slate-500 dark:fill-slate-400" />
          
          {/* Connections */}
          <path d="M30,30 L120,40 L130,120 L50,110 Z M30,30 L50,110 M120,40 L75,75 M75,75 L50,110 M75,75 L130,120 M30,30 L75,75" 
                className="stroke-purple-500/30 dark:stroke-purple-500/40" strokeWidth="0.5" fill="none" />
          
          {/* Connecting to adjacent tiles */}
          <path d="M120,40 L150,20 M130,120 L150,140 M0,60 L30,30 M0,100 L50,110" 
                className="stroke-emerald-500/30 dark:stroke-emerald-500/40" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#mycelium-net)" />
    </svg>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center pt-24 pb-16 overflow-hidden dark:bg-[#05050A] bg-slate-50 transition-colors duration-300">
      {/* Background Effects */}
      <MyceliumBackground />
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png')] bg-cover bg-center opacity-[0.03] dark:opacity-5 mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-emerald-600/10 dark:bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-5 w-full relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          {/* Top Green Text */}
          <div className="text-emerald-600 dark:text-emerald-500 font-bold tracking-[0.15em] uppercase text-[9px] md:text-[10px] mb-6 max-w-2xl leading-relaxed">
            BUTTON, OYSTER, MILKY, SHIITAKE & MORE | SETUP, TRAINING & BUSINESS SUPPORT
          </div>

          {/* Headlines */}
          <h1 className="text-[26px] sm:text-3xl md:text-5xl font-black tracking-tight leading-[1.25] mb-5">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent block drop-shadow-sm">
              Expert Mushroom Farming
            </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-500 bg-clip-text text-transparent block drop-shadow-sm">
              Training & Setup
            </span>
            <span className="text-slate-900 dark:text-white block mt-1 transition-colors">
              – Complete Solutions for All<br className="hidden sm:block" /> Mushroom Types
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-slate-600 dark:text-slate-400 text-[12px] md:text-[13px] max-w-xl leading-relaxed mb-8 font-medium px-2 transition-colors">
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </p>

          {/* Features List */}
          <div className="w-full max-w-md mx-auto mb-8 flex flex-col items-start space-y-3 px-2 border-y border-slate-200 dark:border-white/10 py-5 transition-colors">
            {[
              "Complete Turnkey Project Setup",
              "Mushroom Farming Training Program",
              "Government Subsidy Documentation",
              "Technical Support India & Worldwide"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                </div>
                <span className="text-slate-800 dark:text-white text-[12px] md:text-[13px] font-semibold transition-colors">{text}</span>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-3 mb-8">
            <Link href="/training" className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-500/5 dark:bg-[#130F1C] border border-purple-500/20 hover:border-purple-500/40 dark:hover:border-purple-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 transition-colors">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-slate-900 dark:text-white font-bold text-[13px] md:text-[14px] transition-colors">Mushroom Cultivation Training</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[9px] md:text-[10px] transition-colors">Comprehensive online & offline certification programs</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-emerald-600 dark:text-emerald-500 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/setup" className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500/5 dark:bg-[#0F1615] border border-emerald-500/20 hover:border-emerald-500/40 dark:hover:border-emerald-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 transition-colors">
                  <CheckCircle size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-slate-900 dark:text-white font-bold text-[13px] md:text-[14px] transition-colors">Mushroom Farm Setup</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[9px] md:text-[10px] transition-colors">Turnkey commercial farm setup & consultancy</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-emerald-600 dark:text-emerald-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-3 mb-10">
            <Link href="/enquiry" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 text-white font-bold text-[13px] md:text-[14px] hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              Enquiry Now
            </Link>
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-white dark:bg-[#0F0F14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[12px] md:text-[13px] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              WhatsApp Us
            </a>
            <a href="tel:9203544140" className="w-full py-3.5 rounded-xl bg-white dark:bg-[#0F0F14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[12px] md:text-[13px] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              Call Now: 9203544140
            </a>
          </div>

          {/* Stats */}
          <div className="w-full max-w-md mx-auto grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <span className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mb-1 transition-colors">1.5k+</span>
              <span className="text-slate-500 text-[7px] md:text-[8px] font-black tracking-widest uppercase">Active Commercial Units</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mb-1 transition-colors">98.93%</span>
              <span className="text-slate-500 text-[7px] md:text-[8px] font-black tracking-widest uppercase">Success Rate Globally</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
