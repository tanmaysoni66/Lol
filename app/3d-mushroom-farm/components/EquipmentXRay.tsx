"use client";

import React from "react";
import { Html } from "@react-three/drei";
import type { EquipmentType } from "./Equipment";

type EquipmentXRayProps = {
  equipment: EquipmentType | null;
  enabled: boolean;
  onClose: () => void;
  position?: [number, number, number];
};

const equipmentInternals: Record<
  EquipmentType,
  {
    components: string[];
    circuit: string;
    flowDirection: string;
  }
> = {
  HVAC: {
    components: ["Evaporator Coil", "Variable Compressor", "Centrifugal Blower", "Expansion Valve"],
    circuit: "Direct Expansion (DX) Chilled Loop",
    flowDirection: "Return Air In -> Filtration -> Cooling Coil -> Supply Air Duct",
  },
  Fogger: {
    components: ["Ceramic Ultrasonic Transducers", "Water Solenoid", "High-Pressure Booster Pump", "Mist Manifold"],
    circuit: "Reverse Osmosis Purified Line (70 Bar)",
    flowDirection: "RO Water -> Booster -> 6-Micron Micro Nozzles",
  },
  "Humidity Sensor": {
    components: ["Capacitive Polymer Sensor", "Signal Conditioning ASIC", "Sintered Bronze Mesh Shield"],
    circuit: "4-20 mA Loop-Powered Interface",
    flowDirection: "Ambient Diffusion Sensing",
  },
  "Temperature Sensor": {
    components: ["Pt100 Platinum RTD Element", "Ceramic Core Insulator", "Stainless Steel Probe"],
    circuit: "3-Wire RTD Bridge to PLC",
    flowDirection: "Substrate Core & Canopy Thermal Sampling",
  },
  "CO₂ Sensor": {
    components: ["NDIR Gold-Plated Optical Chamber", "Dual Wavelength Infrared Emitter", "Pyroelectric Detector"],
    circuit: "Modbus RS-485 Serial Network",
    flowDirection: "Diffusion Intake with Particle Membrane",
  },
  "Exhaust Fan": {
    components: ["EC Brushless Motor", "Aerodynamic Backward-Curved Impeller", "Airtight Gravity Louver"],
    circuit: "0-10V Analog Speed Controller",
    flowDirection: "Canopy Extraction -> Gravity Damper -> Outdoor Discharge",
  },
  "Fresh Air Fan": {
    components: ["High-Static Inline Blower", "Motorized Mixing Damper Actuator", "Spore Pre-filter"],
    circuit: "Proportional Damper Control System",
    flowDirection: "Atmospheric Air -> Pre-filter -> Mixing Plenum",
  },
  "Air Filter": {
    components: ["Pleated Micro-Glass Fiber", "Extruded Aluminum Frame", "Hot-Melt Separators", "Neoprene Gasket"],
    circuit: "Differential Pressure (dP) Monitor",
    flowDirection: "Raw Inflow -> Interception -> Impaction -> Ultra-clean Discharge",
  },
  Rack: {
    components: ["Structural Uprights", "Aluminum Substrate Trays", "Perforated Drainage Bottom", "Harvest Trolley Rails"],
    circuit: "Earth Grounded Metallic Framework",
    flowDirection: "Vertical 4-Tier Compost Bedding & Watering Gravity Run",
  },
  "Control Panel": {
    components: ["Industrial Micro-PLC", "24V DC Switched-Mode Power Supply", "SSR Relay Banks", "7\" HMI Touch Screen"],
    circuit: "Central SCADA / Modbus Automation Hub",
    flowDirection: "Sensor Inputs In -> PID Control Logic -> Actuator Commands Out",
  },
  "Water Line": {
    components: ["Stainless Steel Solenoid Valve", "Pressure Regulator", "Manual Isolation Ball Valve", "Sediment Strainer"],
    circuit: "Pressurized Domestic/RO Supply Line",
    flowDirection: "Supply Header -> Solenoid Gate -> Fogger / Drip Risers",
  },
  Drainage: {
    components: ["SS304 Sloped U-Trench", "Water-Seal Trap", "Stainless Removable Debris Basket"],
    circuit: "Gravity Effluent Run to Sump",
    flowDirection: "Chamber Floor Washdown -> Sump Pit -> Neutralization",
  },
};

export default function EquipmentXRay({
  equipment,
  enabled,
  onClose,
  position = [0, 2, 0],
}: EquipmentXRayProps) {
  if (!enabled || !equipment) {
    return null;
  }

  const details = equipmentInternals[equipment] || {
    components: ["Main Core", "Circuit Module", "Interface Port"],
    circuit: "Standard Power Line",
    flowDirection: "Internal Flow Loop",
  };

  return (
    <group position={position}>
      {/* 3D Wireframe Inspection Cage */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.6, 3.4, 2.6]} />
        <meshStandardMaterial
          color="#00aaff"
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>

      {/* Internal Axis / Core Glow Target */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#00ffff" wireframe />
      </mesh>

      {/* Floating Interactive 3D X-Ray Inspection Card */}
      <Html position={[0, 2.5, 0]} center distanceFactor={14}>
        <div
          style={{
            width: 320,
            padding: 18,
            borderRadius: 16,
            background: "rgba(15, 23, 42, 0.96)",
            color: "#ffffff",
            boxShadow: "0 12px 40px rgba(0, 170, 255, 0.25)",
            border: "1px solid rgba(0, 170, 255, 0.4)",
            fontFamily: "var(--font-inter), Arial, sans-serif",
          }}
          className="backdrop-blur-xl animate-in fade-in zoom-in-95 pointer-events-auto select-none"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <strong className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                🔬 Internal X-Ray View
              </strong>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-xs px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
            >
              ✕
            </button>
          </div>

          <h3 className="text-base font-bold text-white mb-1">{equipment}</h3>

          <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
            {details.flowDirection}
          </p>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 mb-3 text-xs">
            <p className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider mb-1.5">
              Internal Component Breakdown
            </p>
            <ul className="space-y-1 text-slate-300">
              {details.components.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2 mb-3">
            <span>Circuit Type:</span>
            <span className="text-slate-200 font-medium">{details.circuit}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-600/30"
          >
            Close Inspection View
          </button>
        </div>
      </Html>
    </group>
  );
}
