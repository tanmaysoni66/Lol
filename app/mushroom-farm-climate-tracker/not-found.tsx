import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Mushroom Farm Climate Tracker
      </h1>

      <p className="mt-3 text-slate-500">
        The requested climate tracker page could not be found.
      </p>

      <Link
        href="/"
        className="mt-5 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
      >
        Back to Organic Mushrooms Farm
      </Link>
    </main>
  );
}
