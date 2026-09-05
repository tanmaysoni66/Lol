import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Calculator | Commercial Farm Planning Tool",

  description:
    "Use our mushroom farming calculator to plan growing rooms, racks, farm space, capacity, equipment requirements and commercial mushroom farm setup.",

  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
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
    title:
      "Mushroom Farming Calculator | Commercial Farm Planning Tool",

    description:
      "Plan mushroom farm space, growing rooms, racks, capacity and commercial setup with our mushroom farming calculator.",

    url:
      "https://organicmushroomsfarm.com/mushroomfarmingcalculators",

    siteName:
      "Organic Mushrooms Farm",

    type: "website",

    images: [
      {
        url:
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
        width: 1200,
        height: 630,
        alt:
          "Mushroom Farming Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mushroom Farming Calculator | Commercial Farm Planning Tool",

    description:
      "Plan your commercial mushroom farm with our interactive mushroom farming calculator.",

    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",
    ],
  },
};

export default function MushroomFarmingCalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
