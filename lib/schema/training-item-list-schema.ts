const siteUrl = "https://organicmushroomsfarm.com";

export const trainingItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/training#training-programs`,
  "name": "Mushroom Farming Training Programs",
  "description":
    "Online and offline mushroom farming training programs offered by Organic Mushroom Farm.",
  "url": `${siteUrl}/training`,
  "numberOfItems": 4,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Basic Mushroom Farming Training",
      "url": `${siteUrl}/training#basic-online`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Advanced Commercial Mushroom Farming Training",
      "url": `${siteUrl}/training#advanced-online`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Standard Button Mushroom Practical Workshop",
      "url": `${siteUrl}/training#button-offline`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Master Commercial Mushroom Farming Workshop",
      "url": `${siteUrl}/training#master-commercial`
    }
  ]
};
