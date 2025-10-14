"use client";

import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import SuccessSection from "@/features/Common/SuccessSection";

export default function ClientOurSuccessPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/success-banner-ar.jpg" />

      <SuccessSection />
    </>
  );
}

