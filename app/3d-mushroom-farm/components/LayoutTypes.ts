export type LayoutItemType =
  | "room"
  | "rack"
  | "hvac"
  | "fogger"
  | "coldStorage"
  | "controlPanel";

export type LayoutItem = {
  id: string;
  type: LayoutItemType;
  x: number;
  z: number;
  width: number;
  depth: number;
  rotation: number;
  label: string;
};

export type FarmLayout = {
  items: LayoutItem[];
};
