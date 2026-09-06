export default function ContactStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/contact#webpage",
        url: "https://organicmushroomsfarm.com/contact",
        name:
          "Contact Organic Mushroom Farm | Mushroom Farming Training & Support",
        description:
          "Contact Organic Mushroom Farm for mushroom farming training, commercial farm setup, spawn supply, consultancy and cultivation support.",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        breadcrumb: {
          "@id": "https://organicmushroomsfarm.com/contact#breadcrumb",
        },
        inLanguage: "en-IN",
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/contact#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://organicmushroomsfarm.com/contact",
          },
        ],
      },

      {
        "@type": "ContactPage",
        "@id": "https://organicmushroomsfarm.com/contact#contactpage",
        url: "https://organicmushroomsfarm.com/contact",
        name: "Contact Organic Mushroom Farm",
        description:
          "Contact Organic Mushroom Farm for mushroom farming training, farm setup, spawn supply, consultancy and commercial mushroom cultivation support.",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        about: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
