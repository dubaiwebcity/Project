import type { Metadata } from "next";
import ClientDrAbdalazizPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. AbdulAziz AlShahrani - Best IVF Doctor in Riyadh | Bnoon",
  description:
    "",
};

export default function ServerDrAbdalazizPage() {
  return <ClientDrAbdalazizPage />;
}
