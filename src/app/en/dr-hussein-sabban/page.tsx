import type { Metadata } from "next";
import ClientDrHusseinSabbanPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Hussein Sabban - Best IVF Doctor in Jeddah | Bnoon",
  description:
    "",
};

export default function ServerDrHusseinSabbanPage() {
  return <ClientDrHusseinSabbanPage />;
}
