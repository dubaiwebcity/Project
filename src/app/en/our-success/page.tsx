import type { Metadata } from "next";
import ClientOurSuccessPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Leading Pregnancy Rates (IVF/ICSI) ",
  description:
    "",
};

export default function OurSuccessPage() {
  return <ClientOurSuccessPage />;
}
