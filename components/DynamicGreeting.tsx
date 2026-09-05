"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DynamicGreeting = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [weather, setWeather] = useState<{
    temp?: number;
    humidity?: number;
    dewPoint?: number;
    windSpeed?: number;
    uvIndex?: number;
    rain?: number;
    cloudCover?: number;
    airPressure?: number;
    locationStr: string;
  } | null>(null);
  const [greeting, setGreeting] = useState({ text: 'Good Morning', icon: '🌅' });

  // 1. Determine Time-based Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting({ text: 'Good Morning', icon: '🌅' });
    else if (hour >= 12 && hour < 17) setGreeting({ text: 'Good Afternoon', icon: '☀️' });
    else if (hour >= 17 && hour < 21) setGreeting({ text: 'Good Evening', icon: '🌇' });
    else setGreeting({ text: 'Good Night', icon: '🌙' });
  }, []);

  // 2. Fetch Location and Weather Data with Session Caching
  useEffect(() => {
    // Check session cache first for instant render without network lag
    try {
      const cached = sessionStorage.getItem('omf_dynamic_weather_cache');
      if (cached) {
        setWeather(JSON.parse(cached));
        return;
      }
    } catch {
      // ignore storage error
    }

    const fetchLocationAndWeather = async () => {
      try {
        let lat = 28.6139;
        let lon = 77.2090;
        let country = "India";

        try {
          const ipRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
          if (ipRes.ok) {
            const ipData = await ipRes.json();
            if (ipData.latitude && ipData.longitude) {
              lat = parseFloat(ipData.latitude);
              lon = parseFloat(ipData.longitude);
            }
            if (ipData.country) country = ipData.country;
          }
        } catch {
          // fallback location
        }

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,wind_speed_10m,uv_index,precipitation,cloud_cover,surface_pressure`;
        const wRes = await fetch(weatherUrl);
        if (wRes.ok) {
          const wData = await wRes.json();
          const weatherObj = {
            temp: Math.round(wData.current?.temperature_2m ?? 24),
            humidity: Math.round(wData.current?.relative_humidity_2m ?? 96),
            dewPoint: Math.round(wData.current?.dew_point_2m ?? 21),
            windSpeed: Math.round(wData.current?.wind_speed_10m ?? 8),
            uvIndex: Math.round(wData.current?.uv_index ?? 3),
            rain: Math.round(wData.current?.precipitation ?? 0),
            cloudCover: Math.round(wData.current?.cloud_cover ?? 40),
            airPressure: Math.round(wData.current?.surface_pressure ?? 1012),
            locationStr: country || "India"
          };
          setWeather(weatherObj);
          try {
            sessionStorage.setItem('omf_dynamic_weather_cache', JSON.stringify(weatherObj));
          } catch {
            // ignore
          }
        }
      } catch (error) {
        console.error("Error fetching location or weather:", error);
      }
    };

    fetchLocationAndWeather();
  }, []);

  const getSuggestion = (temp: number) => {
    if (temp < 15) return "Too cold, needs heating ❄️";
    if (temp >= 15 && temp < 20) return "Best for Button Mushroom 🍄";
    if (temp >= 20 && temp <= 30) return "Perfect for Oyster Mushroom 🍄";
    if (temp > 30 && temp <= 38) return "Ideal for Milky Mushroom 🌾";
    return "Too hot, needs cooling 🌡️";
  };

  // 3. Slides list
  const rawSlides = weather ? [
    { id: 'welcome', content: <>Welcome To Organic Mushroom Farm <span className="inline-block">🍄</span></> },
    { id: 'greeting', content: <>{greeting.text} <span className="inline-block">{greeting.icon}</span></> },
    { id: 'temp', content: <>{weather.locationStr}: {weather.temp}°C, Humidity {weather.humidity}% <span className="inline-block">🌡️</span></> },
    { id: 'cloud', content: <>Cloud Cover: {weather.cloudCover}% <span className="inline-block">☁️</span></> },
    { id: 'dew', content: <>Dew Point: {weather.dewPoint}°C <span className="inline-block">🌫️</span></> },
    { id: 'wind', content: <>Wind Speed: {weather.windSpeed} km/h <span className="inline-block">💨</span></> },
    { id: 'uv', content: <>UV Index: {weather.uvIndex} <span className="inline-block">☀️</span></> },
    weather.rain > 0 ? { id: 'rain', content: <>Rain: {weather.rain} mm <span className="inline-block">🌧️</span></> } : null,
    { id: 'pressure', content: <>Air Pressure: {weather.airPressure} hPa <span className="inline-block">📉</span></> },
    { id: 'suggestion', content: <>{weather.temp !== undefined ? getSuggestion(weather.temp) : ''}</> }
  ] : [
    { id: 'welcome', content: <>Welcome To Organic Mushroom Farm <span className="inline-block">🍄</span></> },
    { id: 'greeting', content: <>{greeting.text} <span className="inline-block">{greeting.icon}</span></> },
    { id: 'weather-default', content: <>India: 24°C, Humidity 96% <span className="inline-block">🌡️</span></> }
  ];

  // Filter out any null slides
  const slides = rawSlides.filter((slide): slide is NonNullable<typeof rawSlides[number]> => slide !== null && slide.content !== null);

  // Cycle continuously through all slides without freezing
  useEffect(() => {
    if (slides.length <= 1) return;
    const timeout = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3200);
    
    return () => clearTimeout(timeout);
  }, [slideIndex, slides.length]);

  return (
    <div className="relative text-[10px] xs:text-[11px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-normal flex items-center h-4.5 sm:h-5 overflow-hidden will-change-transform">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[slideIndex]?.id || 'fallback'}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-center gap-1 whitespace-nowrap"
        >
          {slides[slideIndex]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicGreeting;
