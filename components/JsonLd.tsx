export function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Organic Mushrooms Farm",
      "url": "https://organicmushroomsfarm.com",
      "logo": "https://organicmushroomsfarm.com/logo.png",
      "description": "Leading commercial mushroom cultivation research, training institute, and turnkey setup infrastructure provider in India.",
      "telephone": "+91-9203544140",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Agro Technology Park",
        "addressLocality": "Jabalpur",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "482001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.youtube.com/@organicmushroomfarm",
        "https://www.instagram.com/organic_mushroom_farm_jabalpur",
        "https://www.facebook.com/organic.mushroom.farm0",
        "https://x.com/mushroomfarmjbp",
        "https://t.me/organicmushroomfarms",
        "https://www.quora.com/profile/Organic-Mushroom-Farm-1"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Organic Mushrooms Farm Training & Turnkey Infrastructure",
      "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
      "telephone": "+919203544140",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jabalpur",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.1815,
        "longitude": 79.9864
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Organic Mushrooms Farm",
      "url": "https://organicmushroomsfarm.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://organicmushroomsfarm.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the duration of this commercial mushroom farming training course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our practical online course provides 10+ hours of on-demand masterclasses with lifetime access, while the physical on-farm training workshop in Jabalpur runs for 3 intensive days."
          }
        },
        {
          "@type": "Question",
          "name": "Is government subsidy available for commercial mushroom farming in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, under MIDH and NHB schemes, government subsidies ranging from 40% to 50% are available for commercial mushroom production units and compost tunnels."
          }
        }
      ]
    }
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
