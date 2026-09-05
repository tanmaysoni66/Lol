const siteUrl = "https://organicmushroomsfarm.com";

export const trainingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/training#breadcrumb`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteUrl
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Mushroom Farming Training",
      "item": `${siteUrl}/training`
    }
  ]
};
