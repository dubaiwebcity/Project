"use client";

import Feedbacks from "@/features/Common/Feedbacks";
import HowItWorks from "@/features/Common/HowItWorks";
import OurDoctors from "@/features/Common/OurDoctors";
import Benefits from "@/features/Common/Benefits";
import OurServices from "@/features/HomeDemo2/OurServices";
import HeroBanner from "@/features/HomeDemo2/HeroBanner";
import FrequentlyAskedQuestions from "@/features/HomeDemo1/FrequentlyAskedQuestions";
import OurBlog from "@/features/Common/OurBlog";
import Navbar from "@/features/Layout/Navbar";
import HowItWorksStyle2 from "@/features/Common/HowItWorksStyle2";
import AboutUs from "@/features/HomeDemo2/AboutUs";
import StayConnected from "@/features/Common/StayConnected";
import FertilityTeam from "@/features/Common/FertilityTeam";
import SearchBar from "@/features/Common/SearchBar";
import Popup from "@/features/Common/Popup";

export default function ArabicHomeClient() {
  return (
    <>
      <Navbar />
      <Popup />
      <HeroBanner />
      <SearchBar />
      <Benefits />
      <OurServices />
      <OurBlog />
      <HowItWorksStyle2 />
      <FertilityTeam />
      <OurDoctors />
      <AboutUs />
      <Feedbacks />
      <FrequentlyAskedQuestions />
      <HowItWorks />
      <StayConnected />
    </>
  );
}
