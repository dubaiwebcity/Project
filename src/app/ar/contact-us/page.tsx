import type { Metadata } from "next";
import ClientContactUsPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – رحلة الأمومة والأبوة مع بنون، تواصلوا معنا ",
  description:
   "",
};

export default function ContactUsPage() {
  return <ClientContactUsPage />;
}
