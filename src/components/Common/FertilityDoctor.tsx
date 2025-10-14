"use client";

import React from "react";

const FertilityDoctor = () => {
  // ✅ Points array component ke andar
  const points = [
    "You are less than 35 years old and have difficulty conceiving despite trying for more than a year. ",
    "You are over 35 years old and have not conceived since 6 months of trying",
    "Your partner is unable to achieve or maintain an erection.",
    "You have had two or more miscarriages.",
    "You have irregular or no periods.",
    "You have been diagnosed with cancer and need to preserve your fertility before treatment.",
    "It may be necessary to see a fertility specialist if your mother had an early menopause."
  ];

  const staticImage = "/images/fertility-doc.avif";

  return (
    <div className="fertility-overview-area ptb-140">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content">
              <h3>Who is a Fertility doctor?</h3>
              <p>
               A fertility doctor is usually a gynecologist or a Urologist who has undergone specialization in reproductive medicine and endocrinology so that they are able to diagnose and treat issues that relate to the reproductive organs.
<br />
Preparing oneself for a pregnancy is quite challenging. So, if you are ready to get pregnant and you are finding it difficult to do so, it might be time to see a specialist.
              </p>
              <h3>When do you have to see a fertility doctor?</h3>
              <p>
                Several people do not realize that infertility affects men and women equally, and that anyone can have infertility problems. Below are some things that should tell you it is time to see a fertility doctor:
              </p>
    {/* ✅ Dynamic UL with image icons */}
              <ul className="custom-list">
                {points.map((point, index) => (
                  <li key={index}>
                    <img
                      src="/images/icons/bnoon-symbol.avif" // apni icon image ka path
                      alt="icon"
                      className="list-icon"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <h3>Types of fertility doctor</h3>
 <p>There are several types of fertility doctors for men and women. The one that you would be referred to depends on your medical history and requirements. It is also recommended that you see a specialist if you have genetic disorders, diabetes, hypertension, kidney diseases, or heart diseases.</p>
           
            </div>
          </div>

          <div className="col-xl-5 col-md-12">
            <div
              className="service-overview-image"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img
                src={staticImage}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilityDoctor;
