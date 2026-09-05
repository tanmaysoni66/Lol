"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const MushroomFarm3D = dynamic(() => import("./MushroomFarm3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[650px] min-h-[500px] flex flex-col items-center justify-center bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0,transparent_70%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-slate-200 tracking-wide">
            Loading Commercial 3D Mushroom Farm
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Mounting Three.js WebGL renderer, spatial physics &amp; HVAC systems...
          </p>
        </div>
      </div>
    </div>
  ),
});

export default function DynamicFarmViewer() {
  return <MushroomFarm3D />;
}
