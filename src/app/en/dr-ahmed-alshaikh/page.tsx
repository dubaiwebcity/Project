import type { Metadata } from "next";
import ClientDrAhmedAlshaikhPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Ahmed Alshaikh – Best Fertility Doctor in Jeddah | Bnoon ",
  description:
    "",
};

export default function ServerDrAhmedAlshaikhPage() {
  return <ClientDrAhmedAlshaikhPage />;
}
