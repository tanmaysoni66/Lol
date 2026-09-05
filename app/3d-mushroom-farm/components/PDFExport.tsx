"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";
import type { WebGLRenderer } from "three";
import { FileDown, Loader2 } from "lucide-react";

type Props = {
  renderer: WebGLRenderer | null;
  projectName?: string;
  configuration?: Record<string, string | number | boolean>;
  boq?: { name: string; quantity: string | number; unit?: string }[];
  measurements?: { distance: number; label?: string }[];
  className?: string;
};

export default function PDFExport({
  renderer,
  projectName = "Commercial Mushroom Farm",
  configuration = {},
  boq = [],
  measurements = [],
  className = "",
}: Props) {
  const [generating, setGenerating] = useState(false);

  const exportPDF = () => {
    // If renderer prop is null, find canvas element in document
    const canvas = renderer?.domElement || (document.querySelector("canvas") as HTMLCanvasElement | null);

    if (!canvas) {
      alert("3D viewer canvas is not ready yet. Please wait a moment.");
      return;
    }

    setGenerating(true);

    try {
      const image = canvas.toDataURL("image/png", 1.0);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // --- PAGE 1: 3D Render & Project Overview ---
      // Top header band
      pdf.setFillColor(15, 23, 42); // slate-900
      pdf.rect(0, 0, pageWidth, 28, "F");

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text(projectName, 15, 14);

      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(148, 163, 184); // slate-400
      pdf.text(
        `Commercial Facility Specification & 3D Architectural Blueprint  |  Generated: ${new Date().toLocaleDateString()}`,
        15,
        22
      );

      // 3D Canvas Image
      const imageMargin = 15;
      const imageWidth = pageWidth - imageMargin * 2;
      const aspect = canvas.height / canvas.width || 0.55;
      const calculatedHeight = imageWidth * aspect;
      const maxHeight = pageHeight - 48;
      const finalImageHeight = Math.min(calculatedHeight, maxHeight);

      pdf.addImage(image, "PNG", imageMargin, 34, imageWidth, finalImageHeight);

      // --- PAGE 2: Technical Configuration ---
      pdf.addPage();

      // Header
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, pageWidth, 22, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("1. Farm Technical Specifications & Spatial Dimensions", 15, 15);

      pdf.setTextColor(30, 41, 59);
      let y = 36;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");

      Object.entries(configuration).forEach(([key, value]) => {
        // Card row background
        pdf.setFillColor(248, 250, 252);
        pdf.roundedRect(15, y - 5, pageWidth - 30, 9, 1.5, 1.5, "F");

        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(15, 23, 42);
        pdf.text(formatLabel(key), 20, y + 1);

        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(2, 132, 199);
        pdf.text(String(value), pageWidth - 80, y + 1);

        y += 12;

        if (y > pageHeight - 20) {
          pdf.addPage();
          y = 30;
        }
      });

      // --- PAGE 3: Equipment Bill of Quantities (BOQ) ---
      if (boq.length > 0) {
        pdf.addPage();

        pdf.setFillColor(15, 23, 42);
        pdf.rect(0, 0, pageWidth, 22, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.text("2. Equipment Bill of Quantities (BOQ)", 15, 15);

        let boqY = 36;

        // Table header
        pdf.setFillColor(241, 245, 249);
        pdf.rect(15, boqY - 5, pageWidth - 30, 8, "F");
        pdf.setFontSize(9);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(100, 116, 139);
        pdf.text("EQUIPMENT / COMPONENT", 20, boqY);
        pdf.text("QUANTITY", pageWidth - 60, boqY);

        boqY += 9;

        boq.forEach((item, index) => {
          if (index % 2 === 1) {
            pdf.setFillColor(248, 250, 252);
            pdf.rect(15, boqY - 5, pageWidth - 30, 8, "F");
          }

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(10);
          pdf.setTextColor(30, 41, 59);
          pdf.text(item.name, 20, boqY);

          pdf.setFont("helvetica", "bold");
          pdf.setTextColor(5, 150, 105); // emerald-600
          pdf.text(`${item.quantity} ${item.unit || ""}`, pageWidth - 60, boqY);

          boqY += 8;

          if (boqY > pageHeight - 20) {
            pdf.addPage();
            boqY = 30;
          }
        });
      }

      // --- Measurements Section if any exist ---
      if (measurements.length > 0) {
        pdf.addPage();

        pdf.setFillColor(15, 23, 42);
        pdf.rect(0, 0, pageWidth, 22, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.text("3. Recorded Laser Spatial Measurements", 15, 15);

        let mY = 36;
        measurements.forEach((m, idx) => {
          pdf.setFillColor(248, 250, 252);
          pdf.roundedRect(15, mY - 5, pageWidth - 30, 9, 1.5, 1.5, "F");

          pdf.setFont("helvetica", "bold");
          pdf.setTextColor(15, 23, 42);
          pdf.text(m.label || `Measurement Point ${idx + 1}`, 20, mY + 1);

          pdf.setFont("helvetica", "bold");
          pdf.setTextColor(2, 132, 199);
          pdf.text(`${m.distance.toFixed(2)} meters`, pageWidth - 60, mY + 1);

          mY += 12;
        });
      }

      // Save PDF
      pdf.save("commercial-mushroom-farm-blueprint.pdf");
    } catch (error) {
      console.error("PDF export failed:", error);
      alert("Unable to generate PDF document. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={exportPDF}
      disabled={generating}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border border-white/10 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white transition-all active:scale-95 disabled:opacity-50 ${className}`}
      title="Export complete multi-page commercial project report with 3D screenshot & BOQ"
    >
      {generating ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
          <span>Creating PDF...</span>
        </>
      ) : (
        <>
          <FileDown className="w-3.5 h-3.5 text-emerald-400" />
          <span>Export PDF</span>
        </>
      )}
    </button>
  );
}

function formatLabel(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}
