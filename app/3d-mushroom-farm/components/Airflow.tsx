"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

type AirflowProps = {
  enabled: boolean;
  mobile?: boolean;
};

export default function Airflow({
  enabled,
  mobile = false,
}: AirflowProps) {
  const particles = useRef<THREE.Group>(null);

  const particleCount = mobile ? 12 : 28;

  // Reusable geometry and material to prevent allocation overhead
  const sharedGeometry = useMemo(() => new THREE.SphereGeometry(0.07, 8, 8), []);
  const sharedMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#38bdf8",
        transparent: true,
        opacity: 0.65,
      }),
    []
  );

  useFrame((_, delta) => {
    if (!particles.current || !enabled) return;

    particles.current.children.forEach((particle) => {
      particle.position.x += delta * 2.2;

      if (particle.position.x > 8) {
        particle.position.x = -8;
      }
    });
  });

  if (!enabled) return null;

  return (
    <group ref={particles}>
      {Array.from({ length: particleCount }).map((_, index) => (
        <mesh
          key={index}
          geometry={sharedGeometry}
          material={sharedMaterial}
          position={[
            -8 + (index % 10) * 1.6,
            1.5 + ((index * 7) % 3.5),
            -3 + (index % 5) * 1.4,
          ]}
        />
      ))}
    </group>
  );
}
