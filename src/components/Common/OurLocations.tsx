import React from "react";

const OurLocations = () => {
  // Alag images for each section
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageJeddah = "/images/locations/bnoon-jeddah.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";

  return (
    <div className="service-overview-area mb-5 mt-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>Bnoon - Riyadh</h2>
              <p>
                With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years in Riyadh. Renowned for its patient-first philosophy, the center combines compassionate care with advanced technology and a team of highly experienced reproductive specialists, earning its reputation as one of the most trusted names in reproductive medicine across Saudi Arabia.
              </p>
              <p>
                With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years in Riyadh. Renowned for its patient-first philosophy, the center combines compassionate care with advanced technology and a team of highly experienced reproductive specialists, earning its reputation as one of the most trusted names in reproductive medicine across Saudi Arabia.
              </p>
              <p>
                Bnoon Riyadh consistently delivers outstanding clinical outcomes, with success rates that meet and often exceed international benchmarks.
              </p>

              <div className="d-flex align-items-center mt-3 gap-4 flex-column flex-md-row">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>Bnoon - Riyadh </span>
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
              className="service-overview-image"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img src={imageRiyadh} alt="Service overview" width={580} height={450} />
            </div>
          </div>
        </div>

        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row">
          <div className="col-xl-6 col-md-12">
            <div
              className="service-overview-image"
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
                margin: "0 0px 0 50",
              }}
            >
              <img src={imageJeddah} alt="Service overview" width={580} height={450} />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>Bnoon – Jeddah  </h2>
              <p>
                Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its medical excellence and the trust it has built within the local community. Now as part of a leading network of fertility centers, the center reflects the group’s commitment to expanding access to world-class fertility and women’s health services across Saudi Arabia.
              </p>
              <p>
                Accredited by the Joint Commission International (JCI), the center offers a comprehensive range of services, including IVF, ICSI, egg and sperm freezing, genetic testing, hormonal assessments, and advanced male and female fertility diagnostics. Leveraging the latest in medical technology, including time-lapse embryo monitoring, AI-driven treatment planning, and digital patient tracking, Bnoon Jeddah provides personalized, evidence-based care designed to maximize success rates and patient comfort.   
              </p>

              <div className="d-flex align-items-center mt-3 gap-4 flex-column flex-md-row">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>Bnoon – Jeddah  </span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
                  <span>+966 12 680 0800 </span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>info.jeddah@bnoon.sa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* King Salman Road Section */}
        <div className="row justify-content-center align-items-center g-4 mt-5">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
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

              <div className="d-flex align-items-center mt-3 gap-4 flex-column flex-md-row">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span>Bnoon – Jeddah  </span>
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
              className="service-overview-image"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img src={imageKingSalman} alt="Service overview" width={580} height={450} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
