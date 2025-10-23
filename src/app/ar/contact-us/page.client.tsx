"use client";


import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import ContactUsSection from "@/features/Common/ContactUsSection";
import MediaSection from "@/features/Common/MediaSection";
export default function ClientContactUsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        bgImage="/images/contactus-banner-ar.jpg"
      />
       <ContactUsSection />
       <MediaSection />
    </>
  );
}
