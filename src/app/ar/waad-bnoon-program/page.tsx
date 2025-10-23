import type { Metadata } from "next";
import ClientWaadBnoonProgramPage from "./page.client";

export const metadata: Metadata = {
  title: "برنامج وعد بنون – الحمل أو استرداد الرسوم ",
  description:
   "",
};

export default function WaadBnoonProgramPage() {
  return <ClientWaadBnoonProgramPage />;
}
