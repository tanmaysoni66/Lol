"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export type ConnectionSystem = "air" | "water" | "electrical" | "control";

export type SystemConnection = {
  id: string;
  name: string;
  from: string;
  to: string;
  system: ConnectionSystem;
  fromPos: [number, number, number];
  toPos: [number, number, number];
  waypoints?: [number, number, number][];
  specs: string;
  flowRate?: string;
  status: "active" | "standby" | "alert";
};

// Data-driven engineering connections catalog for commercial mushroom farm
export const systemConnections: SystemConnection[] = [
  // --- AIR SYSTEM ---
  {
    id: "fresh-air-to-filter",
    name: "Fresh Air Intake Duct",
    from: "Fresh Air Fan",
    to: "Air Filter",
    system: "air",
    fromPos: [-4, 4, 0],
    toPos: [-3, 4, 2],
    waypoints: [[-4, 4.3, 1], [-3, 4.3, 1.5]],
    specs: "Ø 350mm Spiral Galvanized Duct (Insulated), 1,200 CFM",
    flowRate: "1,200 CFM @ 250 Pa",
    status: "active",
  },
  {
    id: "filter-to-hvac",
    name: "Treated Air Supply Header",
    from: "Air Filter",
    to: "HVAC",
    system: "air",
    fromPos: [-3, 4, 2],
    toPos: [0, 5, 2],
    waypoints: [[-1.5, 4.6, 2]],
    specs: "HEPA F9 Filtered Air Run to DX Cooling Coils",
    flowRate: "1,800 CFM Mixed Inflow",
    status: "active",
  },
  {
    id: "hvac-to-grow1",
    name: "Supply Air Main Duct (Growing Room 1)",
    from: "HVAC",
    to: "Growing Room 1 Canopy",
    system: "air",
    fromPos: [0, 5, 2],
    toPos: [0, 3.8, 1],
    waypoints: [[0, 4.4, 1.5], [0, 4.0, 1]],
    specs: "Polyurethane Fabric Jet Duct with 45° Micro-nozzles",
    flowRate: "1,450 CFM Uniform Diffusion",
    status: "active",
  },
  {
    id: "hvac-to-grow2",
    name: "Supply Air Distribution (Growing Room 2)",
    from: "HVAC",
    to: "Growing Room 2 Canopy",
    system: "air",
    fromPos: [0, 5, 2],
    toPos: [7, 3.8, 1],
    waypoints: [[3.5, 4.8, 2], [7, 4.5, 1.8]],
    specs: "Overhead Distribution Header, 200mm Drop Connections",
    flowRate: "1,200 CFM Static Pressure Regulated",
    status: "active",
  },
  {
    id: "exhaust-return",
    name: "CO₂ Low-Level Extraction Run",
    from: "Growing Room Floor",
    to: "Exhaust Fan",
    system: "air",
    fromPos: [1, 0.8, 1],
    toPos: [4, 4, 0],
    waypoints: [[2.5, 1.2, 0.5], [3.8, 2.5, 0.2]],
    specs: "Heavy CO₂ Evacuation Plenum with Motorized Backdraft Damper",
    flowRate: "850 CFM Negative Gradient",
    status: "active",
  },

  // --- WATER SYSTEM ---
  {
    id: "water-main-to-booster",
    name: "RO Purified Feed Line",
    from: "Water Main Header",
    to: "Booster Pump",
    system: "water",
    fromPos: [-8, 0.5, 5.5],
    toPos: [-2, 2, 2],
    waypoints: [[-5, 0.5, 4], [-2, 1.0, 2]],
    specs: "1.0\" Food-Grade Schedule 40 CPVC with Sediment Pre-filter",
    flowRate: "18.5 LPM @ 3.5 Bar",
    status: "active",
  },
  {
    id: "booster-to-fogger",
    name: "High-Pressure Atomization Line",
    from: "Booster Pump",
    to: "Fogger",
    system: "water",
    fromPos: [-2, 2, 2],
    toPos: [-1.5, 4.5, 2],
    waypoints: [[-2, 3.5, 2], [-1.8, 4.2, 2]],
    specs: "3/8\" High-Pressure Braided SS316 Tubing (Rated 120 Bar)",
    flowRate: "4.2 LPM @ 70 Bar",
    status: "active",
  },
  {
    id: "fogger-to-manifold",
    name: "Ultrasonic Mist Distribution Loop",
    from: "Fogger",
    to: "Growing Racks Humidification",
    system: "water",
    fromPos: [-1.5, 4.5, 2],
    toPos: [0, 2.8, 2],
    waypoints: [[-0.5, 3.6, 2]],
    specs: "Overhead Stainless Manifold with Anti-Drip Check Valves",
    flowRate: "6-Micron Aerosol Mist",
    status: "active",
  },
  {
    id: "drainage-main",
    name: "Floor Washdown & Condensate Trench",
    from: "Chamber Trench Drain",
    to: "Effluent Collection Sump",
    system: "water",
    fromPos: [0, 0.1, 3],
    toPos: [6, 0.1, 5.5],
    waypoints: [[3, 0.08, 4.5]],
    specs: "SS304 Sloped U-Trench with Removable Grating & Water Trap",
    flowRate: "Gravity Drainage (1:100 Slope)",
    status: "active",
  },

  // --- ELECTRICAL SYSTEM ---
  {
    id: "main-db-to-control",
    name: "Main 3-Phase Power Feed",
    from: "Main Distribution Board",
    to: "Control Panel",
    system: "electrical",
    fromPos: [8, 1.5, -4.5],
    toPos: [3, 1.2, 2],
    waypoints: [[6, 3.8, -2], [3, 3.8, 0], [3, 2.2, 2]],
    specs: "4-Core 25 sq.mm XLPE Armoured Copper Cable in Perforated Cable Tray",
    flowRate: "415V AC, 3-Phase, 63A",
    status: "active",
  },
  {
    id: "control-to-hvac",
    name: "HVAC Compressor 3-Phase Power",
    from: "Control Panel",
    to: "HVAC",
    system: "electrical",
    fromPos: [3, 1.2, 2],
    toPos: [0, 5, 2],
    waypoints: [[3, 3.8, 2], [1, 4.8, 2]],
    specs: "3-Phase VFD Inverter Power Run, 16 sq.mm Shielded Cable",
    flowRate: "415V AC Variable Frequency (20-60 Hz)",
    status: "active",
  },
  {
    id: "control-to-fogger-pwr",
    name: "Fogger Booster Motor Power",
    from: "Control Panel",
    to: "Fogger",
    system: "electrical",
    fromPos: [3, 1.2, 2],
    toPos: [-1.5, 4.5, 2],
    waypoints: [[3, 3.8, 2], [-1.5, 3.8, 2]],
    specs: "2.5 sq.mm Flexible Copper Conduit with Grounding Earth Loop",
    flowRate: "230V AC Single Phase, 10A",
    status: "active",
  },
  {
    id: "control-to-fans",
    name: "Ventilation Fans Drive Feed",
    from: "Control Panel",
    to: "Fresh Air Fan",
    system: "electrical",
    fromPos: [3, 1.2, 2],
    toPos: [-4, 4, 0],
    waypoints: [[0, 3.8, 1], [-3, 3.8, 0.5]],
    specs: "Modulated EC Motor Controller Harness with Interlock",
    flowRate: "0-10V DC Analog Speed Command",
    status: "active",
  },

  // --- CONTROL / TELEMETRY SYSTEM ---
  {
    id: "control-to-temp-sensor",
    name: "Temperature Sensor Bus (RS-485)",
    from: "Control Panel",
    to: "Temperature Sensor",
    system: "control",
    fromPos: [3, 1.2, 2],
    toPos: [2, 3.5, 2],
    waypoints: [[2.5, 2.5, 2]],
    specs: "Shielded Twisted Pair (STP) Modbus RTU, Pt100 RTD Input",
    flowRate: "9600 Baud, 1-Sec Telemetry Poll",
    status: "active",
  },
  {
    id: "control-to-hum-sensor",
    name: "Humidity Telemetry Loop (4-20mA)",
    from: "Control Panel",
    to: "Humidity Sensor",
    system: "control",
    fromPos: [3, 1.2, 2],
    toPos: [1.5, 3, 2],
    waypoints: [[2.2, 2.2, 2]],
    specs: "Current Loop Interface with Transient Voltage Suppression",
    flowRate: "4-20 mA Analog Precision Feedback",
    status: "active",
  },
  {
    id: "control-to-co2-sensor",
    name: "CO₂ NDIR Sensor Modbus Link",
    from: "Control Panel",
    to: "CO₂ Sensor",
    system: "control",
    fromPos: [3, 1.2, 2],
    toPos: [2.5, 2.8, 2],
    waypoints: [[2.8, 2.0, 2]],
    specs: "Digital Optical Chamber Bus with Automatic Baseline Calibration",
    flowRate: "Digital Hex Packet (PPM Telemetry)",
    status: "active",
  },
];

const SYSTEM_COLORS: Record<ConnectionSystem, { pipe: string; pulse: string; glow: string }> = {
  air: {
    pipe: "#38bdf8", // Cyan / sky blue
    pulse: "#e0f2fe",
    glow: "rgba(56, 189, 248, 0.4)",
  },
  water: {
    pipe: "#2563eb", // Deep industrial blue
    pulse: "#93c5fd",
    glow: "rgba(37, 99, 235, 0.4)",
  },
  electrical: {
    pipe: "#f59e0b", // Amber / industrial orange
    pulse: "#fef08a",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  control: {
    pipe: "#a855f7", // Violet / purple digital bus
    pulse: "#f3e8ff",
    glow: "rgba(168, 85, 247, 0.4)",
  },
};

function ConnectionPipe({
  connection,
  selected,
  onSelect,
  explodedOffset = [0, 0, 0],
}: {
  connection: SystemConnection;
  selected: boolean;
  onSelect: (conn: SystemConnection) => void;
  explodedOffset?: [number, number, number];
}) {
  const pulseRef = useRef<THREE.Mesh>(null);

  // Build continuous 3D path using CatmullRomCurve3
  const curve = useMemo(() => {
    const rawPoints: THREE.Vector3[] = [
      new THREE.Vector3(...connection.fromPos),
      ...(connection.waypoints || []).map((p) => new THREE.Vector3(...p)),
      new THREE.Vector3(...connection.toPos),
    ];
    return new THREE.CatmullRomCurve3(rawPoints, false, "catmullrom", 0.15);
  }, [connection]);

  const tubeGeometry = useMemo(() => {
    const radius =
      connection.system === "air"
        ? 0.09
        : connection.system === "water"
        ? 0.05
        : connection.system === "electrical"
        ? 0.04
        : 0.03;
    return new THREE.TubeGeometry(curve, 32, radius, 8, false);
  }, [curve, connection.system]);

  const colors = SYSTEM_COLORS[connection.system];

  // Animate flow particle traveling along the connection curve
  useFrame(({ clock }) => {
    if (pulseRef.current) {
      const speed = connection.system === "air" ? 0.35 : connection.system === "water" ? 0.25 : 0.45;
      const t = (clock.getElapsedTime() * speed) % 1;
      const point = curve.getPointAt(t);
      pulseRef.current.position.set(
        point.x + explodedOffset[0],
        point.y + explodedOffset[1],
        point.z + explodedOffset[2]
      );
    }
  });

  return (
    <group>
      {/* 3D Pipe Geometry */}
      <mesh
        geometry={tubeGeometry}
        position={explodedOffset}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(connection);
        }}
      >
        <meshStandardMaterial
          color={colors.pipe}
          roughness={0.25}
          metalness={0.65}
          emissive={selected ? colors.pipe : "#000000"}
          emissiveIntensity={selected ? 0.5 : 0.05}
        />
      </mesh>

      {/* Pulsing Flow Indicator along the engineering run */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[connection.system === "air" ? 0.12 : 0.07, 12, 12]} />
        <meshBasicMaterial color={colors.pulse} />
      </mesh>

      {/* Selection / Inspection Callout */}
      {selected && (
        <Html
          position={[
            connection.toPos[0] + explodedOffset[0],
            connection.toPos[1] + 0.6 + explodedOffset[1],
            connection.toPos[2] + explodedOffset[2],
          ]}
          center
          distanceFactor={15}
          style={{ pointerEvents: "none" }}
        >
          <div className="bg-slate-900/95 text-white p-3 rounded-xl border border-cyan-400 shadow-2xl backdrop-blur-md w-56 text-left text-xs pointer-events-auto select-none">
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
              <span className="font-bold text-cyan-300 uppercase text-[10px] tracking-wider">
                {connection.system} Network
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="font-semibold text-slate-100 mb-1">{connection.name}</div>
            <div className="text-[10px] text-slate-400 mb-1">
              <strong className="text-slate-300">Run:</strong> {connection.from} ➔ {connection.to}
            </div>
            <div className="text-[10px] text-slate-300 bg-slate-800/80 p-1.5 rounded mb-1 font-mono">
              {connection.specs}
            </div>
            {connection.flowRate && (
              <div className="text-[10px] text-emerald-400">
                ⚡ Rate: {connection.flowRate}
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

export default function SystemConnections({
  visibleSystems,
  selectedConnection,
  onSelectConnection,
  explodedOffset = [0, 0, 0],
}: {
  visibleSystems: {
    air: boolean;
    water: boolean;
    electrical: boolean;
    control: boolean;
  };
  selectedConnection: string | null;
  onSelectConnection: (conn: SystemConnection | null) => void;
  explodedOffset?: [number, number, number];
}) {
  const filteredConnections = useMemo(() => {
    return systemConnections.filter((c) => visibleSystems[c.system]);
  }, [visibleSystems]);

  return (
    <group>
      {filteredConnections.map((conn) => (
        <ConnectionPipe
          key={conn.id}
          connection={conn}
          selected={selectedConnection === conn.id}
          onSelect={(c) =>
            onSelectConnection(selectedConnection === c.id ? null : c)
          }
          explodedOffset={explodedOffset}
        />
      ))}
    </group>
  );
}
