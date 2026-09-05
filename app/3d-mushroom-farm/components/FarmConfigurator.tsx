"use client";

import React, { useState } from "react";
import { Sliders, ChevronDown, ChevronUp } from "lucide-react";

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
};

export default function FarmConfigurator({ config, setConfig }: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const update = (key: keyof FarmConfig, value: number | boolean) => {
    setConfig((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <aside
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 40,
        width: 290,
        maxWidth: "calc(100vw - 40px)",
        padding: 16,
        borderRadius: 14,
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
        fontFamily: "var(--font-inter), Arial, sans-serif",
      }}
      className="text-slate-900 border border-slate-200/80 backdrop-blur-xl animate-in fade-in"
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          style={{
            margin: 0,
            fontSize: 17,
          }}
          className="font-bold text-slate-900 flex items-center gap-2"
        >
          <Sliders className="w-4 h-4 text-emerald-600" />
          <span>Farm Configurator</span>
        </h2>
        <button
          type="button"
          onClick={() => setMinimized(!minimized)}
          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
          title={minimized ? "Expand configurator" : "Minimize configurator"}
        >
          {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {!minimized && (
        <>
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

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 14,
              fontSize: 13,
              cursor: "pointer",
            }}
            className="font-medium text-slate-800 select-none"
          >
            <input
              type="checkbox"
              className="accent-emerald-600 w-4 h-4 rounded"
              checked={config.coldStorage}
              onChange={(event) => update("coldStorage", event.target.checked)}
            />
            <span>Cold Storage Facility</span>
          </label>
        </>
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
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          marginBottom: 4,
        }}
        className="font-medium text-slate-700"
      >
        <span>{label}</span>
        <strong className="text-emerald-700 font-bold">
          {value}
          {unit}
        </strong>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ width: "100%", cursor: "pointer" }}
        className="accent-emerald-600"
      />
    </div>
  );
}
