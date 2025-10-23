import type { Metadata } from "next";
import ClientDrAhmadHarounPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Ahmad Haroun – Urologist/Andrologist in Jeddah | Bnoon ",
  description:
    "",
};

export default function ServerDrAhmadHarounPage() {
  return <ClientDrAhmadHarounPage />;
}
