"use client";

import Equipment, { EquipmentType } from "./Equipment";

type Props = {
  rooms: number;
  racksPerRoom: number;
  levels: number;
  onSelectEquipment?: (type: EquipmentType) => void;
  selectedEquipment?: EquipmentType | null;
};

export default function DynamicRacks({
  rooms,
  racksPerRoom,
  levels,
  onSelectEquipment,
  selectedEquipment,
}: Props) {
  const racks = [];
  const heightFactor = Math.max(0.6, Math.min(1.4, levels / 4));

  for (let room = 0; room < rooms; room++) {
    for (let rack = 0; rack < racksPerRoom; rack++) {
      const x = -Math.min(rooms * 2, 12) + room * 4;
      const z = -Math.min(racksPerRoom * 1.2, 8) + rack * 1.2;

      racks.push(
        <Equipment
          key={`${room}-${rack}`}
          type="Rack"
          position={[x, 0, z]}
          scale={0.8 * heightFactor}
          onSelect={onSelectEquipment}
          selected={selectedEquipment === "Rack"}
        />
      );
    }
  }

  return <group>{racks}</group>;
}
