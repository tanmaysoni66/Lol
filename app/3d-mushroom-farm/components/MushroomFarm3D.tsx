"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Grid, Environment } from "@react-three/drei";
import CommercialFarm, { rooms, Room } from "./CommercialFarm";
import Equipment, { EquipmentType } from "./Equipment";
import EquipmentPanel from "./EquipmentPanel";
import EquipmentXRay from "./EquipmentXRay";
import ClimateDashboard from "./ClimateDashboard";
import useClimateSimulation from "./ClimateSimulation";
import Airflow from "./Airflow";
import FarmConfigurator, { FarmConfig } from "./FarmConfigurator";
import DynamicRacks from "./DynamicRacks";
import FarmCapacity from "./FarmCapacity";
import GrowthSimulation, { GrowthStage } from "./GrowthSimulation";
import MushroomGrowth from "./MushroomGrowth";
import ProjectEstimate from "./ProjectEstimate";
import { createEnquiryPayload } from "./enquiryPayload";
import XRayControls, {
  ViewMode,
  LayerArchitecture,
  SystemVisibility,
} from "./XRayControls";
import SystemConnections, { SystemConnection } from "./SystemConnections";
import PUFPanelDetails from "./PUFPanelDetails";
import CameraControls, { CameraPreset } from "./CameraControls";
import ExplodedView from "./ExplodedView";
import ExplodedViewControls from "./ExplodedViewControls";
import MeasurementTool from "./MeasurementTool";
import FloorPlan2D from "./FloorPlan2D";
import type { FarmLayout } from "./LayoutTypes";
import AirflowSystem from "./AirflowSystem";
import AirflowControls from "./AirflowControls";
import WaterSystem from "./WaterSystem";
import ElectricalSystem from "./ElectricalSystem";
import BOQ from "./BOQ";
import ProjectReport from "./ProjectReport";
import {
  saveConfiguration,
  shareConfiguration,
  loadConfigurationFromURL,
} from "./ConfigurationStorage";
import CompareDesigns from "./CompareDesigns";
import ScreenshotCapture from "./ScreenshotCapture";
import PDFExport from "./PDFExport";
import {
  ArrowRight,
  RotateCcw,
  Box,
  CheckCircle2,
  Maximize2,
  Minimize2,
  Droplets,
  Zap,
  ClipboardList,
  ArrowLeftRight,
  Bookmark,
  Share2,
  Check,
} from "lucide-react";

// Production sequence flow requested
const PROCESS_STEPS = [
  { id: "raw", name: "RAW MATERIAL", roomName: "Raw Material Storage" },
  { id: "compost", name: "COMPOST / SUBSTRATE", roomName: "Compost / Substrate Yard" },
  { id: "pasteur", name: "PASTEURIZATION / STERILIZATION", roomName: "Pasteurization / Sterilization" },
  { id: "spawn", name: "SPAWNING", roomName: "Spawning Room" },
  { id: "incubation", name: "INCUBATION", roomName: "Incubation Room" },
  { id: "growing", name: "GROWING ROOM 1 / 2", roomName: "Growing Room 1" },
  { id: "harvest", name: "HARVESTING", roomName: "Harvesting Area" },
  { id: "pack", name: "PACKING", roomName: "Packing Area" },
  { id: "cold", name: "COLD STORAGE", roomName: "Cold Storage" },
  { id: "dispatch", name: "DISPATCH", roomName: "Cold Storage" },
];

// Equipment coordinates map for positioning individual X-Ray inspection frame
const equipmentPositions: Record<EquipmentType, [number, number, number]> = {
  HVAC: [0, 5, 2],
  Fogger: [-1.5, 4.5, 2],
  "Humidity Sensor": [1.5, 3, 2],
  "Temperature Sensor": [2, 3.5, 2],
  "CO₂ Sensor": [2.5, 2.8, 2],
  "Exhaust Fan": [4, 4, 0],
  "Fresh Air Fan": [-4, 4, 0],
  "Air Filter": [-3, 4, 2],
  Rack: [0, 0, 2],
  "Control Panel": [3, 1.2, 2],
  "Water Line": [-2, 2, 2],
  Drainage: [0, 0.1, 3],
};

function FarmBase({
  xray = false,
  viewMode = "normal",
  explodedProgress = 0,
  cutawayProgress = 0.5,
  cutawayAxis = "z",
  visible = true,
}: {
  xray?: boolean;
  viewMode?: ViewMode;
  explodedProgress?: number;
  cutawayProgress?: number;
  cutawayAxis?: "x" | "z";
  visible?: boolean;
}) {
  if (!visible) return null;

  const isExploded = viewMode === "exploded";
  const expFactor = isExploded ? explodedProgress * 5 : 0;
  const isCutaway = viewMode === "cutaway";

  // In cutaway mode, front wall is omitted so you look straight inside the rooms!
  const showFrontWall = !isCutaway;

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[22, 0.3, 16]} />
        <meshStandardMaterial
          color="#64748b"
          roughness={0.7}
          transparent={xray || isCutaway}
          opacity={xray ? 0.35 : 1.0}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-11 - expFactor, 3, 0]}>
        <boxGeometry args={[0.3, 6, 16]} />
        <meshStandardMaterial
          color="#e2e8f0"
          transparent
          opacity={xray ? 0.08 : isCutaway && cutawayAxis === "x" ? 0.12 : 0.6}
        />
      </mesh>

      {/* Right wall */}
      <mesh position={[11 + expFactor, 3, 0]}>
        <boxGeometry args={[0.3, 6, 16]} />
        <meshStandardMaterial
          color="#e2e8f0"
          transparent
          opacity={xray ? 0.08 : 0.6}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -8 - expFactor]}>
        <boxGeometry args={[22, 6, 0.3]} />
        <meshStandardMaterial
          color="#e2e8f0"
          transparent
          opacity={xray ? 0.08 : 0.6}
        />
      </mesh>

      {/* Front wall */}
      {showFrontWall && (
        <mesh position={[0, 1.2, 8 + expFactor]}>
          <boxGeometry args={[22, 2.4, 0.3]} />
          <meshStandardMaterial
            color="#cbd5e1"
            transparent
            opacity={xray ? 0.08 : 0.4}
          />
        </mesh>
      )}
    </group>
  );
}

// PUF Panels component for insulated envelope
function PUFPanels({
  xray,
  viewMode = "normal",
  explodedProgress = 0,
  visible = true,
}: {
  xray: boolean;
  viewMode?: ViewMode;
  explodedProgress?: number;
  visible?: boolean;
}) {
  if (!visible) return null;

  const isExploded = viewMode === "exploded";
  const ceilingY = 3.2 + (isExploded ? explodedProgress * 4.5 : 0);

  return (
    <group position={[0, ceilingY, 0]}>
      {/* Ceiling PUF insulated panels */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[21.5, 0.15, 15.5]} />
        <meshStandardMaterial
          color="#93c5fd"
          transparent
          opacity={xray || viewMode === "cutaway" ? 0.12 : 0.65}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

// Electrical conduits and cable trays
function ElectricalConduits({
  xray,
  viewMode = "normal",
  explodedProgress = 0,
  visible = true,
}: {
  xray: boolean;
  viewMode?: ViewMode;
  explodedProgress?: number;
  visible?: boolean;
}) {
  if (!visible) return null;

  const isExploded = viewMode === "exploded";
  const conduitY = 3.8 + (isExploded ? explodedProgress * 2.2 : 0);

  return (
    <group position={[0, conduitY, 0]}>
      {/* Central Cable Tray */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.08, 14]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Branch conduits */}
      {[-6, -2, 2, 6].map((z, idx) => (
        <mesh key={idx} position={[0, 0, z]}>
          <boxGeometry args={[18, 0.05, 0.08]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function FarmScene({
  viewMode,
  cutawayProgress,
  cutawayAxis,
  explodedProgress,
  exploded,
  explosionAmount,
  layers,
  visibleSystems,
  selectedConnection,
  onSelectConnection,
  showPUFDetails,
  selectedRoom,
  onSelectRoom,
  cameraPreset,
  selectedEquipment,
  onSelectEquipment,
  isolatedEquipment,
  hiddenEquipment,
  equipmentXRay,
  onCloseEquipmentXRay,
  airflowEnabled,
  airflowSpeed = 1,
  waterEnabled = false,
  electricalEnabled = false,
  config,
  growthStage,
  isMobile,
  measurementMode,
  layout,
  onRendererReady,
}: {
  viewMode: ViewMode;
  cutawayProgress: number;
  cutawayAxis: "x" | "z";
  explodedProgress: number;
  exploded: boolean;
  explosionAmount: number;
  layers: LayerArchitecture;
  visibleSystems: SystemVisibility;
  selectedConnection: string | null;
  onSelectConnection: (conn: SystemConnection | null) => void;
  showPUFDetails: boolean;
  selectedRoom: string | null;
  onSelectRoom: (room: Room) => void;
  cameraPreset: CameraPreset;
  selectedEquipment: EquipmentType | null;
  onSelectEquipment: (type: EquipmentType) => void;
  isolatedEquipment: EquipmentType | null;
  hiddenEquipment: Set<EquipmentType>;
  equipmentXRay: boolean;
  onCloseEquipmentXRay: () => void;
  airflowEnabled: boolean;
  airflowSpeed?: number;
  waterEnabled?: boolean;
  electricalEnabled?: boolean;
  config: FarmConfig;
  growthStage: GrowthStage;
  isMobile: boolean;
  measurementMode: boolean;
  layout: FarmLayout;
  onRendererReady?: (renderer: THREE.WebGLRenderer) => void;
}) {
  const isXRay = viewMode === "xray";
  const effectiveExploded = exploded || viewMode === "exploded";
  const effectiveAmount = exploded ? explosionAmount : explodedProgress * 6;

  // Helper to check if equipment should be rendered
  const isEquipmentVisible = (type: EquipmentType) => {
    if (isolatedEquipment && isolatedEquipment !== type) return false;
    if (hiddenEquipment.has(type)) return false;
    return true;
  };

  const explodedOffset: [number, number, number] = [
    0,
    effectiveExploded ? effectiveAmount * 0.25 : 0,
    0,
  ];

  // Dynamic Control Panel positioning synced from 2D Layout
  const controlPanelItem = layout.items.find((i) => i.type === "controlPanel");
  const dynamicControlPanelPos: [number, number, number] = controlPanelItem
    ? [
        controlPanelItem.x - config.farmLength / 2 + controlPanelItem.width / 2,
        1.2,
        controlPanelItem.z - config.farmWidth / 2 + controlPanelItem.depth / 2,
      ]
    : equipmentPositions["Control Panel"];

  return (
    <>
      <ambientLight intensity={isMobile ? 1.8 : 1.5} />

      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? [512, 512] : [1024, 1024]}
      />

      <Environment preset="warehouse" />

      {/* Step 15: Exploded View Hierarchical Container with 7 Subsystem Offsets */}
      <ExplodedView
        enabled={effectiveExploded}
        amount={effectiveAmount}
        building={
          <>
            {/* Building Base & Exterior Walls */}
            <FarmBase
              xray={isXRay}
              viewMode={viewMode}
              explodedProgress={explodedProgress}
              cutawayProgress={cutawayProgress}
              cutawayAxis={cutawayAxis}
              visible={layers.structure}
            />

            {/* Insulated Ceiling PUF Panels */}
            <PUFPanels
              xray={isXRay}
              viewMode={viewMode}
              explodedProgress={explodedProgress}
              visible={layers.structure}
            />

            {/* Detailed PUF Panel Thickness & Insulation Layers Cross-Section */}
            <PUFPanelDetails
              visible={showPUFDetails && layers.structure}
              xray={isXRay}
              explodedOffset={explodedOffset}
            />

            {/* Commercial Farm Rooms (excluding cold storage which has its own isolated exploded group) */}
            {layers.structure && (
              <CommercialFarm
                xray={isXRay}
                viewMode={viewMode}
                cutawayProgress={cutawayProgress}
                cutawayAxis={cutawayAxis}
                explodedProgress={explodedProgress}
                selectedRoom={selectedRoom}
                onSelectRoom={onSelectRoom}
                filter="no-cold"
              />
            )}
          </>
        }
        growingRacks={
          <>
            {/* Growing Racks Layer (Dynamic based on Farm Configurator) */}
            {layers.racks && isEquipmentVisible("Rack") && (
              <DynamicRacks
                rooms={config.growingRooms}
                racksPerRoom={config.racksPerRoom}
                levels={config.rackLevels}
                onSelectEquipment={onSelectEquipment}
                selectedEquipment={selectedEquipment}
              />
            )}

            {/* Dynamic Mushroom Growth Visualization according to cultivation lifecycle stage */}
            {layers.racks && <MushroomGrowth stage={growthStage} mobile={isMobile} />}
          </>
        }
        hvac={
          layers.hvac && isEquipmentVisible("HVAC") ? (
            <Equipment
              type="HVAC"
              position={equipmentPositions.HVAC}
              onSelect={onSelectEquipment}
              selected={selectedEquipment === "HVAC"}
            />
          ) : null
        }
        airSystem={
          layers.airflow ? (
            <>
              {isEquipmentVisible("Exhaust Fan") && (
                <Equipment
                  type="Exhaust Fan"
                  position={equipmentPositions["Exhaust Fan"]}
                  onSelect={onSelectEquipment}
                  selected={selectedEquipment === "Exhaust Fan"}
                />
              )}
              {isEquipmentVisible("Fresh Air Fan") && (
                <Equipment
                  type="Fresh Air Fan"
                  position={equipmentPositions["Fresh Air Fan"]}
                  onSelect={onSelectEquipment}
                  selected={selectedEquipment === "Fresh Air Fan"}
                />
              )}
              {isEquipmentVisible("Air Filter") && (
                <Equipment
                  type="Air Filter"
                  position={equipmentPositions["Air Filter"]}
                  onSelect={onSelectEquipment}
                  selected={selectedEquipment === "Air Filter"}
                />
              )}
              {/* Animated Airflow Visualization */}
              <Airflow enabled={airflowEnabled} mobile={isMobile} />
            </>
          ) : null
        }
        waterSystem={
          layers.water || layers.fogging ? (
            <>
              {layers.fogging && isEquipmentVisible("Fogger") && (
                <Equipment
                  type="Fogger"
                  position={equipmentPositions.Fogger}
                  onSelect={onSelectEquipment}
                  selected={selectedEquipment === "Fogger"}
                />
              )}

              {layers.water && (
                <>
                  {isEquipmentVisible("Water Line") && (
                    <group>
                      <Equipment
                        type="Water Line"
                        position={equipmentPositions["Water Line"]}
                        onSelect={onSelectEquipment}
                        selected={selectedEquipment === "Water Line"}
                      />
                      <Equipment
                        type="Water Line"
                        position={[1, 2, 2]}
                        onSelect={onSelectEquipment}
                        selected={selectedEquipment === "Water Line"}
                      />
                    </group>
                  )}

                  {isEquipmentVisible("Drainage") && (
                    <group>
                      <Equipment
                        type="Drainage"
                        position={equipmentPositions.Drainage}
                        onSelect={onSelectEquipment}
                        selected={selectedEquipment === "Drainage"}
                      />
                      <Equipment
                        type="Drainage"
                        position={[0, 0.1, -1]}
                        onSelect={onSelectEquipment}
                        selected={selectedEquipment === "Drainage"}
                      />
                    </group>
                  )}
                </>
              )}
            </>
          ) : null
        }
        controlPanel={
          layers.electrical || layers.monitoring ? (
            <>
              {/* Equipment Layer: Electrical Control Panel */}
              {layers.electrical && isEquipmentVisible("Control Panel") && (
                <Equipment
                  type="Control Panel"
                  position={dynamicControlPanelPos}
                  onSelect={onSelectEquipment}
                  selected={selectedEquipment === "Control Panel"}
                />
              )}

              {/* Electrical Cable Trays */}
              <ElectricalConduits
                xray={isXRay}
                viewMode={viewMode}
                explodedProgress={explodedProgress}
                visible={layers.electrical}
              />

              {/* Equipment Layer: Monitoring & IoT Sensors */}
              {layers.monitoring && (
                <>
                  {isEquipmentVisible("Humidity Sensor") && (
                    <Equipment
                      type="Humidity Sensor"
                      position={equipmentPositions["Humidity Sensor"]}
                      onSelect={onSelectEquipment}
                      selected={selectedEquipment === "Humidity Sensor"}
                    />
                  )}
                  {isEquipmentVisible("Temperature Sensor") && (
                    <Equipment
                      type="Temperature Sensor"
                      position={equipmentPositions["Temperature Sensor"]}
                      onSelect={onSelectEquipment}
                      selected={selectedEquipment === "Temperature Sensor"}
                    />
                  )}
                  {isEquipmentVisible("CO₂ Sensor") && (
                    <Equipment
                      type="CO₂ Sensor"
                      position={equipmentPositions["CO₂ Sensor"]}
                      onSelect={onSelectEquipment}
                      selected={selectedEquipment === "CO₂ Sensor"}
                    />
                  )}
                </>
              )}
            </>
          ) : null
        }
        coldStorage={
          layers.structure ? (
            <CommercialFarm
              xray={isXRay}
              viewMode={viewMode}
              cutawayProgress={cutawayProgress}
              cutawayAxis={cutawayAxis}
              explodedProgress={explodedProgress}
              selectedRoom={selectedRoom}
              onSelectRoom={onSelectRoom}
              filter="only-cold"
            />
          ) : null
        }
      >
        {/* DATA-DRIVEN MEP ENGINEERING SYSTEM CONNECTIONS (Air, Water, Electrical, Control) */}
        <SystemConnections
          visibleSystems={visibleSystems}
          selectedConnection={selectedConnection}
          onSelectConnection={(c) => onSelectConnection(c)}
          explodedOffset={explodedOffset}
        />

        {/* Equipment Individual 3D X-Ray Inspection Mode */}
        {selectedEquipment && (
          <EquipmentXRay
            equipment={selectedEquipment}
            enabled={equipmentXRay}
            onClose={onCloseEquipmentXRay}
            position={equipmentPositions[selectedEquipment]}
          />
        )}
      </ExplodedView>

      <Grid
        args={[30, 30]}
        cellSize={1}
        cellThickness={0.5}
        sectionSize={5}
        sectionThickness={1}
        fadeDistance={40}
        fadeStrength={1}
      />

      <MeasurementTool enabled={measurementMode} />

      {/* Step 17: 2D ↔ 3D Synchronized Layout Overlay Footprints */}
      <group position={[0, 0.025, 0]}>
        {layout.items.map((item) => {
          const posX = item.x - config.farmLength / 2 + item.width / 2;
          const posZ = item.z - config.farmWidth / 2 + item.depth / 2;
          return (
            <group
              key={`layout-sync-${item.id}`}
              position={[posX, 0, posZ]}
              rotation={[0, (item.rotation * Math.PI) / 180, 0]}
            >
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[item.width, item.depth]} />
                <meshBasicMaterial
                  color={
                    item.type === "coldStorage"
                      ? "#0284c7"
                      : item.type === "controlPanel"
                      ? "#ef4444"
                      : item.type === "room"
                      ? "#10b981"
                      : "#f59e0b"
                  }
                  transparent
                  opacity={0.16}
                  depthWrite={false}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Step 19: Airflow + HVAC + Fresh Air + Exhaust Visualization */}
      <AirflowSystem
        enabled={airflowEnabled}
        speed={airflowSpeed}
        direction={[1, 0, 0]}
      />

      {/* Step 20: Water + Fogger + Drainage */}
      <WaterSystem enabled={!!waterEnabled} />

      {/* Step 21: Electrical & Control System */}
      <ElectricalSystem enabled={!!electricalEnabled} />

      {/* Renderer Grabber for Screenshot & PDF Export */}
      <RendererGrabber onRendererReady={onRendererReady} />

      <CameraControls preset={cameraPreset} />
    </>
  );
}

function RendererGrabber({
  onRendererReady,
}: {
  onRendererReady?: (renderer: THREE.WebGLRenderer) => void;
}) {
  const { gl } = useThree();
  useEffect(() => {
    if (gl) {
      onRendererReady?.(gl);
    }
  }, [gl, onRendererReady]);
  return null;
}

export default function MushroomFarm3D({
  onRendererReady,
}: {
  onRendererReady?: (renderer: THREE.WebGLRenderer) => void;
} = {}) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentType | null>(null);
  const [isolatedEquipment, setIsolatedEquipment] = useState<EquipmentType | null>(null);
  const [hiddenEquipment, setHiddenEquipment] = useState<Set<EquipmentType>>(new Set());
  const [equipmentXRay, setEquipmentXRay] = useState<boolean>(false);

  // Advanced Step 13 View Mode & Layer State
  const [viewMode, setViewMode] = useState<ViewMode>("normal");
  const [cutawayProgress, setCutawayProgress] = useState<number>(0.5);
  const [cutawayAxis, setCutawayAxis] = useState<"x" | "z">("z");
  const [explodedProgress, setExplodedProgress] = useState<number>(0.45);
  const [showPUFDetails, setShowPUFDetails] = useState<boolean>(true);

  // Step 15: Exploded View State
  const [exploded, setExploded] = useState<boolean>(false);
  const [explosionAmount, setExplosionAmount] = useState<number>(3);

  // Step 16: 3D Measurement Tool State
  const [measurementMode, setMeasurementMode] = useState<boolean>(false);

  // Step 17: 2D Floor Plan + 3D Sync State
  const [showFloorPlan, setShowFloorPlan] = useState<boolean>(false);
  const [layout, setLayout] = useState<FarmLayout>({
    items: [
      {
        id: "room-01",
        type: "room",
        x: 2,
        z: 2,
        width: 6,
        depth: 5,
        rotation: 0,
        label: "Growing Room 1",
      },
      {
        id: "room-02",
        type: "room",
        x: 9,
        z: 2,
        width: 6,
        depth: 5,
        rotation: 0,
        label: "Growing Room 2",
      },
      {
        id: "cold-storage",
        type: "coldStorage",
        x: 2,
        z: 8,
        width: 4,
        depth: 3,
        rotation: 0,
        label: "Cold Storage",
      },
      {
        id: "control-panel",
        type: "controlPanel",
        x: 12,
        z: 8,
        width: 1,
        depth: 1,
        rotation: 0,
        label: "Control",
      },
    ],
  });

  // Step 19: Airflow System State & Velocity
  const [airflowEnabled, setAirflowEnabled] = useState<boolean>(false);
  const [airflowSpeed, setAirflowSpeed] = useState<number>(1);
  const [showAirflowControls, setShowAirflowControls] = useState<boolean>(false);

  // Step 20: Water & Fogger System State
  const [waterEnabled, setWaterEnabled] = useState<boolean>(false);

  // Step 21: Electrical & Automation System State
  const [electricalEnabled, setElectricalEnabled] = useState<boolean>(false);

  // Step 22 & 25: Commercial Modals (BOQ & Compare Designs)
  const [showBOQ, setShowBOQ] = useState<boolean>(false);
  const [showCompare, setShowCompare] = useState<boolean>(false);

  // Step 27: WebGL Renderer reference for Screenshot & PDF
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  // Storage notification feedback
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [shareSuccess, setShareSuccess] = useState<boolean>(false);

  // Step 24: Load configuration from URL query params on initial mount
  useEffect(() => {
    const urlData = loadConfigurationFromURL();
    if (urlData?.config) {
      setConfig((prev) => ({ ...prev, ...urlData.config }));
    }
    if (urlData?.layout) {
      setLayout(urlData.layout);
    }
  }, []);

  useEffect(() => {
    if (viewMode === "exploded") {
      setExploded(true);
    }
  }, [viewMode]);

  const [layers, setLayers] = useState<LayerArchitecture>({
    structure: true,
    racks: true,
    hvac: true,
    fogging: true,
    airflow: true,
    water: true,
    electrical: true,
    monitoring: true,
  });

  const [visibleSystems, setVisibleSystems] = useState<SystemVisibility>({
    air: true,
    water: true,
    electrical: true,
    control: true,
  });

  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);

  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("overview");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Farm Configurator state
  const [config, setConfig] = useState<FarmConfig>({
    farmLength: 20,
    farmWidth: 14,
    growingRooms: 2,
    racksPerRoom: 4,
    rackLevels: 4,
    coldStorage: true,
  });

  // Mushroom Cultivation Lifecycle Stage
  const [growthStage, setGrowthStage] = useState<GrowthStage>("spawn");

  // Climate Simulation states
  const [hvac, setHVAC] = useState<boolean>(true);
  const [fogger, setFogger] = useState<boolean>(false);
  const [exhaust, setExhaust] = useState<boolean>(false);
  const [freshAir, setFreshAir] = useState<boolean>(true);

  // Climate Simulation Hook
  const climate = useClimateSimulation({
    hvac,
    fogger,
    exhaust,
    freshAir,
  });

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room.name);
    if (room.name.includes("Growing")) {
      setCameraPreset("growing");
    } else if (room.name.includes("Cold Storage") || room.name.includes("Packing")) {
      setCameraPreset("coldStorage");
    } else {
      setCameraPreset("processing");
    }
  };

  const handleStepClick = (roomName: string) => {
    const targetRoom = rooms.find((r) => r.name === roomName) || rooms[0];
    handleRoomSelect(targetRoom);
  };

  const handleResetCamera = () => {
    setSelectedRoom(null);
    setSelectedEquipment(null);
    setIsolatedEquipment(null);
    setHiddenEquipment(new Set());
    setEquipmentXRay(false);
    setSelectedConnection(null);
    setViewMode("normal");
    setExploded(false);
    setExplosionAmount(3);
    setMeasurementMode(false);
    setShowFloorPlan(false);
    setShowAirflowControls(false);
    setCameraPreset("overview");
  };

  const handleToggleHideEquipment = (type: EquipmentType) => {
    setHiddenEquipment((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={viewerRef}
      className="flex flex-col w-full bg-slate-950 text-slate-100 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl transition-all"
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Commercial Mushroom Farm Facility</h2>
            <p className="text-xs text-slate-400">
              Interactive 3D structural engineering, MEP systems &amp; X-Ray cutaway inspection
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {selectedRoom && (
            <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium">
              Room: {selectedRoom}
            </span>
          )}
          {selectedEquipment && (
            <span className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium flex items-center gap-1.5">
              <span>Equipment: {selectedEquipment}</span>
              {equipmentXRay && (
                <span className="bg-cyan-400/20 text-cyan-300 text-[10px] px-1.5 py-0.5 rounded">
                  🔬 X-Ray
                </span>
              )}
            </span>
          )}
          <button
            type="button"
            onClick={handleResetCamera}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset View</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isFullscreen ? "100vh" : "80vh",
          minHeight: "540px",
        }}
        className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        <Canvas
          shadows={!isMobile}
          dpr={isMobile ? [1, 1.25] : [1, 2]}
          gl={{
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
            antialias: !isMobile,
          }}
          camera={{
            position: [18, 12, 18],
            fov: isMobile ? 52 : 45,
          }}
        >
          <FarmScene
            viewMode={viewMode}
            cutawayProgress={cutawayProgress}
            cutawayAxis={cutawayAxis}
            explodedProgress={explodedProgress}
            exploded={exploded}
            explosionAmount={explosionAmount}
            layers={layers}
            visibleSystems={visibleSystems}
            selectedConnection={selectedConnection}
            onSelectConnection={(c) => setSelectedConnection(c ? c.id : null)}
            showPUFDetails={showPUFDetails}
            selectedRoom={selectedRoom}
            onSelectRoom={handleRoomSelect}
            cameraPreset={cameraPreset}
            selectedEquipment={selectedEquipment}
            onSelectEquipment={(type) => setSelectedEquipment(type)}
            isolatedEquipment={isolatedEquipment}
            hiddenEquipment={hiddenEquipment}
            equipmentXRay={equipmentXRay}
            onCloseEquipmentXRay={() => setEquipmentXRay(false)}
            airflowEnabled={airflowEnabled}
            airflowSpeed={airflowSpeed}
            waterEnabled={waterEnabled}
            electricalEnabled={electricalEnabled}
            config={config}
            growthStage={growthStage}
            isMobile={isMobile}
            measurementMode={measurementMode}
            layout={layout}
            onRendererReady={(r) => {
              setRenderer(r);
              onRendererReady?.(r);
            }}
          />
        </Canvas>

        {/* Step 19: Airflow Controls Overlay */}
        {showAirflowControls && (
          <AirflowControls
            enabled={airflowEnabled}
            speed={airflowSpeed}
            setEnabled={setAirflowEnabled}
            setSpeed={setAirflowSpeed}
            onClose={() => setShowAirflowControls(false)}
          />
        )}

        {/* Step 15: Exploded View Controls */}
        <ExplodedViewControls
          enabled={exploded}
          amount={explosionAmount}
          setEnabled={(val) => {
            setExploded(val);
            if (val && viewMode !== "exploded") {
              setViewMode("exploded");
            } else if (!val && viewMode === "exploded") {
              setViewMode("normal");
            }
          }}
          setAmount={(val) => {
            setExplosionAmount(val);
            setExplodedProgress(val / 10);
          }}
        />

        {/* Commercial Farm Configurator Overlay */}
        <FarmConfigurator
          config={config}
          setConfig={setConfig}
        />

        {/* Mushroom Cultivation Growth Lifecycle Simulation Overlay */}
        <GrowthSimulation
          stage={growthStage}
          setStage={setGrowthStage}
        />

        {/* Commercial Project Estimate & Quote Request */}
        <ProjectEstimate
          config={config}
          onEnquiry={() => {
            const payload = createEnquiryPayload(config);
            sessionStorage.setItem(
              "mushroomFarm3DEnquiry",
              JSON.stringify(payload)
            );
            window.location.href = "/enquiry";
          }}
        />

        {/* Farm Capacity Planning Panel Overlay */}
        <FarmCapacity
          rooms={config.growingRooms}
          racksPerRoom={config.racksPerRoom}
          rackLevels={config.rackLevels}
        />

        {/* Climate Simulation IoT Dashboard */}
        <ClimateDashboard
          values={climate}
          hvac={hvac}
          fogger={fogger}
          exhaust={exhaust}
          freshAir={freshAir}
          setHVAC={setHVAC}
          setFogger={setFogger}
          setExhaust={setExhaust}
          setFreshAir={setFreshAir}
        />

        {/* Dedicated Equipment Information Panel with Show Inside (X-Ray) */}
        <EquipmentPanel
          equipment={selectedEquipment}
          onClose={() => {
            setSelectedEquipment(null);
            setEquipmentXRay(false);
          }}
          onShowInside={() => {
            setEquipmentXRay(true);
          }}
        />

        {/* Step 13: Advanced Engineering X-Ray, Cutaway, Exploded & Layers Control Panel */}
        <XRayControls
          viewMode={viewMode}
          setViewMode={setViewMode}
          cutawayProgress={cutawayProgress}
          setCutawayProgress={setCutawayProgress}
          cutawayAxis={cutawayAxis}
          setCutawayAxis={setCutawayAxis}
          explodedProgress={explodedProgress}
          setExplodedProgress={setExplodedProgress}
          layers={layers}
          setLayers={setLayers}
          visibleSystems={visibleSystems}
          setVisibleSystems={setVisibleSystems}
          selectedEquipment={selectedEquipment}
          isolatedEquipment={isolatedEquipment}
          setIsolatedEquipment={setIsolatedEquipment}
          hiddenEquipment={hiddenEquipment}
          toggleHideEquipment={handleToggleHideEquipment}
          showPUFDetails={showPUFDetails}
          setShowPUFDetails={setShowPUFDetails}
        />

        {/* Bottom Centered Camera Preset & View Navigation Toolbar */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 20,
            zIndex: 20,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <button
            type="button"
            onClick={() => setCameraPreset("overview")}
            className={`px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              cameraPreset === "overview"
                ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            🏠 Overview
          </button>

          <button
            type="button"
            onClick={() => setCameraPreset("growing")}
            className={`px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              cameraPreset === "growing"
                ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            🍄 Growing Room
          </button>

          <button
            type="button"
            onClick={() => setCameraPreset("processing")}
            className={`px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              cameraPreset === "processing"
                ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            🧪 Processing
          </button>

          <button
            type="button"
            onClick={() => setCameraPreset("coldStorage")}
            className={`px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              cameraPreset === "coldStorage"
                ? "bg-emerald-600 text-white border-emerald-400 shadow-emerald-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
          >
            ❄️ Cold Storage
          </button>

          {/* Step 16: Measure Button */}
          <button
            type="button"
            onClick={() => setMeasurementMode(!measurementMode)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              measurementMode
                ? "bg-amber-600 text-white border-amber-400 shadow-amber-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
            title={measurementMode ? "Exit 3D Measurement Mode" : "Measure distances in 3D Farm"}
          >
            <span>📏</span>
            <span>{measurementMode ? "Exit Measure" : "Measure"}</span>
          </button>

          {/* Step 17: 2D Floor Plan Toggle Button */}
          <button
            type="button"
            onClick={() => setShowFloorPlan(!showFloorPlan)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              showFloorPlan
                ? "bg-indigo-600 text-white border-indigo-400 shadow-indigo-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
            title={showFloorPlan ? "Switch to 3D View" : "Open 2D Floor Plan"}
          >
            <span>🗺️</span>
            <span>{showFloorPlan ? "3D View" : "2D Floor Plan"}</span>
          </button>

          {/* Step 19: Airflow Controls Toggle Button */}
          <button
            type="button"
            onClick={() => {
              const next = !showAirflowControls;
              setShowAirflowControls(next);
              if (next && !airflowEnabled) {
                setAirflowEnabled(true);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              showAirflowControls || airflowEnabled
                ? "bg-sky-600 text-white border-sky-400 shadow-sky-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
            title={showAirflowControls ? "Hide Airflow Panel" : "Open Airflow & HVAC Controls"}
          >
            <span>🌬️</span>
            <span>Airflow</span>
          </button>

          {/* Step 20: Water & Fogger System Toggle */}
          <button
            type="button"
            onClick={() => setWaterEnabled(!waterEnabled)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              waterEnabled
                ? "bg-cyan-600 text-white border-cyan-400 shadow-cyan-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
            title="Toggle Water, Fogger & Drainage Systems"
          >
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span>Water</span>
          </button>

          {/* Step 21: Electrical System Toggle */}
          <button
            type="button"
            onClick={() => setElectricalEnabled(!electricalEnabled)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg transition-all ${
              electricalEnabled
                ? "bg-amber-600 text-white border-amber-400 shadow-amber-500/30 scale-105"
                : "bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white"
            }`}
            title="Toggle Electrical Conduits, Grow Lights & Control Panel"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Electrical</span>
          </button>

          {/* Step 22: BOQ Button */}
          <button
            type="button"
            onClick={() => setShowBOQ(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white transition-all hover:scale-105"
            title="Open Bill of Quantities (BOQ)"
          >
            <ClipboardList className="w-3.5 h-3.5 text-emerald-400" />
            <span>BOQ</span>
          </button>

          {/* Step 25: Compare Designs Button */}
          <button
            type="button"
            onClick={() => setShowCompare(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white transition-all hover:scale-105"
            title="Compare with Commercial Preset Configurations"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-400" />
            <span>Compare</span>
          </button>

          {/* Step 24: Save Button */}
          <button
            type="button"
            onClick={() => {
              saveConfiguration(config, layout);
              setSaveSuccess(true);
              setTimeout(() => setSaveSuccess(false), 2000);
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white transition-all hover:scale-105"
            title="Save configuration to local browser storage"
          >
            {saveSuccess ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            )}
            <span>{saveSuccess ? "Saved" : "Save"}</span>
          </button>

          {/* Step 24: Share Link Button */}
          <button
            type="button"
            onClick={async () => {
              await shareConfiguration(config, layout);
              setShareSuccess(true);
              setTimeout(() => setShareSuccess(false), 2000);
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-md border shadow-lg bg-slate-900/80 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white transition-all hover:scale-105"
            title="Copy shareable design URL to clipboard"
          >
            {shareSuccess ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Share2 className="w-3.5 h-3.5 text-sky-400" />
            )}
            <span>{shareSuccess ? "Copied!" : "Share"}</span>
          </button>

          {/* Step 23: JSON Report */}
          <ProjectReport config={config} />

          {/* Step 27: Screenshot Capture */}
          <ScreenshotCapture renderer={renderer} />

          {/* Step 27: PDF Export */}
          <PDFExport
            renderer={renderer}
            projectName="Commercial Mushroom Farm Project"
            configuration={{
              "Building Length": `${config.farmLength} m`,
              "Building Width": `${config.farmWidth} m`,
              "Footprint Area": `${config.farmLength * config.farmWidth} m²`,
              "Growing Rooms": config.growingRooms,
              "Racks Per Room": config.racksPerRoom,
              "Rack Levels": config.rackLevels,
              "Total Racks": config.growingRooms * config.racksPerRoom,
              "Total Growing Shelves": config.growingRooms * config.racksPerRoom * config.rackLevels,
              "Estimated Canopy Area": `${Math.round(config.growingRooms * config.racksPerRoom * config.rackLevels * 14.4)} m²`,
              "Cold Storage Facility": config.coldStorage ? "Yes (2°–4°C Isolated)" : "No",
            }}
            boq={[
              { name: "Cultivation Growing Rooms", quantity: config.growingRooms, unit: "Rooms" },
              { name: "Heavy-Duty Growing Racks", quantity: config.growingRooms * config.racksPerRoom, unit: "Racks" },
              { name: "Cultivation Growing Levels", quantity: config.growingRooms * config.racksPerRoom * config.rackLevels, unit: "Shelves" },
              { name: "Precision AHU / HVAC Units", quantity: config.growingRooms, unit: "Units" },
              { name: "High-Pressure Fogger Kits", quantity: config.growingRooms, unit: "Systems" },
              { name: "Environmental NDIR Sensors", quantity: config.growingRooms * 3, unit: "Transmitters" },
              { name: "Waterproof IP67 LED Lights", quantity: config.growingRooms * config.racksPerRoom * config.rackLevels, unit: "Fixtures" },
              { name: "Cold Storage Unit", quantity: config.coldStorage ? 1 : 0, unit: "Unit" },
            ]}
          />

          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/85 hover:bg-slate-800 text-slate-200 border border-white/15 backdrop-blur-md shadow-lg transition-all hover:scale-105"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
          </button>
        </div>

        {/* Step 22: BOQ Modal */}
        {showBOQ && (
          <BOQ config={config} onClose={() => setShowBOQ(false)} />
        )}

        {/* Step 25: Compare Designs Modal */}
        {showCompare && (
          <CompareDesigns
            currentConfig={config}
            onApplyDesign={(newCfg) => setConfig(newCfg)}
            onClose={() => setShowCompare(false)}
          />
        )}

        {/* Step 17: 2D Floor Plan View Overlay */}
        {showFloorPlan && (
          <FloorPlan2D
            layout={layout}
            setLayout={setLayout}
            farmLength={config.farmLength}
            farmWidth={config.farmWidth}
            onClose={() => setShowFloorPlan(false)}
          />
        )}

        {/* Floating Measurement Mode HUD Instruction Banner */}
        {measurementMode && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-amber-500/95 text-slate-950 font-medium text-xs shadow-xl backdrop-blur-md flex items-center gap-3 border border-amber-300 animate-in fade-in slide-in-from-top-2">
            <span className="flex items-center gap-1.5 font-bold">
              <span>📏</span>
              <span>3D Measure Mode Active</span>
            </span>
            <span className="hidden sm:inline text-amber-950">
              Click 1st point, then 2nd point to measure real distance in meters.
            </span>
            <button
              type="button"
              onClick={() => setMeasurementMode(false)}
              className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-[11px] font-semibold hover:bg-slate-800 transition-colors"
            >
              Exit
            </button>
          </div>
        )}

        {/* Floating Interaction Tips */}
        <div className="absolute top-4 left-4 pointer-events-none text-[11px] text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-sm hidden sm:block">
          🖱 Rotate &bull; 🔍 Zoom &bull; 🔬 View Modes: Normal / X-Ray / Cutaway / Exploded &bull; 📏 Measure &bull; 🗺️ 2D Floor Plan
        </div>
      </div>

      {/* Process Flow Diagram */}
      {!isFullscreen && (
        <div className="p-6 border-t border-slate-800 bg-slate-900/40">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Production Process Workflow
            </h3>
            <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Commercial Flow Pipeline
            </span>
          </div>

          {/* Workflow steps in horizontal scrollable pipeline */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700">
            {PROCESS_STEPS.map((step, index) => {
              const isTarget = selectedRoom === step.roomName;
              return (
                <React.Fragment key={step.id}>
                  <button
                    type="button"
                    onClick={() => handleStepClick(step.roomName)}
                    className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left border ${
                      isTarget
                        ? "bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30 scale-105"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:border-slate-600 hover:text-white"
                    }`}
                  >
                    <div className="text-[10px] text-slate-400 opacity-80 uppercase">Step {index + 1}</div>
                    <div className="font-semibold whitespace-nowrap">{step.name}</div>
                  </button>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
