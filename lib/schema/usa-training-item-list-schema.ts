const siteUrl = "https://organicmushroomsfarm.com";

export const usaTrainingItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/usatraining#training-programs`,
  "name": "USA Mushroom Farming Training Programs",
  "description":
    "Mushroom farming training programs available for learners interested in mushroom cultivation and commercial farming.",
  "url": `${siteUrl}/usatraining`,
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Online Mushroom Farming Training",
      "url": `${siteUrl}/usatraining#online-mushroom-farming`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Commercial Mushroom Farming Training",
      "url": `${siteUrl}/usatraining#commercial-mushroom-farming`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Button Mushroom Training",
      "url": `${siteUrl}/usatraining#button-mushroom-training`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Oyster Mushroom Training",
      "url": `${siteUrl}/usatraining#oyster-mushroom-training`
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Milky Mushroom Training",
      "url": `${siteUrl}/usatraining#milky-mushroom-training`
    }
  ]
};
