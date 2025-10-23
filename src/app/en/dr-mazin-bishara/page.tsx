import type { Metadata } from "next";
import ClientDrMazinBisharaPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Mazin Bishara – Best IVF Doctor in Jeddah | Bnoon ",
  description:
    "",
};

export default function ServerDrMazinBisharaPage() {
  return <ClientDrMazinBisharaPage />;
}
