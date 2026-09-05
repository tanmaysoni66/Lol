"use client";

import { useMemo } from "react";
import * as THREE from "three";

type Props = {
  enabled: boolean;
};

type Connection = {
  from: [number, number, number];
  to: [number, number, number];
  color?: string;
  radius?: number;
};

export default function ElectricalSystem({ enabled }: Props) {
  // Conduits and Cable Trays from Main Electrical Board (PLC / VFD) to Systems
  const conduits: Connection[] = useMemo(
    () => [
      // Main riser from MDB Panel
      { from: [5, 2, -3.8], to: [5, 3.4, -3.8], color: "#eab308", radius: 0.03 },
      // Overhead cable ladder running across facility length
      { from: [5, 3.4, -3.8], to: [-5, 3.4, -3.8], color: "#eab308", radius: 0.025 },
      // Conduits to Room 1 LED lights and sensors
      { from: [-3, 3.4, -3.8], to: [-3, 3.4, 0], color: "#f59e0b", radius: 0.02 },
      { from: [-3, 3.4, 0], to: [-3, 3.4, 3], color: "#f59e0b", radius: 0.02 },
      // Conduits to Room 2 LED lights and sensors
      { from: [2, 3.4, -3.8], to: [2, 3.4, 0], color: "#f59e0b", radius: 0.02 },
      { from: [2, 3.4, 0], to: [2, 3.4, 3], color: "#f59e0b", radius: 0.02 },
      // Conduits to HVAC AHUs on roof/upper wall
      { from: [-5, 3.4, -3.8], to: [-6, 3.2, 0], color: "#3b82f6", radius: 0.022 },
      { from: [5, 3.4, -3.8], to: [6, 3.2, 0], color: "#3b82f6", radius: 0.022 },
      // Drop line to high-pressure fogger pump
      { from: [-4.5, 3.4, -3.8], to: [-5, 0.6, -3.4], color: "#10b981", radius: 0.02 },
    ],
    []
  );

  // LED Light bars mounted above racks
  const lightBars = useMemo(
    () => [
      { pos: [-3, 2.7, -1] as [number, number, number], length: 3.5 },
      { pos: [-3, 2.7, 1.5] as [number, number, number], length: 3.5 },
      { pos: [2, 2.7, -1] as [number, number, number], length: 3.5 },
      { pos: [2, 2.7, 1.5] as [number, number, number], length: 3.5 },
    ],
    []
  );

  if (!enabled) return null;

  return (
    <group>
      {/* Electrical Conduits */}
      {conduits.map((conn, idx) => (
        <ElectricalLine key={`conduit-${idx}`} {...conn} />
      ))}

      {/* Main Electrical & PLC Automation Cabinet (MDB) */}
      <group position={[5, 1.8, -3.8]}>
        {/* Enclosure */}
        <mesh>
          <boxGeometry args={[0.7, 1.2, 0.3]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Panel Door Bezel */}
        <mesh position={[0, 0, 0.16]}>
          <boxGeometry args={[0.62, 1.1, 0.02]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        {/* Status Indicators (Red / Amber / Green LEDs) */}
        <mesh position={[-0.15, 0.4, 0.18]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, 0.4, 0.18]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#f59e0b" />
        </mesh>
        <mesh position={[0.15, 0.4, 0.18]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
        {/* Emergency Stop Button */}
        <mesh position={[0.18, 0.15, 0.19]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.03, 12]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
      </group>

      {/* Rack Canopy LED Grow / Inspection Light Fixtures */}
      {lightBars.map((bar, idx) => (
        <group key={`light-${idx}`} position={bar.pos}>
          {/* Aluminum Fixture Housing */}
          <mesh>
            <boxGeometry args={[0.1, 0.04, bar.length]} />
            <meshStandardMaterial color="#475569" metalness={0.8} />
          </mesh>
          {/* LED Diffuser with subtle warm glow */}
          <mesh position={[0, -0.025, 0]}>
            <boxGeometry args={[0.08, 0.015, bar.length - 0.05]} />
            <meshBasicMaterial color="#fef08a" />
          </mesh>
        </group>
      ))}

      {/* Environmental NDIR Sensor Enclosures */}
      {[-3, 2].map((x, i) => (
        <group key={`sensor-${i}`} position={[x, 1.9, 0]}>
          <mesh>
            <boxGeometry args={[0.15, 0.22, 0.08]} />
            <meshStandardMaterial color="#f8fafc" />
          </mesh>
          {/* Digital Display screen */}
          <mesh position={[0, 0.03, 0.045]}>
            <planeGeometry args={[0.1, 0.06]} />
            <meshBasicMaterial color="#0284c7" />
          </mesh>
          {/* Sensor probe tip */}
          <mesh position={[0, -0.13, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.06, 8]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ElectricalLine({
  from,
  to,
  color = "#eab308",
  radius = 0.025,
}: Connection) {
  const start = new THREE.Vector3(...from);
  const end = new THREE.Vector3(...to);
  const direction = end.clone().sub(start);
  const length = direction.length();
  const midpoint = start.clone().add(end).multiplyScalar(0.5);

  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 8]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
    </mesh>
  );
}
