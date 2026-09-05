import TrainingLanding from "@/components/TrainingLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA Professional Mushroom Cultivation Training | Organic Mushroom Farm",
  description: "Join our specialized USA mushroom cultivation masterclass. Master commercial mushroom farming techniques with our expert training program tailored for USA growers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/usatraining",
  },
};

export default function USATrainingPage() {
  return <TrainingLanding region="us" />;
}

