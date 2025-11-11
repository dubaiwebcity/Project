"use client";


import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import ContactUsSection from "@/components/Common/ContactUsSection";
import MediaSection from "@/components/Common/MediaSection";
export default function ClientContactUsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        bgImage="/images/contact-us-banner.jpg"
      />
       <ContactUsSection />
       <MediaSection />
    </>
  );
}
