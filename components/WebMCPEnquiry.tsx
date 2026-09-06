"use client";

import { useEffect } from "react";

export default function WebMCPEnquiry() {
  useEffect(() => {
    const modelContext = (
      document as Document & {
        modelContext?: {
          registerTool: (tool: unknown) => Promise<void>;
        };
      }
    ).modelContext;

    if (!modelContext) return;

    modelContext.registerTool({
      name: "submit_mushroom_farm_enquiry",
      title: "Submit Mushroom Farm Enquiry",
      description:
        "Submit a commercial mushroom farming enquiry with customer contact details, location and project requirements.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Customer's full name",
          },
          email: {
            type: "string",
            format: "email",
            description: "Customer's email address",
          },
          phone: {
            type: "string",
            description: "Customer's phone number",
          },
          location: {
            type: "string",
            description: "Location where the mushroom farm will be established",
          },
          requirements: {
            type: "string",
            description: "Customer's mushroom farming project requirements",
          },
        },
        required: ["name", "phone", "requirements"],
      },
      annotations: {
        readOnlyHint: false,
        consequentialHint: true,
      },
      execute: async (input: {
        name: string;
        email?: string;
        phone: string;
        location?: string;
        requirements: string;
      }) => {
        const payload = {
          fullName: input.name,
          email: input.email || "not-provided@example.com",
          phone: input.phone,
          message: `${input.location ? `Location: ${input.location}\n\n` : ""}${input.requirements}`,
          serviceType: "Other",
          subjectOfEnquiry: "WebMCP AI Enquiry",
          securityAnswer: "5",
          hp_website: "",
          load_time: Date.now()
        };

        const response = await fetch("/api/enquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Unable to submit enquiry");
        }

        return {
          success: true,
          message: "Mushroom farm enquiry submitted successfully.",
        };
      },
    });
  }, []);

  return null;
}
