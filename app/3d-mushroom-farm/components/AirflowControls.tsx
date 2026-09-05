"use client";

import React, { useState } from "react";
import { Wind, Gauge, ArrowRight, X, ChevronDown, ChevronUp, Info } from "lucide-react";

type Props = {
  enabled: boolean;
  speed: number;
  setEnabled: (value: boolean) => void;
  setSpeed: (value: number) => void;
  onClose?: () => void;
};

export default function AirflowControls({
  enabled,
  speed,
  setEnabled,
  setSpeed,
  onClose,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="absolute left-5 top-44 z-30 w-72 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200/90 text-slate-800 font-sans overflow-hidden transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-50 to-indigo-50 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-xs">
            <Wind className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 leading-tight m-0">
              Airflow &amp; HVAC System
            </h3>
            <span className="text-[10px] text-sky-700 font-medium">
              Circulation &amp; Fresh Air
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="w-6 h-6 rounded flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
            title={collapsed ? "Expand" : "Collapse"}
          >
            {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-6 h-6 rounded flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
              title="Close Panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {!collapsed && (
        <div className="p-4 space-y-3.5">
          {/* Main Activation Toggle */}
          <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 cursor-pointer transition-colors">
            <span className="text-xs font-semibold text-slate-800 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${enabled ? "bg-sky-500 animate-pulse" : "bg-slate-400"}`} />
              Simulate Airflow
            </span>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
              className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 cursor-pointer accent-sky-600"
            />
          </label>

          {/* Airflow Velocity Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-sky-500" />
                Airflow Velocity:
              </span>
              <strong className="font-mono text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded text-[11px]">
                {speed.toFixed(1)}×
              </strong>
            </div>

            <input
              type="range"
              min={0.1}
              max={3}
              step={0.1}
              value={speed}
              disabled={!enabled}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600 disabled:opacity-40 disabled:cursor-not-allowed"
            />

            <div className="flex justify-between text-[10px] text-slate-600 font-mono">
              <span>0.1× (Gentle)</span>
              <span>1.0×</span>
              <span>3.0× (Turbo)</span>
            </div>
          </div>

          {/* Production Duct Sequence Pipeline Diagram */}
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-[10px] text-slate-600 space-y-1.5">
            <div className="font-semibold text-slate-700 flex items-center gap-1">
              <Info className="w-3 h-3 text-indigo-500" />
              Circulation Pathway:
            </div>
            <div className="flex items-center justify-between text-[9.5px] font-medium text-slate-500">
              <span className="text-emerald-700 font-semibold">Fresh Air</span>
              <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
              <span className="text-indigo-700 font-semibold">HVAC Supply</span>
              <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
              <span className="text-amber-700 font-semibold">Racks</span>
              <ArrowRight className="w-2.5 h-2.5 text-slate-400" />
              <span className="text-rose-700 font-semibold">Exhaust</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
