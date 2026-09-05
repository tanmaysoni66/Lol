"use client";

import { useState } from "react";
import { MushroomProductionCalculator } from "@/components/calculators/MushroomProductionCalculator";
import { MushroomFarmSetupCostCalculator } from "@/components/home/MushroomFarmSetupCostCalculator";
import { ROICalculator } from "@/components/home/ROICalculator";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calculator, Sparkles, Sprout, TrendingUp, DollarSign } from "lucide-react";

export default function MushroomFarmingCalculators() {
  const [activeTab, setActiveTab] = useState<string | null>("production");

  return (
    <div className="pt-6 md:pt-10 pb-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        {/* Breadcrumb Navigation in Glass Pill */}
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="inline-flex items-center space-x-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-white/40 dark:bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/60 dark:border-white/10 shadow-sm">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight size={12} className="text-slate-400" />
            </li>
            <li aria-current="page" className="text-emerald-700 dark:text-emerald-400 font-bold">
              Mushroom Farming Calculators
            </li>
          </ol>
        </nav>
        
        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-4 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span>Interactive Commercial Farm Tools</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-[1.15]">
            Mushroom Farming <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Calculators</span>
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
            Plan your commercial mushroom enterprise with precision. Estimate capital expenditure, room capacity, substrate usage, production yield, and expected business ROI.
          </p>
        </div>

        {/* Hero Banner with Glass Card Framing */}
        <div className="max-w-4xl mx-auto p-2 rounded-[2.5rem] bg-white/30 dark:bg-white/[0.03] backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-14 transition-all hover:border-emerald-500/30">
          <div className="rounded-[2.2rem] overflow-hidden relative shadow-inner">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png"
              alt="Mushroom Farming Calculators and Farm Planning"
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>

      {/* Accordion Calculators Layer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5 relative z-10">
        {/* Tab 1: Mushroom Production Calculator */}
        <section aria-labelledby="mushroom-yield-calculator">
          <h2 id="mushroom-yield-calculator" className="sr-only">
            Mushroom Yield & Production Calculator
          </h2>
          <div className="bg-white/35 dark:bg-slate-900/35 backdrop-blur-2xl rounded-[2rem] border border-white/60 dark:border-white/10 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/40">
            <button 
              onClick={() => setActiveTab(activeTab === "production" ? null : "production")}
              className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-white/40 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Sprout className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Mushroom Production & Yield Calculator
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Estimate growing bags, substrate requirements, biological efficiency and annual harvest
                  </p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/10 border border-black/5 dark:border-white/10 transition-transform duration-300 shrink-0 ${activeTab === "production" ? "rotate-90 bg-emerald-500 text-white dark:bg-emerald-500" : "text-slate-600 dark:text-slate-300"}`}>
                <ChevronRight size={18} />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "production" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-white/50 dark:border-white/10 p-2 md:p-6 bg-white/20 dark:bg-black/20">
                <MushroomProductionCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Tab 2: Mushroom Setup Cost Calculator */}
        <section aria-labelledby="mushroom-setup-cost-calculator">
          <h2 id="mushroom-setup-cost-calculator" className="sr-only">
            Mushroom Farm Setup Cost Calculator
          </h2>
          <div className="bg-white/35 dark:bg-slate-900/35 backdrop-blur-2xl rounded-[2rem] border border-white/60 dark:border-white/10 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-500/40">
            <button 
              onClick={() => setActiveTab(activeTab === "setup" ? null : "setup")}
              className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-white/40 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:scale-105 transition-transform">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Mushroom Farm Setup Cost Calculator
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Estimate civil construction, PUF insulation, vertical racks, and climate control HVAC
                  </p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/10 border border-black/5 dark:border-white/10 transition-transform duration-300 shrink-0 ${activeTab === "setup" ? "rotate-90 bg-purple-500 text-white dark:bg-purple-500" : "text-slate-600 dark:text-slate-300"}`}>
                <ChevronRight size={18} />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "setup" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-white/50 dark:border-white/10 p-2 md:p-6 bg-white/20 dark:bg-black/20">
                <MushroomFarmSetupCostCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Tab 3: ROI & Profit Estimator */}
        <section aria-labelledby="mushroom-profit-calculator">
          <h2 id="mushroom-profit-calculator" className="sr-only">
            Mushroom Farming Profit Calculator
          </h2>
          <div className="bg-white/35 dark:bg-slate-900/35 backdrop-blur-2xl rounded-[2rem] border border-white/60 dark:border-white/10 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-blue-500/40">
            <button 
              onClick={() => setActiveTab(activeTab === "roi" ? null : "roi")}
              className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-white/40 dark:hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Business ROI & Profit Estimator
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    Calculate monthly cash flow, cycle margins, and capital payback timeframe
                  </p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/10 border border-black/5 dark:border-white/10 transition-transform duration-300 shrink-0 ${activeTab === "roi" ? "rotate-90 bg-blue-500 text-white dark:bg-blue-500" : "text-slate-600 dark:text-slate-300"}`}>
                <ChevronRight size={18} />
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "roi" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-white/50 dark:border-white/10 p-2 md:p-6 bg-white/20 dark:bg-black/20">
                <ROICalculator />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
