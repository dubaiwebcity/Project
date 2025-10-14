import type { Metadata } from "next";
import ClientBnoonRiyadhPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon – KSA’s leading network for fertility & women’s health ",
  description:
    "",
};

export default function BnoonRiyadhPage() {
  return <ClientBnoonRiyadhPage />;
}
