import Script from "next/script";

const siteUrl = "https://organicmushroomsfarm.com";
const contactUrl = `${siteUrl}/contact`;

export default function StructuredData() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${contactUrl}#contactpage`,
    url: contactUrl,
    name: "Contact Organic Mushroom Farm",
    description:
      "Contact Organic Mushroom Farm for mushroom farming training, farm setup, spawn supply, consultancy and commercial mushroom cultivation support.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-IN",
    breadcrumb: {
      "@id": `${contactUrl}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${contactUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: contactUrl,
      },
    ],
  };

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "@id": `${contactUrl}#contact-point`,
    contactType: "customer support",
    telephone: "+91-9203544140",
    availableLanguage: ["English", "Hindi"],
    areaServed: [
      "IN",
      "US",
      "AU",
    ],
    url: contactUrl,
  };

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="contact-point-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPointSchema),
        }}
      />
    </>
  );
}
