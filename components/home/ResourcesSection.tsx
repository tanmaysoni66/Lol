"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, Play, ArrowRight } from "lucide-react";

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border dark:border-white/5 border-black/5 mb-2 overflow-hidden rounded-lg">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-2.5 text-left font-bold text-xs dark:text-white text-slate-900">
        <span>{title}</span>
      </button>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 1 }} animate={{ height: "auto", opacity: 1 }} className="p-2.5 pt-0 text-[11px] dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5">
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default function ResourcesSection() {
  return (
    <section id="resources" className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-start">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300 mb-4 shadow-sm">
              KNOWLEDGE BASE
            </div>
            <h2 className="text-xl md:text-2xl font-black mb-3 uppercase tracking-tight dark:text-white text-slate-900 leading-tight">
              <Link href="/cities" className="hover:text-current transition-colors">
                COMMERCIAL <span className="text-purple-600 dark:text-[#8B5CF6]">PRODUCTION</span> <span className="text-emerald-500 dark:text-[#10B981]">SOPS & GUIDES</span>
              </Link>
            </h2>
            <p className="mb-8 dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] font-medium leading-relaxed max-w-xl">
              Standard operating procedures used by commercial mushroom specialists nationwide and internationally.
            </p>
            
            <div className="w-full md:hidden">
              {[
                { title: "Tunnel Ops", content: "Details for Phase-II Pasteurization Tunnel operations.", id: "tunnel-ops" },
                { title: "Spawning", content: "Comprehensive checklist for spawning and incubation.", id: "spawning" },
                { title: "Casing", content: "Material preparation guide for optimal casing layer.", id: "casing" },
                { title: "Hygiene", content: "Disease control protocols and farm hygiene standards.", id: "hygiene" },
              ].map((sop, i) => (
                <Collapsible key={i} title={sop.title}>
                  {sop.content}
                  <Link href={`/sops#${sop.id}`} className="flex items-center gap-1 text-primary-start font-bold mt-2 text-[10px]">
                    Get Details <ArrowRight size={12} />
                  </Link>
                </Collapsible>
              ))}
            </div>
            
            <div className="hidden md:flex flex-col gap-3 w-full max-w-sm">
              {[
                { name: "Tunnel Ops", id: "tunnel-ops" },
                { name: "Spawning", id: "spawning" },
                { name: "Casing", id: "casing" },
                { name: "Hygiene", id: "hygiene" },
              ].map((sop) => (
                <Link href={`/sops#${sop.id}`} key={sop.name} className="flex items-center gap-3 p-2.5 glass rounded-xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen size={14} className="text-primary-start" />
                  </div>
                  <span className="text-xs font-bold dark:text-slate-300 text-slate-700">
                    {sop.name}
                  </span>
                  <ArrowRight className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
            <div className="relative glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
              <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                <BookOpen className="text-primary-start" size={24} />
                <h3 className="dark:text-white text-slate-900 tracking-tight">
                  Commercial Knowledge Hub
                </h3>
              </div>
              <div className="space-y-6">
                <Link href="/articles/mushroom-farming-beginner-guide-india-2026-2027" className="p-3 md:p-3 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                      Ultimate Guide 2026-2027
                    </span>
                    <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                      Article
                    </div>
                  </div>
                  <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-2">
                    Mushroom Farming Beginner Guide India 2026-2027
                  </h4>
                  <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                    Complete guide on how to start mushroom farming (mushroom ki kheti) from scratch for beginners.
                  </p>
                </Link>
                <div className="p-3 md:p-3 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                      Featured
                    </span>
                    <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                      Video
                    </div>
                  </div>
                  <a href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6" target="_blank" rel="noopener noreferrer" className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full">
                    <img loading="lazy" src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg" alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India" className="w-full h-full object-cover opacity-60" width="1080" height="1080" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                  </a>
                  <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                    Commercial Composting Flow Explained
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
