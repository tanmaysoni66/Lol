"use client";

import React, { useMemo, useState } from "react";

type Currency = {
  code: string;
  symbol: string;
};

const currencies: Currency[] = [
  { code: "INR", symbol: "₹" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

export const MushroomFarmSetupCostCalculator = () => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  const [farmArea, setFarmArea] = useState(1000);
  const [numberOfRooms, setNumberOfRooms] = useState(2);

  const [constructionCost, setConstructionCost] = useState(250000);
  const [insulationCost, setInsulationCost] = useState(100000);
  const [rackCost, setRackCost] = useState(75000);
  const [climateControlCost, setClimateControlCost] = useState(125000);
  const [electricalCost, setElectricalCost] = useState(50000);
  const [equipmentCost, setEquipmentCost] = useState(75000);
  const [miscellaneousCost, setMiscellaneousCost] = useState(25000);

  const results = useMemo(() => {
    const totalSetupCost =
      constructionCost +
      insulationCost +
      rackCost +
      climateControlCost +
      electricalCost +
      equipmentCost +
      miscellaneousCost;

    const costPerSqFt = farmArea > 0 ? totalSetupCost / farmArea : 0;
    const costPerRoom = numberOfRooms > 0 ? totalSetupCost / numberOfRooms : 0;

    const constructionPercentage =
      totalSetupCost > 0 ? (constructionCost / totalSetupCost) * 100 : 0;

    const climatePercentage =
      totalSetupCost > 0 ? (climateControlCost / totalSetupCost) * 100 : 0;

    return {
      totalSetupCost,
      costPerSqFt,
      costPerRoom,
      constructionPercentage,
      climatePercentage,
    };
  }, [
    farmArea,
    numberOfRooms,
    constructionCost,
    insulationCost,
    rackCost,
    climateControlCost,
    electricalCost,
    equipmentCost,
    miscellaneousCost,
  ]);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  const formatMoney = (value: number) =>
    `${currency.symbol}${formatNumber(Math.max(0, value))}`;

  return (
    <section id="setup-cost-calculator" className="py-12 md:py-16 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-transparent p-2 md:p-4 rounded-[2rem]">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-400 mb-3 shadow-sm">
              Mushroom Farming Calculator
            </div>

            <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 leading-tight mb-3 tracking-tight">
              Mushroom Farm <span className="text-purple-600 dark:text-purple-500">Setup Cost</span> Calculator
            </h2>

            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Estimate the approximate investment required to establish a mushroom farming setup based on your farm size, rooms and major setup costs.
            </p>
          </div>

          {/* Currency */}
          <div className="flex justify-end mb-6">
            <label className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Currency
              <select
                value={currency.code}
                onChange={(e) => {
                  const selected = currencies.find((item) => item.code === e.target.value);
                  if (selected) setCurrency(selected);
                }}
                className="ml-2 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-[11px] font-semibold outline-none cursor-pointer"
              >
                {currencies.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} ({item.symbol})
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Farm Details */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Farm Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <CostInput
                label="Farm Area (sq ft)"
                description="Approximate total area available for the farm."
                value={farmArea}
                onChange={(v) => setFarmArea(Math.max(1, v || 1))}
              />
              <CostInput
                label="Number of Growing Rooms"
                description="Number of rooms planned for cultivation."
                value={numberOfRooms}
                onChange={(v) => setNumberOfRooms(Math.max(1, v || 1))}
              />
            </div>
          </div>

          {/* Cost Inputs */}
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Estimated Setup Costs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <CostInput label="Construction / Building" description="Building, room construction or structural work." value={constructionCost} onChange={setConstructionCost} />
            <CostInput label="Insulation" description="Estimated insulation and room preparation cost." value={insulationCost} onChange={setInsulationCost} />
            <CostInput label="Racks / Shelving" description="Growing racks, shelves or supporting structures." value={rackCost} onChange={setRackCost} />
            <CostInput label="Climate Control" description="Cooling, humidification, ventilation and related systems." value={climateControlCost} onChange={setClimateControlCost} />
            <CostInput label="Electrical Work" description="Electrical installation, wiring and related work." value={electricalCost} onChange={setElectricalCost} />
            <CostInput label="Farming Equipment" description="Estimated cost of essential cultivation equipment." value={equipmentCost} onChange={setEquipmentCost} />
            <CostInput label="Miscellaneous" description="Other setup expenses and contingency allowance." value={miscellaneousCost} onChange={setMiscellaneousCost} />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            <ResultCard title="Total Setup Cost" value={formatMoney(results.totalSetupCost)} highlight />
            <ResultCard title="Cost / Sq Ft" value={formatMoney(results.costPerSqFt)} />
            <ResultCard title="Cost / Room" value={formatMoney(results.costPerRoom)} />
            <ResultCard title="Construction Share" value={`${formatNumber(results.constructionPercentage)}%`} />
            <ResultCard title="Climate Control Share" value={`${formatNumber(results.climatePercentage)}%`} />
          </div>

          {/* Cost Breakdown */}
          <div className="bg-slate-50/50 dark:bg-slate-800/30 border border-black/5 dark:border-white/5 rounded-2xl p-5 mb-6">
            <h3 className="text-[13px] font-bold text-slate-900 dark:text-white mb-4">Setup Cost Breakdown</h3>
            <div className="flex flex-col gap-3 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
              <BreakdownRow label="Construction / Building" value={formatMoney(constructionCost)} />
              <BreakdownRow label="Insulation" value={formatMoney(insulationCost)} />
              <BreakdownRow label="Racks / Shelving" value={formatMoney(rackCost)} />
              <BreakdownRow label="Climate Control" value={formatMoney(climateControlCost)} />
              <BreakdownRow label="Electrical Work" value={formatMoney(electricalCost)} />
              <BreakdownRow label="Farming Equipment" value={formatMoney(equipmentCost)} />
              <BreakdownRow label="Miscellaneous" value={formatMoney(miscellaneousCost)} />
              <div className="pt-3 mt-1 border-t border-black/10 dark:border-white/10">
                <BreakdownRow label="Total Estimated Setup Cost" value={formatMoney(results.totalSetupCost)} bold />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[13px] font-bold text-slate-900 dark:text-white mb-2">How This Calculator Works</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
              Enter your approximate farm area and number of growing rooms, then provide estimated costs for construction, insulation, racks, climate control, electrical work, equipment and miscellaneous expenses. The calculator adds these values to provide an estimated total setup investment.
            </p>
          </div>

          <p className="text-[9px] text-slate-400 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
            <strong>Important:</strong> This calculator provides an estimate for planning purposes only. Actual farm setup costs vary depending on location, farm size, building type, construction materials, insulation, climate-control requirements, equipment selection, labour, electricity and local supplier prices.
          </p>

          <div className="text-center">
            <a href="/enquiry" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-bold shadow-md hover:scale-105 transition-transform">
              Get Mushroom Farm Setup Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

type CostInputProps = {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
};

function CostInput({ label, description, value, onChange }: CostInputProps) {
  return (
    <div className="bg-white/40 dark:bg-slate-800/40 p-4 rounded-xl border border-black/5 dark:border-white/5">
      <label className="block text-[11px] font-bold text-slate-900 dark:text-white mb-1">
        {label}
      </label>
      <p className="text-[9px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed h-6">
        {description}
      </p>
      <input
        type="number"
        inputMode="decimal"
        min="0"
        step="100"
        value={value}
        onChange={(e) => {
          const number = Number(e.target.value);
          if (Number.isFinite(number)) {
            onChange(Math.max(0, number));
          }
        }}
        className="w-full bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors"
      />
    </div>
  );
}

type ResultCardProps = {
  title: string;
  value: string;
  highlight?: boolean;
};

function ResultCard({ title, value, highlight = false }: ResultCardProps) {
  return (
    <div className={`p-4 rounded-xl border ${highlight ? 'bg-purple-50/50 dark:bg-purple-900/10 border-purple-500/20 shadow-sm' : 'bg-white/50 dark:bg-slate-800/50 border-black/5 dark:border-white/5'}`}>
      <div className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${highlight ? 'text-purple-600 dark:text-purple-400' : 'text-slate-500'}`}>
        {title}
      </div>
      <div className={`text-sm md:text-base font-black tracking-tight ${highlight ? 'text-purple-700 dark:text-purple-300' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </div>
    </div>
  );
}

type BreakdownRowProps = {
  label: string;
  value: string;
  bold?: boolean;
};

function BreakdownRow({ label, value, bold = false }: BreakdownRowProps) {
  return (
    <div className={`flex justify-between items-center ${bold ? 'font-black text-slate-900 dark:text-white' : 'font-medium'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
