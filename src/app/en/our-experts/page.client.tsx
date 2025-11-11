"use client";
import Image from "next/image";

import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import FertilityDoctor from "@/components/Common/FertilityDoctor";
import OurExperts from "@/components/Common/OurExperts";

export default function ClientOurExpertsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
  bgImage="/images/experts-banner.jpg"
/>

      <OurExperts />
       <FertilityDoctor />
    </>
  );
}
