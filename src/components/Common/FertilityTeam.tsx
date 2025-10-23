"use client"; // 👈 form handling ke liye client component banana zaroori hai

import React from "react";
import Image from "next/image";

interface WorkStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  vectorImage?: string;
  vectorWidth?: number;
  vectorHeight?: number;
}

const HowItWorks = () => {
  const workSteps: WorkStep[] = [
    {
      id: 1,
      icon: "/images/icons/location.png",
      title: "Address",
      description: "Riyadh <br>Jeddah",
      vectorImage: "/images/vector1.png",
      vectorWidth: 42,
      vectorHeight: 88,
    },
    {
      id: 2,
      icon: "/images/icons/contact.png",
      title: "Contact",
      description: "+966 11 4448080 <br>+966 12 680 0800",
      vectorImage: "/images/vector2.png",
      vectorWidth: 30,
      vectorHeight: 91,
    },
    {
      id: 3,
      icon: "/images/icons/mail.png",
      title: "E-mail",
      description: "info@bnoon.sa <br>info.jeddah@bnoon.sa",
    },
  ];

  // ✅ Form submit handler
  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Submitted Email:", email);

    // Yahan API call kar sakte ho (backend ko bhejne k liye)
    // await fetch("/api/subscribe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });
  };

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Your Fertility Team, By Your Side</h2>

              
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="right">
                <p>
                 We believe fertility care should feel personal, not procedural. That’s why our team is with you from start to finish—explaining every step, answering every question, and celebrating every milestone with you. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
