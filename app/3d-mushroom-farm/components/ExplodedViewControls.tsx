"use client";

import React, { useState } from "react";
import { Layers, ChevronDown, ChevronUp, Sparkles, Sliders } from "lucide-react";

type Props = {
  enabled: boolean;
  amount: number;
  setEnabled: (value: boolean) => void;
  setAmount: (value: number) => void;
};

export default function ExplodedViewControls({
  enabled,
  amount,
  setEnabled,
  setAmount,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const presets = [
    { label: "Subtle", value: 1.5 },
    { label: "Standard", value: 3.0 },
    { label: "Wide", value: 6.0 },
    { label: "Max", value: 10.0 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        top: 190,
        zIndex: 55,
        width: 280,
        padding: 16,
        borderRadius: 14,
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 10px 35px rgba(0,0,0,0.18)",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
      className="backdrop-blur-md border border-slate-200 select-none transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-600" />
          <h3
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Exploded View
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          color: enabled ? "#047857" : "#334155",
        }}
      >
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
        />
        Explode Components
      </label>

      {!collapsed && (
        <div style={{ marginTop: 14 }} className="space-y-3">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                color: "#475569",
                marginBottom: 6,
              }}
            >
              <span>Explosion Amount</span>
              <strong style={{ color: "#0f172a", fontFamily: "monospace" }}>
                {amount.toFixed(1)}
              </strong>
            </div>

            <input
              type="range"
              min={0}
              max={10}
              step={0.1}
              value={amount}
              disabled={!enabled}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "#059669",
                cursor: enabled ? "pointer" : "not-allowed",
                opacity: enabled ? 1 : 0.45,
              }}
            />
          </div>

          {/* Preset Quick Buttons */}
          <div className="grid grid-cols-4 gap-1 pt-1">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                disabled={!enabled}
                onClick={() => setAmount(preset.value)}
                className={`py-1 text-[11px] font-semibold rounded-md border transition-all ${
                  enabled && Math.abs(amount - preset.value) < 0.2
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                } ${!enabled ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Separated Layer Indicators */}
          {enabled && (
            <div className="mt-2.5 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-[10px] text-emerald-900 space-y-1">
              <div className="font-semibold flex items-center gap-1 text-emerald-800">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Active Component Offsets:
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[9.5px] text-slate-600 font-mono">
                <span>&bull; Building: -0.15 Z</span>
                <span>&bull; Racks: +0.35 Y</span>
                <span>&bull; HVAC: +0.8X / +0.2Y</span>
                <span>&bull; Air: -0.8X / +0.2Y</span>
                <span>&bull; Water: +0.15Y / +0.8Z</span>
                <span>&bull; Control: +1.2 X</span>
                <span>&bull; Cold: +0.4Y / -0.8Z</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
