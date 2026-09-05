"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
}: ClimateDashboardProps) {
  const [minimized, setMinimized] = useState<boolean>(true);

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        bottom: minimized ? 280 : 280,
        zIndex: 40,
        width: 300,
        maxWidth: "calc(100vw - 40px)",
        padding: 16,
        borderRadius: 14,
        background: "rgba(255,255,255,0.96)",
        boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
        fontFamily: "var(--font-inter), Arial, sans-serif",
      }}
      className="text-slate-900 border border-slate-200/80 backdrop-blur-xl animate-in fade-in zoom-in-95"
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          style={{
            margin: 0,
            fontSize: 17,
          }}
          className="font-bold text-slate-900 flex items-center gap-1.5"
        >
          <span>🌡️</span>
          <span>Climate Simulation</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
            Live IoT
          </span>
          <button
            type="button"
            onClick={() => setMinimized(!minimized)}
            className="p-1 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
            title={minimized ? "Expand dashboard" : "Minimize dashboard"}
          >
            {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
        <Metric
          label="Temperature"
          value={`${values.temperature.toFixed(1)}°C`}
          color={values.temperature > 26 ? "#ef4444" : "#10b981"}
        />

        <Metric
          label="Humidity"
          value={`${values.humidity.toFixed(1)}%`}
          color={values.humidity >= 80 ? "#0284c7" : "#f59e0b"}
        />

        <Metric
          label="CO₂"
          value={`${Math.round(values.co2)} ppm`}
          color={values.co2 > 1200 ? "#f97316" : "#64748b"}
        />

        <Metric
          label="Airflow"
          value={`${values.airflow.toFixed(1)} m/s`}
          color={values.airflow > 0 ? "#06b6d4" : "#94a3b8"}
        />
      </div>

      <div
        style={{
          marginTop: 14,
          display: "grid",
          gap: 8,
        }}
      >
        <Control
          name="HVAC"
          active={hvac}
          icon="❄️"
          onClick={() => setHVAC(!hvac)}
        />

        <Control
          name="Fogger"
          active={fogger}
          icon="💧"
          onClick={() => setFogger(!fogger)}
        />

        <Control
          name="Exhaust"
          active={exhaust}
          icon="💨"
          onClick={() => setExhaust(!exhaust)}
        />

        <Control
          name="Fresh Air"
          active={freshAir}
          icon="🌱"
          onClick={() => setFreshAir(!freshAir)}
        />
      </div>
      </>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 8,
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          fontSize: 11,
          opacity: 0.7,
        }}
        className="text-slate-600 font-medium"
      >
        {label}
      </div>

      <strong
        style={{
          display: "block",
          marginTop: 4,
          fontSize: 17,
          color: color || "#0f172a",
        }}
        className="font-bold"
      >
        {value}
      </strong>
    </div>
  );
}

function Control({
  name,
  active,
  icon,
  onClick,
}: {
  name: string;
  active: boolean;
  icon?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 8,
        border: active ? "1px solid #10b981" : "1px solid #e2e8f0",
        background: active ? "#ecfdf5" : "white",
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
      className="text-xs font-semibold text-slate-800 hover:bg-slate-50"
    >
      <span className="flex items-center gap-1.5">
        <span>{icon}</span>
        <span>{name}</span>
      </span>

      <span
        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
          active ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-600"
        }`}
      >
        {active ? "● ON" : "○ OFF"}
      </span>
    </button>
  );
}
