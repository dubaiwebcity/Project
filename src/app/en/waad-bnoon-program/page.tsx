import type { Metadata } from "next";
import ClientWaadPage from "./page.client";

export const metadata: Metadata = {
  title: "Wa'ad Bnoon Program - Get Pregnant or Your Money Back ",
  description:
    "",
};

export default function WaadPage() {
  return <ClientWaadPage />;
}
