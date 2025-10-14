"use client";


import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import FertilityTabs from "@/features/Common/FertilityTabs";
import CustomList from "@/features/Common/CustomList";
export default function ClientFertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/fertility-guid-banner-ar.jpg" />
     <FertilityTabs />

     
    </>
  );
}
