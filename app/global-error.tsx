"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Organic Mushroom Farm global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main
          role="alert"
          aria-labelledby="global-error-title"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12"
          style={{
            background: "var(--bg-gradient)",
          }}
        >
          {/* =====================================================
              Animated Background
          ====================================================== */}

          <div
            aria-hidden="true"
            className="global-glow global-glow-one pointer-events-none absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-purple-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="global-glow global-glow-two pointer-events-none absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-green-400/20 blur-3xl"
          />

          {/* Floating particles */}

          <div
            aria-hidden="true"
            className="global-particle particle-one absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-purple-500/50"
          />

          <div
            aria-hidden="true"
            className="global-particle particle-two absolute right-[20%] top-[28%] h-3 w-3 rounded-full bg-green-500/40"
          />

          <div
            aria-hidden="true"
            className="global-particle particle-three absolute bottom-[25%] left-[24%] h-2 w-2 rounded-full bg-green-500/40"
          />

          <div
            aria-hidden="true"
            className="global-particle particle-four absolute bottom-[20%] right-[27%] h-2.5 w-2.5 rounded-full bg-purple-500/40"
          />

          {/* =====================================================
              Main Card
          ====================================================== */}

          <div className="global-error-card glass relative z-10 w-full max-w-xl rounded-[2rem] p-8 text-center shadow-2xl sm:p-10 md:p-12">

            {/* Logo */}

            <div className="global-logo relative mx-auto mb-7 h-24 w-48">
              <Image
                src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1785226016/IMG-20260728-WA0000-removebg-preview_bztf7y.png"
                alt="Organic Mushroom Farm"
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>

            {/* Global error icon */}

            <div className="relative mx-auto mb-7 flex h-20 w-20 items-center justify-center">

              <div
                aria-hidden="true"
                className="global-icon-ring absolute inset-0 rounded-full border border-purple-400/30"
              />

              <div
                aria-hidden="true"
                className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500/20 to-green-500/20 blur-md"
              />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-green-500 text-3xl shadow-xl">
                🍄
              </div>
            </div>

            {/* Heading */}

            <h1
              id="global-error-title"
              className="global-title text-2xl font-bold tracking-tight sm:text-3xl"
              style={{
                color: "var(--text-heading)",
              }}
            >
              Something went wrong
            </h1>

            {/* Description */}

            <p
              className="global-description mx-auto mt-4 max-w-md text-sm leading-7 sm:text-base"
              style={{
                color: "var(--text-body)",
              }}
            >
              We&apos;re experiencing an unexpected problem.
              Please reload the website and try again.
            </p>

            {/* Reload button */}

            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary global-button mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 py-3 font-semibold"
              aria-label="Reload Organic Mushroom Farm website"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 11a8.1 8.1 0 0 0-15.5-3M4 5v4h4"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 13a8.1 8.1 0 0 0 15.5 3M20 19v-4h-4"
                />
              </svg>

              Reload Website
            </button>

            {/* Brand */}

            <p
              className="mt-7 text-xs tracking-wide"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Organic Mushroom Farm
            </p>
          </div>

          {/* =====================================================
              Animations
          ====================================================== */}

          <style>{`
            /* Card entrance */

            .global-error-card {
              animation: global-card-in 0.7s
                cubic-bezier(0.22, 1, 0.36, 1) both;
            }

            @keyframes global-card-in {
              0% {
                opacity: 0;
                transform: translateY(18px) scale(0.97);
              }

              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            /* Logo entrance */

            .global-logo {
              animation: global-logo-in 0.9s ease-out 0.15s both;
            }

            @keyframes global-logo-in {
              0% {
                opacity: 0;
                transform: translateY(-12px) scale(0.94);
              }

              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            /* Background movement */

            .global-glow {
              animation: global-glow-float 7s ease-in-out infinite;
            }

            .global-glow-two {
              animation-delay: -3.5s;
            }

            @keyframes global-glow-float {
              0%,
              100% {
                transform: translate3d(0, 0, 0) scale(1);
              }

              50% {
                transform: translate3d(18px, -20px, 0) scale(1.08);
              }
            }

            /* Floating particles */

            .global-particle {
              animation: global-particle-float 5s ease-in-out infinite;
            }

            .particle-two {
              animation-delay: -1.2s;
            }

            .particle-three {
              animation-delay: -2.4s;
            }

            .particle-four {
              animation-delay: -3.6s;
            }

            @keyframes global-particle-float {
              0%,
              100% {
                opacity: 0.35;
                transform: translate3d(0, 0, 0);
              }

              50% {
                opacity: 0.8;
                transform: translate3d(0, -14px, 0);
              }
            }

            /* Icon pulse */

            .global-icon-ring {
              animation: global-icon-ring 2.4s ease-out infinite;
            }

            @keyframes global-icon-ring {
              0% {
                opacity: 0.8;
                transform: scale(0.85);
              }

              70% {
                opacity: 0;
                transform: scale(1.35);
              }

              100% {
                opacity: 0;
                transform: scale(1.35);
              }
            }

            /* Content entrance */

            .global-title {
              animation: global-content-in 0.6s ease-out 0.25s both;
            }

            .global-description {
              animation: global-content-in 0.6s ease-out 0.35s both;
            }

            .global-button {
              animation: global-content-in 0.6s ease-out 0.45s both;
            }

            @keyframes global-content-in {
              0% {
                opacity: 0;
                transform: translateY(10px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            /* Button icon */

            .global-button:hover svg {
              animation: global-retry-spin 0.7s ease-in-out;
            }

            @keyframes global-retry-spin {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(180deg);
              }
            }

            /* Accessibility */

            @media (prefers-reduced-motion: reduce) {
              .global-error-card,
              .global-logo,
              .global-title,
              .global-description,
              .global-button,
              .global-glow,
              .global-particle,
              .global-icon-ring {
                animation: none !important;
              }

              .global-error-card,
              .global-logo,
              .global-title,
              .global-description,
              .global-button {
                opacity: 1;
                transform: none;
              }
            }
          `}</style>
        </main>
      </body>
    </html>
  );
}