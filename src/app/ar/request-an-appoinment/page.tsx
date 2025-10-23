import type { Metadata } from "next";
import ClientRequestAppointmentPage from "./page.client";

export const metadata: Metadata = {
  title: "طلب موعد مع طبيب – بنون في الرياض وجدة ",
  description:
  "",
};

export default function RequestAppointmentPage() {
  return <ClientRequestAppointmentPage />;
}
