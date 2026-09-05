const siteUrl = "https://organicmushroomsfarm.com";

export const trainingHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${siteUrl}/training#how-to-start`,
  "name": "How to Start Mushroom Farming",
  "description":
    "A practical overview of the main steps involved in starting mushroom cultivation.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Choose a Mushroom Variety",
      "text": "Select a suitable mushroom variety such as Oyster, Button or Milky mushroom based on your growing conditions."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Prepare the Growing Area",
      "text": "Prepare a clean and suitable growing area with appropriate ventilation and environmental controls."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Prepare the Substrate",
      "text": "Prepare the appropriate growing substrate according to the selected mushroom variety."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Add Spawn",
      "text": "Introduce suitable mushroom spawn using proper hygiene and handling procedures."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Manage Growing Conditions",
      "text": "Maintain appropriate temperature, humidity, ventilation and hygiene during cultivation."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Harvest",
      "text": "Harvest mushrooms at the appropriate stage and handle them carefully after harvest."
    }
  ]
};
