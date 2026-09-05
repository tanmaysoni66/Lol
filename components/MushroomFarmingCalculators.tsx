"use client";

import { MushroomProductionCalculator } from "@/components/calculators/MushroomProductionCalculator";
import { MushroomFarmSetupCostCalculator } from "@/components/home/MushroomFarmSetupCostCalculator";
import { ROICalculator } from "@/components/home/ROICalculator";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MushroomFarmingCalculators() {
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
        
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center tracking-tight">
          Mushroom Farming Calculators
        </h1>
        <p className="text-center text-[11px] md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
          Plan your mushroom farming business with practical calculation tools. Estimate investment, setup costs, production, farm capacity, profitability and break-even requirements to make better-informed farming decisions.
        </p>
      </div>

      <MushroomProductionCalculator />
      <MushroomFarmSetupCostCalculator />
      <ROICalculator />
    </div>
  );
}
