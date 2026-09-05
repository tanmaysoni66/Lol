const siteUrl = "https://organicmushroomsfarm.com";

export const enquiryContactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/enquiry#contact-page`,
  "url": `${siteUrl}/enquiry`,
  "name": "Contact Organic Mushroom Farm",
  "description":
    "Contact Organic Mushroom Farm for mushroom farming training, mushroom farm setup, spawn and commercial mushroom farming enquiries.",
  "isPartOf": {
    "@id": `${siteUrl}/#website`
  },
  "about": {
    "@id": `${siteUrl}/#organization`
  },
  "breadcrumb": {
    "@id": `${siteUrl}/enquiry#breadcrumb`
  },
  "inLanguage": "en"
};
