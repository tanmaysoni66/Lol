"use client";

import { useEffect } from "react";

type ClimateInput = {
  temperature?: number;
  humidity?: number;
  co2?: number;
};

type ClimateTrackerProps = {
  getClimateData?: () => ClimateInput;
  onClimateUpdate?: (data: ClimateInput) => void;
};

type ModelContext = {
  registerTool: (
    tool: {
      name: string;
      title?: string;
      description: string;
      inputSchema: Record<string, unknown>;
      annotations?: {
        readOnlyHint?: boolean;
        consequentialHint?: boolean;
        untrustedContentHint?: boolean;
      };
      execute: (
        input: ClimateInput,
        client?: unknown
      ) => Promise<unknown> | unknown;
    },
    options?: {
      signal?: AbortSignal;
    }
  ) => Promise<unknown>;
};

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
}

export default function WebMCPClimateTracker({
  getClimateData,
  onClimateUpdate,
}: ClimateTrackerProps) {
  useEffect(() => {
    const modelContext = document.modelContext;

    // WebMCP-supported browser नहीं है तो कुछ भी break नहीं होगा.
    if (!modelContext) {
      return;
    }

    const controller = new AbortController();

    const registerClimateTools = async () => {
      try {
        /*
         * TOOL 1
         * Read current climate status
         */
        await modelContext.registerTool(
          {
            name: "get_mushroom_climate_status",
            title: "Get Mushroom Farm Climate Status",
            description:
              "Read the current mushroom farm climate tracker values including temperature, relative humidity and CO2.",
            inputSchema: {
              type: "object",
              properties: {},
              additionalProperties: false,
            },
            annotations: {
              readOnlyHint: true,
              consequentialHint: false,
            },
            execute: async () => {
              const data = getClimateData?.() ?? {};
              return {
                success: true,
                type: "mushroom_farm_climate_status",
                temperature:
                  typeof data.temperature === "number"
                    ? data.temperature
                    : null,
                humidity:
                  typeof data.humidity === "number"
                    ? data.humidity
                    : null,
                co2:
                  typeof data.co2 === "number"
                    ? data.co2
                    : null,
                unit: {
                  temperature: "°C",
                  humidity: "% RH",
                  co2: "ppm",
                },
              };
            },
          },
          {
            signal: controller.signal,
          }
        );

        /*
         * TOOL 2
         * Analyse supplied climate values
         */
        await modelContext.registerTool(
          {
            name: "calculate_mushroom_climate_range",
            title: "Analyze Mushroom Farm Climate",
            description:
              "Analyze temperature, relative humidity and CO2 values supplied by the user for mushroom farm climate monitoring. This tool provides general monitoring guidance and is not a substitute for species-specific cultivation SOPs.",
            inputSchema: {
              type: "object",
              properties: {
                temperature: {
                  type: "number",
                  description: "Air temperature in degrees Celsius.",
                },
                humidity: {
                  type: "number",
                  description: "Relative humidity percentage.",
                },
                co2: {
                  type: "number",
                  description: "CO2 concentration in parts per million.",
                },
              },
              additionalProperties: false,
            },
            annotations: {
              readOnlyHint: true,
              consequentialHint: false,
            },
            execute: async ({
              temperature,
              humidity,
              co2,
            }: ClimateInput) => {
              const warnings: string[] = [];
              if (
                typeof humidity === "number" &&
                (humidity < 0 || humidity > 100)
              ) {
                warnings.push(
                  "Relative humidity should be between 0% and 100%."
                );
              }
              if (
                typeof temperature === "number" &&
                (temperature < -20 || temperature > 60)
              ) {
                warnings.push(
                  "The supplied temperature is outside the normal environmental monitoring range."
                );
              }
              if (typeof co2 === "number" && co2 < 0) {
                warnings.push("CO2 concentration cannot be negative.");
              }
              return {
                success: warnings.length === 0,
                input: {
                  temperature:
                    typeof temperature === "number"
                      ? temperature
                      : null,
                  humidity:
                    typeof humidity === "number"
                      ? humidity
                      : null,
                  co2:
                    typeof co2 === "number" ? co2 : null,
                },
                warnings,
                note:
                  "Interpret climate values according to the mushroom species, strain, growth stage, substrate and validated cultivation SOP.",
              };
            },
          },
          {
            signal: controller.signal,
          }
        );

        /*
         * TOOL 3
         * Update tracker UI/state
         */
        await modelContext.registerTool(
          {
            name: "set_mushroom_climate_tracker",
            title: "Set Mushroom Climate Tracker",
            description:
              "Update the climate tracker interface with temperature, humidity and CO2 values provided by the user.",
            inputSchema: {
              type: "object",
              properties: {
                temperature: {
                  type: "number",
                  description: "Temperature in degrees Celsius.",
                },
                humidity: {
                  type: "number",
                  description: "Relative humidity percentage.",
                },
                co2: {
                  type: "number",
                  description: "CO2 concentration in ppm.",
                },
              },
              required: [],
              additionalProperties: false,
            },
            annotations: {
              readOnlyHint: false,
              consequentialHint: false,
            },
            execute: async (input: ClimateInput) => {
              onClimateUpdate?.(input);
              return {
                success: true,
                message: "Mushroom farm climate tracker updated.",
                values: input,
              };
            },
          },
          {
            signal: controller.signal,
          }
        );

        /*
         * TOOL 4
         * Open climate recommendation section
         */
        await modelContext.registerTool(
          {
            name: "open_mushroom_climate_guidance",
            title: "Open Mushroom Climate Guidance",
            description:
              "Navigate the page to the mushroom farm climate guidance section.",
            inputSchema: {
              type: "object",
              properties: {},
              additionalProperties: false,
            },
            annotations: {
              readOnlyHint: false,
              consequentialHint: false,
            },
            execute: async () => {
              const target =
                document.getElementById("climate-guidance");
              if (target) {
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                return {
                  success: true,
                  message:
                    "Climate guidance section opened.",
                };
              }
              return {
                success: false,
                message:
                  "Climate guidance section was not found on this page.",
              };
            },
          },
          {
            signal: controller.signal,
          }
        );
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(
            "WebMCP climate tracker registration failed:",
            error
          );
        }
      }
    };

    registerClimateTools();

    return () => {
      controller.abort();
    };
  }, [getClimateData, onClimateUpdate]);

  return null;
}
