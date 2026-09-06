import { Metadata } from "next";
import CancelClient from "@/components/training/CancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function BasicCancel() {
  return <CancelClient type="basic" />;
}
