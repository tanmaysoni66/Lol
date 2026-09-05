import { Metadata } from "next";
import { MushroomProductionCalculator } from "@/components/calculators/MushroomProductionCalculator";
import { MushroomROICalculator } from "@/components/home/MushroomROICalculator";
import { MushroomFarmSetupCostCalculator } from "@/components/home/MushroomFarmSetupCostCalculator";

export const metadata: Metadata = {
  title: "Mushroom Farming Calculators | ROI, Cost, Yield & Profit",
  description: "Use practical mushroom farming calculators to estimate farm ROI, setup costs, mushroom yield, production capacity, batch profit and break-even requirements.",
};

export default function CalculatorsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-12 bg-slate-50 dark:bg-[#0B0F19] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center tracking-tight">
          Mushroom Farming Calculators
        </h1>
        <p className="text-center text-[11px] md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
          Plan your mushroom farming business with practical calculation tools. Estimate investment, setup costs, production, farm capacity, profitability and break-even requirements to make better-informed farming decisions.
        </p>
      </div>

      <MushroomProductionCalculator />
      <MushroomFarmSetupCostCalculator />
      <MushroomROICalculator />
    </div>
  );
}
