"use client";


import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import VisitTabs from "@/features/Common/VisitTabs";
export default function ClientYourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/visit-banner-ar.jpg" />
     <VisitTabs />

     
    </>
  );
}
