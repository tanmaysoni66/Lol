"use client";

import React, { useState } from "react";
import type { FarmConfig } from "./FarmConfigurator";
import { FileSpreadsheet, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

type Props = {
  config: FarmConfig;
  onEnquiry?: () => void;
};

export default function ProjectEstimate({ config, onEnquiry }: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const growingArea = config.growingRooms * config.racksPerRoom * 20;
  const equipmentCount =
    config.growingRooms * 4 + config.racksPerRoom + (config.coldStorage ? 1 : 0);
  const planningUnits =
    config.growingRooms * config.racksPerRoom * config.rackLevels;

  return (
    <aside
      style={{
        position: "absolute",
        right: 20,
        bottom: 20,
        zIndex: 45,
        width: 300,
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
          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
          <span>Project Summary</span>
        </h2>
        <button
          type="button"
          onClick={() => setMinimized(!minimized)}
          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
          title={minimized ? "Expand summary" : "Minimize summary"}
        >
          {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {!minimized && (
        <>
          <div className="space-y-0.5 my-2">
            <Row
              label="Farm Size"
              value={`${config.farmLength} × ${config.farmWidth} m`}
            />
            <Row label="Growing Rooms" value={String(config.growingRooms)} />
            <Row label="Racks / Room" value={String(config.racksPerRoom)} />
            <Row label="Rack Levels" value={String(config.rackLevels)} />
            <Row label="Planning Units" value={String(planningUnits)} />
            <Row label="Growing Positions" value={growingArea.toLocaleString()} />
            <Row label="Equipment Groups" value={String(equipmentCount)} />
            <Row
              label="Cold Storage"
              value={config.coldStorage ? "Included" : "Not Included"}
            />
          </div>

          <button
            type="button"
            onClick={onEnquiry}
            className="w-full mt-3 py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Request Commercial Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </>
      )}
    </aside>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        padding: "6px 0",
        fontSize: 12,
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <span className="text-slate-600">{label}</span>
      <strong className="text-slate-800 font-semibold">{value}</strong>
    </div>
  );
}
