"use client";

import React, { useMemo } from "react";

type ExplodedViewProps = {
  enabled: boolean;
  amount: number;
  building?: React.ReactNode;
  growingRacks?: React.ReactNode;
  hvac?: React.ReactNode;
  airSystem?: React.ReactNode;
  waterSystem?: React.ReactNode;
  controlPanel?: React.ReactNode;
  coldStorage?: React.ReactNode;
  children?: React.ReactNode;
};

export default function ExplodedView({
  enabled,
  amount,
  building,
  growingRacks,
  hvac,
  airSystem,
  waterSystem,
  controlPanel,
  coldStorage,
  children,
}: ExplodedViewProps) {
  const offset = useMemo(
    () => (enabled ? amount : 0),
    [enabled, amount]
  );

  return (
    <group>
      {/* Building */}
      <group position={[0, 0, offset * -0.15]}>
        {building}
      </group>

      {/* Growing racks */}
      <group position={[0, offset * 0.35, 0]}>
        {growingRacks}
      </group>

      {/* HVAC */}
      <group position={[offset * 0.8, offset * 0.2, 0]}>
        {hvac}
      </group>

      {/* Air system */}
      <group position={[-offset * 0.8, offset * 0.2, 0]}>
        {airSystem}
      </group>

      {/* Water system */}
      <group position={[0, offset * 0.15, offset * 0.8]}>
        {waterSystem}
      </group>

      {/* Control panel */}
      <group position={[offset * 1.2, 0, 0]}>
        {controlPanel}
      </group>

      {/* Cold storage */}
      <group position={[0, offset * 0.4, -offset * 0.8]}>
        {coldStorage}
      </group>

      {children}
    </group>
  );
}
