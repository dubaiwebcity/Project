import type { Metadata } from "next";
import ClientDrRazanGhaithPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Razan Ghaith - Best OBGYN & IVF Doctor in Jeddah| Bnoon ",
  description:
    "",
};

export default function ServerDrRazanGhaithPage() {
  return <ClientDrRazanGhaithPage />;
}
