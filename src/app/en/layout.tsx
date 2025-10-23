import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/responsive.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin"] });

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${plusJakartaSans.variable}`}>
        {children}
        <Footer />
        <GoTop />
      </body>
    </html>
  );
}
