const siteUrl = "https://organicmushroomsfarm.com";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "url": siteUrl,
  "name": "Organic Mushroom Farm",
  "description":
    "Organic Mushroom Farm provides mushroom farming training, cultivation resources, farm setup guidance and mushroom farming solutions.",
  "publisher": {
    "@id": `${siteUrl}/#organization`
  },
  "inLanguage": "en-IN"
};
