"use client";

import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import SuccessSection from "@/components/Common/SuccessSection";

export default function ClientOurSuccessPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/success-banner.avif" />

      <SuccessSection />
    </>
  );
}

