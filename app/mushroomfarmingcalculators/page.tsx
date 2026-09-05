import type { Metadata } from "next";
import MushroomFarmingCalculators from "@/components/MushroomFarmingCalculators";

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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://organicmushroomsfarm.com/mushroomfarmingcalculators#webpage",
  url: "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
  name: "Mushroom Farming Calculators",
  description:
    "Use mushroom farming calculators to estimate mushroom yield, production, substrate requirements, farming costs, revenue, and profit for mushroom cultivation.",
  inLanguage: "en",
  isPartOf: {
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can I calculate with mushroom farming calculators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mushroom farming calculators can help estimate production, yield, substrate requirements, costs, revenue, and profit for mushroom cultivation.",
      },
    },
    {
      "@type": "Question",
      name: "How can a mushroom farming calculator help farmers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A calculator can help farmers estimate important production and financial figures before starting or expanding a mushroom farming operation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these calculators for planning a mushroom farm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The calculations can be used as planning estimates for production, resource requirements, costs, and potential returns.",
      },
    },
    {
      "@type": "Question",
      name: "Are mushroom farming calculator results estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results are estimates based on the information entered into the calculator. Actual results can vary depending on mushroom variety, growing conditions, substrate quality, yield, market prices, and other farming factors.",
      },
    },
  ],
};

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl:
    "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
  name: "Mushroom Farming Calculators",
  description: "Mushroom Farming Calculators by Organic Mushroom Farm.",
  url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
};

export default function MushroomFarmingCalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageSchema),
        }}
      />
      <MushroomFarmingCalculators />
    </>
  );
}
