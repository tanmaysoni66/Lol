import Script from "next/script";

const pageUrl = "https://organicmushroomsfarm.com/3d-mushroom-farm";

export default function StructuredData() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "3D Commercial Mushroom Farm Planner",
    description:
      "Interactive 3D commercial mushroom farm planning and equipment visualization tool.",
    isPartOf: {
      "@id": "https://organicmushroomsfarm.com/#website",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: "3D Commercial Mushroom Farm Planner",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Mushroom Farm Planning Tool",
    operatingSystem: "Web Browser",
    url: pageUrl,
    description:
      "A web-based 3D tool for visualizing commercial mushroom farm layouts, rooms, racks, HVAC, fogging, airflow, sensors and cold storage.",
    featureList: [
      "Interactive 3D farm visualization",
      "2D floor planning",
      "3D measurement",
      "Rack and equipment placement",
      "Airflow visualization",
      "Water and fogger visualization",
      "Electrical system visualization",
      "X-Ray view",
      "Section view",
      "Exploded view",
      "BOQ planning",
      "Project report export",
      "3D image capture",
      "PDF export",
      "Farm configuration saving",
      "Farm design comparison",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://organicmushroomsfarm.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "3D Mushroom Farm Planner",
        item: pageUrl,
      },
    ],
  };

  return (
    <Script
      id="3d-mushroom-farm-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          webPageSchema,
          softwareSchema,
          breadcrumbSchema,
        ]),
      }}
    />
  );
}
