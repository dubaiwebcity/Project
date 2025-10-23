"use client";

import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import AboutusSection from "@/features/Common/AboutusSection";
import WhoAreWe from "@/features/Common/WhoAreWe";

export default function ClientAboutUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/aboutus-ar-banner.jpg" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
