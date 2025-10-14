"use client";

import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      question: "When should I see a doctor about getting pregnant?",
      answer:
        "If you're under 35 and have been trying to conceive for <strong>12 months</strong> without success, it's time to consult a fertility specialist. If you're <strong>35 or older,</strong> speak to your doctor after <strong>6 months</strong> of trying. Fertility naturally declines with age, particularly after 30. <br><i>[Source: American College of Obstetricians and Gynecologists (ACOG)]</i>",
    },
    {
      question: "What symptoms or conditions may affect fertility?",
      answer:
        "Talk to your doctor if you have: <ul> <li>Irregular, painful, or absent periods</li><li> More than one miscarriage </li><li>Diagnosed endometriosis or pelvic inflammatory disease (PID)</li> </ul>For men, fertility concerns may include: <ul><li>Difficulty ejaculating or low sperm count </li><li>Lumps or swelling in the testicle area</li><li> Chronic respiratory illnesses [Source: CDC]</li></ul>",
    },
    {
      question: "Who should consider fertility services?",
      answer:
        "Fertility services may be recommended if:<ul> <li>You've been trying to conceive for 6–12 months without success</li><li> You or your partner have known reproductive health conditions </li><li>You're planning fertility preservation before medical treatment</li><li> You're in your late 30s or 40s and want to explore your options</li></ul>",
    },
    {
      question: "Is infertility only a woman’s issue?",
      answer:
        "No. Infertility affects both men and women.<ul> <li>About <strong>1/3 of cases</strong> are female-related</li><li> Another <strong>1/3 are male-related</strong> </li><li>The remaining 1/3 involve both partners or unexplained causes</li></ul><i> [Source: WHO, CDC]</i>",
    },
    {
      question: "Is infertility common?",
      answer:
        "Yes. Infertility affects: <ul><li><strong>10%–15% of couples</strong> of reproductive age globally </li><li><strong>11% of women and 9% of men</strong> have experienced fertility issues In about<strong> 5–10%</strong> of cases, the cause remains unexplained — often linked to subtle issues in sperm, egg, or overall health. [Source: WHO, CDC]</li></ul>",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-area">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Frequently Asked Questions About Fertility </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-lg-6 col-md-12">
            <div
              className="faq-image"
              style={{ backgroundImage: "url(/images/faqs.jpg)" }}
            ></div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                    >
                      <div className="accordion-body">
                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
