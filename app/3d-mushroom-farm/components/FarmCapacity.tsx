"use client";

import React, { useState } from "react";
import { Warehouse, ChevronDown, ChevronUp, X } from "lucide-react";

type Props = {
  rooms: number;
  racksPerRoom: number;
  rackLevels: number;
  embedded?: boolean;
  onClose?: () => void;
};

export default function FarmCapacity({
  rooms,
  racksPerRoom,
  rackLevels,
  embedded = true,
  onClose,
}: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const totalRackLevels = rooms * racksPerRoom * rackLevels;
  const estimatedGrowingPositions = totalRackLevels * 20;
  const estimatedYieldPerFlushKg = Math.round(estimatedGrowingPositions * 0.45);
  const canopyAreaM2 = Math.round(totalRackLevels * 14.4);

  return (
    <div
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute right-4 top-4 z-35 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Warehouse className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Farm Yield &amp; Canopy Capacity
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Commercial bag density &amp; output projections
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Capacity Panel"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title={minimized ? "Expand capacity" : "Minimize capacity"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {!minimized && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Cultivation Rooms</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">{rooms} Rooms</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Total Racks</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">{rooms * racksPerRoom} Racks</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Total Shelf Levels</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">{totalRackLevels} Levels</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Growing Positions</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">{estimatedGrowingPositions.toLocaleString()} Bags</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block">
                Estimated Canopy Surface Area
              </span>
              <span className="text-xl font-black text-emerald-700 dark:text-emerald-300 font-mono mt-1 block">
                ~{canopyAreaM2.toLocaleString()} m²
              </span>
              <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300/70 mt-1">
                Calculated on commercial standard 1.2m × 12m vertical shelf footprint tiers.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50">
              <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 block">
                Projected Output (Per Flush Cycle)
              </span>
              <span className="text-xl font-black text-indigo-700 dark:text-indigo-300 font-mono mt-1 block">
                ~{estimatedYieldPerFlushKg.toLocaleString()} kg / cycle
              </span>
              <p className="text-[11px] text-indigo-800/80 dark:text-indigo-300/70 mt-1">
                Assumes ~450g per bag bio-efficiency over first-grade commercial flushes.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
