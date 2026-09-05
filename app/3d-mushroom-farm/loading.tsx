export default function Loading() {
  return (
    <main
      className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="max-w-md p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-xl">
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl animate-pulse">
          🍄
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Loading 3D Mushroom Farm...
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Preparing the interactive commercial facility, climate systems, and cultivation models.
        </p>
        <div className="mt-6 w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full animate-[shimmer_1.5s_infinite] w-2/3" />
        </div>
      </div>
    </main>
  );
}
