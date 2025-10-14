"use client";

import CtaTwo from "@/components/Common/CtaTwo";
import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import OurBlog from "@/components/Common/OurBlog";
import OurDoctorsStyle2 from "@/components/Common/OurDoctorsStyle2";
import PatientsFeedbacks from "@/components/Common/PatientsFeedbacks";
import QuickAccessPanel from "@/components/Common/QuickAccessPanel";
import DownloadApp from "@/components/HomeDemo3/DownloadApp";
import HeroBanner from "@/components/HomeDemo3/HeroBanner";
import HowItWorks from "@/components/HomeDemo3/HowItWorks";
import OurServices from "@/components/HomeDemo3/OurServices";
import TrustedPartners from "@/components/HomeDemo3/TrustedPartners";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import PricingPlanTwo from "@/components/Pricing/PricingPlanTwo";
import Navbar from "@/components/Layout/Navbar";

export default function Home2() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <HowItWorks />

      <div className="linear-gradient-inner">
        <WhyChooseUs />

        <OurServices />
      </div>

      <PricingPlanTwo />

      <CtaTwo />

      <OurDoctorsStyle2 />

      <div className="pb-140 smoke-bg-color">
        <QuickAccessPanel />
      </div>

      <div className="linear-gradient-inner">
        <PatientsFeedbacks />

        <FrequentlyAskedQuestions />
      </div>

      <DownloadApp />

      <div className="smoke-bg-color">
        <OurBlog />
      </div>

      <div className="linear-gradient-inner-wrap">
        <TrustedPartners />
      </div>
    </>
  );
}
