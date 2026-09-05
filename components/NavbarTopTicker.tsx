"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Thermometer, Droplets, Calendar, Sparkles } from "lucide-react";

interface WeatherState {
  temp: number;
  humidity: number;
  country: string;
}

export default function NavbarTopTicker() {
  const [weather, setWeather] = useState<WeatherState>({
    temp: 24,
    humidity: 96,
    country: "India",
  });

  useEffect(() => {
    // Cache for session to eliminate repeated network calls
    const cached =
      typeof window !== "undefined"
        ? sessionStorage.getItem("omf_nav_country_weather")
        : null;
    if (cached) {
      try {
        setWeather(JSON.parse(cached));
        return;
      } catch (e) {
        // ignore
      }
    }

    let isMounted = true;

    async function fetchCountryAndWeather() {
      try {
        let lat = 23.1815;
        let lon = 79.9864;
        let country = "India";

        try {
          const res = await fetch("https://get.geojs.io/v1/ip/geo.json", {
            cache: "force-cache",
          });
          if (res.ok) {
            const data = await res.json();
            if (data.latitude && data.longitude) {
              lat = parseFloat(data.latitude);
              lon = parseFloat(data.longitude);
            }
            if (data.country) {
              country = data.country;
            }
          }
        } catch {
          // Fallback to default
        }

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
        const wRes = await fetch(weatherUrl);
        if (wRes.ok) {
          const wData = await wRes.json();
          const wState: WeatherState = {
            temp: Math.round(wData.current?.temperature_2m ?? 24),
            humidity: Math.round(wData.current?.relative_humidity_2m ?? 96),
            country,
          };
          if (isMounted) {
            setWeather(wState);
            try {
              sessionStorage.setItem(
                "omf_nav_country_weather",
                JSON.stringify(wState)
              );
            } catch {
              // ignore storage errors
            }
          }
        }
      } catch (err) {
        // Fallback silently
      }
    }

    fetchCountryAndWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  const countryDisplay = weather.country || "India";
  const flag =
    countryDisplay.toLowerCase().includes("india") || countryDisplay === "IN"
      ? "🇮🇳"
      : "🌍";

  return (
    <div className="w-full flex items-center justify-between text-[11px] sm:text-xs select-none">
      {/* Desktop / Tablet view: sleek high-contrast pill */}
      <div className="hidden md:flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-1.5 font-semibold">
          <span>{flag}</span>
          <span className="text-slate-900 dark:text-white">{countryDisplay}</span>
        </div>

        <span className="text-slate-300 dark:text-slate-700">•</span>

        <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-medium">
          <Thermometer className="w-3.5 h-3.5" />
          <span>{weather.temp}°C</span>
        </div>

        <span className="text-slate-300 dark:text-slate-700">•</span>

        <div className="flex items-center gap-1 text-cyan-700 dark:text-cyan-400 font-medium">
          <Droplets className="w-3.5 h-3.5" />
          <span>{weather.humidity}% RH</span>
        </div>

        <span className="text-slate-300 dark:text-slate-700">|</span>

        <Link
          href="/workshop"
          className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>New Batch: Starts In 2 Days</span>
          <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
        </Link>
      </div>

      {/* Mobile view: Silky smooth, lag-free CSS marquee ticker */}
      <div className="md:hidden w-full overflow-hidden relative py-0.5">
        <div className="flex items-center w-max animate-nav-ticker">
          {/* Loop items x 2 for seamless infinite scroll */}
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center gap-2.5 px-3 text-[11px] font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap"
            >
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <span>{flag}</span>
                <span>{countryDisplay}</span>
              </span>

              <span className="text-slate-400 dark:text-slate-600">•</span>

              <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold">
                <Thermometer className="w-3 h-3" />
                {weather.temp}°C
              </span>

              <span className="text-slate-400 dark:text-slate-600">•</span>

              <span className="flex items-center gap-1 text-cyan-700 dark:text-cyan-400 font-semibold">
                <Droplets className="w-3 h-3" />
                {weather.humidity}%
              </span>

              <span className="text-slate-400 dark:text-slate-600">|</span>

              <Link
                href="/workshop"
                className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>New Batch: Starts In 2 Days</span>
                <span>🍄</span>
              </Link>

              <span className="text-slate-300 dark:text-slate-700 mx-2">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
