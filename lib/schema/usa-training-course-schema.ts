const siteUrl = "https://organicmushroomsfarm.com";

export const usaTrainingCourseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${siteUrl}/usatraining#online-mushroom-farming`,
      "name": "Online Mushroom Farming Training",
      "description":
        "Online mushroom farming training designed for learners who want to understand commercial mushroom cultivation, including Oyster, Button and Milky mushroom cultivation, growing systems, environmental management, farm setup and commercial farming practices.",
      "url": `${siteUrl}/usatraining`,
      "courseMode": "online",
      "educationalLevel": "Beginner to Advanced",
      "provider": {
        "@id": `${siteUrl}/#organization`
      }
    },

    {
      "@type": "Course",
      "@id": `${siteUrl}/usatraining#commercial-mushroom-farming`,
      "name": "Commercial Mushroom Farming Training",
      "description":
        "Commercial mushroom farming training covering farm planning, cultivation systems, environmental control, hygiene, pest and disease management, harvesting, post-harvest handling, packaging and commercial mushroom farm operations.",
      "url": `${siteUrl}/usatraining`,
      "courseMode": "online",
      "educationalLevel": "Advanced",
      "provider": {
        "@id": `${siteUrl}/#organization`
      }
    },

    {
      "@type": "Course",
      "@id": `${siteUrl}/usatraining#button-mushroom-training`,
      "name": "Button Mushroom Training",
      "description":
        "Practical and commercial Button Mushroom cultivation training covering growing requirements, composting, casing, environmental management, cropping, harvesting and commercial production practices.",
      "url": `${siteUrl}/usatraining`,
      "courseMode": "online",
      "educationalLevel": "Advanced",
      "provider": {
        "@id": `${siteUrl}/#organization`
      }
    },

    {
      "@type": "Course",
      "@id": `${siteUrl}/usatraining#oyster-mushroom-training`,
      "name": "Oyster Mushroom Training",
      "description":
        "Oyster Mushroom cultivation training covering substrate preparation, spawning, incubation, fruiting conditions, humidity and ventilation management, harvesting and commercial cultivation practices.",
      "url": `${siteUrl}/usatraining`,
      "courseMode": "online",
      "educationalLevel": "Beginner to Advanced",
      "provider": {
        "@id": `${siteUrl}/#organization`
      }
    },

    {
      "@type": "Course",
      "@id": `${siteUrl}/usatraining#milky-mushroom-training`,
      "name": "Milky Mushroom Training",
      "description":
        "Milky Mushroom cultivation training covering substrate preparation, spawning, casing, environmental management, fruiting, harvesting and commercial production practices.",
      "url": `${siteUrl}/usatraining`,
      "courseMode": "online",
      "educationalLevel": "Advanced",
      "provider": {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
};
