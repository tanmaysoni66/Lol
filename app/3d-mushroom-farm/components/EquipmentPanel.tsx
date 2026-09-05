"use client";

import React, { useState } from "react";
import type { EquipmentType } from "./Equipment";

export type EquipmentPanelProps = {
  equipment: EquipmentType | null;
  onClose: () => void;
  onShowInside?: () => void;
  embedded?: boolean;
};

const equipmentData: Record<
  EquipmentType,
  {
    name: string;
    category: string;
    purpose: string;
    systems: string[];
    specs?: { label: string; val: string }[];
  }
> = {
  HVAC: {
    name: "HVAC / Air Conditioning",
    category: "Climate Control",
    purpose:
      "Controls environmental conditions within the cultivation area.",
    systems: ["Temperature", "Air circulation", "Climate control"],
    specs: [
      { label: "Cooling Capacity", val: "5.5 TR / chamber" },
      { label: "Operating Temp", val: "14°C - 28°C ±0.5°C" },
      { label: "Air Volume Flow", val: "3,200 CFM variable speed" },
    ],
  },

  Fogger: {
    name: "Fogging System",
    category: "Humidity Control",
    purpose:
      "Produces fine moisture droplets for humidity management.",
    systems: ["Humidity", "Water supply", "Control system"],
    specs: [
      { label: "Droplet Size", val: "4 - 8 microns (dry fog)" },
      { label: "Pressure", val: "70 Bar high-pressure ceramic" },
      { label: "Operating Range", val: "Up to 98% RH non-wetting" },
    ],
  },

  "Humidity Sensor": {
    name: "Humidity Sensor",
    category: "Monitoring",
    purpose:
      "Measures relative humidity in the cultivation environment.",
    systems: ["Humidity monitoring", "Control system"],
    specs: [
      { label: "Accuracy", val: "±1.5% RH capacitive" },
      { label: "Protection", val: "IP67 sintered bronze filter" },
      { label: "Output", val: "4-20mA / Modbus RS485" },
    ],
  },

  "Temperature Sensor": {
    name: "Temperature Sensor",
    category: "Monitoring",
    purpose:
      "Measures temperature inside the cultivation room.",
    systems: ["Temperature monitoring", "Control system"],
    specs: [
      { label: "Element", val: "Class A Pt100 RTD" },
      { label: "Accuracy", val: "±0.15°C across range" },
      { label: "Probes", val: "Dual air & compost probe" },
    ],
  },

  "CO₂ Sensor": {
    name: "CO₂ Sensor",
    category: "Monitoring",
    purpose:
      "Measures carbon dioxide concentration.",
    systems: ["CO₂ monitoring", "Ventilation"],
    specs: [
      { label: "Technology", val: "Dual-beam NDIR optical" },
      { label: "Range", val: "0 - 10,000 PPM" },
      { label: "Auto-calibration", val: "ABC logic enabled" },
    ],
  },

  "Exhaust Fan": {
    name: "Exhaust Fan",
    category: "Ventilation",
    purpose:
      "Helps remove air from the cultivation environment.",
    systems: ["Air exchange", "Ventilation"],
    specs: [
      { label: "Motor", val: "EC energy-efficient variable drive" },
      { label: "Backdraft", val: "Gravity airtight damper" },
      { label: "Max Static Pressure", val: "250 Pa" },
    ],
  },

  "Fresh Air Fan": {
    name: "Fresh Air System",
    category: "Ventilation",
    purpose:
      "Introduces fresh air into the cultivation environment.",
    systems: ["Fresh air", "Ventilation", "Filtration"],
    specs: [
      { label: "Mixing Ratio", val: "0 - 100% fresh / return air" },
      { label: "Pre-cooling Coil", val: "Chilled water / DX coil" },
      { label: "Filter Stage", val: "G4 pre-filter + F7 fine" },
    ],
  },

  "Air Filter": {
    name: "Air Filtration",
    category: "Air Management",
    purpose:
      "Filters air entering or circulating through the room.",
    systems: ["Air filtration", "Ventilation"],
    specs: [
      { label: "Efficiency", val: "99.97% @ 0.3 micron (HEPA)" },
      { label: "Pressure Drop", val: "120 Pa initial" },
      { label: "Media", val: "Micro-glass fiber spore barrier" },
    ],
  },

  Rack: {
    name: "Growing Rack",
    category: "Cultivation Infrastructure",
    purpose:
      "Provides multi-level growing space.",
    systems: ["Growing area", "Space utilization"],
    specs: [
      { label: "Levels", val: "4-5 tiers vertical" },
      { label: "Material", val: "Hot-dip galvanized / Anodized Al" },
      { label: "Bed Loading", val: "100 - 120 kg compost / m²" },
    ],
  },

  "Control Panel": {
    name: "Control Panel",
    category: "Automation",
    purpose:
      "Provides centralized monitoring and control of connected systems.",
    systems: ["HVAC", "Humidity", "Ventilation", "Sensors"],
    specs: [
      { label: "PLC Engine", val: "Industrial micro-PLC with touch HMI" },
      { label: "Cloud Link", val: "IoT telemetry + SMS/Email alerts" },
      { label: "Control Modes", val: "Phase-based automation recipes" },
    ],
  },

  "Water Line": {
    name: "Water Line",
    category: "Water System",
    purpose:
      "Distributes water to applicable cultivation systems.",
    systems: ["Water supply", "Fogging", "Drainage"],
    specs: [
      { label: "Pipe Class", val: "Food-grade UPVC / SS304" },
      { label: "Pressure Rating", val: "PN16 operating pressure" },
      { label: "Filtration", val: "5-micron sediment pre-filter" },
    ],
  },

  Drainage: {
    name: "Drainage System",
    category: "Drainage",
    purpose:
      "Collects and directs wastewater away from cultivation areas.",
    systems: ["Drainage", "Water management"],
    specs: [
      { label: "Trench", val: "Stainless steel U-channel" },
      { label: "Slope", val: "1:50 floor grading to trap" },
      { label: "Pest Trap", val: "Water-seal odor & insect barrier" },
    ],
  },
};

export default function EquipmentPanel({
  equipment,
  onClose,
  onShowInside,
  embedded = true,
}: EquipmentPanelProps) {
  const [showTechnical, setShowTechnical] = useState<boolean>(false);

  if (!equipment) return null;

  const data = equipmentData[equipment];

  return (
    <aside
      className={`text-slate-900 dark:text-white rounded-2xl border transition-all duration-200 select-none ${
        embedded
          ? "w-full p-4 sm:p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl"
          : "absolute top-4 left-4 z-30 w-80 max-w-[calc(100vw-32px)] p-4 bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close equipment information"
        className="float-right p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-lg"
      >
        &times;
      </button>

      <p
        style={{
          margin: 0,
          fontSize: 12,
          opacity: 0.65,
        }}
        className="text-emerald-700 font-semibold uppercase tracking-wider"
      >
        {data.category}
      </p>

      <h2
        style={{
          margin: "6px 0 12px",
          fontSize: 20,
        }}
        className="font-bold text-slate-900 tracking-tight"
      >
        {data.name}
      </h2>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
        }}
        className="text-slate-600"
      >
        {data.purpose}
      </p>

      <h3 style={{ fontSize: 14, marginTop: 14 }} className="font-semibold text-slate-800">
        Connected Systems
      </h3>

      <ul
        style={{
          paddingLeft: 18,
          fontSize: 13,
          lineHeight: 1.7,
        }}
        className="text-slate-600 my-2"
      >
        {data.systems.map((system) => (
          <li key={system}>{system}</li>
        ))}
      </ul>

      {/* Expandable Technical Details */}
      {showTechnical && data.specs && (
        <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
          <p className="font-semibold text-slate-900 mb-1.5 uppercase text-[10px] tracking-wider">
            Engineering Specifications
          </p>
          <div className="space-y-1">
            {data.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-2">
                <span className="text-slate-500">{s.label}:</span>
                <span className="font-medium text-slate-800">{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show Inside / Individual X-Ray Button */}
      {onShowInside && (
        <button
          type="button"
          onClick={onShowInside}
          style={{
            width: "100%",
            padding: "10px 12px",
            marginTop: 10,
            borderRadius: 8,
            cursor: "pointer",
          }}
          className="text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-600/30 flex items-center justify-center gap-1.5"
        >
          <span>🔬</span>
          <span>Show Inside (X-Ray)</span>
        </button>
      )}

      <button
        type="button"
        onClick={() => setShowTechnical(!showTechnical)}
        style={{
          width: "100%",
          padding: "9px 12px",
          marginTop: 8,
          borderRadius: 8,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        className="text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
      >
        {showTechnical ? "Hide Technical Details" : "Show Technical Details"}
      </button>
    </aside>
  );
}
