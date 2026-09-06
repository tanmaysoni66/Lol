import { Metadata } from "next";
import RegistrationFormClient from "@/components/training/RegistrationFormClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function UsaBasicRegister() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <RegistrationFormClient type="usa-basic" />
    </Suspense>
  );
}
