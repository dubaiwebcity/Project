"use client";

import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import FeedbackSection from "@/features/Common/FeedbackSection";

export default function ClientSubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/feedback-banner-ar.jpg" />

      <FeedbackSection />
    </>
  );
}

