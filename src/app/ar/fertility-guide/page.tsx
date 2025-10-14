import type { Metadata } from "next";
import ClientFertilityGuidePage from "./page.client";

export const metadata: Metadata = {
  title:"بنون – معلومات شاملة عن الخصوبة وعلاجات الإخصاب والحمل ",
  description:
    "",
};

export default function FertilityGuidePage() {
  return <ClientFertilityGuidePage />;
}
