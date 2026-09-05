const siteUrl = "https://organicmushroomsfarm.com";

export const homepageWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  "url": siteUrl,
  "name": "Organic Mushroom Farm | Mushroom Farming, Training & Spawn",
  "description":
    "Organic Mushroom Farm provides mushroom farming training, commercial farm setup guidance and quality mushroom spawn for Button, Oyster and Milky mushroom cultivation.",
  "isPartOf": {
    "@id": `${siteUrl}/#website`
  },
  "about": {
    "@id": `${siteUrl}/#organization`
  },
  "inLanguage": "en"
};
