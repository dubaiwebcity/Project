import type { Metadata } from "next";
import ClientSubmitFeedbackPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon – We’d Love to Hear From You ",
  description:
    "",
};

export default function SubmitFeedbackServer() {
  return <ClientSubmitFeedbackPage />;
}
