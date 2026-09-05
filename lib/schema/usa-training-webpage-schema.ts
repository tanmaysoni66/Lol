const siteUrl = "https://organicmushroomsfarm.com";

export const usaTrainingWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/usatraining#webpage`,
  "url": `${siteUrl}/usatraining`,
  "name": "Mushroom Farming Training in USA | Online & Commercial Training",
  "description":
    "Learn mushroom cultivation and commercial mushroom farming with online training covering Button, Oyster and Milky mushrooms, farm setup, cultivation methods and commercial farming practices.",
  "isPartOf": {
    "@id": `${siteUrl}/#website`
  },
  "about": {
    "@id": `${siteUrl}/#organization`
  },
  "breadcrumb": {
    "@id": `${siteUrl}/usatraining#breadcrumb`
  },
  "mainEntity": {
    "@id": `${siteUrl}/usatraining#online-mushroom-farming`
  },
  "inLanguage": "en-US"
};
