"use client";

import { useMemo } from "react";
import * as THREE from "three";

type Props = {
  enabled: boolean;
};

export default function WaterSystem({ enabled }: Props) {
  // Primary water lines (main header supply, room branches, fogger manifolds)
  const supplyLines = useMemo(
    () => [
      // Main fresh water intake line (enters room from exterior wall)
      { start: [-7, 0.4, -3.5] as [number, number, number], end: [-4.5, 0.4, -3.5] as [number, number, number] },
      // Vertical rise to overhead distribution
      { start: [-4.5, 0.4, -3.5] as [number, number, number], end: [-4.5, 3.2, -3.5] as [number, number, number] },
      // Main overhead water spine
      { start: [-4.5, 3.2, -3.5] as [number, number, number], end: [5.5, 3.2, -3.5] as [number, number, number] },
      // Room branch line 1
      { start: [-3, 3.2, -3.5] as [number, number, number], end: [-3, 3.2, 2.5] as [number, number, number] },
      // Room branch line 2
      { start: [2, 3.2, -3.5] as [number, number, number], end: [2, 3.2, 2.5] as [number, number, number] },
      // Fogger drop manifolds (hanging over growing beds)
      { start: [-3, 3.2, -1] as [number, number, number], end: [-3, 2.4, -1] as [number, number, number] },
      { start: [-3, 3.2, 1] as [number, number, number], end: [-3, 2.4, 1] as [number, number, number] },
      { start: [2, 3.2, -1] as [number, number, number], end: [2, 2.4, -1] as [number, number, number] },
      { start: [2, 3.2, 1] as [number, number, number], end: [2, 2.4, 1] as [number, number, number] },
    ],
    []
  );

  // Floor drainage lines (sanitary slope drainage to central drain traps)
  const drainageLines = useMemo(
    () => [
      // Trench drain spine along floor
      { start: [-6, 0.08, 0] as [number, number, number], end: [6, 0.08, 0] as [number, number, number] },
      // Floor drain collection leads
      { start: [-3, 0.08, -2.5] as [number, number, number], end: [-3, 0.08, 0] as [number, number, number] },
      { start: [-3, 0.08, 2.5] as [number, number, number], end: [-3, 0.08, 0] as [number, number, number] },
      { start: [2, 0.08, -2.5] as [number, number, number], end: [2, 0.08, 0] as [number, number, number] },
      { start: [2, 0.08, 2.5] as [number, number, number], end: [2, 0.08, 0] as [number, number, number] },
      // Main discharge outlet to exterior effluent trap
      { start: [6, 0.08, 0] as [number, number, number], end: [7.2, 0.05, 0] as [number, number, number] },
    ],
    []
  );

  // Fogger misting nozzles
  const foggerNozzles = useMemo(
    () => [
      [-3, 2.35, -1],
      [-3, 2.35, 0],
      [-3, 2.35, 1],
      [-3, 1.6, -1],
      [-3, 1.6, 1],
      [2, 2.35, -1],
      [2, 2.35, 0],
      [2, 2.35, 1],
      [2, 1.6, -1],
      [2, 1.6, 1],
    ] as [number, number, number][],
    []
  );

  if (!enabled) return null;

  return (
    <group>
      {/* Supply Water Piping (Sky Blue) */}
      {supplyLines.map((line, idx) => (
        <Pipe
          key={`supply-${idx}`}
          start={line.start}
          end={line.end}
          color="#0284c7"
          radius={0.032}
        />
      ))}

      {/* Floor Drainage Piping (Slate / Industrial Amber) */}
      {drainageLines.map((line, idx) => (
        <Pipe
          key={`drain-${idx}`}
          start={line.start}
          end={line.end}
          color="#64748b"
          radius={0.045}
        />
      ))}

      {/* Floor Drain Grates / Sumps */}
      {[-3, 2, 5.8].map((x, i) => (
        <mesh key={`sump-${i}`} position={[x, 0.08, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.03, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Fogger Nozzles & Micron Spray Rings */}
      {foggerNozzles.map((pos, idx) => (
        <group key={`fogger-${idx}`} position={pos}>
          {/* Brass Nozzle body */}
          <mesh>
            <cylinderGeometry args={[0.02, 0.035, 0.06, 8]} />
            <meshStandardMaterial color="#eab308" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Fine Mist Aerosol Cloud Cone */}
          <mesh position={[0, -0.16, 0]}>
            <coneGeometry args={[0.18, 0.28, 12]} />
            <meshBasicMaterial color="#bae6fd" transparent opacity={0.45} depthWrite={false} />
          </mesh>
        </group>
      ))}

      {/* High-Pressure Pump Unit in Service Corridor */}
      <group position={[-5, 0.5, -3.4]}>
        <mesh>
          <boxGeometry args={[0.65, 0.5, 0.4]} />
          <meshStandardMaterial color="#0284c7" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Pressure gauge indicator */}
        <mesh position={[0, 0.32, 0.15]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.03, 16]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
      </group>
    </group>
  );
}

function Pipe({
  start,
  end,
  color = "#0284c7",
  radius = 0.03,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  radius?: number;
}) {
  const a = new THREE.Vector3(...start);
  const b = new THREE.Vector3(...end);
  const direction = b.clone().sub(a);
  const length = direction.length();
  const midpoint = a.clone().add(b).multiplyScalar(0.5);

  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 12]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}
