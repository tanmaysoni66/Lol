"use client";

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Bot, BookOpen, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B0F19] text-white min-h-[90vh] flex flex-col justify-center">
      
      {/* Network / Constellation Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='rgba(255,255,255,0.08)' stroke-width='1.5' fill='none' fill-rule='evenodd'%3E%3Cpath d='M20 20L100 100M100 20L20 100'/%3E%3Ccircle cx='20' cy='20' r='2' fill='rgba(16, 185, 129, 0.4)' stroke='none'/%3E%3Ccircle cx='100' cy='100' r='2' fill='rgba(139, 92, 246, 0.4)' stroke='none'/%3E%3Ccircle cx='100' cy='20' r='1.5' fill='rgba(255, 255, 255, 0.3)' stroke='none'/%3E%3Ccircle cx='20' cy='100' r='1.5' fill='rgba(255, 255, 255, 0.3)' stroke='none'/%3E%3Cpath d='M60 20L100 60M20 60L60 100M60 20L20 60M100 60L60 100' stroke-dasharray='4,4'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }}></div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-[#10b981] font-bold text-xs sm:text-sm tracking-[0.1em] uppercase">
              BUTTON, OYSTER, MILKY, SHIITAKE & MORE <span className="text-white mx-1">|</span> SETUP, TRAINING & BUSINESS SUPPORT
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 block">Expert Mushroom Farming</span>
            <span className="text-[#10b981] block my-2">Training & Setup</span>
            <span className="text-white block leading-tight"> – Complete Solutions for All Mushroom Types</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light"
          >
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </motion.p>
          
          {/* Checklist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 mb-12 sm:ml-4"
          >
            {[
              "Complete Turnkey Project Setup",
              "Mushroom Farming Training Program",
              "Government Subsidy Documentation",
              "Technical Support India & Worldwide"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={22} className="text-[#8b5cf6] shrink-0" strokeWidth={2.5} />
                <span className="text-white font-bold tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Bottom Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-3xl"
          >
            {/* Card 1 */}
            <div className="bg-[#1e293b]/40 backdrop-blur-md border border-purple-500/20 rounded-3xl p-5 flex items-center gap-4 flex-1 group hover:bg-[#1e293b]/60 hover:border-purple-500/40 transition-all cursor-pointer relative overflow-hidden">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-cyan-400 shrink-0">
                <Bot size={32} strokeWidth={1.5} />
              </div>
              <div className="pr-4">
                <h3 className="text-white font-bold font-poppins text-[15px] mb-1">Mushroom Cultivation Training</h3>
                <p className="text-[13px] text-slate-400 leading-snug">Comprehensive online & offline certification programs</p>
              </div>
              <ArrowRight size={20} className="text-[#10b981] absolute right-5 opacity-80 group-hover:opacity-100 transition-transform group-hover:translate-x-1" />
            </div>

            {/* Card 2 */}
            <div className="bg-[#1e293b]/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 flex items-center gap-4 flex-1 hover:bg-[#1e293b]/60 hover:border-white/10 transition-all cursor-pointer relative">
               <div className="flex flex-col gap-2 items-start shrink-0 h-full justify-center">
                  <div className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <BookOpen size={14} className="text-purple-300" />
                    <span className="text-white font-semibold text-xs tracking-wide">Join Training</span>
                  </div>
               </div>
               <div className="border-l border-white/10 pl-4 py-1">
                  <h3 className="text-white font-bold font-poppins text-[15px] mb-1">Mushroom Farm Setup</h3>
                  <p className="text-[13px] text-slate-400 leading-snug">commercial farm setup & consulta...</p>
               </div>
               {/* WhatsApp Bubble overlay - only visible on this card visually mirroring the screenshot */}
               <div className="absolute -right-2 -bottom-2 bg-[#25D366] text-white p-2.5 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] border-2 border-[#0B0F19]">
                 <MessageCircle size={22} />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
