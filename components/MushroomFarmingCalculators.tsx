"use client";

import { useState } from "react";
import { MushroomProductionCalculator } from "@/components/calculators/MushroomProductionCalculator";
import { MushroomFarmSetupCostCalculator } from "@/components/home/MushroomFarmSetupCostCalculator";
import { ROICalculator } from "@/components/home/ROICalculator";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MushroomFarmingCalculators() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="pt-24 md:pt-32 pb-12 bg-slate-50 dark:bg-[#0B0F19] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="flex items-center space-x-2 text-[10px] md:text-[11px] font-medium text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <ChevronRight size={12} className="text-slate-400" />
            </li>
            <li aria-current="page" className="text-slate-900 dark:text-slate-200">
              Mushroom Farming Calculators
            </li>
          </ol>
        </nav>
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 text-center tracking-tight">
          Mushroom Farming Calculators
        </h1>
        <p className="text-center text-[11px] md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium mb-10">
          Plan your mushroom farming business with practical calculation tools. Estimate investment, setup costs, production, farm capacity, profitability and break-even requirements to make better-informed farming decisions.
        </p>

        {/* Banner Image */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 mb-12">
          <Image
            src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png"
            alt="Mushroom Farming Calculators"
            width={1200}
            height={630}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-4 relative z-10">
        <section aria-labelledby="mushroom-yield-calculator">
          <h2 id="mushroom-yield-calculator" className="sr-only">
            Mushroom Yield Calculator
          </h2>
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] border border-black/10 dark:border-white/10 overflow-hidden shadow-sm transition-all duration-300">
            <button 
              onClick={() => setActiveTab(activeTab === "production" ? null : "production")}
              className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Mushroom Production & Yield Calculator</h3>
                <p className="text-[11px] md:text-xs text-slate-500 mt-1">Estimate bags, substrate, efficiency and batch cycles</p>
              </div>
              <ChevronRight className={`transition-transform duration-300 ${activeTab === "production" ? "rotate-90" : ""}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "production" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-black/5 dark:border-white/5">
                <MushroomProductionCalculator />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="mushroom-setup-cost-calculator">
          <h2 id="mushroom-setup-cost-calculator" className="sr-only">
            Mushroom Farm Setup Cost Calculator
          </h2>
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] border border-black/10 dark:border-white/10 overflow-hidden shadow-sm transition-all duration-300">
            <button 
              onClick={() => setActiveTab(activeTab === "setup" ? null : "setup")}
              className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Mushroom Farm Setup Cost Calculator</h3>
                <p className="text-[11px] md:text-xs text-slate-500 mt-1">Estimate construction, insulation, racks and climate control</p>
              </div>
              <ChevronRight className={`transition-transform duration-300 ${activeTab === "setup" ? "rotate-90" : ""}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "setup" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-black/5 dark:border-white/5">
                <MushroomFarmSetupCostCalculator />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="mushroom-profit-calculator">
          <h2 id="mushroom-profit-calculator" className="sr-only">
            Mushroom Farming Profit Calculator
          </h2>
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] border border-black/10 dark:border-white/10 overflow-hidden shadow-sm transition-all duration-300">
            <button 
              onClick={() => setActiveTab(activeTab === "roi" ? null : "roi")}
              className="w-full px-6 md:px-10 py-6 flex items-center justify-between text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Business ROI & Profit Estimator</h3>
                <p className="text-[11px] md:text-xs text-slate-500 mt-1">Estimate your net profit and setup payback period</p>
              </div>
              <ChevronRight className={`transition-transform duration-300 ${activeTab === "roi" ? "rotate-90" : ""}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeTab === "roi" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="border-t border-black/5 dark:border-white/5">
                <ROICalculator />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 mt-16 mb-12">
        <section aria-labelledby="calculator-faq" className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl p-6 md:p-10 rounded-[2rem] border border-black/10 dark:border-white/10 shadow-xl">
          <h2 id="calculator-faq" className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-8 text-center tracking-tight">
            Frequently Asked Questions About <span className="text-amber-600 dark:text-amber-500">Mushroom Farming Calculators</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white mb-2">What can I calculate with mushroom farming calculators?</h3>
              <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Mushroom farming calculators can help estimate production, yield, substrate requirements, costs, revenue, and profit for mushroom cultivation.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white mb-2">How can a mushroom farming calculator help farmers?</h3>
              <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                A calculator can help farmers estimate important production and financial figures before starting or expanding a mushroom farming operation.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white mb-2">Can I use these calculators for planning a mushroom farm?</h3>
              <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Yes. The calculations can be used as planning estimates for production, resource requirements, costs, and potential returns.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-xl border border-black/5 dark:border-white/5">
              <h3 className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white mb-2">Are mushroom farming calculator results estimates?</h3>
              <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Results are estimates based on the information entered into the calculator. Actual results can vary depending on mushroom variety, growing conditions, substrate quality, yield, market prices, and other farming factors.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Internal Links Section */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-amber-50/80 dark:bg-amber-900/10 p-6 md:p-8 rounded-[2rem] border border-amber-500/20 text-center space-y-4 shadow-sm">
          <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-medium">
            Want to learn mushroom farming professionally?{" "}
            <Link href="/training" className="font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:underline transition-all">
              Explore our Mushroom Farming Training
            </Link>
            .
          </p>
          <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-medium">
            Looking for training options in the USA?{" "}
            <Link href="/usatraining" className="font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:underline transition-all">
              Explore USA Mushroom Farming Training
            </Link>
            .
          </p>
          <p className="text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-medium">
            Have questions about our training or services?{" "}
            <Link href="/enquiry" className="font-bold text-amber-600 dark:text-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:underline transition-all">
              Contact us through our enquiry page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
