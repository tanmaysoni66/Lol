import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto w-full max-w-7xl px-4 pt-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link
            href="/"
            className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li
          aria-current="page"
          className="font-medium text-slate-900 dark:text-white"
        >
          Mushroom Farm Climate Tracker
        </li>
      </ol>
    </nav>
  );
}
