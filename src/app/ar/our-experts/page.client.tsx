"use client";
import Image from "next/image";

import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import FertilityDoctor from "@/features/Common/FertilityDoctor";
import OurExperts from "@/features/Common/OurExperts";

export default function ClientOurExpertsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        bgImage="/images/experts-banner-ar.jpg"
      />

      <OurExperts />
      
      <FertilityDoctor />
    </>
  );
}
