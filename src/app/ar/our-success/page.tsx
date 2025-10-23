import type { Metadata } from "next";
import ClientOurSuccessPage from "./page.client";

export const metadata: Metadata = {
  title:"بنون – نسب نجاح الحمل، عمليات أطفال الأنابيب والحقن المجهري ",
  description:
   "",
};

export default function OurSuccessPage() {
  return <ClientOurSuccessPage />;
}
