"use client";

import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import AppointmentSection from "@/components/Common/AppointmentSection";

export default function RequestAppointmentPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/request-an-appointment.jpg" />

      <AppointmentSection />
    </>
  );
}

