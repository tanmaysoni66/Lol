"use client";

import React from "react";

export type EquipmentType =
  | "HVAC"
  | "Fogger"
  | "Humidity Sensor"
  | "Temperature Sensor"
  | "CO₂ Sensor"
  | "Exhaust Fan"
  | "Fresh Air Fan"
  | "Air Filter"
  | "Rack"
  | "Control Panel"
  | "Water Line"
  | "Drainage";

export type EquipmentProps = {
  type: EquipmentType;
  position: [number, number, number];
  scale?: number;
  selected?: boolean;
  onSelect?: (type: EquipmentType) => void;
};

function EquipmentShape({
  type,
  isSelected,
}: {
  type: EquipmentType;
  isSelected?: boolean;
}) {
  const highlightColor = isSelected ? "#00aaff" : undefined;

  switch (type) {
    case "HVAC":
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[2.2, 0.8, 0.7]} />
            <meshStandardMaterial
              color={highlightColor || "#d9d9d9"}
              roughness={0.3}
              metalness={0.4}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <boxGeometry args={[2.3, 0.9, 0.8]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    case "Fogger":
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.7, 24]} />
            <meshStandardMaterial
              color={highlightColor || "#bbbbbb"}
              roughness={0.4}
              metalness={0.3}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <cylinderGeometry args={[0.35, 0.35, 0.75, 16]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    case "Humidity Sensor":
    case "Temperature Sensor":
    case "CO₂ Sensor":
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[0.35, 0.35, 0.2]} />
            <meshStandardMaterial
              color={highlightColor || "#222222"}
              roughness={0.5}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <boxGeometry args={[0.42, 0.42, 0.25]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.8} />
            </mesh>
          )}
        </group>
      );

    case "Exhaust Fan":
    case "Fresh Air Fan":
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.65, 0.65, 0.25, 32]} />
            <meshStandardMaterial
              color={highlightColor || "#555555"}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <cylinderGeometry args={[0.72, 0.72, 0.3, 16]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    case "Air Filter":
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[1.4, 1.4, 0.5]} />
            <meshStandardMaterial
              color={highlightColor || "#eeeeee"}
              roughness={0.4}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <boxGeometry args={[1.5, 1.5, 0.55]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    case "Rack":
      return (
        <group>
          {[0, 1.2, 2.4, 3.6].map((y) => (
            <mesh key={y} position={[0, y, 0]} castShadow>
              <boxGeometry args={[3, 0.12, 1]} />
              <meshStandardMaterial
                color={highlightColor || "#555555"}
                roughness={0.6}
                metalness={0.2}
              />
            </mesh>
          ))}

          {[-1.35, 1.35].map((x) => (
            <mesh key={x} position={[x, 1.8, 0]} castShadow>
              <boxGeometry args={[0.12, 3.8, 0.12]} />
              <meshStandardMaterial
                color={highlightColor || "#444444"}
                roughness={0.5}
                metalness={0.3}
              />
            </mesh>
          ))}
        </group>
      );

    case "Control Panel":
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[1, 1.8, 0.35]} />
            <meshStandardMaterial
              color={highlightColor || "#222222"}
              roughness={0.3}
              metalness={0.4}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <boxGeometry args={[1.1, 1.9, 0.4]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    case "Water Line":
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 3, 16]} />
            <meshStandardMaterial
              color={highlightColor || "#5b8db8"}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <cylinderGeometry args={[0.11, 0.11, 3.05, 12]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.8} />
            </mesh>
          )}
        </group>
      );

    case "Drainage":
      return (
        <group>
          <mesh receiveShadow>
            <boxGeometry args={[3, 0.08, 0.3]} />
            <meshStandardMaterial
              color={highlightColor || "#444444"}
              roughness={0.8}
            />
          </mesh>
          {isSelected && (
            <mesh>
              <boxGeometry args={[3.05, 0.12, 0.35]} />
              <meshStandardMaterial color="#00aaff" wireframe transparent opacity={0.7} />
            </mesh>
          )}
        </group>
      );

    default:
      return null;
  }
}

export default function Equipment({
  type,
  position,
  scale = 1,
  selected = false,
  onSelect,
}: EquipmentProps) {
  return (
    <group
      position={position}
      scale={scale}
      onClick={(event) => {
        event.stopPropagation();
        onSelect?.(type);
      }}
    >
      <EquipmentShape type={type} isSelected={selected} />

      {/* Equipment selection ring as specified */}
      {selected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.45, 0]}>
          <ringGeometry args={[1.1, 1.25, 48]} />
          <meshBasicMaterial color="#00aaff" />
        </mesh>
      )}
    </group>
  );
}
