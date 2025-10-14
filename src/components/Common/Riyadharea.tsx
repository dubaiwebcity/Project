"use client";
import React, { useRef, useState, useEffect } from "react";

const Riyadharea = () => {
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";

  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

 useEffect(() => {
  // Riyadh content
  const observerContentRiyadh = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setContentVisibleRiyadh(true);
        observerContentRiyadh.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

  // Riyadh image
  const observerImageRiyadh = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setImageVisibleRiyadh(true);
        observerImageRiyadh.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

  // King Salman content
  const observerContentKing = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setContentVisibleKing(true);
        observerContentKing.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

  // King Salman image
  const observerImageKing = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setImageVisibleKing(true);
        observerImageKing.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (imageRefKing.current) observerImageKing.observe(imageRefKing.current);

  return () => {
    observerContentRiyadh.disconnect();
    observerImageRiyadh.disconnect();
    observerContentKing.disconnect();
    observerImageKing.disconnect();
  };
}, []);

  return (
    <div className="service-overview-area mb-5 mt-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefRiyadh}
              className={`service-overview-content animate-left ${contentVisibleRiyadh ? "show" : ""}`}
            >
              <h2>Bnoon - Riyadh</h2>
              <p>
                With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years in Riyadh. Renowned for its patient-first philosophy, the center combines compassionate care with advanced technology and a team of highly experienced reproductive specialists, earning its reputation as one of the most trusted names in reproductive medicine across Saudi Arabia.
              </p>
              <p>
                Bnoon Riyadh consistently delivers outstanding clinical outcomes, with success rates that meet and often exceed international benchmarks. Patients benefit from personalized treatment plans, cutting-edge IVF and fertility technologies, and a multidisciplinary team approach designed to maximize success and comfort.
              </p>
              <p>
                The center also emphasizes continuous learning, professional development, and research integration, ensuring that every patient receives care aligned with global best practices in reproductive medicine.
              </p>

              <div className="d-flex align-items-center mt-3 gap-4">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Location" width={24} height={24} className="me-2" />
                  <span>Bnoon - Riyadh</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
                  <span>+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={imageRefRiyadh}
              className={`service-overview-image animate-right ${imageVisibleRiyadh ? "show" : ""}`}
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img src={imageRiyadh} alt="Bnoon Riyadh" width={580} height={450} />
            </div>
          </div>
        </div>

        {/* King Salman Road Section */}
        <div className="row justify-content-center align-items-center g-4 mt-5">
          <div className="col-xl-6 col-md-12">
            <div
              ref={imageRefKing}
              className={`service-overview-image animate-left ${imageVisibleKing ? "show" : ""}`}
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
                margin: "0 0px 0 50",
              }}
            >
              <img src={imageKingSalman} alt="King Salman Road Facility" width={580} height={450} />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefKing}
              className={`service-overview-content animate-right ${contentVisibleKing ? "show" : ""}`}
            >
              <h2>
                Bnoon – King Salman Road, Riyadh{" "}
                <span style={{ fontSize: "18px" }}>(Opening December 2025)</span>
              </h2>
              <p>
                To further expand access and redefine the standard of fertility care in the Kingdom, Bnoon is developing a state-of-the-art 3,800 sqm flagship facility on King Salman Road in North Riyadh, scheduled to open by the end of 2025. Designed as one of the most advanced fertility and women’s health centers in the region, this next-generation hub will bring together fertility care, reproductive genetics, and comprehensive women’s health services under one roof.
              </p>
              <p>
                The flagship center will house cutting-edge IVF and embryology laboratories, equipped with the latest time-lapse embryo incubation systems, AI-powered embryo selection, genetic screening, and precision hormonal profiling. Every aspect of the patient journey — from digital consultations and treatment planning to real-time cycle tracking — will be optimized through smart health technologies and integrated platforms, ensuring efficiency, accuracy, and personalization at every step.
              </p>
              <p>
                With a focus on clinical excellence, innovation, and patient-centered care, Bnoon – King Salman Road is envisioned to become a regional reference for fertility and reproductive science, supporting the broader ambitions of Saudi Vision 2030 to position the Kingdom as a hub for medical innovation and advanced healthcare delivery.
              </p>

              <div className="d-flex align-items-center mt-3 gap-4">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Location" width={24} height={24} className="me-2" />
                  <span>Bnoon – King Salman Road</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
                  <span>+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riyadharea;
