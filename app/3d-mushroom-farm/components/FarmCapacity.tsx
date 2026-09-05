"use client";

import React, { useState } from "react";
import { Warehouse, ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  rooms: number;
  racksPerRoom: number;
  rackLevels: number;
};

export default function FarmCapacity({
  rooms,
  racksPerRoom,
  rackLevels,
}: Props) {
  const [minimized, setMinimized] = useState<boolean>(false);

  const totalRackLevels = rooms * racksPerRoom * rackLevels;
  const estimatedGrowingPositions = totalRackLevels * 20;

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        top: 20,
        zIndex: 35,
        width: 250,
        maxWidth: "calc(100vw - 40px)",
        padding: 16,
        borderRadius: 14,
        background: "rgba(255,255,255,0.96)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        fontFamily: "var(--font-inter), Arial, sans-serif",
      }}
      className="text-slate-900 border border-slate-200/80 backdrop-blur-xl animate-in fade-in"
    >
      <div className="flex items-center justify-between mb-2">
        <strong className="text-slate-900 text-sm font-bold flex items-center gap-1.5">
          <Warehouse className="w-4 h-4 text-emerald-600" />
          <span>Farm Capacity</span>
        </strong>
        <button
          type="button"
          onClick={() => setMinimized(!minimized)}
          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 transition-colors"
          title={minimized ? "Expand capacity" : "Minimize capacity"}
        >
          {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {!minimized && (
        <>
          <div className="space-y-1 my-2">
            <div className="flex justify-between text-xs text-slate-600">
              <span>Growing Rooms:</span>
              <strong className="text-slate-800">{rooms}</strong>
            </div>

            <div className="flex justify-between text-xs text-slate-600">
              <span>Racks / Room:</span>
              <strong className="text-slate-800">{racksPerRoom}</strong>
            </div>

            <div className="flex justify-between text-xs text-slate-600">
              <span>Rack Levels:</span>
              <strong className="text-slate-800">{rackLevels}</strong>
            </div>
          </div>

          <div className="my-2 border-t border-slate-200 pt-2 flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-700">Total Rack Levels:</span>
            <strong className="text-sm font-bold text-emerald-700">{totalRackLevels}</strong>
          </div>

          <div className="mt-2 p-2 rounded-lg bg-emerald-50 border border-emerald-100">
            <div className="text-[11px] font-medium text-emerald-900">
              Est. Positions: <strong className="font-bold text-emerald-700">{estimatedGrowingPositions.toLocaleString()}</strong>
            </div>
            <p
              style={{
                fontSize: 10,
                lineHeight: 1.4,
                opacity: 0.8,
              }}
              className="text-emerald-800 mt-1"
            >
              Planning value: ~20 bags/trays per level based on standard spacing.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
