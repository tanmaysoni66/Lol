import React from 'react';

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        "name": "Organic Mushrooms Farm",
        "url": "https://organicmushroomsfarm.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://organicmushroomsfarm.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9203544140",
          "contactType": "customer service",
          "email": "support@mushroomtraining.online"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        "url": "https://organicmushroomsfarm.com/",
        "name": "Organic Mushrooms Farm | Setup, Spawn & Training",
        "publisher": {
          "@id": "https://organicmushroomsfarm.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Organic Mushrooms Farm",
        "image": "https://organicmushroomsfarm.com/logo.png",
        "@id": "https://organicmushroomsfarm.com/#localbusiness",
        "url": "https://organicmushroomsfarm.com",
        "telephone": "+919203544140",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jabalpur",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "Tanish Soni"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a commercial mushroom farm setup cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of a commercial mushroom farm setup varies depending on the scale and infrastructure. We offer turnkey setup solutions starting from small-scale models to large commercial units."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide online mushroom farming training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive online and offline training programs covering everything from spawn preparation to commercial cultivation techniques."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
