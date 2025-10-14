import type { Metadata } from "next";
import ClientYourVisitPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – زيارتكم لمراكزنا في الرياض وجدة ",
  description:
    "",
};

export default function YourVisitPage() {
  return <ClientYourVisitPage />;
}
