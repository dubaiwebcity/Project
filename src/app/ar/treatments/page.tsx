import type { Metadata } from "next";
import ClientTreatmentsPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - أطفال الأنابيب والحقن المجهري والعقم وفحوصات الجينات ",
  description:
    "",
};

export default function TreatmentsPage() {
  return <ClientTreatmentsPage />;
}
