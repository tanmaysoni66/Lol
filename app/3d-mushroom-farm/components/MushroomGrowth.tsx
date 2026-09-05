"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import type { GrowthStage } from "./GrowthSimulation";

type MushroomGrowthProps = {
  stage: GrowthStage;
  position?: [number, number, number];
  mobile?: boolean;
};

export default function MushroomGrowth({
  stage,
  position = [0, 0.4, 1],
  mobile = false,
}: MushroomGrowthProps) {
  const mushroomCount = useMemo(() => {
    switch (stage) {
      case "spawning":
        return 0;

      case "incubation":
        return 0;

      case "pinning":
        return mobile ? 12 : 22;

      case "harvesting":
        return mobile ? 35 : 65;

      default:
        return 0;
    }
  }, [stage, mobile]);

  const mushroomScale = useMemo(() => {
    switch (stage) {
      case "pinning":
        return 0.25;

      case "harvesting":
        return 1.0;

      default:
        return 0;
    }
  }, [stage]);

  // Shared geometry and materials to optimize WebGL memory & reduce draw calls
  const { stemGeo, capGeo, stemMat, capMat } = useMemo(() => {
    const sGeo = new THREE.CylinderGeometry(0.16, 0.2, 0.8, mobile ? 8 : 12);
    const cGeo = new THREE.SphereGeometry(
      0.48,
      mobile ? 10 : 16,
      mobile ? 6 : 10,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.6
    );
    const sMat = new THREE.MeshStandardMaterial({
      color: "#f8fafc",
      roughness: 0.6,
    });
    const cMat = new THREE.MeshStandardMaterial({
      color: "#e5d5c0",
      roughness: 0.4,
    });
    return { stemGeo: sGeo, capGeo: cGeo, stemMat: sMat, capMat: cMat };
  }, [mobile]);

  if (mushroomCount === 0) {
    return null;
  }

  return (
    <group position={position}>
      {Array.from({
        length: mushroomCount,
      }).map((_, index) => {
        const x = ((index * 1.37) % 5) - 2.5;
        const z = ((index * 0.83) % 2) - 1;
        const y = 0.35 + ((index * 0.19) % 0.25);

        return (
          <group
            key={index}
            position={[x, y, z]}
            scale={mushroomScale}
          >
            {/* Stem */}
            <mesh
              position={[0, 0.45, 0]}
              geometry={stemGeo}
              material={stemMat}
              castShadow={!mobile}
            />

            {/* Cap */}
            <mesh
              position={[0, 0.9, 0]}
              geometry={capGeo}
              material={capMat}
              castShadow={!mobile}
            />
          </group>
        );
      })}
    </group>
  );
}
