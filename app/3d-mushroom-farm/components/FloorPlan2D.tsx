"use client";

import React from "react";
import type { FarmLayout, LayoutItem } from "./LayoutTypes";
import DraggableFloorItem from "./DraggableFloorItem";
import { getValidPosition } from "./LayoutEngine";
import { X, RotateCw, Move, Check, Sparkles, ShieldCheck } from "lucide-react";

type Props = {
  layout: FarmLayout;
  setLayout: React.Dispatch<React.SetStateAction<FarmLayout>>;
  farmLength: number;
  farmWidth: number;
  onClose?: () => void;
};

const ITEM_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  room: {
    bg: "rgba(16, 185, 129, 0.15)",
    border: "#059669",
    text: "#065f46",
    badge: "Room",
  },
  coldStorage: {
    bg: "rgba(14, 165, 233, 0.2)",
    border: "#0284c7",
    text: "#0369a1",
    badge: "Cold Room",
  },
  rack: {
    bg: "rgba(245, 158, 11, 0.25)",
    border: "#d97706",
    text: "#92400e",
    badge: "Rack Tier",
  },
  hvac: {
    bg: "rgba(99, 102, 241, 0.25)",
    border: "#6366f1",
    text: "#3730a3",
    badge: "HVAC Unit",
  },
  fogger: {
    bg: "rgba(20, 184, 166, 0.25)",
    border: "#0d9488",
    text: "#115e59",
    badge: "Fogger",
  },
  controlPanel: {
    bg: "rgba(239, 68, 68, 0.2)",
    border: "#dc2626",
    text: "#991b1b",
    badge: "PLC / SCADA",
  },
};

export default function FloorPlan2D({
  layout,
  setLayout,
  farmLength,
  farmWidth,
  onClose,
}: Props) {
  const scale = 22; // Pixels per meter

  const moveItem = (id: string, x: number, z: number) => {
    setLayout((current) => {
      const item = current.items.find((entry) => entry.id === id);
      if (!item) return current;

      const result = getValidPosition(
        item,
        x,
        z,
        current.items,
        farmLength,
        farmWidth
      );

      if (!result.valid) {
        return current;
      }

      return {
        items: current.items.map((entry) =>
          entry.id === id
            ? {
                ...entry,
                x: result.x,
                z: result.z,
              }
            : entry
        ),
      };
    });
  };

  const rotateItem = (id: string) => {
    setLayout((current) => ({
      items: current.items.map((existing) =>
        existing.id === id
          ? {
              ...existing,
              rotation: (existing.rotation + 90) % 360,
            }
          : existing
      ),
    }));
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 60,
        background: "rgba(248, 250, 252, 0.98)",
        padding: 24,
        overflow: "auto",
        backdropFilter: "blur(8px)",
      }}
      className="flex flex-col select-none"
    >
      {/* Top Navigation / Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
              <span>🗺️</span> 2D Farm Floor Plan &bull; Drag &amp; Drop Configurator
            </h2>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Real-Time 3D Synced
            </span>
            <span className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              Smart 0.5m Snap &bull; Anti-Collision Active
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 m-0">
            Facility Boundary: <strong className="text-slate-800">{farmLength} m</strong> (Length) × <strong className="text-slate-800">{farmWidth} m</strong> (Width) &bull; Grid: 0.5 m Snapping &bull; Drag equipment directly to reposition
          </p>
        </div>

        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <Move className="w-3.5 h-3.5 text-indigo-500" />
            <span>Drag items with mouse/touch or use micro-nudge arrows</span>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
            >
              <X className="w-4 h-4" />
              <span>Back to 3D View</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Floor Plan Surface */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-slate-100/60 rounded-2xl border border-slate-200 shadow-inner overflow-auto min-h-[460px]">
        {/* Dimension Scale Bar */}
        <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center gap-4">
          <span>0m (West / Front)</span>
          <span className="text-slate-400">───────────────────────────────►</span>
          <span>{farmLength}m (East / Rear)</span>
        </div>

        {/* 2D Canvas Container */}
        <div
          style={{
            position: "relative",
            width: farmLength * scale,
            height: farmWidth * scale,
            minWidth: 320,
            minHeight: 240,
            border: "2px solid #334155",
            borderRadius: 8,
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            backgroundImage: `
              repeating-linear-gradient(0deg, #e2e8f0 0, #e2e8f0 1px, transparent 1px, transparent ${scale}px),
              repeating-linear-gradient(90deg, #e2e8f0 0, #e2e8f0 1px, transparent 1px, transparent ${scale}px)
            `,
          }}
        >
          {/* Compass / Orientation Indicator */}
          <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 border border-slate-300 rounded text-[9.5px] font-mono font-bold text-slate-600 shadow-xs pointer-events-none">
            N ↑
          </div>

          {/* Render draggable layout items with snap & collision detection */}
          {layout.items.map((item) => (
            <DraggableFloorItem
              key={item.id}
              item={item}
              scale={scale}
              onMove={moveItem}
              onRotate={rotateItem}
            />
          ))}
        </div>

        {/* Bottom Legend */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
          {Object.entries(ITEM_COLORS).map(([key, style]) => (
            <div key={key} className="flex items-center gap-1.5 font-medium text-slate-700">
              <span
                className="w-3.5 h-3.5 rounded border"
                style={{ backgroundColor: style.bg, borderColor: style.border }}
              />
              <span>{style.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
