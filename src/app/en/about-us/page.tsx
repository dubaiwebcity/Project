import type { Metadata } from "next";
import ClientAboutUsPage from "./page.client";

export const metadata: Metadata = {
  title: "About Us – Bnoon",
  description:
    "",
};

export default function AboutUsPage() {
  return <ClientAboutUsPage />;
}
