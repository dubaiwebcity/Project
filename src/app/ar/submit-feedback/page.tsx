import type { Metadata } from "next";
import ClientSubmitFeedbackPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – شاركونا تجربتكم ",
  description:
  "",
};

export default function SubmitFeedbackPage() {
  return <ClientSubmitFeedbackPage />;
}
