import { Metadata } from "next";
import TrainingCheckoutClient from "@/components/training/TrainingCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function BasicCheckout() {
  return <TrainingCheckoutClient type="basic" />;
}
