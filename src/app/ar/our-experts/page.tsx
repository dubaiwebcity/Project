import type { Metadata } from "next";
import { Suspense } from "react";
import ClientOurExpertsPage from "./page.client";

export const metadata: Metadata = {
  title: "أطباء أطفال الأنابيب وأمراض النساء وأمراض الذكورة – بنون ",
  description:
   "",
};

export default function OurExpertsPage() {
  return(
    <Suspense fallback={null}>
      <ClientOurExpertsPage />;
      </Suspense>
  );
}
