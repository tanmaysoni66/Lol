import type { FarmConfig } from "./FarmConfigurator";

export function createEnquiryPayload(config: FarmConfig) {
  return {
    source: "3D Mushroom Farm Configurator",
    farm: {
      length: config.farmLength,
      width: config.farmWidth,
    },
    cultivation: {
      growingRooms: config.growingRooms,
      racksPerRoom: config.racksPerRoom,
      rackLevels: config.rackLevels,
    },
    coldStorage: config.coldStorage,
    generatedAt: new Date().toISOString(),
  };
}
