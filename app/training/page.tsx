import TrainingLanding from "@/components/TrainingLanding";
import { Metadata } from "next";
import { trainingCourseSchema } from "@/lib/schema/training-course-schema";
import { trainingBreadcrumbSchema } from "@/lib/schema/training-breadcrumb-schema";
import { trainingFaqSchema } from "@/lib/schema/training-faq-schema";
import { organizationSchema } from "@/lib/schema/organization-schema";
import { trainingWebPageSchema } from "@/lib/schema/training-webpage-schema";
import { websiteSchema } from "@/lib/schema/website-schema";
import { trainingItemListSchema } from "@/lib/schema/training-item-list-schema";
import { trainingLocalBusinessSchema } from "@/lib/schema/training-local-business-schema";
import { trainingCourseInstanceSchema } from "@/lib/schema/training-course-instance-schema";
import { trainingHowToSchema } from "@/lib/schema/training-howto-schema";
import { trainingImageSchema } from "@/lib/schema/training-image-schema";

export const metadata: Metadata = {
  title: "Mushroom Farming Training in India | Online & Offline Courses",
  description:
    "Learn mushroom farming with basic and advanced online courses and practical offline training covering Button, Oyster and Milky mushroom cultivation, farm setup and commercial farming.",
  keywords: [
    "mushroom farming training",
    "mushroom farming training in India",
    "mushroom cultivation training",
    "mushroom farming course",
    "mushroom cultivation course",
    "button mushroom training",
    "oyster mushroom training",
    "milky mushroom training",
    "commercial mushroom farming training",
    "online mushroom farming training",
    "offline mushroom farming training",
  ],
  alternates: {
    canonical: "https://organicmushroomsfarm.com/training",
  },
  openGraph: {
    title: "Mushroom Farming Training in India | Online & Offline Courses",
    description:
      "Learn Button, Oyster and Milky mushroom cultivation through online and practical commercial mushroom farming training.",
    url: "https://organicmushroomsfarm.com/training",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788594243/mushroomtraining_yftrft.png",
        width: 1200,
        height: 630,
        alt: "Mushroom Farming Training - Organic Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Training | Online & Offline Courses",
    description:
      "Learn commercial Button, Oyster and Milky mushroom cultivation with Organic Mushroom Farm training.",
    images: ["https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788594243/mushroomtraining_yftrft.png"],
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
};

export default function TrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingCourseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingItemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingCourseInstanceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingHowToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingImageSchema) }} />

      <TrainingLanding region="in" />
    </>
  );
}
