import type { Metadata } from "next";

const canonicalUrl = "https://organicmushroomsfarm.com/contact";

export const contactMetadata: Metadata = {
  title: "Contact Organic Mushroom Farm | Mushroom Farming Support & Enquiry",
  description:
    "Contact Organic Mushroom Farm for mushroom farming training, farm setup, spawn supply, commercial project guidance and mushroom cultivation support in India and worldwide.",

  keywords: [
    "contact organic mushroom farm",
    "mushroom farming contact",
    "mushroom farming enquiry",
    "mushroom farm setup enquiry",
    "mushroom farming training contact",
    "mushroom spawn enquiry",
    "commercial mushroom farming support",
    "mushroom farming consultancy",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Contact Organic Mushroom Farm | Mushroom Farming Support & Enquiry",
    description:
      "Get in touch with Organic Mushroom Farm for mushroom farming training, commercial farm setup, spawn supply, consultancy and cultivation support.",
    url: canonicalUrl,
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/f_auto,q_auto:eco,w_1200,h_630,c_fill/v1788683933/organicmushroomfarmcontractform_dkgdt9.png",
        width: 1200,
        height: 630,
        alt: "Contact Organic Mushroom Farm for Mushroom Farming Services and Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Organic Mushroom Farm | Mushroom Farming Support",
    description:
      "Contact Organic Mushroom Farm for mushroom farming training, farm setup, spawn supply, consultancy and commercial cultivation support.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/f_auto,q_auto:eco,w_1200,h_630,c_fill/v1788683933/organicmushroomfarmcontractform_dkgdt9.png",
    ],
  },

  authors: [
    {
      name: "Organic Mushrooms Farm Agronomy Team",
    },
  ],
};

export default contactMetadata;
