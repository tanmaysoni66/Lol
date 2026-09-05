"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, X, Activity, Thermometer, Droplets, Wind } from "lucide-react";

export type ClimateValues = {
  temperature: number;
  humidity: number;
  co2: number;
  airflow: number;
};

type ClimateDashboardProps = {
  values: ClimateValues;
  hvac: boolean;
  fogger: boolean;
  exhaust: boolean;
  freshAir: boolean;
  setHVAC: (value: boolean) => void;
  setFogger: (value: boolean) => void;
  setExhaust: (value: boolean) => void;
  setFreshAir: (value: boolean) => void;
  embedded?: boolean;
  onClose?: () => void;
};

export default function ClimateDashboard({
  values,
  hvac,
  fogger,
  exhaust,
  freshAir,
  setHVAC,
  setFogger,
  setExhaust,
  setFreshAir,
  embedded = true,
  onClose,
}: ClimateDashboardProps) {
  const [minimized, setMinimized] = useState<boolean>(false);

  return (
    <div
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute right-4 bottom-4 z-40 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Climate &amp; IoT Automation
              </h2>
              <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                Live Simulation
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Interactive HVAC, fogger &amp; CO₂ ventilation management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Climate Dashboard"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title={minimized ? "Expand dashboard" : "Minimize dashboard"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {!minimized && (
        <div className="space-y-4">
          {/* Real-time environmental metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Metric
              icon={<Thermometer className="w-3.5 h-3.5 text-amber-500" />}
              label="Temperature"
              value={`${values.temperature.toFixed(1)}°C`}
              status={values.temperature > 26 ? "High" : "Optimal (18–24°C)"}
              color={values.temperature > 26 ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400"}
            />

            <Metric
              icon={<Droplets className="w-3.5 h-3.5 text-sky-500" />}
              label="Humidity (RH)"
              value={`${values.humidity.toFixed(1)}%`}
              status={values.humidity >= 85 ? "Optimal Pinning" : "Moderate"}
              color={values.humidity >= 80 ? "text-sky-600 dark:text-sky-400" : "text-amber-600 dark:text-amber-400"}
            />

            <Metric
              icon={<Wind className="w-3.5 h-3.5 text-purple-500" />}
              label="CO₂ Concentration"
              value={`${Math.round(values.co2)} ppm`}
              status={values.co2 > 1200 ? "Flushing Required" : "Biosecure Normal"}
              color={values.co2 > 1200 ? "text-orange-600 dark:text-orange-400" : "text-slate-700 dark:text-slate-300"}
            />

            <Metric
              icon={<Activity className="w-3.5 h-3.5 text-cyan-500" />}
              label="Air Velocity"
              value={`${values.airflow.toFixed(1)} m/s`}
              status={values.airflow > 0 ? "Active Circulation" : "Static Air"}
              color={values.airflow > 0 ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400"}
            />
          </div>

          {/* System toggles */}
          <div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-2">
              Environmental Actuators &amp; Automated Machinery:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <Control
                name="AHU / HVAC Unit"
                desc="DX Cooling &amp; Heat Exchange"
                active={hvac}
                icon="❄️"
                onClick={() => setHVAC(!hvac)}
              />

              <Control
                name="High-Pressure Fogger"
                desc="Micro-droplet humidification"
                active={fogger}
                icon="💧"
                onClick={() => setFogger(!fogger)}
              />

              <Control
                name="CO₂ Exhaust Fan"
                desc="Floor-level heavy gas purge"
                active={exhaust}
                icon="💨"
                onClick={() => setExhaust(!exhaust)}
              />

              <Control
                name="Fresh Air Damper"
                desc="HEPA-filtered fresh intake"
                active={freshAir}
                icon="🌱"
                onClick={() => setFreshAir(!freshAir)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  status,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: string;
  color?: string;
}) {
  return (
    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
        <span>{label}</span>
        {icon}
      </div>

      <div className={`text-lg font-black font-mono tracking-tight ${color || "text-slate-900 dark:text-white"}`}>
        {value}
      </div>

      <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
        {status}
      </div>
    </div>
  );
}

function Control({
  name,
  desc,
  active,
  icon,
  onClick,
}: {
  name: string;
  desc: string;
  active: boolean;
  icon?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between gap-2 ${
        active
          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 shadow-sm"
          : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
      }`}
    >
      <div className="flex items-start gap-2.5 min-w-0">
        <span className="text-lg leading-none mt-0.5">{icon}</span>
        <div className="min-w-0">
          <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
            {name}
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
            {desc}
          </span>
        </div>
      </div>

      <span
        className={`px-2 py-1 rounded-lg text-[10px] font-bold shrink-0 uppercase tracking-wider ${
          active
            ? "bg-emerald-600 text-white shadow-sm"
            : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
        }`}
      >
        {active ? "RUNNING" : "OFF"}
      </span>
    </button>
  );
}
