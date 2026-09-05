"use client";

import React, { useState } from "react";
import type { FarmViewerState } from "./FarmViewerState";
import {
  Map,
  Ruler,
  Wind,
  Droplets,
  Zap,
  Eye,
  Layers,
  Scissors,
  ClipboardList,
  ArrowLeftRight,
  Bookmark,
  Share2,
  Check,
} from "lucide-react";

type Props = {
  state: FarmViewerState;
  onSave?: () => void;
  onShare?: () => Promise<string | void>;
  className?: string;
};

export default function FarmControlToolbar({ state, onSave, onShare, className = "" }: Props) {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [sharedSuccess, setSharedSuccess] = useState(false);

  const handleSave = () => {
    onSave?.();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleShare = async () => {
    if (onShare) {
      await onShare();
      setSharedSuccess(true);
      setTimeout(() => setSharedSuccess(false), 2000);
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl text-slate-200 text-xs font-medium z-40 max-w-full overflow-x-auto ${className}`}
    >
      {/* 2D Floor Plan */}
      <button
        type="button"
        onClick={() => state.setShowFloorPlan(!state.showFloorPlan)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.showFloorPlan
            ? "bg-emerald-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Toggle between 3D Spatial View and 2D Architectural Floor Plan"
      >
        <Map className="w-3.5 h-3.5" />
        <span>{state.showFloorPlan ? "3D View" : "2D Plan"}</span>
      </button>

      {/* Measurement Mode */}
      <button
        type="button"
        onClick={() => state.setMeasurementMode(!state.measurementMode)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.measurementMode
            ? "bg-amber-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Laser Measurement Tool: click any two 3D points to measure clearance & span"
      >
        <Ruler className="w-3.5 h-3.5" />
        <span>Measure</span>
      </button>

      <div className="w-[1px] h-4 bg-white/15 my-auto" />

      {/* Airflow Simulation */}
      <button
        type="button"
        onClick={() => state.setAirflowEnabled(!state.airflowEnabled)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.airflowEnabled
            ? "bg-sky-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Simulate Airflow & HVAC circulation particles"
      >
        <Wind className="w-3.5 h-3.5" />
        <span>Airflow</span>
      </button>

      {/* Water & Fogger System */}
      <button
        type="button"
        onClick={() => state.setWaterEnabled(!state.waterEnabled)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.waterEnabled
            ? "bg-cyan-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Toggle Water Supply, High-Pressure Fogging & Drainage network"
      >
        <Droplets className="w-3.5 h-3.5" />
        <span>Water</span>
      </button>

      {/* Electrical System */}
      <button
        type="button"
        onClick={() => state.setElectricalEnabled(!state.electricalEnabled)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.electricalEnabled
            ? "bg-yellow-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Toggle Electrical Conduits, Automation PLC & Rack Grow Lights"
      >
        <Zap className="w-3.5 h-3.5" />
        <span>Electrical</span>
      </button>

      <div className="w-[1px] h-4 bg-white/15 my-auto" />

      {/* X-Ray Mode */}
      <button
        type="button"
        onClick={() => state.setShowXRay(!state.showXRay)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.showXRay
            ? "bg-indigo-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Toggle Transparent X-Ray Envelope"
      >
        <Eye className="w-3.5 h-3.5" />
        <span>X-Ray</span>
      </button>

      {/* Exploded View */}
      <button
        type="button"
        onClick={() => state.setShowExploded(!state.showExploded)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.showExploded
            ? "bg-rose-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Exploded Assembly View of Panels, Racks & Equipment"
      >
        <Layers className="w-3.5 h-3.5" />
        <span>Exploded</span>
      </button>

      {/* Section Cut */}
      <button
        type="button"
        onClick={() => state.setShowSectionCut(!state.showSectionCut)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          state.showSectionCut
            ? "bg-purple-600 text-white shadow-sm font-semibold"
            : "hover:bg-slate-800 text-slate-300 hover:text-white"
        }`}
        title="Cross-Section Cut of Building Envelope"
      >
        <Scissors className="w-3.5 h-3.5" />
        <span>Section</span>
      </button>

      <div className="w-[1px] h-4 bg-white/15 my-auto" />

      {/* Commercial BOQ */}
      <button
        type="button"
        onClick={() => state.setShowBOQ(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
        title="Open Bill of Quantities (BOQ)"
      >
        <ClipboardList className="w-3.5 h-3.5 text-emerald-400" />
        <span>BOQ</span>
      </button>

      {/* Compare Designs */}
      <button
        type="button"
        onClick={() => state.setShowCompare(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
        title="Compare Current Design with Industry Benchmark Presets"
      >
        <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-400" />
        <span>Compare</span>
      </button>

      {/* Save Button */}
      {onSave && (
        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
          title="Save farm configuration to browser storage"
        >
          {savedSuccess ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
          )}
          <span>{savedSuccess ? "Saved" : "Save"}</span>
        </button>
      )}

      {/* Share Button */}
      {onShare && (
        <button
          type="button"
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all"
          title="Copy link to clipboard"
        >
          {sharedSuccess ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Share2 className="w-3.5 h-3.5 text-sky-400" />
          )}
          <span>{sharedSuccess ? "Copied!" : "Share"}</span>
        </button>
      )}
    </div>
  );
}
