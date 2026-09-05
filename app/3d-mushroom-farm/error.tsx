"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("3D Mushroom Farm Encountered Error:", error);
  }, [error]);

  return (
    <main
      className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6"
      role="alert"
    >
      <div className="max-w-md p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-red-200 dark:border-red-900/40 shadow-2xl backdrop-blur-xl">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          3D Farm Could Not Load
        </h1>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          WebGL may have encountered a hardware restriction or network interruption. Please try reloading the interactive scene.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-lg shadow-emerald-600/25 transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    </main>
  );
}
