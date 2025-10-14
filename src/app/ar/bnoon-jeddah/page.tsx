import type { Metadata } from "next";
import ClientBnoonJeddahPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في السعودية ",
  description:
   "",
};

export default function BnoonJeddahPage() {
  return <ClientBnoonJeddahPage />;
}
