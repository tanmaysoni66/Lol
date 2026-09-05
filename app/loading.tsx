import Image from "next/image";

export default function Loading() {
  return (
    <main
      role="status"
      aria-label="Loading Organic Mushroom Farm"
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/* Soft organic background glow */}
      <div
        aria-hidden="true"
        className="absolute h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative flex w-full max-w-md flex-col items-center px-6 text-center">

        {/* =====================================================
            Logo + Mycelium Animation
        ====================================================== */}

        <div className="relative h-48 w-72">

          {/* Mycelium network */}
          <svg
            viewBox="0 0 280 180"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="mycelium-gradient"
                x1="40"
                y1="90"
                x2="240"
                y2="90"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#22C55E" />
              </linearGradient>
            </defs>

            <path
              className="mycelium-line mycelium-1"
              d="M140 65 C120 90 92 105 45 140"
              stroke="url(#mycelium-gradient)"
            />

            <path
              className="mycelium-line mycelium-2"
              d="M140 65 C160 92 190 108 235 140"
              stroke="url(#mycelium-gradient)"
            />

            <path
              className="mycelium-line mycelium-3"
              d="M140 70 C132 100 125 125 115 158"
              stroke="url(#mycelium-gradient)"
            />

            <path
              className="mycelium-line mycelium-4"
              d="M140 70 C148 100 155 126 168 158"
              stroke="url(#mycelium-gradient)"
            />

            {/* Mycelium nodes */}

            <circle
              className="mycelium-node node-1"
              cx="45"
              cy="140"
              r="3"
            />

            <circle
              className="mycelium-node node-2"
              cx="235"
              cy="140"
              r="3"
            />

            <circle
              className="mycelium-node node-3"
              cx="115"
              cy="158"
              r="3"
            />

            <circle
              className="mycelium-node node-4"
              cx="168"
              cy="158"
              r="3"
            />
          </svg>

          {/* =================================================
              YOUR CLOUDINARY LOGO
          ================================================== */}

          <div className="mushroom absolute left-1/2 top-5 flex h-28 w-64 -translate-x-1/2 items-center justify-center">

            {/* Logo glow */}
            <div
              aria-hidden="true"
              className="logo-glow absolute h-28 w-52 rounded-full bg-purple-500/10 blur-3xl"
            />

            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/f_auto,q_auto,w_512/IMG-20260728-WA0000-removebg-preview_bztf7y.png"
              alt="Organic Mushroom Farm"
              width={320}
              height={192}
              priority
              sizes="256px"
              className="loading-logo relative z-10 h-auto max-h-28 w-64 object-contain"
            />
          </div>
        </div>

        {/* =====================================================
            Brand
        ====================================================== */}

        <h1
          className="text-xl font-semibold tracking-tight"
          style={{ color: "var(--text-heading)" }}
        >
          Organic Mushroom Farm
        </h1>

        <p
          className="mt-2 text-sm"
          style={{ color: "var(--text-body)" }}
        >
          Cultivating nature. Growing possibilities.
        </p>

        {/* =====================================================
            Loading Progress
        ====================================================== */}

        <div
          className="mt-7 h-1.5 w-44 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
          aria-hidden="true"
        >
          <div className="organic-progress h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-green-500" />
        </div>

        <span className="sr-only">
          Loading Organic Mushroom Farm website...
        </span>
      </div>

      {/* =====================================================
          Animations
      ====================================================== */}

      <style>{`
        /* =====================================================
           Logo breathing
        ====================================================== */

        .mushroom {
          animation: mushroom-breathe 2.4s ease-in-out infinite;
          transform-origin: center bottom;
        }

        @keyframes mushroom-breathe {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
          }

          50% {
            transform: translateX(-50%) scale(1.045);
          }
        }

        /* =====================================================
           Logo soft glow
        ====================================================== */

        .logo-glow {
          animation: logo-glow 3s ease-in-out infinite;
        }

        @keyframes logo-glow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.08);
          }
        }

        /* =====================================================
           Mycelium growth
        ====================================================== */

        .mycelium-line {
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 190;
          stroke-dashoffset: 190;
          animation: mycelium-grow 2.4s ease-out infinite;
        }

        .mycelium-2 {
          animation-delay: 0.15s;
        }

        .mycelium-3 {
          animation-delay: 0.3s;
        }

        .mycelium-4 {
          animation-delay: 0.45s;
        }

        @keyframes mycelium-grow {
          0% {
            stroke-dashoffset: 190;
            opacity: 0.15;
          }

          45% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: -25;
            opacity: 0.25;
          }
        }

        /* =====================================================
           Mycelium nodes
        ====================================================== */

        .mycelium-node {
          fill: #22C55E;
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: node-pulse 2.4s ease-in-out infinite;
        }

        .node-2 {
          animation-delay: 0.25s;
        }

        .node-3 {
          animation-delay: 0.45s;
        }

        .node-4 {
          animation-delay: 0.65s;
        }

        @keyframes node-pulse {
          0%,
          35% {
            opacity: 0;
            transform: scale(0.5);
          }

          55% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
        }

        /* =====================================================
           Loading bar
        ====================================================== */

        .organic-progress {
          animation: organic-progress 1.6s ease-in-out infinite;
        }

        @keyframes organic-progress {
          0% {
            transform: translateX(-150%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(350%);
          }
        }

        /* =====================================================
           Reduced motion accessibility
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .mushroom,
          .loading-logo,
          .logo-glow,
          .mycelium-line,
          .mycelium-node,
          .organic-progress {
            animation: none !important;
          }

          .mycelium-line {
            stroke-dashoffset: 0;
            opacity: 0.7;
          }

          .mycelium-node {
            opacity: 0.7;
          }

          .organic-progress {
            transform: translateX(0);
          }

          .mushroom {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}