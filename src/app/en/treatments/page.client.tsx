"use client";


import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import TreatmentsSection from "@/components/Common/TreatmentsSection";
import TreatmentsTabs from "@/components/Common/TreatmentsTabs";
export default function ClientTreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/treatments-banner.avif" />
      <TreatmentsSection />
     <TreatmentsTabs />
    </>
  );
}
