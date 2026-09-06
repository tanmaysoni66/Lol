"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Thermometer, Droplets, Wind, Cloud, CloudRain, Sun, Gauge, CheckCircle2, AlertTriangle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

import WebMCPClimateTracker from "./WebMCPClimateTracker";

export default function ClimateTrackerClient() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  // WebMCP integration
  const [mcpTemp, setMcpTemp] = useState<number | undefined>(undefined);
  const [mcpHum, setMcpHum] = useState<number | undefined>(undefined);
  const [mcpCo2, setMcpCo2] = useState<number | undefined>(undefined);

  // Use either the GPS fetched weather or the WebMCP supplied values
  const currentTemp = weatherData?.temp ?? mcpTemp;
  const currentHum = weatherData?.humidity ?? mcpHum;

  const getTempStatus = (temp: number) => {
    if (temp >= 14 && temp <= 18) return { label: "Optimal for Fruiting", color: "text-green-500", icon: <CheckCircle2 className="w-4 h-4 text-green-500" /> };
    if (temp >= 22 && temp <= 25) return { label: "Optimal for Spawn Run", color: "text-green-500", icon: <CheckCircle2 className="w-4 h-4 text-green-500" /> };
    if (temp < 14) return { label: "Too Cold (Heating required)", color: "text-red-500", icon: <AlertCircle className="w-4 h-4 text-red-500" /> };
    if (temp > 25) return { label: "Warning: High Temp (Risk)", color: "text-red-500", icon: <AlertTriangle className="w-4 h-4 text-red-500" /> };
    return { label: "Acceptable", color: "text-yellow-500", icon: <CheckCircle2 className="w-4 h-4 text-yellow-500" /> };
  };

  const getHumidityStatus = (hum: number) => {
    if (hum >= 80 && hum <= 90) return { label: "Perfect Moisture", color: "text-green-500", icon: <CheckCircle2 className="w-4 h-4 text-green-500" /> };
    if (hum >= 70 && hum < 80) return { label: "Acceptable", color: "text-yellow-500", icon: <CheckCircle2 className="w-4 h-4 text-yellow-500" /> };
    if (hum < 70) return { label: "Critical: Low Humidity", color: "text-red-500", icon: <AlertTriangle className="w-4 h-4 text-red-500" /> };
    return { label: "High Humidity", color: "text-yellow-500", icon: <AlertCircle className="w-4 h-4 text-yellow-500" /> };
  };

  const handleTrackLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // 1. Fetch Reverse Geocoding
          let locationStr = "Unknown Location";
          try {
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
            if (geoRes.ok) {
              const geoData = await geoRes.json();
              const parts = [geoData.city || geoData.locality, geoData.principalSubdivision, geoData.countryName].filter(Boolean);
              if (parts.length > 0) locationStr = parts.join(", ");
            }
          } catch (e) {
            console.error("Geocoding failed", e);
          }

          // 2. Fetch Weather
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,wind_speed_10m,uv_index,precipitation,cloud_cover,surface_pressure`;
          const wRes = await fetch(weatherUrl);
          
          if (!wRes.ok) throw new Error("Failed to fetch weather data");
          
          const wData = await wRes.json();
          
          const weatherObj = {
            temp: Math.round(wData.current?.temperature_2m ?? 0),
            humidity: Math.round(wData.current?.relative_humidity_2m ?? 0),
            dewPoint: Math.round(wData.current?.dew_point_2m ?? 0),
            windSpeed: Math.round(wData.current?.wind_speed_10m ?? 0),
            uvIndex: Math.round(wData.current?.uv_index ?? 0),
            rain: Math.round(wData.current?.precipitation ?? 0),
            cloudCover: Math.round(wData.current?.cloud_cover ?? 0),
            airPressure: Math.round(wData.current?.surface_pressure ?? 0),
            locationStr: locationStr
          };

          setWeatherData(weatherObj);

          // 3. Save to localStorage & Dispatch Event
          localStorage.setItem("preciseWeather", JSON.stringify(weatherObj));
          window.dispatchEvent(new Event("preciseWeatherUpdated"));

        } catch (err: any) {
          setError(err.message || "Something went wrong.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error(err);
        setError("Location access denied or unavailable. Please enable GPS and allow location access.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <WebMCPClimateTracker
          getClimateData={() => ({
            temperature: currentTemp,
            humidity: currentHum,
            co2: mcpCo2
          })}
          onClimateUpdate={(data) => {
            if (typeof data.temperature === 'number') setMcpTemp(data.temperature);
            if (typeof data.humidity === 'number') setMcpHum(data.humidity);
            if (typeof data.co2 === 'number') setMcpCo2(data.co2);
          }}
        />
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            <span>Farm Climate Intelligence</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Mushroom Farm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Climate Tracker</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Allow location access to check your farm's live environment with a single click. Equip yourself with accurate data to make your mushroom growing process even more successful.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Thermometer className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Optimize Your Yield</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Manage ventilation, misting, and cooling at the right time to maximize your mushroom harvest.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Prevent Diseases</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Monitor excess humidity and overheating to prevent fungal infections like bacterial blotch and cobweb mold.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Smart Agriculture</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Streamline organic farming and modern digital agriculture with ease.
            </p>
          </div>
        </div>

        {/* Action / Results Section */}
        <div id="climate-guidance" className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
          
          <AnimatePresence mode="wait">
            {!weatherData && currentTemp === undefined ? (
              <motion.div 
                key="action"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6 w-full max-w-md mx-auto"
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Start Tracking Your Farm's Climate Today</h2>
                
                {error && (
                  <div className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm text-left flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <button
                  onClick={handleTrackLocation}
                  disabled={loading}
                  className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-slate-900/10 dark:shadow-emerald-900/20"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Acquiring GPS Signal...
                    </>
                  ) : (
                    <>
                      <MapPin className="w-5 h-5" />
                      Start Tracking Now
                    </>
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full space-y-8"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Tracking Active
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Live Farm Environment</h2>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4" /> {weatherData.locationStr}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  {/* Temp Card */}
                  <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                        <Thermometer className="w-5 h-5 text-orange-500" /> Temperature
                      </div>
                      <span className="text-2xl font-black text-slate-900 dark:text-white">{currentTemp}°C</span>
                    </div>
                    {currentTemp !== undefined && (
                      <div className={`flex items-center gap-2 text-sm font-semibold bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 ${getTempStatus(currentTemp).color}`}>
                        {getTempStatus(currentTemp).icon}
                        {getTempStatus(currentTemp).label}
                      </div>
                    )}
                  </div>

                  {/* Humidity Card */}
                  <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                        <Droplets className="w-5 h-5 text-blue-500" /> Relative Humidity
                      </div>
                      <span className="text-2xl font-black text-slate-900 dark:text-white">{currentHum}%</span>
                    </div>
                    {currentHum !== undefined && (
                      <div className={`flex items-center gap-2 text-sm font-semibold bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 ${getHumidityStatus(currentHum).color}`}>
                        {getHumidityStatus(currentHum).icon}
                        {getHumidityStatus(currentHum).label}
                      </div>
                    )}
                  </div>
                  {/* CO2 Card */}
                  {mcpCo2 !== undefined && (
                    <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3 sm:col-span-2 md:col-span-1 md:col-start-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                          <Wind className="w-5 h-5 text-emerald-500" /> CO₂ Concentration
                        </div>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">{mcpCo2} ppm</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm font-semibold bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 ${mcpCo2 > 1000 ? 'text-red-500' : 'text-green-500'}`}>
                        {mcpCo2 > 1000 ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                        {mcpCo2 > 1000 ? 'High CO₂ Level (Ventilation required)' : 'Optimal CO₂ Level'}
                      </div>
                    </div>
                  )}
                </div>

                {/* Additional Metrics */}
                {weatherData && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><Droplets className="w-3.5 h-3.5" /> Dew Point</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.dewPoint}°C</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><Wind className="w-3.5 h-3.5" /> Wind Speed</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.windSpeed} km/h</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><Sun className="w-3.5 h-3.5" /> UV Index</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.uvIndex}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><CloudRain className="w-3.5 h-3.5" /> Precipitation</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.rain} mm</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><Cloud className="w-3.5 h-3.5" /> Cloud Cover</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.cloudCover}%</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1"><Gauge className="w-3.5 h-3.5" /> Air Pressure</div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{weatherData.airPressure} hPa</span>
                  </div>
                </div>
                )}

                <div className="pt-4">
                  <button 
                    onClick={handleTrackLocation} 
                    disabled={loading}
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center justify-center gap-1 mx-auto"
                  >
                    <Loader2 className={`w-4 h-4 ${loading ? 'animate-spin' : 'hidden'}`} />
                    Refresh Data
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
