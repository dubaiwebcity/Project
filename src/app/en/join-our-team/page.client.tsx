"use client";

import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import TeamsSection from "@/components/Common/TeamsSection";

export default function ClientJoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/join-our-team.avif" />

      <TeamsSection />
    </>
  );
}

