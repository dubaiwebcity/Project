import type { Metadata } from "next";
import { Suspense } from "react";
import ClientOurExpertsPage from "./page.client";

export const metadata: Metadata = {
  title: "Find the Best IVF, Gynecology & Andrology Doctors – Bnoon",
  description: "",
};

export default function OurExpertsPage() {
  return (
    <Suspense fallback={null}>
      <ClientOurExpertsPage />
    </Suspense>
  );
}
