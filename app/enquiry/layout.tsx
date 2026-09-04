import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Organic Mushroom Farm Enquiry",
  description: "Get in touch for mushroom cultivation training, premium spawn delivery, turnkey farm setup, or purchasing fresh/dry mushrooms.",
  keywords: [
    "mushroom farm contact",
    "buy mushroom spawn",
    "mushroom farming training enquiry",
    "turnkey mushroom setup contact",
    "organic mushroom farm"
  ],
  alternates: {
    canonical: "https://organicmushroomsfarm.com/enquiry",
  }
};

export default function EnquiryLayout({ children }: { children: React.ReactNode }) {
  // ContactPage Schema / JSON-LD for Rich Search Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Organic Mushroom Farm Enquiry",
    "description": "Contact page for Organic Mushroom Farm services including training, setup, and spawn.",
    "url": "https://organicmushroomsfarm.com/enquiry",
    "mainEntity": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm",
      "url": "https://organicmushroomsfarm.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9203544140", // Standard number from your reference
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": ["IN", "US", "AU"],
        "availableLanguage": ["English", "Hindi"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
