"use client";


import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import WaadSection from "@/features/Common/WaadSection";
export default function ClientWaadBnoonProgramPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/waad-bnoon-banner-ar.png" />
      <WaadSection />
     
    </>
  );
}
