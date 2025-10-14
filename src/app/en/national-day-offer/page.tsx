import type { Metadata } from "next";
import ClientNationalDayOfferPage from "./page.client";

export const metadata: Metadata = {
  title: "National Day Offer at Bnoon",
  description:
    "",
};

export default function NationalDayOfferPage() {
  return <ClientNationalDayOfferPage />;
}
