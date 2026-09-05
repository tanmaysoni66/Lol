import type { Metadata } from "next";
import MushroomFarmingCalculators from "@/components/MushroomFarmingCalculators";
import { mushroomFarmingCalculatorsWebPageSchema } from "@/lib/schema/mushroom-farming-calculators-webpage-schema";

export const metadata: Metadata = {
  title: "Mushroom Farming Calculators | Organic Mushroom Farm",
  description:
    "Use mushroom farming calculators to estimate mushroom yield, production, substrate requirements, farming costs, revenue, and profit for mushroom cultivation.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mushroom Farming Calculators | Organic Mushroom Farm",
    description:
      "Calculate mushroom yield, production, substrate requirements, costs, revenue, and profit with practical mushroom farming calculators.",
    url: "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
    siteName: "Organic Mushroom Farm",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
        width: 1200,
        height: 630,
        alt: "Mushroom Farming Calculators - Organic Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Calculators | Organic Mushroom Farm",
    description:
      "Practical calculators for mushroom farming yield, production, costs, revenue, profit, and substrate requirements.",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
        alt: "Mushroom Farming Calculators - Organic Mushroom Farm",
      },
    ],
  },
};

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://organicmushroomsfarm.com/mushroomfarmingcalculators#webpage",
  name: "Mushroom Farming Calculators",
  url: "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
  description:
    "Use mushroom farming calculators to estimate mushroom yield, production, substrate requirements, farming costs, revenue, and profit for mushroom cultivation.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://organicmushroomsfarm.com/#website",
  },
  about: {
    "@type": "Thing",
    name: "Mushroom Farming",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://organicmushroomsfarm.com/mushroomfarmingcalculators#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://organicmushroomsfarm.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mushroom Farming Calculators",
      item: "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
    },
  ],
};

export default function MushroomFarmingCalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mushroomFarmingCalculatorsWebPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <MushroomFarmingCalculators />
    </>
  );
}
