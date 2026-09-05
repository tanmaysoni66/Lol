const siteUrl = "https://organicmushroomsfarm.com";

export const trainingWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/training#webpage`,
  "url": `${siteUrl}/training`,
  "name": "Mushroom Farming Training in India | Online & Offline Courses",
  "description":
    "Learn mushroom farming with basic and advanced online courses and practical offline training covering Button, Oyster and Milky mushroom cultivation, farm setup and commercial farming.",
  "isPartOf": {
    "@id": `${siteUrl}/#website`
  },
  "about": {
    "@id": `${siteUrl}/#organization`
  },
  "breadcrumb": {
    "@id": `${siteUrl}/training#breadcrumb`
  },
  "mainEntity": {
    "@id": `${siteUrl}/training#basic-online`
  },
  "inLanguage": "en-IN"
};
