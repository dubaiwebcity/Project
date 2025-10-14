import type { Metadata } from "next";
import ClientRequestAppointmentPage from "./page.client";

export const metadata: Metadata = {
  title: "Book an Appointment – Bnoon | Riyadh & Jeddah",
  description:
    "",
};

export default function RequestAppointmentServer() {
  return <ClientRequestAppointmentPage />;
}
