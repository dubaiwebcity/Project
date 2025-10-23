import type { Metadata } from "next";
import ClientJoinOurTeamPage from "./page.client";

export const metadata: Metadata = {
  title: "Join Bnoon – Innovation, Education & Research ",
  description:
    "",
};

export default function JoinOurTeamPage() {
  return <ClientJoinOurTeamPage />;
}
