import type { Metadata } from "next";
import ClientAboutUsPage from "./page.client";

export const metadata: Metadata = {
  title: "نبذة عنّا – بنون",
  description:
    "Bnoon Medical Center specializes in fertility, we provide the necessary examinations and treatments for the couple. We realize that every man and woman is unique, according their individual health problems. Depending on the individual circumstances of each case, we develop a specialized treatment plan as well as the emotional, physical and financial needs.",
};

export default function AboutUsPage() {
  return <ClientAboutUsPage />;
}
