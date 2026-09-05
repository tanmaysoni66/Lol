"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Thermometer, Droplets, Calendar, Sparkles, Phone } from "lucide-react";

interface WeatherState {
  temp: number;
  humidity: number;
  city: string;
  country: string;
}

export default function NavbarTopTicker() {
  const [weather, setWeather] = useState<WeatherState>({
    temp: 24,
    humidity: 68,
    city: "India",
    country: "India",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check session cache to avoid repeated API requests
    const cached = typeof window !== "undefined" ? sessionStorage.getItem("omf_nav_weather") : null;
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setWeather(parsed);
        setIsLoaded(true);
        return;
      } catch (e) {
        // ignore
      }
    }

    let isMounted = true;

    async function fetchGeoAndWeather() {
      try {
        let lat = 23.1815;
        let lon = 79.9864;
        let city = "Jabalpur";
        let country = "India";

        try {
          const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "force-cache" });
          if (res.ok) {
            const data = await res.json();
            if (data.latitude && data.longitude) {
              lat = parseFloat(data.latitude);
              lon = parseFloat(data.longitude);
              city = data.city || "Local";
              country = data.country || "India";
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
            humidity: Math.round(wData.current?.relative_humidity_2m ?? 68),
            city,
            country,
          };
          if (isMounted) {
            setWeather(wState);
            setIsLoaded(true);
            try {
              sessionStorage.setItem("omf_nav_weather", JSON.stringify(wState));
            } catch {
              // ignore storage errors
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setIsLoaded(true);
        }
      }
    }

    fetchGeoAndWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full bg-emerald-950/90 dark:bg-slate-950/95 text-emerald-100 dark:text-emerald-200 text-[10px] sm:text-[11px] font-medium py-1 px-3 sm:px-4 border-b border-emerald-500/20 dark:border-white/10 flex items-center justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Live Location + Temp + Humidity */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-1 text-emerald-300 dark:text-emerald-400 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden xs:inline">LIVE</span>
          </div>

          <div className="flex items-center gap-1 text-slate-200">
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[90px] sm:max-w-none">{weather.city || weather.country}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-white">
            <Thermometer className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{weather.temp}°C</span>
          </div>

          <div className="flex items-center gap-1 text-cyan-300">
            <Droplets className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>{weather.humidity}% <span className="hidden sm:inline">RH</span></span>
          </div>
        </div>

        {/* Center / Right: Batch Start Highlight & Action */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 font-bold text-[9px] sm:text-[10px]">
            <Calendar className="w-3 h-3 text-emerald-300 shrink-0" />
            <span>New Batch: Starts In 2 Days 🍄</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-slate-300 text-[10px]">
            <Link
              href="/training"
              className="hover:text-white underline underline-offset-2 transition-colors font-semibold"
            >
              Enroll Training
            </Link>
            <span className="text-white/30">•</span>
            <a
              href="tel:+919203544140"
              className="hover:text-emerald-300 flex items-center gap-1 font-semibold transition-colors"
            >
              <Phone className="w-2.5 h-2.5" />
              <span>+91 9203544140</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
