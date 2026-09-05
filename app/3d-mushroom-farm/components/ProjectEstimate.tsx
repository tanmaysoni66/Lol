"use client";

import React, { useState } from "react";
import type { FarmConfig } from "./FarmConfigurator";
import { FileSpreadsheet, ChevronDown, ChevronUp, ArrowRight, X } from "lucide-react";

type Props = {
  config: FarmConfig;
  onEnquiry?: () => void;
  embedded?: boolean;
  onClose?: () => void;
};

export default function ProjectEstimate({
  config,
  onEnquiry,
  embedded = true,
  onClose,
}: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const growingArea = config.growingRooms * config.racksPerRoom * 20;
  const equipmentCount =
    config.growingRooms * 4 + config.racksPerRoom + (config.coldStorage ? 1 : 0);
  const planningUnits =
    config.growingRooms * config.racksPerRoom * config.rackLevels;
  
  // Approximate Turnkey Commercial Project Capex (in ₹ Lakhs)
  const estimatedCostLakhs = Math.round(
    config.growingRooms * 8.5 +
    (config.racksPerRoom * config.rackLevels * 0.45) +
    (config.coldStorage ? 6.5 : 0) +
    12
  );

  return (
    <aside
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute right-4 bottom-4 z-45 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Commercial Capex &amp; Project Estimate
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Turnkey engineering cost &amp; asset inventory breakdown
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Project Estimate"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title={minimized ? "Expand summary" : "Minimize summary"}
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
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Facility Footprint</span>
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{config.farmLength} × {config.farmWidth} m</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Active Rooms</span>
              <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{config.growingRooms} Rooms</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Cold Storage (PIR)</span>
              <span className="text-base font-bold text-blue-600 dark:text-blue-400 font-mono">{config.coldStorage ? "Included" : "None"}</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
              <span className="text-[11px] text-emerald-800 dark:text-emerald-300 block font-semibold">Estimated Capex</span>
              <span className="text-base font-black text-emerald-700 dark:text-emerald-400 font-mono">₹{estimatedCostLakhs} - {estimatedCostLakhs + 8} Lakh</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Total Structural Shelves:</span>
              <strong className="text-slate-900 dark:text-white font-mono">{planningUnits} Units</strong>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Substrate Bag Positions:</span>
              <strong className="text-slate-900 dark:text-white font-mono">{growingArea.toLocaleString()} Bags</strong>
            </div>
          </div>

          <button
            type="button"
            onClick={onEnquiry}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Request Detailed Commercial Quotation &amp; Architectural Drawing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </aside>
  );
}
