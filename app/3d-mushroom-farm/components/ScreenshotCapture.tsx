"use client";

import React, { useState, useCallback } from "react";
import type { WebGLRenderer } from "three";
import { Camera, Check } from "lucide-react";

type Props = {
  renderer: WebGLRenderer | null;
  fileName?: string;
  className?: string;
};

export default function ScreenshotCapture({
  renderer,
  fileName = "mushroom-farm-3d-view",
  className = "",
}: Props) {
  const [captured, setCaptured] = useState(false);

  const captureImage = useCallback(() => {
    // If renderer isn't passed directly, find the WebGL canvas in document
    const canvas = renderer?.domElement || (document.querySelector("canvas") as HTMLCanvasElement | null);

    if (!canvas) {
      alert("3D viewer is not ready yet. Please wait a moment.");
      return;
    }

    try {
      const image = canvas.toDataURL("image/png", 1.0);

      const link = document.createElement("a");
      link.href = image;
      link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.png`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setCaptured(true);
      setTimeout(() => setCaptured(false), 2500);
    } catch (error) {
      console.error("Screenshot capture failed:", error);
      alert("Unable to capture the 3D view. Please try again.");
    }
  }, [renderer, fileName]);

  return (
    <button
      type="button"
      onClick={captureImage}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all active:scale-95 ${
        captured
          ? "bg-emerald-600 text-white border-emerald-400"
          : "bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border-white/10"
      } ${className}`}
      title="Save current 3D perspective as high-resolution PNG image"
    >
      {captured ? (
        <>
          <Check className="w-3.5 h-3.5 text-white" />
          <span>Saved!</span>
        </>
      ) : (
        <>
          <Camera className="w-3.5 h-3.5 text-sky-400" />
          <span>Capture PNG</span>
        </>
      )}
    </button>
  );
}
