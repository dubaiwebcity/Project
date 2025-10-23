import type { Metadata } from "next";
import ClientFertilityGuidePage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - All Your Need to Know About Your Fertility ",
  description:
    "",
};

export default function FertilityGuidePage() {
  return <ClientFertilityGuidePage />;
}
