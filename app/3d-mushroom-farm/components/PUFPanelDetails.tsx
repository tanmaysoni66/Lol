"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { ShieldCheck, Flame, Layers, ThermometerSnowflake } from "lucide-react";

type PUFPanelDetailsProps = {
  visible: boolean;
  xray: boolean;
  explodedOffset?: [number, number, number];
};

export default function PUFPanelDetails({
  visible,
  xray,
  explodedOffset = [0, 0, 0],
}: PUFPanelDetailsProps) {
  const [showSpecCard, setShowSpecCard] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"standard" | "coldStorage">("standard");

  if (!visible) return null;

  // Cross section position on the wall edge
  const position: [number, number, number] = [
    -11 + explodedOffset[0],
    2.5 + explodedOffset[1],
    -1 + explodedOffset[2],
  ];

  return (
    <group position={position}>
      {/* 3D Cutaway Slice of PUF Panel: 3 layers */}
      {/* Outer PPGI Sheet (0.5mm representation) */}
      <mesh position={[-0.07, 0, 0]}>
        <boxGeometry args={[0.02, 2.2, 1.8]} />
        <meshStandardMaterial
          color="#f1f5f9"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 100mm/150mm PUF/PIR Insulation Core (Yellow-tinted high density rigid foam) */}
      <mesh
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          setShowSpecCard(!showSpecCard);
        }}
      >
        <boxGeometry args={[0.12, 2.2, 1.8]} />
        <meshStandardMaterial
          color={activeTab === "coldStorage" ? "#93c5fd" : "#fef08a"}
          roughness={0.85}
          metalness={0.05}
          wireframe={xray}
        />
      </mesh>

      {/* Inner Food-grade PPGI Sheet */}
      <mesh position={[0.07, 0, 0]}>
        <boxGeometry args={[0.02, 2.2, 1.8]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* Cam-Lock Joint Visualization */}
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[0.13, 0.08, 1.8]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Interactive 3D Callout Beacon */}
      <Html position={[0.3, 0.5, 0]} center distanceFactor={14}>
        <div className="select-none pointer-events-auto">
          <button
            type="button"
            onClick={() => setShowSpecCard(!showSpecCard)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white text-[11px] font-semibold shadow-lg border border-blue-300 backdrop-blur-md transition-transform hover:scale-105"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PUF Panel Spec: {activeTab === "coldStorage" ? "150mm PIR" : "100mm PUF"}</span>
          </button>

          {showSpecCard && (
            <div
              className="mt-2 w-72 p-3.5 rounded-2xl bg-slate-900/95 text-white border border-blue-400 shadow-2xl backdrop-blur-xl text-left"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-bold text-white tracking-tight">
                    Insulation Layer Architecture
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSpecCard(false)}
                  className="text-xs text-slate-400 hover:text-white px-1"
                >
                  ✕
                </button>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-2 gap-1 p-0.5 rounded-lg bg-slate-800/80 mb-2.5 text-[10px] font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("standard")}
                  className={`py-1 rounded-md transition-colors ${
                    activeTab === "standard"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Growing Room (100mm)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("coldStorage")}
                  className={`py-1 rounded-md transition-colors ${
                    activeTab === "coldStorage"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Cold Storage (150mm)
                </button>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300 mb-3">
                <div className="p-2 rounded-lg bg-slate-800/60 border border-white/5 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Core Material:</span>
                    <strong className="text-slate-200">
                      {activeTab === "coldStorage"
                        ? "PIR (Polyisocyanurate Foam)"
                        : "PUF (Rigid Polyurethane)"}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Foam Density:</span>
                    <span className="text-slate-200 font-mono">40 ± 2 kg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Thermal Conductivity (λ):</span>
                    <span className="text-slate-200 font-mono">0.022 W/m·K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">U-Value:</span>
                    <span className="text-cyan-400 font-mono font-semibold">
                      {activeTab === "coldStorage" ? "0.14 W/m²·K" : "0.21 W/m²·K"}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>0.5mm PPGI Pre-Painted Galvanized Steel Skin</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>B1 / B2 Fire Retardant Self-Extinguishing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ThermometerSnowflake className="w-3 h-3 text-cyan-400" />
                    <span>Cam-Lock Tongue & Groove Thermal Break Joint</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 italic bg-blue-950/40 p-1.5 rounded-lg border border-blue-800/30">
                {activeTab === "coldStorage"
                  ? "Cold room features sub-slab XPS thermal break to prevent frost heave."
                  : "Food-grade antibacterial inner coating prevents mold and spore retention."}
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}
