import { Metadata } from "next";
import UsaCancelClient from "@/components/training/UsaCancelClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function UsaBasicCancel() {
  return <UsaCancelClient type="usa-basic" />;
}
