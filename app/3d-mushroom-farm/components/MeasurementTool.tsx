"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export type Measurement = {
  start: THREE.Vector3;
  end: THREE.Vector3;
  distance: number;
};

type MeasurementToolProps = {
  enabled: boolean;
  onClear?: () => void;
};

export default function MeasurementTool({
  enabled,
}: MeasurementToolProps) {
  const [points, setPoints] = useState<THREE.Vector3[]>([]);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  if (!enabled) return null;

  const handlePoint = (event: any) => {
    event.stopPropagation();
    const point = event.point.clone();

    setPoints((current) => {
      if (current.length === 1) {
        const start = current[0];
        const end = point;
        const distance = start.distanceTo(end);

        setMeasurements((items) => [
          ...items,
          {
            start,
            end,
            distance,
          },
        ]);

        return [];
      }

      return [point];
    });
  };

  return (
    <group>
      {/* Invisible measurement surface for raycast intercept */}
      <mesh
        onClick={handlePoint}
        position={[0, 5, 0]}
      >
        <boxGeometry args={[60, 30, 60]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ground plane backup raycast target */}
      <mesh
        onClick={handlePoint}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[70, 70]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* Current in-progress point */}
      {points.map((point, index) => (
        <group key={`pending-point-${index}`} position={point}>
          <mesh>
            <sphereGeometry args={[0.16, 16, 16]} />
            <meshBasicMaterial color="#f59e0b" />
          </mesh>
          <Html position={[0, 0.35, 0]} center>
            <div
              style={{
                padding: "3px 8px",
                borderRadius: 6,
                background: "rgba(245, 158, 11, 0.92)",
                color: "#1e293b",
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                pointerEvents: "none",
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Point 1 (Click point 2)
            </div>
          </Html>
        </group>
      ))}

      {/* Completed measurements */}
      {measurements.map((measurement, index) => (
        <MeasurementLine
          key={`measurement-${index}`}
          measurement={measurement}
          index={index + 1}
          onDelete={() => {
            setMeasurements((prev) => prev.filter((_, i) => i !== index));
          }}
        />
      ))}
    </group>
  );
}

function MeasurementLine({
  measurement,
  index,
  onDelete,
}: {
  measurement: Measurement;
  index?: number;
  onDelete?: () => void;
}) {
  const { start, end, distance } = measurement;

  const midpoint = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5);

  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();

  const quaternion = new THREE.Quaternion();
  if (length > 0.001) {
    quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    );
  }

  return (
    <group>
      {/* Start marker */}
      <mesh position={start}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>

      {/* End marker */}
      <mesh position={end}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>

      {/* Measurement line */}
      <mesh position={midpoint} quaternion={quaternion}>
        <cylinderGeometry args={[0.025, 0.025, length, 8]} />
        <meshBasicMaterial color="#34d399" />
      </mesh>

      {/* Distance label */}
      <Html position={midpoint} center>
        <div
          style={{
            padding: "5px 10px",
            borderRadius: 8,
            background: "rgba(15, 23, 42, 0.92)",
            border: "1px solid rgba(52, 211, 153, 0.5)",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ color: "#34d399" }}>📏</span>
          <span>{distance.toFixed(2)} m</span>
          <span style={{ color: "#94a3b8", fontSize: 10, fontWeight: 500 }}>
            ({(distance * 3.28084).toFixed(1)} ft)
          </span>
          {onDelete && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              style={{
                marginLeft: 4,
                cursor: "pointer",
                border: "none",
                background: "rgba(239, 68, 68, 0.2)",
                color: "#f87171",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                lineHeight: 1,
              }}
              title="Remove measurement"
            >
              &times;
            </button>
          )}
        </div>
      </Html>
    </group>
  );
}
