const SITE_URL = "https://organicmushroomsfarm.com";
const PAGE_URL = `${SITE_URL}/mushroom-farm-climate-tracker`;

const IMAGE_URL =
  "https://res.cloudinary.com/dnw4fpk2y/image/upload/f_auto,q_auto,w_1200/v1788677309/mushroomtemperaturecontrol_tack43.png";

export default function SchemaJSONLD() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "Mushroom Farm Climate Tracker | Temperature, Humidity & CO₂ Monitoring",
        description:
          "Monitor mushroom farm climate conditions including temperature, humidity and CO₂ for commercial mushroom cultivation and growing-room environmental management.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@type": "Thing",
          name: "Mushroom Farm Climate Monitoring",
        },
        mainEntity: {
          "@id": `${PAGE_URL}#application`,
        },
        primaryImageOfPage: {
          "@id": `${PAGE_URL}#image`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebApplication",
        "@id": `${PAGE_URL}#application`,
        name: "Mushroom Farm Climate Tracker",
        url: PAGE_URL,
        description:
          "Interactive web application for monitoring and understanding mushroom farm temperature, relative humidity and CO₂ conditions.",
        applicationCategory: "AgricultureApplication",
        applicationSubCategory:
          "Mushroom Farm Climate Monitoring",
        operatingSystem: "Web Browser",
        browserRequirements:
          "Requires a modern JavaScript-enabled web browser",
        isAccessibleForFree: true,
        featureList: [
          "Mushroom farm temperature monitoring",
          "Relative humidity monitoring",
          "CO2 monitoring",
          "Climate condition analysis",
          "Growing-room environmental monitoring",
          "Commercial mushroom farm climate planning",
        ],
        image: {
          "@id": `${PAGE_URL}#image`,
        },
        creator: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mushroom Farm Climate Tracker",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${PAGE_URL}#image`,
        contentUrl: IMAGE_URL,
        url: IMAGE_URL,
        name: "Mushroom Farm Climate Tracker",
        description:
          "Temperature, humidity and climate monitoring for mushroom farms.",
        caption:
          "Mushroom farm temperature, humidity and climate control monitoring",
        representativeOfPage: true,
        creator: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          url: SITE_URL,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
