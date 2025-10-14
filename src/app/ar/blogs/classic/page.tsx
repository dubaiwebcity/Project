"use client";

import BlogClassic from "@/components/Blog/BlogClassic";
import SubscribeForm from "@/components/Common/SubscribeForm";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";

export default function Page() {
  return (
    <>
      <Navbar />
<PageBanner
  bgImage="/images/blogs.jpg"
/>
      <BlogClassic />

      <SubscribeForm />
    </>
  );
}
