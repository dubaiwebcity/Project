import type { Metadata } from "next";
import ClientDrDaliaNourPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Dalia Adel – Best OBGYN & IVF Doctor in Riyadh | Bnoon",
  description:
    "",
};

export default function ServerDrDaliaNourPage() {
  return <ClientDrDaliaNourPage />;
}
