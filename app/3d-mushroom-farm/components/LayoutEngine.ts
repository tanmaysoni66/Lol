import type { LayoutItem } from "./LayoutTypes";

export const GRID_SIZE = 0.5;
export const CLEARANCE = 0.25;

export function snap(value: number, gridSize = GRID_SIZE) {
  return Math.round(value / gridSize) * gridSize;
}

export function getBounds(item: LayoutItem) {
  return {
    left: item.x,
    right: item.x + item.width,
    top: item.z,
    bottom: item.z + item.depth,
  };
}

export function intersects(
  a: LayoutItem,
  b: LayoutItem,
  clearance = CLEARANCE
) {
  const A = getBounds(a);
  const B = getBounds(b);

  return !(
    A.right + clearance <= B.left ||
    A.left - clearance >= B.right ||
    A.bottom + clearance <= B.top ||
    A.top - clearance >= B.bottom
  );
}

export function isInsideFarm(
  item: LayoutItem,
  farmLength: number,
  farmWidth: number
) {
  return (
    item.x >= 0 &&
    item.z >= 0 &&
    item.x + item.width <= farmLength &&
    item.z + item.depth <= farmWidth
  );
}

export function canPlaceItem(
  candidate: LayoutItem,
  items: LayoutItem[],
  farmLength: number,
  farmWidth: number,
  clearance = CLEARANCE
) {
  if (!isInsideFarm(candidate, farmLength, farmWidth)) {
    return false;
  }

  return !items.some(
    (item) => item.id !== candidate.id && intersects(candidate, item, clearance)
  );
}

export function getValidPosition(
  item: LayoutItem,
  x: number,
  z: number,
  items: LayoutItem[],
  farmLength: number,
  farmWidth: number,
  clearance = CLEARANCE
) {
  const candidate: LayoutItem = {
    ...item,
    x: snap(x),
    z: snap(z),
  };

  if (canPlaceItem(candidate, items, farmLength, farmWidth, clearance)) {
    return {
      x: candidate.x,
      z: candidate.z,
      valid: true,
    };
  }

  return {
    x: item.x,
    z: item.z,
    valid: false,
  };
}
