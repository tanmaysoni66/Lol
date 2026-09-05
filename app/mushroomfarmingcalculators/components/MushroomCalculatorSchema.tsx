export default function MushroomCalculatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",

        "@id":
          "https://organicmushroomsfarm.com/mushroomfarmingcalculators#webpage",

        url:
          "https://organicmushroomsfarm.com/mushroomfarmingcalculators",

        name:
          "Mushroom Farming Calculator",

        description:
          "Interactive mushroom farming calculator for planning commercial farm space, growing rooms, racks, capacity and equipment requirements.",

        isPartOf: {
          "@id":
            "https://organicmushroomsfarm.com/#website",
        },

        breadcrumb: {
          "@id":
            "https://organicmushroomsfarm.com/mushroomfarmingcalculators#breadcrumb",
        },

        inLanguage: "en-IN",
      },

      {
        "@type": "SoftwareApplication",

        "@id":
          "https://organicmushroomsfarm.com/mushroomfarmingcalculators#calculator",

        name:
          "Mushroom Farming Calculator",

        applicationCategory:
          "BusinessApplication",

        applicationSubCategory:
          "Agriculture Calculator",

        operatingSystem:
          "Web Browser",

        description:
          "A web-based mushroom farming calculator for estimating farm layout, growing rooms, racks, production capacity and commercial setup requirements.",

        url:
          "https://organicmushroomsfarm.com/mushroomfarmingcalculators",

        image:
          "https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788619908/mushroomcalculator_pshrjc.png",

        isAccessibleForFree: true,

        browserRequirements:
          "Requires a modern web browser.",

        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },

        provider: {
          "@type": "Organization",

          name:
            "Organic Mushrooms Farm",

          url:
            "https://organicmushroomsfarm.com/",
        },
      },

      {
        "@type": "BreadcrumbList",

        "@id":
          "https://organicmushroomsfarm.com/mushroomfarmingcalculators#breadcrumb",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item:
              "https://organicmushroomsfarm.com/",
          },

          {
            "@type": "ListItem",
            position: 2,
            name:
              "Mushroom Farming Calculators",

            item:
              "https://organicmushroomsfarm.com/mushroomfarmingcalculators",
          },
        ],
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
