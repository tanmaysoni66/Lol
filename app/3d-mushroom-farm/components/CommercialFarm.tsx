"use client";

import React, { useMemo } from "react";
import { Html } from "@react-three/drei";
import type { ViewMode } from "./XRayControls";

export type Room = {
  name: string;
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  stepNumber?: number;
  isColdStorage?: boolean;
};

export const rooms: Room[] = [
  {
    name: "Raw Material Storage",
    position: [-8, 1.5, -4.5],
    size: [4, 3, 4],
    color: "#c9b79c",
    stepNumber: 1,
  },
  {
    name: "Compost / Substrate Yard",
    position: [-3, 1.5, -4.5],
    size: [5, 3, 4],
    color: "#a58b68",
    stepNumber: 2,
  },
  {
    name: "Pasteurization / Sterilization",
    position: [3, 1.5, -4.5],
    size: [5, 3, 4],
    color: "#9ca3af",
    stepNumber: 3,
  },
  {
    name: "Spawning Room",
    position: [8, 1.5, -4.5],
    size: [4, 3, 4],
    color: "#d1d5db",
    stepNumber: 4,
  },
  {
    name: "Incubation Room",
    position: [-7, 1.5, 1],
    size: [5, 3, 4],
    color: "#d6c7a1",
    stepNumber: 5,
  },
  {
    name: "Growing Room 1",
    position: [0, 1.5, 1],
    size: [7, 3, 4],
    color: "#d9ead3",
    stepNumber: 6,
  },
  {
    name: "Growing Room 2",
    position: [7, 1.5, 1],
    size: [5, 3, 4],
    color: "#cfe2cf",
    stepNumber: 6,
  },
  {
    name: "Harvesting Area",
    position: [-6, 1.5, 5.5],
    size: [5, 3, 3],
    color: "#e5e7eb",
    stepNumber: 7,
  },
  {
    name: "Packing Area",
    position: [0, 1.5, 5.5],
    size: [5, 3, 3],
    color: "#f3f4f6",
    stepNumber: 8,
  },
  {
    name: "Cold Storage",
    position: [6, 1.5, 5.5],
    size: [5, 3, 3],
    color: "#bfdbfe",
    stepNumber: 9,
    isColdStorage: true,
  },
];

export function RoomBox({
  room,
  isSelected,
  onSelect,
  xray = false,
  viewMode = "normal",
  cutawayProgress = 0.5,
  cutawayAxis = "z",
  explodedProgress = 0,
}: {
  room: Room;
  isSelected?: boolean;
  onSelect?: (room: Room) => void;
  xray?: boolean;
  viewMode?: ViewMode;
  cutawayProgress?: number;
  cutawayAxis?: "x" | "z";
  explodedProgress?: number;
}) {
  const [width, height, depth] = room.size;

  // Calculate exploded offset: rooms displace outwards horizontally
  const effectivePosition = useMemo<[number, number, number]>(() => {
    if (viewMode === "exploded" && explodedProgress > 0) {
      const offsetX = room.position[0] * 0.35 * explodedProgress;
      const offsetZ = room.position[2] * 0.35 * explodedProgress;
      return [room.position[0] + offsetX, room.position[1], room.position[2] + offsetZ];
    }
    return room.position;
  }, [room.position, viewMode, explodedProgress]);

  // Determine if this room is in the cutaway zone
  const isCutawayHidden = useMemo(() => {
    if (viewMode !== "cutaway") return false;
    if (cutawayAxis === "z") {
      const zCut = -7.5 + 15 * cutawayProgress;
      return room.position[2] > zCut;
    } else {
      const xCut = -10.5 + 21 * cutawayProgress;
      return room.position[0] > xCut;
    }
  }, [viewMode, cutawayAxis, cutawayProgress, room.position]);

  const effectiveOpacity = useMemo(() => {
    if (isCutawayHidden) return 0.05; // Ghosted in cutaway mode so interior is exposed
    if (xray || viewMode === "xray") return 0.15;
    if (isSelected) return 0.92;
    return 0.75;
  }, [isCutawayHidden, xray, viewMode, isSelected]);

  const labelPosition = useMemo<[number, number, number]>(
    () => [
      effectivePosition[0],
      effectivePosition[1] + height / 2 + 0.5,
      effectivePosition[2],
    ],
    [effectivePosition, height]
  );

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(room);
      }}
    >
      {/* 3D Room Box */}
      <mesh position={effectivePosition} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={room.color}
          transparent
          opacity={effectiveOpacity}
          depthWrite={!xray && viewMode === "normal"}
          roughness={0.4}
        />
      </mesh>

      {/* Wireframe border when in X-Ray / Cutaway mode or selected */}
      {(xray || viewMode === "xray" || isCutawayHidden || isSelected) && (
        <mesh position={effectivePosition}>
          <boxGeometry args={[width + 0.02, height + 0.02, depth + 0.02]} />
          <meshStandardMaterial
            color={
              isSelected
                ? "#22c55e"
                : isCutawayHidden
                ? "#f59e0b"
                : "#94a3b8"
            }
            wireframe
            transparent
            opacity={isSelected ? 0.85 : isCutawayHidden ? 0.35 : 0.22}
          />
        </mesh>
      )}

      {/* Cold Storage Enhanced 150mm PIR Insulation Layers */}
      {room.isColdStorage && !isCutawayHidden && (
        <group position={effectivePosition}>
          {/* Inner 150mm PIR Envelope Boundary */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[width - 0.2, height - 0.2, depth - 0.2]} />
            <meshStandardMaterial
              color="#60a5fa"
              transparent
              opacity={xray || viewMode === "xray" ? 0.15 : 0.3}
              wireframe={xray}
            />
          </mesh>

          {/* Cold Storage Strip Air Curtain at entrance */}
          <mesh position={[-width / 2 + 0.1, 0, depth / 2]}>
            <boxGeometry args={[0.9, 2.2, 0.05]} />
            <meshStandardMaterial
              color="#38bdf8"
              transparent
              opacity={0.5}
              roughness={0.1}
            />
          </mesh>
        </group>
      )}

      {/* Room Floor Slab */}
      <mesh
        position={[effectivePosition[0], 0.05, effectivePosition[2]]}
        receiveShadow
      >
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial
          color={room.isColdStorage ? "#3b82f6" : "#555555"}
          transparent={xray || viewMode === "xray"}
          opacity={xray || viewMode === "xray" ? 0.35 : 1.0}
        />
      </mesh>

      {/* Room label marker */}
      {!isCutawayHidden && (
        <group position={labelPosition}>
          <mesh>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial
              color={isSelected ? "#16a34a" : room.isColdStorage ? "#2563eb" : "#111111"}
            />
          </mesh>
          <Html
            center
            distanceFactor={18}
            style={{ pointerEvents: "none", userSelect: "none" }}
          >
            <div
              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold whitespace-nowrap shadow-lg border backdrop-blur-md transition-transform ${
                isSelected
                  ? "bg-emerald-600 text-white border-emerald-400 scale-110"
                  : room.isColdStorage
                  ? "bg-blue-900/90 text-blue-100 border-blue-400/40"
                  : "bg-slate-900/85 text-slate-200 border-white/20"
              }`}
            >
              {room.name}
              {room.isColdStorage && (
                <span className="ml-1 text-[9px] text-cyan-300 font-mono">
                  [2-4°C / 150mm PIR]
                </span>
              )}
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}

export default function CommercialFarm({
  xray = false,
  viewMode = "normal",
  cutawayProgress = 0.5,
  cutawayAxis = "z",
  explodedProgress = 0,
  selectedRoom,
  onSelectRoom,
  filter = "all",
}: {
  xray?: boolean;
  viewMode?: ViewMode;
  cutawayProgress?: number;
  cutawayAxis?: "x" | "z";
  explodedProgress?: number;
  selectedRoom?: string | null;
  onSelectRoom?: (room: Room) => void;
  filter?: "all" | "no-cold" | "only-cold";
}) {
  const filteredRooms = useMemo(() => {
    if (filter === "no-cold") return rooms.filter((r) => !r.isColdStorage);
    if (filter === "only-cold") return rooms.filter((r) => !!r.isColdStorage);
    return rooms;
  }, [filter]);

  return (
    <group>
      {filteredRooms.map((room) => (
        <RoomBox
          key={room.name}
          room={room}
          isSelected={selectedRoom === room.name}
          onSelect={onSelectRoom}
          xray={xray}
          viewMode={viewMode}
          cutawayProgress={cutawayProgress}
          cutawayAxis={cutawayAxis}
          explodedProgress={explodedProgress}
        />
      ))}
    </group>
  );
}
