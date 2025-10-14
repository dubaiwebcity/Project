"use client";

import BlogWithLeftSidebar from "@/components/Blog/BlogWithLeftSidebar";
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

      <BlogWithLeftSidebar />

      <SubscribeForm />
    </>
  );
}
