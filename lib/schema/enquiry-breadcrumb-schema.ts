const siteUrl = "https://organicmushroomsfarm.com";

export const enquiryBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/enquiry#breadcrumb`,
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
      "name": "Enquiry",
      "item": `${siteUrl}/enquiry`
    }
  ]
};
