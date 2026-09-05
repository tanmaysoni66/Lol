import type { FarmConfig } from "./FarmConfigurator";
import type { FarmLayout } from "./LayoutTypes";

const STORAGE_KEY = "mushroom-farm-config";

export interface StoredFarmState {
  config: FarmConfig;
  layout?: FarmLayout;
  savedAt: string;
}

/**
 * Save configuration to localStorage
 */
export function saveConfiguration(config: FarmConfig, layout?: FarmLayout): void {
  try {
    const payload: StoredFarmState = {
      config,
      layout,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.error("Failed to save farm configuration to localStorage:", err);
  }
}

/**
 * Load saved configuration from localStorage
 */
export function loadConfiguration(): StoredFarmState | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    return JSON.parse(saved) as StoredFarmState;
  } catch (err) {
    console.error("Failed to load farm configuration from localStorage:", err);
    return null;
  }
}

/**
 * Encode configuration into a shareable URL and copy to clipboard
 */
export async function shareConfiguration(
  config: FarmConfig,
  layout?: FarmLayout
): Promise<string> {
  try {
    const payload = JSON.stringify({ config, layout });
    const encoded = btoa(encodeURIComponent(payload));
    const url = `${window.location.origin}${window.location.pathname}?config=${encoded}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
    }
    return url;
  } catch (err) {
    console.error("Failed to share configuration:", err);
    return window.location.href;
  }
}

/**
 * Decode configuration from URL if ?config= parameter exists
 */
export function loadConfigurationFromURL(): { config?: FarmConfig; layout?: FarmLayout } | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const configParam = params.get("config");
    if (!configParam) return null;

    const decoded = decodeURIComponent(atob(configParam));
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Failed to parse config from URL:", err);
    return null;
  }
}
