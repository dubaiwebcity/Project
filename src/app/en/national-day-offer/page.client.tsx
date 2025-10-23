import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import NationalDayOffer from "@/components/Common/NationalDayOffer";
export default function ClientNationalDayOfferPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/national-day-banner.jpg" />
       <NationalDayOffer />

    </>
  );
}
