import type { Metadata } from "next";
import ClientDrAsimAlwohaibiPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Asim AlWohaibi – Best Fertility Doctor in Riyadh | Bnoon",
  description:
    "",
};

export default function ServerDrAsimAlwohaibiPage() {
  return <ClientDrAsimAlwohaibiPage />;
}
