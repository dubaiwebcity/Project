"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function HeroBanner() {
  const [bgPosition, setBgPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  // ✅ Slides (video + text + buttonLink)
  const slides = [

    {
      video: "images/banner/banner-2.mp4",
      title: "WA'AD BNOON PROGRAM",
      desc: "Get Pregnant or Your Money Back:<br>Peace of Mind. Less Stress",
      titleColor: "#004E78",
      descColor: "#004E78",
      extra: "*Terms & Conditions Apply",
      buttonLink: "en/waad-bnoon-program", // 👈 custom link
      buttonText: "Book Now",
    },
    {
      video: "images/banner/banner-3.mp4",
      title: "THE FUTURE OF<br>FERTILITY IS HERE",
      desc: "Now in Riyadh and Jeddah",
      buttonLink: "en/request-an-appoinment", // 👈 custom link
      buttonText: "Book Now",
    },
    {
      video: "images/banner/banner-4.mp4",
      title: "TURNING DREAMS INTO <br>NEW BEGINNINGS ",
      desc: "Hope begins with Bnoon",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "en/request-an-appoinment", // 👈 custom link
      buttonText: "Book Now",
    },
    {
      video: "images/banner/banner-5.mp4",
      title: "OVER 5,000 FAMILIES <br>HELPED ANNUALLY",
      desc: "Compassionate care to achieve their dream of parenthood ",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "en/request-an-appoinment", // 👈 custom link
      buttonText: "Book Now",
    },
    {
      video: "images/banner/banner-6.mp4",
      title: "THE NEXT-GENERATION <br>OF FERTILITY CARE",
      desc: "Now in Saudi Arabia",
      buttonLink: "en/request-an-appoinment", // 👈 custom link
      buttonText: "Book Now",
    },
    {
      video: "images/banner/banner-7.mp4",
      title: "START YOUR PARENTHOOD JOURNEY WITH BNOON",
      desc: "Book your appointment today",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "en/request-an-appoinment", // 👈 custom link
      buttonText: "Book Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto slide change (10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const speed = 0.5;
      const offset = -(window.scrollY * speed);
      setBgPosition(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="second-banner-area"
      style={{
        position: "relative",
        width: "100%",
        height: "65vh",
        overflow: "hidden",
        backgroundPosition: `center ${bgPosition}px`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔹 Video Background Slider */}
      {slides.map((slide, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* 🔹 Text Content */}
      <div className="container">
        <div
          className="second-banner-content section-title-animation animation-style2"
          style={{
            opacity: 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* Title */}
          <h1
            style={{ color: slides[currentSlide].titleColor || "#fff" }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />

          {/* Description */}
          <p
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].desc }}
            style={{ color: slides[currentSlide].descColor || "#fff" }}
          />

          {/* Button with slide-specific link */}
       <div className="banner-btn">
  <Link
    href={slides[currentSlide].buttonLink}
    className="btn btn-success btn-appointment btn-banner"
  >
    {slides[currentSlide].buttonText}
  </Link>
</div>



          {/* Extra Text */}
          <p
            className="terms-text"
            dangerouslySetInnerHTML={{
              __html: slides[currentSlide].extra || "",
            }}
            style={{
              color: slides[currentSlide].descColor || "#fff",
              fontSize: slides[currentSlide].extraFontSize || "inherit",
            }}
          />
        </div>
      </div>

      {/* 🔹 Slider Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background:
                currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
