"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <title>404 - Page Not Found | Organic Mushroom Farm</title>
      <meta name="robots" content="noindex, nofollow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "404 - Page Not Found",
            "description": "The requested page was not found.",
          })
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg w-full backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 p-8 md:p-12 rounded-[3rem] border border-white/40 dark:border-white/10 shadow-[0_20px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center"
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-emerald-500/20 flex items-center justify-center border border-white/50 dark:border-white/10 shadow-inner"
          >
            <SearchX size={40} className="text-purple-600 dark:text-purple-400" />
          </motion.div>

          {/* 404 Text Elements */}
          <h1 className="text-7xl md:text-8xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500 tracking-tighter drop-shadow-sm">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-sm text-sm md:text-base leading-relaxed">
            Oops! It looks like you've wandered into an unexplored area of our farm. The page you are looking for doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-emerald-500 text-white font-bold rounded-full shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_10px_20px_-5px_rgba(124,58,237,0.6)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
              <Home size={18} className="relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-all"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
