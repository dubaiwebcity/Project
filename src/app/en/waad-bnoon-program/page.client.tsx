"use client";


import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import WaadSection from "@/components/Common/WaadSection";
export default function WaadBnoonPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/waad-bnoon-banner.png" />
      <WaadSection />
     
    </>
  );
}
