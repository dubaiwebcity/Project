"use client";


import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import TreatmentsSection from "@/features/Common/TreatmentsSection";
import TreatmentsTabs from "@/features/Common/TreatmentsTabs";
export default function ClientTreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/treatments-banner-ar.jpg" />
      <TreatmentsSection />
     <TreatmentsTabs />
    </>
  );
}
