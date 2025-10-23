import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutItem {
  id: number;
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  text?: string;
}

interface AboutData {
  title: string;
  subtitle: string;
  items: AboutItem[];
  button: {
    text: string;
    href: string;
  };
}

const aboutData: AboutData = {
  title: "بنون – إحصائيات وأرقام",
  subtitle: "Bnoon in Numbers",
  items: [
    {
      id: 1,
      icon: { src: "images/icons/icon-1.png", alt: "icon" },
      title: "+5000",
      description: "دورة علاجية لأطفال الأنابيب سنوياً",
    },
    {
      id: 2,
      icon: { src: "images/icons/icon-2.png", alt: "icon" },
      title: "+70",
      description: "طبيباً واختصاصياً",
    },
    {
      id: 3,
      icon: { src: "images/icons/icon-3.png", alt: "icon" },
      title: "+130",
      description: "الكوادر الطبية والإدارية",
    },
    {
      id: 4,
      icon: { src: "images/icons/icon-4.png", alt: "icon" },
      title: "Special", // dummy title (rendering time par overwrite karenge)
      description: "عدد المواقع",
    },
    {
      id: 5,
      icon: { src: "images/icons/icon-5.png", alt: "icon" },
      title: "+60%",
      description: "نسبة النجاح للنساء تحت 35 عاماً  تماشياً ",
      text: "مع معدلات النجاح عالمياً ",
    },
  ],
  button: {
    text: "Learn More About Us",
    href: "about-us",
  },
};

function AboutUs() {
  return (
    <div className="second-about-area">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-xl-12 col-md-12">
            <div className="second-about-content">
              <h2>{aboutData.title}</h2>
            </div>
          </div>

          <div className="col-xl-12 col-md-12">
            <div className="second-about-items d-flex flex-nowrap justify-content-center overflow-auto">
              {aboutData.items.map((item) => {
                // 👇 item id ke hisaab se width set
                let boxWidth = "220px";
                if (item.id === 2 || item.id === 3) boxWidth = "150px";
                if (item.id === 4) boxWidth = "350px";
                if (item.id === 5) boxWidth = "250px";

                return (
                  <div
                    key={item.id}
                    className="item-box text-center mx-3 mt-3"
                    style={{ minWidth: boxWidth }}
                  >
                    <div className="item">
                      <div className="icon mb-3">
                        <img
                          src={item.icon.src}
                          alt={item.icon.alt}
                          width={120}
                          height={120}
                        />
                      </div>

                      {item.id === 4 ? (
                        <>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <h3>2</h3>
                            <p className="mb-0 text-color">مركزان حالياً في الرياض وجدة</p>
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <h3>1</h3>
                            <p className="mb-0 text-color">واحد قيد التطوير في شمال الرياض</p>
                          </div>
                        </>
                      ) : (
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                      )}

                      <p>{item.description}</p>
                      {item.text && <p className="text">{item.text}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
