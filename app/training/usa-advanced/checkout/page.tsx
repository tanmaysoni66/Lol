import { Metadata } from "next";
import UsaCheckoutClient from "@/components/training/UsaCheckoutClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function UsaAdvancedCheckout() {
  return <UsaCheckoutClient type="usa-advanced" />;
}
