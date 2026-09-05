"use client";

import React, { useState } from "react";
import { Sliders, ChevronDown, ChevronUp, X } from "lucide-react";

export type FarmConfig = {
  farmLength: number;
  farmWidth: number;
  growingRooms: number;
  racksPerRoom: number;
  rackLevels: number;
  coldStorage: boolean;
};

type Props = {
  config: FarmConfig;
  setConfig: React.Dispatch<React.SetStateAction<FarmConfig>>;
  embedded?: boolean;
  onClose?: () => void;
};

export default function FarmConfigurator({
  config,
  setConfig,
  embedded = true,
  onClose,
}: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const update = (key: keyof FarmConfig, value: number | boolean) => {
    setConfig((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <aside
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute top-4 left-4 z-40 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Farm Configurator
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Customize commercial room dimensions &amp; rack density
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Configurator"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title={minimized ? "Expand configurator" : "Minimize configurator"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {!minimized && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Slider
              label="Farm Length"
              value={config.farmLength}
              min={10}
              max={40}
              step={1}
              unit=" m"
              onChange={(value) => update("farmLength", value)}
            />

            <Slider
              label="Farm Width"
              value={config.farmWidth}
              min={8}
              max={30}
              step={1}
              unit=" m"
              onChange={(value) => update("farmWidth", value)}
            />

            <Slider
              label="Growing Rooms"
              value={config.growingRooms}
              min={1}
              max={10}
              step={1}
              unit=""
              onChange={(value) => update("growingRooms", value)}
            />

            <Slider
              label="Racks / Room"
              value={config.racksPerRoom}
              min={1}
              max={20}
              step={1}
              unit=""
              onChange={(value) => update("racksPerRoom", value)}
            />

            <Slider
              label="Rack Levels"
              value={config.rackLevels}
              min={1}
              max={8}
              step={1}
              unit=""
              onChange={(value) => update("rackLevels", value)}
            />

            <div className="flex flex-col justify-center">
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer select-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <input
                  type="checkbox"
                  className="accent-emerald-600 w-4 h-4 rounded cursor-pointer"
                  checked={config.coldStorage}
                  onChange={(event) => update("coldStorage", event.target.checked)}
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Cold Storage Facility
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    2°–4°C Isolated PIR Envelope
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs">
            <span className="text-emerald-800 dark:text-emerald-300 font-medium">
              Total Cultivation Canopy: <strong>{Math.round(config.growingRooms * config.racksPerRoom * config.rackLevels * 14.4)} m²</strong>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              {config.growingRooms * config.racksPerRoom * config.rackLevels} Total Shelves
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
      <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
        <span>{label}</span>
        <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold font-mono">
          {value}
          {unit}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg"
      />

      <div className="flex justify-between text-[10px] text-slate-400 mt-1">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}
