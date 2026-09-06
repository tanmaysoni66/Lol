"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Mushroom Farm Climate Tracker error:", error);
  }, [error]);

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Mushroom Farm Climate Tracker
      </h1>

      <p className="mt-3 text-slate-500">
        The climate tracker could not be loaded right now.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 rounded-lg px-5 py-3 border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        Try Again
      </button>
    </main>
  );
}
