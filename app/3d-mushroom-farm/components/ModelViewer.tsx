"use client";

import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

type Props = {
  url: string;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  fallback?: React.ReactNode;
};

function GLTFModel({
  url,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}: Omit<Props, "fallback">) {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

export default function ModelViewer({
  url,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  fallback = null,
}: Props) {
  return (
    <Suspense fallback={fallback}>
      <GLTFModel
        url={url}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    </Suspense>
  );
}
