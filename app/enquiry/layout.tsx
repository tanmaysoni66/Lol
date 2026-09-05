import { Metadata } from "next";
import { enquiryContactPageSchema } from "@/lib/schema/enquiry-contact-page-schema";
import { enquiryBreadcrumbSchema } from "@/lib/schema/enquiry-breadcrumb-schema";
import { organizationSchema } from "@/lib/schema/organization-schema";
import { enquiryImageSchema } from "@/lib/schema/enquiry-image-schema";

export const metadata: Metadata = {
  title: "Mushroom Farming Enquiry | Contact Organic Mushroom Farm",
  description:
    "Send an enquiry to Organic Mushroom Farm for mushroom farming training, farm setup guidance, mushroom spawn and commercial mushroom farming services.",
  keywords: [
    "Mushroom Farming Enquiry",
    "Mushroom Farming Training Enquiry",
    "Mushroom Farm Setup Enquiry",
    "Mushroom Cultivation Enquiry",
    "Commercial Mushroom Farming Enquiry",
    "Mushroom Spawn Enquiry",
    "Mushroom Farming Business Enquiry",
    "Organic Mushroom Farm Contact"
  ],
  alternates: {
    canonical: "https://organicmushroomsfarm.com/enquiry"
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
    title: "Mushroom Farming Enquiry | Contact Organic Mushroom Farm",
    description:
      "Send an enquiry to Organic Mushroom Farm for mushroom farming training, farm setup guidance, mushroom spawn and commercial mushroom farming services.",
    url: "https://organicmushroomsfarm.com/enquiry",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1787977978/oystermushroomgrowingroom_av76zb.webp",
        width: 1200,
        height: 630,
        alt: "Mushroom Growing Room - Organic Mushroom Farm"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Enquiry | Contact Organic Mushroom Farm",
    description:
      "Send an enquiry to Organic Mushroom Farm for mushroom farming training, farm setup guidance, mushroom spawn and commercial mushroom farming services.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1787977978/oystermushroomgrowingroom_av76zb.webp"
    ]
  }
};

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryContactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryImageSchema) }}
      />
      {children}
    </>
  );
}
