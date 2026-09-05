"use client";

import { useState } from "react";

export type FarmViewerState = ReturnType<typeof useFarmViewerState>;

export function useFarmViewerState() {
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [measurementMode, setMeasurementMode] = useState(false);
  const [airflowEnabled, setAirflowEnabled] = useState(false);
  const [waterEnabled, setWaterEnabled] = useState(false);
  const [electricalEnabled, setElectricalEnabled] = useState(false);
  const [showXRay, setShowXRay] = useState(false);
  const [showExploded, setShowExploded] = useState(false);
  const [showSectionCut, setShowSectionCut] = useState(false);
  const [showBOQ, setShowBOQ] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  return {
    showFloorPlan,
    setShowFloorPlan,
    measurementMode,
    setMeasurementMode,
    airflowEnabled,
    setAirflowEnabled,
    waterEnabled,
    setWaterEnabled,
    electricalEnabled,
    setElectricalEnabled,
    showXRay,
    setShowXRay,
    showExploded,
    setShowExploded,
    showSectionCut,
    setShowSectionCut,
    showBOQ,
    setShowBOQ,
    showCompare,
    setShowCompare,
  };
}
