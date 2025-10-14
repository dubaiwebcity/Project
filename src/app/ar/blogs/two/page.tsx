"use client";

import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";
import SubscribeForm from "@/components/Common/SubscribeForm";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";

export default function Page() {
  return (
    <>
      <Navbar />

         <PageBanner
  bgImage="/images/aboutus.jpg"
/>

      <BlogWithRightSidebar />

      <SubscribeForm />
    </>
  );
}
