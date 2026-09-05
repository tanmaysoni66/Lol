import TrainingLanding from "@/components/TrainingLanding";
import { Metadata } from "next";
import { usaTrainingCourseSchema } from "@/lib/schema/usa-training-course-schema";
import { usaTrainingBreadcrumbSchema } from "@/lib/schema/usa-training-breadcrumb-schema";
import { usaTrainingFaqSchema } from "@/lib/schema/usa-training-faq-schema";
import { usaTrainingWebPageSchema } from "@/lib/schema/usa-training-webpage-schema";
import { usaTrainingItemListSchema } from "@/lib/schema/usa-training-item-list-schema";
import { organizationSchema } from "@/lib/schema/organization-schema";
import { usaTrainingImageSchema } from "@/lib/schema/usa-training-image-schema";
import EeatUsaTrainingTrust from "@/components/EeatUsaTrainingTrust";

export const metadata: Metadata = {
  title: "Mushroom Farming Training in USA | Online & Commercial Course",
  description:
    "Learn mushroom farming and cultivation with online training covering Button, Oyster and Milky mushrooms, commercial farm setup, climate control and mushroom farming business practices.",
  keywords: [
    "Mushroom Farming Training",
    "Mushroom Farming Training in USA",
    "Mushroom Cultivation Training",
    "Mushroom Farming Course",
    "Mushroom Cultivation Course",
    "Button Mushroom Training",
    "Oyster Mushroom Training",
    "Milky Mushroom Training",
    "Commercial Mushroom Farming Training",
    "Online Mushroom Farming Training",
    "Mushroom Farming Business Training",
    "Mushroom Farm Setup Training",
    "mushroom farming training course in USA",
    "online mushroom cultivation training",
    "button mushroom cultivation training",
    "oyster mushroom cultivation training",
    "milky mushroom cultivation training",
    "commercial mushroom farming course",
    "mushroom farming business training in USA",
    "mushroom farm setup training"
  ],
  alternates: {
    canonical: "https://organicmushroomsfarm.com/usatraining",
    languages: {
      "en-IN": "https://organicmushroomsfarm.com/training",
      "en-US": "https://organicmushroomsfarm.com/usatraining",
      "x-default": "https://organicmushroomsfarm.com/usatraining"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Mushroom Farming Training in USA | Online & Commercial Course",
    description:
      "Learn Button, Oyster and Milky mushroom cultivation with online commercial mushroom farming training, farm setup guidance and practical cultivation knowledge.",
    url: "https://organicmushroomsfarm.com/usatraining",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788596194/usamushroomtraining_nghkh1.png",
        width: 1200,
        height: 630,
        alt: "Mushroom Farming Training in USA - Organic Mushroom Farm"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Training in USA | Online & Commercial Course",
    description:
      "Learn Button, Oyster and Milky mushroom cultivation with online commercial mushroom farming training, farm setup guidance and practical cultivation knowledge.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788596194/usamushroomtraining_nghkh1.png"
    ]
  }
};

export default function USATrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingCourseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(usaTrainingImageSchema) }} />
      <TrainingLanding region="us" />
      <EeatUsaTrainingTrust />
    </>
  );
}

