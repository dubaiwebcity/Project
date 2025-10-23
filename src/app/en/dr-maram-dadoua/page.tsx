import type { Metadata } from "next";
import ClientDrMaramDadouaPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Maram Dadoua - Best OBGYN Doctor in Jeddah| Bnoon ",
  description:
    "",
};

export default function ServerDrMaramDadouaPage() {
  return <ClientDrMaramDadouaPage />;
}
