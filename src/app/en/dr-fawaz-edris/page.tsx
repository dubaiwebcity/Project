import type { Metadata } from "next";
import ClientDrFawazEdrisPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Fawaz Edris – Best IVF Doctor in Jeddah | Bnoon ",
  description:
    "",
};

export default function ServerDrFawazEdrisPage() {
  return <ClientDrFawazEdrisPage />;
}
