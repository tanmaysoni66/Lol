"use client";

import React, { useState } from "react";
import type { FarmConfig } from "./FarmConfigurator";
import { ArrowLeftRight, X, Check, TrendingUp } from "lucide-react";

type Props = {
  currentConfig: FarmConfig;
  onClose?: () => void;
  onApplyDesign?: (config: FarmConfig) => void;
};

const PRESET_DESIGNS: { name: string; description: string; config: FarmConfig }[] = [
  {
    name: "Commercial 4-Room Standard",
    description: "Optimal starter commercial model with dedicated cold room",
    config: {
      farmLength: 24,
      farmWidth: 16,
      growingRooms: 4,
      racksPerRoom: 4,
      rackLevels: 5,
      coldStorage: true,
    },
  },
  {
    name: "Industrial 8-Room High-Density",
    description: "High volume continuous production facility",
    config: {
      farmLength: 36,
      farmWidth: 22,
      growingRooms: 8,
      racksPerRoom: 6,
      rackLevels: 6,
      coldStorage: true,
    },
  },
  {
    name: "Compact 2-Room Gourmet",
    description: "Specialty Oyster/Shiitake boutique setup",
    config: {
      farmLength: 14,
      farmWidth: 10,
      growingRooms: 2,
      racksPerRoom: 3,
      rackLevels: 4,
      coldStorage: false,
    },
  },
];

export default function CompareDesigns({ currentConfig, onClose, onApplyDesign }: Props) {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState<number>(0);
  const benchmark = PRESET_DESIGNS[selectedPresetIdx].config;

  const currentRacks = currentConfig.growingRooms * currentConfig.racksPerRoom;
  const currentLevels = currentRacks * currentConfig.rackLevels;
  const currentBedArea = Math.round(currentLevels * 14.4);
  const currentEstYield = Math.round(currentBedArea * 25); // ~25 kg/m2/crop cycle

  const benchRacks = benchmark.growingRooms * benchmark.racksPerRoom;
  const benchLevels = benchRacks * benchmark.rackLevels;
  const benchBedArea = Math.round(benchLevels * 14.4);
  const benchEstYield = Math.round(benchBedArea * 25);

  const rows = [
    { label: "Building Footprint", a: `${currentConfig.farmLength}m × ${currentConfig.farmWidth}m (${currentConfig.farmLength * currentConfig.farmWidth} m²)`, b: `${benchmark.farmLength}m × ${benchmark.farmWidth}m (${benchmark.farmLength * benchmark.farmWidth} m²)` },
    { label: "Growing Rooms", a: `${currentConfig.growingRooms} Rooms`, b: `${benchmark.growingRooms} Rooms` },
    { label: "Racks Per Room", a: `${currentConfig.racksPerRoom} Racks`, b: `${benchmark.racksPerRoom} Racks` },
    { label: "Rack Vertical Levels", a: `${currentConfig.rackLevels} Tiers`, b: `${benchmark.rackLevels} Tiers` },
    { label: "Total Growing Shelves", a: `${currentLevels} Shelves`, b: `${benchLevels} Shelves` },
    { label: "Total Cultivation Surface", a: `${currentBedArea} m²`, b: `${benchBedArea} m²` },
    { label: "Cold Storage Facility", a: currentConfig.coldStorage ? "Included (2°–4°C)" : "Not Included", b: benchmark.coldStorage ? "Included (2°–4°C)" : "Not Included" },
    { label: "Est. Harvest / Cycle", a: `~${currentEstYield.toLocaleString()} kg`, b: `~${benchEstYield.toLocaleString()} kg` },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 text-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-50 via-sky-50 to-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Compare Farm Architecture
              </h2>
              <p className="text-xs text-slate-500">
                Evaluate capacity, footprint, and yields against industrial benchmarks
              </p>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Preset Selector */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-500 shrink-0">Compare with:</span>
          {PRESET_DESIGNS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedPresetIdx(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedPresetIdx === idx
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Table Comparison */}
        <div className="overflow-y-auto p-6 space-y-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-2.5">Specification</th>
                <th className="pb-2.5 text-indigo-700">Design A (Active Farm)</th>
                <th className="pb-2.5 text-slate-600">Design B ({PRESET_DESIGNS[selectedPresetIdx].name})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-2.5 font-medium text-slate-700">{row.label}</td>
                  <td className="py-2.5 font-semibold text-indigo-950 bg-indigo-50/40 px-2 rounded">
                    {row.a}
                  </td>
                  <td className="py-2.5 text-slate-600 px-2">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Action Row */}
          {onApplyDesign && (
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Want to adopt Design B parameters in the 3D viewer?</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  onApplyDesign(benchmark);
                  onClose?.();
                }}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all active:scale-95"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Apply Design B to 3D Farm</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
