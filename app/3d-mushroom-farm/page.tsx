import type { Metadata } from "next";
import PlannerClient from "./PlannerClient";

export const metadata: Metadata = {
  title: "3D Mushroom Farm Planner & Equipment | Organic Mushroom Farm",
  description: "Plan your commercial mushroom farm layout with our interactive 3D planner. Explore detailed commercial machinery and infrastructure requirements.",
};

export default function FarmPlannerPage() {
  return <PlannerClient />;
}
