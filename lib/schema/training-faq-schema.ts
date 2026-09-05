const siteUrl = "https://organicmushroomsfarm.com";

export const trainingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/training#faq`,
  "url": `${siteUrl}/training`,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of the mushroom farming training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The training duration depends on the selected online or offline training program. Please contact Organic Mushroom Farm for the current duration and schedule of the selected program."
      }
    },
    {
      "@type": "Question",
      "name": "Is the mushroom farming training suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Basic Online Mushroom Farming Training is designed for beginners and covers fundamental cultivation, Oyster and Button mushroom basics, small-scale setup, substrate preparation, spawning, and basic environmental management."
      }
    },
    {
      "@type": "Question",
      "name": "Which mushroom varieties are covered in the training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The training covers Oyster, Button and Milky mushroom cultivation. The topics covered depend on the selected training program."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the Basic Online Mushroom Farming Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Basic Online Training covers mushroom growth fundamentals, Oyster and Button mushroom basics, small-scale setup, substrate preparation, spawning, bag preparation, and basic temperature and moisture management."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the Advanced Mushroom Farming Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Advanced Training includes the basic training topics along with Milky mushroom cultivation, commercial farm setup, climate management, pest and disease management, packaging, shelf-life management, marketing and commercial farming guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide offline practical mushroom farming training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Offline practical training is available through farm-based workshops. The available programs and schedules may vary, so contact Organic Mushroom Farm for current workshop details."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after the training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Training support is available according to the selected program. Contact Organic Mushroom Farm for the current support and community access included with your training."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide mushroom farm setup guidance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The training includes practical guidance related to mushroom farm setup, infrastructure planning, environmental management and commercial cultivation, depending on the selected program."
      }
    }
  ]
};
