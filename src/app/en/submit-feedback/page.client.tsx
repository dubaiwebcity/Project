"use client";

import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import FeedbackSection from "@/components/Common/FeedbackSection";

export default function SubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/feedback-banner.jpg" />

      <FeedbackSection />
    </>
  );
}

