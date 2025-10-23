"use client";


import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import AboutusSection from "@/components/Common/AboutusSection";
import WhoAreWe from "@/components/Common/WhoAreWe";
export default function ClientAboutUsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/aboutus.jpg" />
      <AboutusSection />
       <WhoAreWe />
     
    </>
  );
}
