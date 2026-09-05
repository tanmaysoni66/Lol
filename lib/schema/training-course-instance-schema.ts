const siteUrl = "https://organicmushroomsfarm.com";

export const trainingCourseInstanceSchema = {
  "@context": "https://schema.org",
  "@type": "CourseInstance",
  "@id": `${siteUrl}/training#offline-workshop-instance`,
  "name": "Master Commercial Mushroom Farming Workshop",
  "courseMode": "onsite",
  "courseWorkload": "P3D",
  "location": {
    "@type": "Place",
    "name": "Organic Mushroom Farm",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  }
};
