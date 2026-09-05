"use client";

import React from "react";
import type { FarmConfig } from "./FarmConfigurator";
import { FileText } from "lucide-react";

type Props = {
  config: FarmConfig;
  className?: string;
};

export default function ProjectReport({ config, className = "" }: Props) {
  const downloadReport = () => {
    const racks = config.growingRooms * config.racksPerRoom;
    const rackLevels = racks * config.rackLevels;

    const report = {
      project: "Commercial Mushroom Farm Design & Turnkey Configuration",
      generatedAt: new Date().toISOString(),
      dimensions: {
        lengthMeters: config.farmLength,
        widthMeters: config.farmWidth,
        footprintAreaSqM: config.farmLength * config.farmWidth,
      },
      growingFacility: {
        growingRooms: config.growingRooms,
        racksPerRoom: config.racksPerRoom,
        rackLevels: config.rackLevels,
        totalRacks: racks,
        totalCultivationLevels: rackLevels,
        estimatedBedSurfaceAreaSqM: Math.round(rackLevels * 14.4),
      },
      climateInfrastructure: {
        hvacUnitsCount: config.growingRooms,
        hvacSpecification: "DX Inverter Precision AHU with VFD & G4/F9 Filtration",
        foggingSystemsCount: config.growingRooms,
        foggingSpecification: "70-Bar High Pressure Atomizing Nozzles (5–10 Micron)",
        environmentalSensorsCount: config.growingRooms * 3,
        sensorParameters: ["Air Temp (°C)", "Relative Humidity (%)", "CO2 Concentration (PPM)"],
        coldStorageFacility: config.coldStorage,
        coldStorageTemperatureRange: config.coldStorage ? "2°C to 4°C" : "N/A",
      },
      engineeringStandards: {
        envelopePanels: "80mm to 100mm PUF/PIR Sandwich Panels (B2 Fire Rated)",
        floorCoating: "Antimicrobial Seamless Polyurethane Screed with Coving",
        bioSecurityZones: ["Clean Corridors", "Sanitation Airlocks", "Isolated Substrate Processing"],
      },
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mushroom-farm-project-report-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={downloadReport}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-900 text-white shadow-md transition-all active:scale-95 ${className}`}
      title="Download comprehensive JSON technical configuration report"
    >
      <FileText className="w-3.5 h-3.5 text-emerald-400" />
      <span>JSON Report</span>
    </button>
  );
}
