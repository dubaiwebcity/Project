import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import OurLocations from "@/components/Common/OurLocations";
export default function ClientOurClinicsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner.jpg" />
       <OurLocations />

    </>
  );
}
