"use client";

import React, { useMemo, useState } from "react";
import { Sprout, ChevronDown, ChevronUp, X, ArrowRight } from "lucide-react";

export type GrowthStage = "spawning" | "incubation" | "pinning" | "harvesting";

const stages: {
  id: GrowthStage;
  name: string;
  description: string;
  badge: string;
  temp: string;
  humidity: string;
}[] = [
  {
    id: "spawning",
    name: "Spawning / Grain Inoculation",
    description: "Autoclaved substrate bags inoculated with certified mother spawn mycelium.",
    badge: "Day 0 - 3",
    temp: "24°C - 26°C",
    humidity: "65% - 70%",
  },
  {
    id: "incubation",
    name: "Incubation (Spawn Run)",
    description: "Dark, thermally insulated room where vegetative mycelium colonizes the entire substrate block.",
    badge: "Day 4 - 15",
    temp: "22°C - 24°C",
    humidity: "70% - 75%",
  },
  {
    id: "pinning",
    name: "Pinhead Initiation (Cold Shock)",
    description: "Temperature drop, fresh air exchange and 90%+ RH trigger vigorous pinhead emergence.",
    badge: "Day 16 - 21",
    temp: "17°C - 19°C",
    humidity: "90% - 95%",
  },
  {
    id: "harvesting",
    name: "Mature Flush & Harvesting",
    description: "Full fruiting body development ready for twist-and-pull harvesting into perforated crates.",
    badge: "Day 22 - 28",
    temp: "18°C - 20°C",
    humidity: "85% - 90%",
  },
];

export default function GrowthSimulation({
  stage,
  setStage,
  embedded = true,
  onClose,
}: {
  stage: GrowthStage;
  setStage: (stage: GrowthStage) => void;
  embedded?: boolean;
  onClose?: () => void;
}) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const currentIndex = useMemo(
    () => stages.findIndex((item) => item.id === stage),
    [stage]
  );

  return (
    <div
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute left-4 bottom-4 z-35 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Cultivation Lifecycle Simulation
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Interactive mycelium growth stages &amp; biological parameters
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Growth Simulation"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!onClose && (
            <button
              type="button"
              onClick={() => setMinimized(!minimized)}
              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              title={minimized ? "Expand growth" : "Minimize growth"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {!minimized && (
        <div className="space-y-4">
          {/* Active Stage Highlight Banner */}
          <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                  {stages[currentIndex].badge}
                </span>
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                  {stages[currentIndex].name}
                </span>
              </div>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                {stages[currentIndex].description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 text-xs font-mono">
              <span className="px-2 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-800">
                🌡️ {stages[currentIndex].temp}
              </span>
              <span className="px-2 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-800">
                💧 {stages[currentIndex].humidity}
              </span>
            </div>
          </div>

          {/* 4-Stage Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {stages.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStage(item.id)}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                      : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isActive
                          ? "bg-white text-emerald-700"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${isActive ? "text-emerald-100" : "text-slate-400"}`}>
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold block mt-1">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
