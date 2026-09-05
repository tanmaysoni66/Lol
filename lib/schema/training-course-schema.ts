const siteUrl = "https://organicmushroomsfarm.com";

export const trainingCourseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${siteUrl}/training#basic-online`,
      "name": "Basic Mushroom Farming Training",
      "description": "Beginner-friendly online mushroom farming training covering mushroom cultivation fundamentals, Oyster and Button mushroom cultivation, small-scale farm setup, substrate preparation, spawning, bag preparation, and basic temperature and moisture management.",
      "url": `${siteUrl}/training`,
      "courseMode": "online",
      "educationalLevel": "Beginner",
      "provider": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Organic Mushroom Farm",
        "url": siteUrl
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/training`,
        "price": "299",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/training#advanced-online`,
      "name": "Advanced Commercial Mushroom Farming Training",
      "description": "Advanced online mushroom farming training covering Oyster, Button and Milky mushroom cultivation, commercial farm setup, low-cost sheds and racks, climate management, pest and disease management, packaging, shelf-life, marketing and commercial farming guidance.",
      "url": `${siteUrl}/training`,
      "courseMode": "online",
      "educationalLevel": "Advanced",
      "provider": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Organic Mushroom Farm",
        "url": siteUrl
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/training`,
        "price": "699",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/training#button-offline`,
      "name": "Standard Button Mushroom Practical Workshop",
      "description": "Hands-on offline Button Mushroom farming training covering compost preparation, casing soil, bed layout, spawning, farm visits, temperature and moisture management, commercial setup guidance and market guidance.",
      "url": `${siteUrl}/training`,
      "courseMode": "onsite",
      "educationalLevel": "Beginner",
      "provider": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Organic Mushroom Farm",
        "url": siteUrl
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/training`,
        "price": "3000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/training#master-commercial`,
      "name": "Master Commercial Mushroom Farming Workshop",
      "description": "Advanced practical mushroom farming workshop covering Button, Oyster and Milky mushroom cultivation, spawn production, sterilization, inoculation, climate control, commercial packaging, cold-chain practices, market strategies and farm setup consultancy.",
      "url": `${siteUrl}/training`,
      "courseMode": "onsite",
      "educationalLevel": "Advanced",
      "provider": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Organic Mushroom Farm",
        "url": siteUrl
      },
      "offers": {
        "@type": "Offer",
        "url": `${siteUrl}/training`,
        "price": "6000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};
