"use client";

import React, { useState } from "react";
import { Layers, ChevronDown, ChevronUp, Sparkles, X } from "lucide-react";

type Props = {
  enabled: boolean;
  amount: number;
  setEnabled: (value: boolean) => void;
  setAmount: (value: number) => void;
  embedded?: boolean;
  onClose?: () => void;
};

export default function ExplodedViewControls({
  enabled,
  amount,
  setEnabled,
  setAmount,
  embedded = true,
  onClose,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const presets = [
    { label: "Subtle (1.5x)", value: 1.5 },
    { label: "Standard (3.0x)", value: 3.0 },
    { label: "Wide (6.0x)", value: 6.0 },
    { label: "Max (10.0x)", value: 10.0 },
  ];

  return (
    <div
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute right-4 top-4 z-40 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Exploded View Simulation
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Deconstruct building envelope, racks, HVAC &amp; systems
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Exploded View"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={collapsed ? "Expand" : "Collapse"}
            >
              {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600"
          />
          <span className="text-xs font-bold text-slate-900 dark:text-white">
            Explode Architectural Components
          </span>
        </label>

        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
          enabled ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300" : "bg-slate-200 dark:bg-slate-700 text-slate-500"
        }`}>
          {enabled ? "Separated" : "Assembled"}
        </span>
      </div>

      {!collapsed && (
        <div className="mt-4 space-y-4">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              <span>Explosion Separation Distance</span>
              <strong className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 font-bold font-mono">
                {amount.toFixed(1)}x
              </strong>
            </div>

            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={amount}
              disabled={!enabled}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg disabled:opacity-40"
            />
          </div>

          {/* Presets */}
          <div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
              Quick Separation Presets:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  disabled={!enabled}
                  onClick={() => setAmount(preset.value)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                    enabled && Math.abs(amount - preset.value) < 0.2
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                      : "bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  } ${!enabled ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {enabled && (
            <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/40 text-xs text-purple-900 dark:text-purple-300">
              <div className="font-bold flex items-center gap-1.5 mb-1 text-purple-800 dark:text-purple-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Active Component Offsets
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span>Building: -0.15 Z</span>
                <span>Racks: +0.35 Y</span>
                <span>HVAC: +0.8X</span>
                <span>Air: -0.8X</span>
                <span>Water: +0.8Z</span>
                <span>Control: +1.2X</span>
                <span>Cold: +0.4Y</span>
                <span>Lights: +0.2Z</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
