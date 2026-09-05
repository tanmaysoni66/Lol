"use client";

import React, { useState } from "react";
import {
  Eye,
  Sliders,
  Maximize,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Droplets,
  Wind,
  Zap,
  Activity,
  Box,
  SplitSquareVertical,
  MinusCircle,
  HelpCircle,
} from "lucide-react";
import type { EquipmentType } from "./Equipment";

export type ViewMode = "normal" | "xray" | "cutaway" | "exploded";

export type LayerArchitecture = {
  structure: boolean;
  racks: boolean;
  hvac: boolean;
  fogging: boolean;
  airflow: boolean;
  water: boolean;
  electrical: boolean;
  monitoring: boolean;
};

export type SystemVisibility = {
  air: boolean;
  water: boolean;
  electrical: boolean;
  control: boolean;
};

export type XRayControlsProps = {
  // View Modes
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  cutawayProgress: number;
  setCutawayProgress: (val: number) => void;
  cutawayAxis: "x" | "z";
  setCutawayAxis: (axis: "x" | "z") => void;
  explodedProgress: number;
  setExplodedProgress: (val: number) => void;

  // Layer Architecture
  layers: LayerArchitecture;
  setLayers: React.Dispatch<React.SetStateAction<LayerArchitecture>>;

  // Data-driven Systems
  visibleSystems: SystemVisibility;
  setVisibleSystems: React.Dispatch<React.SetStateAction<SystemVisibility>>;

  // Equipment Isolation & Hiding
  selectedEquipment?: EquipmentType | null;
  isolatedEquipment?: EquipmentType | null;
  setIsolatedEquipment?: (eq: EquipmentType | null) => void;
  hiddenEquipment?: Set<EquipmentType>;
  toggleHideEquipment?: (eq: EquipmentType) => void;

  // PUF Panel Inspector
  showPUFDetails: boolean;
  setShowPUFDetails: (val: boolean) => void;
};

const layerConfig: {
  key: keyof LayerArchitecture;
  label: string;
  icon: React.ReactNode;
  color: string;
}[] = [
  {
    key: "structure",
    label: "Structure (Walls/PUF/Floor)",
    icon: <Box className="w-3.5 h-3.5 text-slate-400" />,
    color: "bg-slate-400",
  },
  {
    key: "racks",
    label: "Growing Racks & Trays",
    icon: <Layers className="w-3.5 h-3.5 text-emerald-400" />,
    color: "bg-emerald-400",
  },
  {
    key: "hvac",
    label: "HVAC & DX Cooling Coils",
    icon: <Cpu className="w-3.5 h-3.5 text-blue-400" />,
    color: "bg-blue-400",
  },
  {
    key: "fogging",
    label: "Fogger & Micro-Mist Lines",
    icon: <Droplets className="w-3.5 h-3.5 text-cyan-400" />,
    color: "bg-cyan-400",
  },
  {
    key: "airflow",
    label: "Air Ducts & Flow Stream",
    icon: <Wind className="w-3.5 h-3.5 text-sky-400" />,
    color: "bg-sky-400",
  },
  {
    key: "water",
    label: "Water Supply & Drainage",
    icon: <Droplets className="w-3.5 h-3.5 text-indigo-400" />,
    color: "bg-indigo-400",
  },
  {
    key: "electrical",
    label: "Electrical & Control Wiring",
    icon: <Zap className="w-3.5 h-3.5 text-amber-400" />,
    color: "bg-amber-400",
  },
  {
    key: "monitoring",
    label: "Monitoring & IoT Sensors",
    icon: <Activity className="w-3.5 h-3.5 text-rose-400" />,
    color: "bg-rose-400",
  },
];

const VIEW_MODES: {
  id: ViewMode;
  label: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "normal",
    label: "Normal",
    desc: "Realistic 3D facility finish",
    icon: <Eye className="w-3.5 h-3.5" />,
  },
  {
    id: "xray",
    label: "X-Ray",
    desc: "Transparent walls & ghosted envelope",
    icon: <Sliders className="w-3.5 h-3.5" />,
  },
  {
    id: "cutaway",
    label: "Cutaway",
    desc: "Sectional interior inspection plane",
    icon: <SplitSquareVertical className="w-3.5 h-3.5" />,
  },
  {
    id: "exploded",
    label: "Exploded",
    desc: "Separated architectural layers",
    icon: <Maximize className="w-3.5 h-3.5" />,
  },
];

export default function XRayControls({
  viewMode,
  setViewMode,
  cutawayProgress,
  setCutawayProgress,
  cutawayAxis,
  setCutawayAxis,
  explodedProgress,
  setExplodedProgress,
  layers,
  setLayers,
  visibleSystems,
  setVisibleSystems,
  selectedEquipment,
  isolatedEquipment,
  setIsolatedEquipment,
  hiddenEquipment,
  toggleHideEquipment,
  showPUFDetails,
  setShowPUFDetails,
}: XRayControlsProps) {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"view" | "layers" | "systems">("view");

  const toggleAllLayers = (state: boolean) => {
    setLayers({
      structure: state,
      racks: state,
      hvac: state,
      fogging: state,
      airflow: state,
      water: state,
      electrical: state,
      monitoring: state,
    });
  };

  const toggleAllSystems = (state: boolean) => {
    setVisibleSystems({
      air: state,
      water: state,
      electrical: state,
      control: state,
    });
  };

  return (
    <div
      className="absolute top-20 right-4 z-20 w-80 p-3.5 rounded-2xl bg-slate-900/95 text-white border border-white/15 shadow-2xl backdrop-blur-xl select-none max-h-[85vh] flex flex-col transition-all duration-300"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xs font-bold text-white tracking-wider uppercase">
            Engineering X-Ray
          </h2>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
              viewMode === "normal"
                ? "bg-slate-800 text-slate-400 border-slate-700"
                : viewMode === "xray"
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 animate-pulse"
                : viewMode === "cutaway"
                ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                : "bg-purple-500/20 text-purple-300 border-purple-500/30"
            }`}
          >
            {viewMode}
          </span>
          <button
            type="button"
            onClick={() => setMinimized(!minimized)}
            className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title={minimized ? "Expand 3D view controls" : "Minimize controls"}
          >
            {minimized ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {!minimized && (
        <div className="overflow-y-auto pr-1 space-y-3 flex-1 text-xs">
          {/* Subtabs for clean organization */}
          <div className="grid grid-cols-3 gap-1 p-0.5 rounded-xl bg-slate-800/80 border border-white/5">
            <button
              type="button"
              onClick={() => setActiveTab("view")}
              className={`py-1 rounded-lg text-[10px] font-semibold transition-all ${
                activeTab === "view"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              View Mode
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("layers")}
              className={`py-1 rounded-lg text-[10px] font-semibold transition-all ${
                activeTab === "layers"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Layers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("systems")}
              className={`py-1 rounded-lg text-[10px] font-semibold transition-all ${
                activeTab === "systems"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              MEP Systems
            </button>
          </div>

          {/* TAB 1: VIEW MODE */}
          {activeTab === "view" && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-1.5">
                {VIEW_MODES.map((mode) => {
                  const active = viewMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setViewMode(mode.id)}
                      className={`flex flex-col items-start p-2 rounded-xl text-left border transition-all ${
                        active
                          ? "bg-emerald-600/30 border-emerald-400 text-white shadow-lg shadow-emerald-900/30"
                          : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[11px] mb-0.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            active ? "bg-emerald-400" : "bg-slate-600"
                          }`}
                        />
                        {mode.label}
                      </div>
                      <span className="text-[9px] text-slate-400 leading-tight">
                        {mode.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Cutaway Specific Controls */}
              {viewMode === "cutaway" && (
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-amber-400/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-amber-300">
                      Cutaway Section Depth
                    </span>
                    <span className="text-amber-400 font-mono font-bold">
                      {Math.round(cutawayProgress * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={cutawayProgress}
                    onChange={(e) =>
                      setCutawayProgress(parseFloat(e.target.value))
                    }
                    className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                  />
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Cutaway Plane:</span>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setCutawayAxis("z")}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          cutawayAxis === "z"
                            ? "bg-amber-500 text-white"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        Z-Axis (Length)
                      </button>
                      <button
                        type="button"
                        onClick={() => setCutawayAxis("x")}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          cutawayAxis === "x"
                            ? "bg-amber-500 text-white"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        X-Axis (Cross)
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Exploded View Controls */}
              {viewMode === "exploded" && (
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-purple-400/30 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-purple-300">
                      Explosion Separation Factor
                    </span>
                    <span className="text-purple-400 font-mono font-bold">
                      {Math.round(explodedProgress * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={explodedProgress}
                    onChange={(e) =>
                      setExplodedProgress(parseFloat(e.target.value))
                    }
                    className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                  />
                  <p className="text-[10px] text-slate-400">
                    Ceiling lifts upward (+Y), exterior walls separate (+X/-X), and
                    ductwork hovers for unobstructed internal inspection.
                  </p>
                </div>
              )}

              {/* PUF Panel Thickness Quick Toggle */}
              <div className="p-2 rounded-xl bg-slate-800/60 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-[11px] font-semibold text-slate-200">
                      PUF Panel Inspection
                    </div>
                    <div className="text-[9px] text-slate-400">
                      100mm/150mm Sandwich Layers
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPUFDetails(!showPUFDetails)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                    showPUFDetails
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {showPUFDetails ? "Active" : "Inspect"}
                </button>
              </div>

              {/* Equipment Isolate / Hide Controls if equipment selected */}
              {selectedEquipment && (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-300">
                      Selected: {selectedEquipment}
                    </span>
                    {isolatedEquipment === selectedEquipment && (
                      <span className="text-[9px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                        ISOLATED
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setIsolatedEquipment?.(
                          isolatedEquipment === selectedEquipment
                            ? null
                            : selectedEquipment
                        )
                      }
                      className={`py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
                        isolatedEquipment === selectedEquipment
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                      }`}
                    >
                      {isolatedEquipment === selectedEquipment
                        ? "Clear Isolate"
                        : "Isolate Equipment"}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleHideEquipment?.(selectedEquipment)}
                      className={`py-1 px-2 rounded-lg text-[10px] font-semibold transition-colors ${
                        hiddenEquipment?.has(selectedEquipment)
                          ? "bg-amber-600 text-white"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                      }`}
                    >
                      {hiddenEquipment?.has(selectedEquipment)
                        ? "Unhide Equipment"
                        : "Hide Equipment"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LAYERS ARCHITECTURE */}
          {activeTab === "layers" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Architectural Layers
                </span>
                <div className="flex gap-2 text-[10px]">
                  <button
                    type="button"
                    onClick={() => toggleAllLayers(true)}
                    className="text-emerald-400 hover:underline"
                  >
                    Select All
                  </button>
                  <span className="text-slate-600">|</span>
                  <button
                    type="button"
                    onClick={() => toggleAllLayers(false)}
                    className="text-slate-400 hover:text-white hover:underline"
                  >
                    Hide All
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                {layerConfig.map((layer) => (
                  <label
                    key={layer.key}
                    className="flex items-center justify-between p-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={layers[layer.key]}
                        onChange={(e) =>
                          setLayers((prev) => ({
                            ...prev,
                            [layer.key]: e.target.checked,
                          }))
                        }
                        className="w-3.5 h-3.5 rounded bg-slate-800 border-slate-700 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                      />
                      {layer.icon}
                      <span className="text-slate-200 text-[11px] font-medium">
                        {layer.label}
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-500">
                      {layers[layer.key] ? "Visible" : "Hidden"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DATA-DRIVEN MEP ENGINEERING SYSTEMS */}
          {activeTab === "systems" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Data-Driven Conduits
                </span>
                <div className="flex gap-2 text-[10px]">
                  <button
                    type="button"
                    onClick={() => toggleAllSystems(true)}
                    className="text-emerald-400 hover:underline"
                  >
                    All On
                  </button>
                  <span className="text-slate-600">|</span>
                  <button
                    type="button"
                    onClick={() => toggleAllSystems(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    All Off
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center justify-between p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors border border-sky-500/20">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibleSystems.air}
                      onChange={(e) =>
                        setVisibleSystems((prev) => ({
                          ...prev,
                          air: e.target.checked,
                        }))
                      }
                      className="w-3.5 h-3.5 rounded text-sky-500"
                    />
                    <Wind className="w-3.5 h-3.5 text-sky-400" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-200">
                        Air & Ventilation Loop
                      </div>
                      <div className="text-[9px] text-slate-400">
                        Galvanized Ducts, Jet Diffusers, Exhaust
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors border border-blue-500/20">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibleSystems.water}
                      onChange={(e) =>
                        setVisibleSystems((prev) => ({
                          ...prev,
                          water: e.target.checked,
                        }))
                      }
                      className="w-3.5 h-3.5 rounded text-blue-500"
                    />
                    <Droplets className="w-3.5 h-3.5 text-blue-400" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-200">
                        Water & Drainage Systems
                      </div>
                      <div className="text-[9px] text-slate-400">
                        RO Supply (70 Bar), Stainless Floor Trench
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors border border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibleSystems.electrical}
                      onChange={(e) =>
                        setVisibleSystems((prev) => ({
                          ...prev,
                          electrical: e.target.checked,
                        }))
                      }
                      className="w-3.5 h-3.5 rounded text-amber-500"
                    />
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-200">
                        Electrical Power Distribution
                      </div>
                      <div className="text-[9px] text-slate-400">
                        415V 3-Phase Tray, Equipment Inverters
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </label>

                <label className="flex items-center justify-between p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors border border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibleSystems.control}
                      onChange={(e) =>
                        setVisibleSystems((prev) => ({
                          ...prev,
                          control: e.target.checked,
                        }))
                      }
                      className="w-3.5 h-3.5 rounded text-purple-500"
                    />
                    <Activity className="w-3.5 h-3.5 text-purple-400" />
                    <div>
                      <div className="text-[11px] font-semibold text-slate-200">
                        SCADA & Sensor Telemetry Bus
                      </div>
                      <div className="text-[9px] text-slate-400">
                        RS-485 Modbus, 4-20mA Current Loops
                      </div>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
