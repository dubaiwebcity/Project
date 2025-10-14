
"use client";

import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";

import OurLocations from "@/features/Common/OurLocations";
export default function ClientOurClinicsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
      <OurLocations />
    </>
  );
}
