"use client";


import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import VisitTabs from "@/components/Common/VisitTabs";
export default function ClientYourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/visit-banner.jpg" />
     <VisitTabs />

     
    </>
  );
}
