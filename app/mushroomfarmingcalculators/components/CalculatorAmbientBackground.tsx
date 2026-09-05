"use client";

import React, { useEffect, useRef } from "react";

export default function CalculatorAmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate floating bioluminescent spores & mycelial particles
    interface Spore {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      baseAlpha: number;
      color: string;
      glowColor: string;
      phase: number;
      speed: number;
    }

    const sporeColors = [
      { fill: "rgba(16, 185, 129, ", glow: "rgba(52, 211, 153, " }, // Emerald
      { fill: "rgba(168, 85, 247, ", glow: "rgba(192, 132, 252, " }, // Purple
      { fill: "rgba(6, 182, 212, ", glow: "rgba(34, 211, 238, " },   // Cyan
      { fill: "rgba(245, 158, 11, ", glow: "rgba(251, 191, 36, " },  // Amber
    ];

    const sporeCount = Math.min(Math.floor((width * height) / 18000), 50);
    const spores: Spore[] = [];

    for (let i = 0; i < sporeCount; i++) {
      const colorScheme = sporeColors[Math.floor(Math.random() * sporeColors.length)];
      const baseAlpha = Math.random() * 0.45 + 0.2;
      spores.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1.2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.15, // gently floating upward like mushroom spores
        alpha: baseAlpha,
        baseAlpha,
        color: colorScheme.fill,
        glowColor: colorScheme.glow,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting mycelium filaments between close spores
      for (let i = 0; i < spores.length; i++) {
        for (let j = i + 1; j < spores.length; j++) {
          const dx = spores[i].x - spores[j].x;
          const dy = spores[i].y - spores[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineOpacity = (1 - dist / 110) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineOpacity})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(spores[i].x, spores[i].y);
            ctx.lineTo(spores[j].x, spores[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update each floating spore
      for (const spore of spores) {
        spore.x += spore.vx;
        spore.y += spore.vy;
        spore.phase += spore.speed;
        spore.alpha = spore.baseAlpha + Math.sin(spore.phase) * 0.2;

        // Wrap around borders
        if (spore.y < -10) {
          spore.y = height + 10;
          spore.x = Math.random() * width;
        }
        if (spore.x < -10) spore.x = width + 10;
        if (spore.x > width + 10) spore.x = -10;

        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${spore.glowColor}0.8)`;
        ctx.fillStyle = `${spore.color}${Math.max(0.05, spore.alpha)})`;
        ctx.beginPath();
        ctx.arc(spore.x, spore.y, spore.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 3D Liquid Animated Gradient Blobs across the entire page height */}
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-emerald-500/20 dark:bg-emerald-500/15 blur-[140px] rounded-full animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[520px] h-[520px] bg-purple-500/20 dark:bg-purple-500/15 blur-[150px] rounded-full animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-2/3 -left-32 w-[500px] h-[500px] bg-cyan-500/20 dark:bg-cyan-500/15 blur-[140px] rounded-full animate-pulse"
        style={{ animationDuration: "9s", animationDelay: "3s" }}
      />
      <div
        className="absolute -bottom-24 right-1/4 w-[450px] h-[450px] bg-amber-500/15 dark:bg-amber-500/10 blur-[130px] rounded-full animate-pulse"
        style={{ animationDuration: "7.5s", animationDelay: "2s" }}
      />

      {/* Floating Spores Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80 dark:opacity-90"
      />
    </div>
  );
}
