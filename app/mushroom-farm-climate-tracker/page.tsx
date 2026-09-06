import type { Metadata } from "next";
import SchemaJSONLD from "./SchemaJSONLD";
import Breadcrumbs from "./Breadcrumbs";
import ClimateTrackerClient from "./ClimateTrackerClient";

const SITE_URL = "https://organicmushroomsfarm.com";
const PAGE_URL = `${SITE_URL}/mushroom-farm-climate-tracker`;

const OG_IMAGE =
  "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788677309/mushroomtemperaturecontrol_tack43.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Mushroom Farm Climate Tracker | Temperature, Humidity & CO₂ Monitoring",

  description:
    "Monitor and understand mushroom farm climate conditions including temperature, humidity, CO₂ and growing-room environmental control for commercial mushroom cultivation.",

  keywords: [
    "mushroom farm climate tracker",
    "mushroom temperature tracker",
    "mushroom humidity tracker",
    "mushroom farm temperature monitoring",
    "mushroom farm humidity monitoring",
    "mushroom farm climate monitoring",
    "mushroom growing room temperature",
    "mushroom growing room humidity",
    "mushroom CO2 monitoring",
    "commercial mushroom farm climate control",
    "mushroom cultivation climate control",
    "mushroom farm environmental monitoring",
    "mushroom farming India",
    "commercial mushroom cultivation",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Organic Mushrooms Farm",

    title:
      "Mushroom Farm Climate Tracker | Temperature, Humidity & CO₂ Monitoring",

    description:
      "Track mushroom farm climate conditions including temperature, humidity and CO₂ for better environmental monitoring and commercial mushroom cultivation planning.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "Mushroom farm climate tracker for temperature and humidity monitoring",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mushroom Farm Climate Tracker | Temperature, Humidity & CO₂ Monitoring",

    description:
      "Monitor temperature, humidity and CO₂ conditions for commercial mushroom farm climate management.",

    images: [OG_IMAGE],
  },

  category: "Agriculture",

  other: {
    "theme-color": "#ffffff",
    "application-name": "Organic Mushrooms Farm",
  },
};

export default function MushroomFarmClimateTrackerPage() {
  return (
    <>
      <SchemaJSONLD />
      <Breadcrumbs />
      <ClimateTrackerClient />
    </>
  );
}
