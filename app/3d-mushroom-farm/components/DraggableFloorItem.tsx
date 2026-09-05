"use client";

import React, { useRef, useState } from "react";
import type { LayoutItem } from "./LayoutTypes";
import { RotateCw, GripHorizontal } from "lucide-react";

type Props = {
  item: LayoutItem;
  scale: number;
  onMove: (id: string, x: number, z: number) => void;
  onRotate?: (id: string) => void;
};

const ITEM_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  room: {
    bg: "rgba(16, 185, 129, 0.18)",
    border: "#059669",
    text: "#065f46",
    badge: "Room",
  },
  coldStorage: {
    bg: "rgba(14, 165, 233, 0.22)",
    border: "#0284c7",
    text: "#0369a1",
    badge: "Cold Room",
  },
  rack: {
    bg: "rgba(245, 158, 11, 0.28)",
    border: "#d97706",
    text: "#92400e",
    badge: "Rack Tier",
  },
  hvac: {
    bg: "rgba(99, 102, 241, 0.28)",
    border: "#6366f1",
    text: "#3730a3",
    badge: "HVAC Unit",
  },
  fogger: {
    bg: "rgba(20, 184, 166, 0.28)",
    border: "#0d9488",
    text: "#115e59",
    badge: "Fogger",
  },
  controlPanel: {
    bg: "rgba(239, 68, 68, 0.22)",
    border: "#dc2626",
    text: "#991b1b",
    badge: "PLC / SCADA",
  },
};

export default function DraggableFloorItem({
  item,
  scale,
  onMove,
  onRotate,
}: Props) {
  const dragging = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef<{ x: number; z: number }>({ x: 0, z: 0 });

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    // Only drag on primary mouse button
    if (event.button !== 0) return;
    event.preventDefault();

    const parent = event.currentTarget.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const clickX = (event.clientX - rect.left) / scale;
    const clickZ = (event.clientY - rect.top) / scale;

    dragOffset.current = {
      x: clickX - item.x,
      z: clickZ - item.z,
    };

    dragging.current = true;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    const parent = event.currentTarget.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const pointerX = (event.clientX - rect.left) / scale;
    const pointerZ = (event.clientY - rect.top) / scale;

    const targetX = pointerX - dragOffset.current.x;
    const targetZ = pointerZ - dragOffset.current.z;

    onMove(item.id, targetX, targetZ);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignored if pointer was already released
    }
  };

  const style = ITEM_COLORS[item.type] || {
    bg: "rgba(180, 180, 180, 0.75)",
    border: "#333333",
    text: "#111111",
    badge: "Equipment",
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        position: "absolute",
        left: item.x * scale,
        top: item.z * scale,
        width: item.width * scale,
        height: item.depth * scale,
        border: `2px solid ${style.border}`,
        backgroundColor: style.bg,
        color: style.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 4,
        borderRadius: 6,
        overflow: "hidden",
        transform: `rotate(${item.rotation}deg)`,
        transformOrigin: "center",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
        userSelect: "none",
        zIndex: isDragging ? 30 : 10,
        boxShadow: isDragging
          ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
          : "0 2px 5px rgba(0,0,0,0.06)",
        transition: isDragging
          ? "box-shadow 0.1s ease"
          : "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={isDragging ? "ring-2 ring-indigo-500 ring-offset-1" : ""}
    >
      {/* Header: Label, Drag grip & Coordinates */}
      <div className="w-full flex items-center justify-between text-[10px] leading-tight">
        <div className="flex items-center gap-1 truncate">
          <GripHorizontal className="w-3 h-3 opacity-60 flex-shrink-0" />
          <strong className="truncate font-semibold tracking-tight">{item.label}</strong>
        </div>
        <span className="text-[8.5px] font-mono opacity-70 ml-1 flex-shrink-0">
          [{item.x.toFixed(1)}, {item.z.toFixed(1)}]
        </span>
      </div>

      {/* Center: Dimensions & Snapping indicator */}
      <div className="text-[9px] font-mono text-slate-700 opacity-90 font-medium">
        {item.width}m × {item.depth}m
      </div>

      {/* Footer Controls: Nudge + Rotate */}
      <div
        className="w-full flex items-center justify-between gap-1 pt-1 border-t border-slate-900/10"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Directional Nudge Buttons */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMove(item.id, item.x - 0.5, item.z);
            }}
            className="w-4 h-4 rounded bg-white/90 hover:bg-white text-slate-800 border border-slate-300 flex items-center justify-center text-[10px] font-bold shadow-xs active:scale-95"
            title="Move West (-0.5m)"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMove(item.id, item.x, item.z - 0.5);
            }}
            className="w-4 h-4 rounded bg-white/90 hover:bg-white text-slate-800 border border-slate-300 flex items-center justify-center text-[10px] font-bold shadow-xs active:scale-95"
            title="Move North (-0.5m)"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMove(item.id, item.x, item.z + 0.5);
            }}
            className="w-4 h-4 rounded bg-white/90 hover:bg-white text-slate-800 border border-slate-300 flex items-center justify-center text-[10px] font-bold shadow-xs active:scale-95"
            title="Move South (+0.5m)"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMove(item.id, item.x + 0.5, item.z);
            }}
            className="w-4 h-4 rounded bg-white/90 hover:bg-white text-slate-800 border border-slate-300 flex items-center justify-center text-[10px] font-bold shadow-xs active:scale-95"
            title="Move East (+0.5m)"
          >
            →
          </button>
        </div>

        {/* Rotate Button */}
        {onRotate && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRotate(item.id);
            }}
            className="px-1 py-0.5 rounded bg-white/90 hover:bg-white text-slate-800 border border-slate-300 flex items-center gap-0.5 text-[9px] font-semibold shadow-xs active:scale-95"
            title="Rotate 90 degrees"
          >
            <RotateCw className="w-2.5 h-2.5" />
            <span>{item.rotation}°</span>
          </button>
        )}
      </div>
    </div>
  );
}
