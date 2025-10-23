"use client";

import React from "react";
import Image from "next/image";

const AboutusSection = () => {
  const values = [
    "التعاطف",
    "النزاهة",
    "الابتكار",
    "التعاون والعمل الجماعي",
    "القيادة والإلهام",
  ];

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">رؤيتنا</h2>
                <p>
                 نلتزم في بنون بتقديم الرعاية الأمثل والدعم لكل من لديه حلم الأمومة والأبوة وتكوين أسرة صحية.
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">مهمتنا</h2>
                <p>
               نسعى لإحداث نقلة نوعية في مجال خدمات الإخصاب وعلم الوراثة الإنجابية في منطقتنا، والانطلاق نحو الريادة العالمية. نحقق ذلك من خلال الاستثمار في البحث والابتكار، وتبني أحدث التقنيات الطبية، وبناء شراكات مع مؤسسات عالمية مرموقة، ووضع المريض واحتياجاته في المقام الأول۔   </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">قيمنا</h2>
                
               <p>
              قيمنا هي البوصلة التي توجهنا، والركيزة التي تُبنى عليها ثقافتنا وتتضمن :</p>
                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
