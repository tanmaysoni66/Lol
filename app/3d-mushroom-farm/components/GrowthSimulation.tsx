"use client";

import { useMemo, useState } from "react";
import { Sprout, ChevronDown, ChevronUp } from "lucide-react";

export type GrowthStage =
  | "spawn"
  | "incubation"
  | "pinning"
  | "fruiting"
  | "harvest";

const stages: {
  id: GrowthStage;
  name: string;
  description: string;
  badge: string;
}[] = [
  {
    id: "spawn",
    name: "Spawning",
    description:
      "Spawn is introduced into the prepared cultivation substrate.",
    badge: "Day 0",
  },
  {
    id: "incubation",
    name: "Incubation",
    description:
      "The substrate is maintained under controlled conditions for colonization.",
    badge: "Day 1-14",
  },
  {
    id: "pinning",
    name: "Pinning",
    description:
      "Small mushroom primordia begin to appear.",
    badge: "Day 15-18",
  },
  {
    id: "fruiting",
    name: "Fruiting",
    description:
      "Mushrooms develop and enlarge during the fruiting phase.",
    badge: "Day 19-24",
  },
  {
    id: "harvest",
    name: "Harvest",
    description:
      "Mature mushrooms reach the selected harvest stage.",
    badge: "Day 25+",
  },
];

export default function GrowthSimulation({
  stage,
  setStage,
}: {
  stage: GrowthStage;
  setStage: (stage: GrowthStage) => void;
}) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const currentIndex = useMemo(
    () => stages.findIndex((item) => item.id === stage),
    [stage]
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 20,
        bottom: 80,
        zIndex: 35,
        width: 320,
        maxWidth: "calc(100vw - 40px)",
        padding: 16,
        borderRadius: 14,
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
        fontFamily: "var(--font-inter), Arial, sans-serif",
      }}
      className="text-slate-900 border border-slate-200/80 backdrop-blur-xl animate-in fade-in"
    >
      <div className="flex items-center justify-between mb-2">
        <h2
          style={{
            margin: 0,
            fontSize: 17,
          }}
          className="font-bold text-slate-900 flex items-center gap-2"
        >
          <Sprout className="w-4 h-4 text-emerald-600" />
          <span>Mushroom Growth</span>
        </h2>
        <button
          type="button"
          onClick={() => setMinimized(!minimized)}
          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
          title={minimized ? "Expand growth" : "Minimize growth"}
        >
          {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {!minimized && (
        <>
          <div className="flex items-center justify-between gap-2 mb-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
            <p
              style={{
                margin: 0,
                fontSize: 12,
                lineHeight: 1.4,
              }}
              className="text-slate-600"
            >
              {stages[currentIndex].description}
            </p>
            <span className="flex-shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-emerald-100 text-emerald-800">
              {stages[currentIndex].badge}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gap: 5,
            }}
          >
            {stages.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStage(item.id)}
                  style={{
                    textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                  className={`flex items-center justify-between text-xs transition-all border ${
                    isActive
                      ? "bg-emerald-50 text-emerald-900 border-emerald-500 font-semibold shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isActive
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span>{item.name}</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
