"use client";

import { useEffect, useState } from "react";

export type ClimateValues = {
  temperature: number;
  humidity: number;
  co2: number;
  airflow: number;
};

export default function useClimateSimulation({
  hvac,
  fogger,
  exhaust,
  freshAir,
}: {
  hvac: boolean;
  fogger: boolean;
  exhaust: boolean;
  freshAir: boolean;
}): ClimateValues {
  const [values, setValues] = useState<ClimateValues>({
    temperature: 24,
    humidity: 80,
    co2: 800,
    airflow: 0.5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setValues((current) => {
        let temperature = current.temperature;
        let humidity = current.humidity;
        let co2 = current.co2;
        let airflow = current.airflow;

        if (hvac) {
          temperature -= 0.08;
        } else {
          temperature += 0.02;
        }

        if (fogger) {
          humidity += 0.35;
        } else {
          humidity -= 0.08;
        }

        if (exhaust) {
          co2 -= 12;
          airflow += 0.08;
        } else {
          airflow -= 0.02;
        }

        if (freshAir) {
          co2 -= 8;
          airflow += 0.05;
        } else {
          airflow -= 0.01;
        }

        temperature = Math.max(15, Math.min(35, temperature));
        humidity = Math.max(40, Math.min(98, humidity));
        co2 = Math.max(300, Math.min(3000, co2));
        airflow = Math.max(0, Math.min(3, airflow));

        return {
          temperature,
          humidity,
          co2,
          airflow,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hvac, fogger, exhaust, freshAir]);

  return values;
}
