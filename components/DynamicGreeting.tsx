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
  const [greeting, setGreeting] = useState({ text: 'Good Day', icon: '☀️' });

  // 1. Determine Time Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting({ text: 'Good Morning', icon: '🌅' });
    else if (hour >= 12 && hour < 17) setGreeting({ text: 'Good Afternoon', icon: '☀️' });
    else if (hour >= 17 && hour < 21) setGreeting({ text: 'Good Evening', icon: '🌇' });
    else setGreeting({ text: 'Good Night', icon: '🌙' });
  }, []);

  // 2. Fetch Location and Weather Data
  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        let lat, lon, city, country;
        try {
          // Primary Geo IP fetch
          const ipRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
          const ipData = await ipRes.json();
          lat = ipData.latitude;
          lon = ipData.longitude;
          city = ipData.city;
          country = ipData.country;
        } catch (primaryError) {
          try {
            // Secondary Fallback
            const fbRes = await fetch('https://ipapi.co/json/');
            const fbData = await fbRes.json();
            lat = fbData.latitude;
            lon = fbData.longitude;
            city = fbData.city;
            country = fbData.country_name;
          } catch (secondaryError) {
            // Ultimate fallback
            lat = 28.6139;
            lon = 77.2090;
            city = "New Delhi";
            country = "India";
          }
        }

        if (lat && lon) {
          const locationStr = country || "Your Location";
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,wind_speed_10m,uv_index,precipitation,cloud_cover,surface_pressure`;
          const wRes = await fetch(weatherUrl);
          const wData = await wRes.json();
          
          setWeather({
            temp: wData.current?.temperature_2m ?? 0,
            humidity: wData.current?.relative_humidity_2m ?? 0,
            dewPoint: wData.current?.dew_point_2m ?? 0,
            windSpeed: wData.current?.wind_speed_10m ?? 0,
            uvIndex: wData.current?.uv_index ?? 0,
            rain: wData.current?.precipitation ?? 0,
            cloudCover: wData.current?.cloud_cover ?? 0,
            airPressure: wData.current?.surface_pressure ?? 0,
            locationStr
          });
        }
      } catch (error) {
        console.error("Error fetching IP location or weather:", error);
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

  // 3. Loop Manager with Filter for Missing Data
  const rawSlides = weather ? [
    { id: 'welcome', content: <>Welcome To Organic Mushroom Farm <span className="animate-pulse inline-block">🍄</span></> },
    { id: 'greeting', content: <>{greeting.text} <span className="animate-pulse inline-block">{greeting.icon}</span></> },
    weather.dewPoint !== undefined ? { id: 'dew', content: <>Dew Point: {weather.dewPoint}°C <span className="animate-pulse inline-block">🌫️</span></> } : null,
    weather.windSpeed !== undefined ? { id: 'wind', content: <>Wind Speed: {weather.windSpeed} km/h <span className="animate-pulse inline-block">💨</span></> } : null,
    weather.uvIndex !== undefined ? { id: 'uv', content: <>UV Index: {weather.uvIndex} <span className="animate-pulse inline-block">☀️</span></> } : null,
    weather.rain !== undefined ? { id: 'rain', content: <>Rain: {weather.rain} mm <span className="animate-pulse inline-block">🌧️</span></> } : null,
    weather.cloudCover !== undefined ? { id: 'cloud', content: <>Cloud Cover: {weather.cloudCover}% <span className="animate-pulse inline-block">☁️</span></> } : null,
    weather.airPressure !== undefined ? { id: 'pressure', content: <>Air Pressure: {weather.airPressure} hPa <span className="animate-pulse inline-block">📉</span></> } : null,
    { id: 'suggestion', content: <>{weather.temp !== undefined ? getSuggestion(weather.temp) : ''}</> },
    { id: 'weather', content: <>{weather.locationStr}: {weather.temp}°C, Hum {weather.humidity}% <span className="animate-pulse inline-block">🌡️</span></> }
  ] : [
    { id: 'welcome', content: <>Welcome To Organic Mushroom Farm <span className="animate-pulse inline-block">🍄</span></> },
    { id: 'greeting', content: <>{greeting.text} <span className="animate-pulse inline-block">{greeting.icon}</span></> }
  ];

  // Filter out any null slides
  const slides = rawSlides.filter((slide): slide is NonNullable<typeof rawSlides[number]> => slide !== null);

  useEffect(() => {
    if (slideIndex >= slides.length - 1) return; // Stop at the final slide
    const timeout = setTimeout(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3500);
    
    return () => clearTimeout(timeout);
  }, [slideIndex, slides.length]);

  return (
    <div className="relative text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5 tracking-wide flex items-center h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[slideIndex]?.id || 'fallback'}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-1.5 whitespace-nowrap"
        >
          {slides[slideIndex]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicGreeting;
