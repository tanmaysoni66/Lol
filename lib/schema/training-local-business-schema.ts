const siteUrl = "https://organicmushroomsfarm.com";

export const trainingLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/training#local-business`,
  "name": "Organic Mushroom Farm",
  "url": `${siteUrl}/training`,
  "description":
    "Mushroom farming training and practical cultivation workshops.",
  "parentOrganization": {
    "@id": `${siteUrl}/#organization`
  }
};
