import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import NationalDayOffer from "@/features/Common/NationalDayOffer";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/national-day-banner-ar.jpg" />
       <NationalDayOffer />

    </>
  );
}
