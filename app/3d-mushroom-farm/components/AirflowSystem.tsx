"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type AirflowSystemProps = {
  enabled: boolean;
  speed?: number;
  direction?: [number, number, number];
};

export default function AirflowSystem({
  enabled,
  speed = 1,
  direction = [1, 0, 0],
}: AirflowSystemProps) {
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, index) => ({
      id: index,
      x: ((index * 1.37) % 14) - 7,
      y: 0.8 + ((index * 0.73) % 3.6),
      z: ((index * 0.91) % 8) - 4,
    }));
  }, []);

  const arrowDir = useMemo(() => {
    return new THREE.Vector3(direction[0], direction[1], direction[2]).normalize();
  }, [direction]);

  if (!enabled) {
    return null;
  }

  return (
    <group>
      {/* Main airflow direction indicator arrow */}
      <primitive
        object={
          new THREE.ArrowHelper(
            arrowDir,
            new THREE.Vector3(-4, 2.2, 0),
            8,
            0x0284c7, // Vivid sky blue
            0.5,
            0.3
          )
        }
      />

      {/* Fresh Air Inlet Vector Arrow */}
      <primitive
        object={
          new THREE.ArrowHelper(
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(-6, 3.8, 0),
            1.2,
            0x10b981, // Fresh Air Emerald Green
            0.35,
            0.2
          )
        }
      />

      {/* Exhaust Air Outlet Vector Arrow */}
      <primitive
        object={
          new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(7, 3.2, 0),
            1.8,
            0xf59e0b, // Exhaust Amber/Orange
            0.4,
            0.25
          )
        }
      />

      {/* Animated Air Particles */}
      {particles.map((particle) => (
        <AirParticle
          key={particle.id}
          initial={[particle.x, particle.y, particle.z]}
          speed={speed}
          direction={direction}
        />
      ))}
    </group>
  );
}

function AirParticle({
  initial,
  speed,
  direction,
}: {
  initial: [number, number, number];
  speed: number;
  direction: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pos = useRef<[number, number, number]>([...initial]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    const dirX = direction[0];
    const dirY = direction[1];
    const dirZ = direction[2];
    const mag = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ) || 1;

    // Movement speed multiplier
    const velocity = speed * delta * 2.8;

    pos.current[0] += (dirX / mag) * velocity;
    pos.current[1] += (dirY / mag) * velocity;
    pos.current[2] += (dirZ / mag) * velocity;

    // Boundary looping across commercial farm interior
    if (pos.current[0] > 7.5) pos.current[0] = -7.5;
    if (pos.current[0] < -7.5) pos.current[0] = 7.5;
    if (pos.current[2] > 4.5) pos.current[2] = -4.5;
    if (pos.current[2] < -4.5) pos.current[2] = 4.5;

    meshRef.current.position.set(pos.current[0], pos.current[1], pos.current[2]);
  });

  return (
    <mesh ref={meshRef} position={initial}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </mesh>
  );
}
