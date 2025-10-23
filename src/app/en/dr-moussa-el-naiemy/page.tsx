import type { Metadata } from "next";
import ClientDrMoussaElNaiemyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Mousa ElNaiemy – Urologist/Andrologist in Riyadh | Bnoon ",
  description:
    "",
};

export default function ServerDrMoussaElNaiemyPage() {
  return <ClientDrMoussaElNaiemyPage />;
}
