import type { Metadata } from "next";
import ClientHomePage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon | Saudi Arabia’s Best Fertility & Women’s Network ",
  description:
    "Bnoon Medical Center specializes in fertility, we provide the necessary examinations and treatments for the couple. We realize that every man and woman is unique, according their individual health problems. Depending on the individual circumstances of each case, we develop a specialized treatment plan as well as the emotional, physical and financial needs.",
};

export default function HomePage() {
  return <ClientHomePage />;
}
