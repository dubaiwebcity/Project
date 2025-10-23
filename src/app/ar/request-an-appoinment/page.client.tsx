"use client";

import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import AppointmentSection from "@/features/Common/AppointmentSection";

export default function ClientRequestAppointmentPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/request-an-appointment-ar.jpg" />

      <AppointmentSection />
    </>
  );
}

