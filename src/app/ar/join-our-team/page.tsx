import type { Metadata } from "next";
import ClientJoinOurTeamPage from "./page.client";

export const metadata: Metadata = {
  title: "انضموا إلى فريق بنون – الابتكار، التعليم الطبي، الأبحاث ",
  description:
    "",
};

export default function JoinOurTeamPage() {
  return <ClientJoinOurTeamPage />;
}
