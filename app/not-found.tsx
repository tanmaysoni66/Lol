"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 py-4 md:py-10 text-center relative z-20">
      <title>404 - Page Not Found | Organic Mushroom Farm</title>
      <meta name="robots" content="noindex, nofollow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 - Page Not Found",
            description: "The requested page was not found.",
          }),
        }}
      />

      {/* 404 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[90px] md:text-[140px] font-extrabold leading-none tracking-tighter text-[#8B5CF6] mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]"
      >
        404
      </motion.h1>

      {/* Disconnected Plug Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10 scale-[0.7] md:scale-90"
      >
        {/* Left Plug */}
        <motion.div
          animate={{ x: [-6, 0, -6] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-900 dark:stroke-white fill-gray-900 dark:fill-white"
          >
            {/* Cord */}
            <path
              d="M0 20H40"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Plug body */}
            <rect x="40" y="8" width="20" height="24" rx="4" />
            {/* Prongs */}
            <path
              d="M60 14H75"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M60 26H75"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Sparks (Dots in the middle) */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="flex flex-col gap-3 md:gap-4"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
        </motion.div>

        {/* Right Socket */}
        <motion.div
          animate={{ x: [6, 0, 6] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-900 dark:stroke-white"
          >
            {/* Socket body */}
            <rect x="15" y="8" width="20" height="24" rx="4" className="fill-gray-900 dark:fill-white" />
            {/* Holes */}
            <rect x="20" y="12" width="6" height="4" rx="2" className="fill-white dark:fill-[#1C1936]" />
            <rect x="20" y="24" width="6" height="4" rx="2" className="fill-white dark:fill-[#1C1936]" />
            {/* Cord */}
            <path
              d="M35 20H80"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Heading Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-5 max-w-lg"
      >
        Oops! This Page Couldn't Be Found.
      </motion.h2>

      {/* Paragraph Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 dark:text-gray-300 text-xs md:text-base max-w-[90%] md:max-w-md mx-auto leading-relaxed mb-6 md:mb-10"
      >
        The page you're looking for may have been moved, renamed, or no longer
        exists. Explore India's trusted platform for mushroom farming training,
        Mushroom Spawn (seed), consultancy, and complete turnkey farm solutions.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-2.5 md:gap-4 w-full max-w-[280px] md:max-w-[320px] mx-auto"
      >
        <Link
          href="/"
          className="w-full flex items-center justify-center bg-[#8B5CF6] text-white text-sm md:text-base font-semibold py-2.5 md:py-3.5 px-6 rounded-xl transition-all hover:bg-[#7C3AED] shadow-[0_0_15px_rgba(139,92,246,0.3)]"
        >
          Back to Home
        </Link>

        <Link
          href="/#training"
          className="w-full flex items-center justify-center bg-gray-100 dark:bg-[#15132B] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white text-sm md:text-base font-semibold py-2.5 md:py-3.5 px-6 rounded-xl transition-all hover:border-[#8B5CF6]"
        >
          Explore Mushroom Training
        </Link>

        <Link
          href="/#services"
          className="w-full flex items-center justify-center bg-gray-100 dark:bg-[#15132B] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white text-sm md:text-base font-semibold py-2.5 md:py-3.5 px-6 rounded-xl transition-all hover:border-[#8B5CF6]"
        >
          Explore Services
        </Link>

        <Link
          href="/#contact"
          className="w-full flex items-center justify-center bg-green-600 text-white text-sm md:text-base font-semibold py-2.5 md:py-3.5 px-6 rounded-xl transition-all hover:bg-green-700 shadow-[0_0_15px_rgba(22,163,74,0.3)]"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
