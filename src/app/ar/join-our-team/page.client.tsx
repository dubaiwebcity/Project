"use client";

import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import TeamsSection from "@/features/Common/TeamsSection";

export default function ClientJoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/join-our-team-ar.jpg" />

      <TeamsSection />
    </>
  );
}

