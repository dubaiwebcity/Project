import type { Metadata } from "next";
import ClientDrMayaAlbezrehPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Maya Albezreh - Best OBGYN & IVF Doctor in Jeddah| Bnoon ",
  description:
    "",
};

export default function ServerDrMayaAlbezrehPage() {
  return <ClientDrMayaAlbezrehPage />;
}
