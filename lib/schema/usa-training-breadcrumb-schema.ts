const siteUrl = "https://organicmushroomsfarm.com";

export const usaTrainingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/usatraining#breadcrumb`,
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
      "name": "USA Mushroom Farming Training",
      "item": `${siteUrl}/usatraining`
    }
  ]
};
