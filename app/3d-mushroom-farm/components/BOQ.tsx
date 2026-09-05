"use client";

import React from "react";
import type { FarmConfig } from "./FarmConfigurator";
import { X, Layers, Download, CheckCircle2 } from "lucide-react";

type Props = {
  config: FarmConfig;
  onClose?: () => void;
};

export default function BOQ({ config, onClose }: Props) {
  const racks = config.growingRooms * config.racksPerRoom;
  const rackLevels = racks * config.rackLevels;
  const bedArea = Math.round(rackLevels * 1.2 * 12); // ~14.4 m2 per rack level
  const hvacUnits = config.growingRooms;
  const foggerSystems = config.growingRooms;
  const sensors = config.growingRooms * 3;
  const ledLights = racks * config.rackLevels;
  const pufArea = Math.round(
    2 * (config.farmLength * 4 + config.farmWidth * 4) +
      config.farmLength * config.farmWidth +
      config.growingRooms * (config.farmWidth * 4)
  );

  const items = [
    { name: "Cultivation Growing Rooms", spec: "Airtight PUF/PIR 80mm Insulated Chambers", quantity: config.growingRooms, unit: "Rooms" },
    { name: "Heavy-Duty Growing Racks", spec: "Hot-Dip Galvanized Multi-Tier Steel", quantity: racks, unit: "Racks" },
    { name: "Tiered Growing Shelves", spec: "High-Yield Food Grade Mesh Beds", quantity: rackLevels, unit: "Shelves" },
    { name: "Total Cultivation Canopy Area", spec: "Vertical Cubic Growing Surface", quantity: bedArea, unit: "m²" },
    { name: "Precision AHU / HVAC Units", spec: "DX Inverter with Variable Air Circulation", quantity: hvacUnits, unit: "Units" },
    { name: "High-Pressure Fogging Kits", spec: "70-Bar High Pressure Ceramic Nozzles (5–10µ)", quantity: foggerSystems, unit: "Systems" },
    { name: "Environmental NDIR Sensors", spec: "Temperature, Humidity & CO₂ Transmitter", quantity: sensors, unit: "Sensors" },
    { name: "Waterproof LED Light Fixtures", spec: "IP67 Harvesting & Inspection Luminescence", quantity: ledLights, unit: "Fixtures" },
    { name: "Cold Storage Post-Harvest Unit", spec: "2°C–4°C Holding Room with PUF Enclosure", quantity: config.coldStorage ? 1 : 0, unit: "Unit" },
    { name: "Modular PUF Cleanroom Panels", spec: "0.5mm PPGI Skin with High Density Core", quantity: pufArea, unit: "m²" },
  ];

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Equipment,Specification,Quantity,Unit", ...items.map((i) => `"${i.name}","${i.spec}",${i.quantity},"${i.unit}"`)].join(
        "\n"
      );
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mushroom-farm-boq.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 text-slate-800 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Bill of Quantities (BOQ) &amp; Equipment
              </h2>
              <p className="text-xs text-slate-500">
                Commercial sizing based on {config.farmLength}m × {config.farmWidth}m layout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-y-auto p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-2.5">Equipment &amp; System</th>
                <th className="pb-2.5 hidden sm:table-cell">Technical Specification</th>
                <th className="pb-2.5 text-right">Quantity</th>
                <th className="pb-2.5 text-right pl-2">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {items.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 font-semibold text-slate-800">{item.name}</td>
                  <td className="py-3 text-xs text-slate-500 hidden sm:table-cell">{item.spec}</td>
                  <td className="py-3 text-right font-mono font-bold text-emerald-700">{item.quantity}</td>
                  <td className="py-3 text-right text-xs text-slate-400 pl-2">{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Quantities automatically recalculate based on the active 3D farm dimensions and room configurations. For vendor quotation or structural engineering drawings, export the project PDF.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
