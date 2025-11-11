"use client";


import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import FertilityTabs from "@/components/Common/FertilityTabs";
import CustomList from "@/components/Common/CustomList";
export default function ClientFertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/fertility-guid-banner.jpg" />
     <FertilityTabs />

     
    </>
  );
}
