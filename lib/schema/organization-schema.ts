const siteUrl = "https://organicmushroomsfarm.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  "name": "Organic Mushroom Farm",
  "url": siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteUrl}/icon.png`
  },
  "description": "Organic Mushroom Farm provides mushroom cultivation training, practical farming guidance, mushroom farm setup support and mushroom cultivation resources.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": `${siteUrl}/enquiry`
  }
};
