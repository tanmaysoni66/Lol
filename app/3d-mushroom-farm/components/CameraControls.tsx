"use client";

import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export type CameraPreset =
  | "overview"
  | "growing"
  | "processing"
  | "coldStorage";

const presets: Record<
  CameraPreset,
  {
    position: [number, number, number];
    target: [number, number, number];
  }
> = {
  overview: {
    position: [18, 12, 18],
    target: [0, 1.5, 0],
  },

  growing: {
    position: [8, 6, 10],
    target: [0, 1.5, 1],
  },

  processing: {
    position: [-8, 5, 8],
    target: [-3, 1.5, -4],
  },

  coldStorage: {
    position: [12, 5, 9],
    target: [6, 1.5, 5],
  },
};

export default function CameraControls({
  preset,
}: {
  preset: CameraPreset;
}) {
  const controls = useRef<any>(null);
  const { camera } = useThree();

  const targetCamPos = useRef(new THREE.Vector3(...presets[preset].position));
  const targetLookAt = useRef(new THREE.Vector3(...presets[preset].target));

  useEffect(() => {
    const current = presets[preset];
    targetCamPos.current.set(...current.position);
    targetLookAt.current.set(...current.target);
  }, [preset]);

  // Smooth lerp transition between presets
  useFrame((_, delta) => {
    const step = Math.min(delta * 4, 1);
    camera.position.lerp(targetCamPos.current, step);
    if (controls.current) {
      controls.current.target.lerp(targetLookAt.current, step);
      controls.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      enablePan
      enableZoom
      enableRotate
      enableDamping
      dampingFactor={0.08}
      minDistance={3}
      maxDistance={45}
      minPolarAngle={0.25}
      maxPolarAngle={Math.PI / 2.05}
      zoomSpeed={0.8}
      rotateSpeed={0.7}
      panSpeed={0.7}
    />
  );
}
