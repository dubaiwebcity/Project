import React from "react";
import Link from "next/link";

interface Doctor {
  id: number;
  name: string;
  qualification: string;
  imageUrl: string;
  profileLink: string;
  location?: string;
}

const OurDoctors = () => {
  // ✅ Sample doctor data
  const doctorsData: Doctor[] = [
    {
      id: 1,
      name: "الدكتور عبد العزيز  الشهراني",
      qualification:
        "المدير الطبي للمجموعة استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/1.jpg",
      profileLink: "ar/dr-abdalaziz-alshahrani",
      location: "الرياض",
    },
    {
      id: 2,
      name: "الدكتور فواز  إدريس ",
      qualification:
        "المدير التنفيذي، بنون - جدة استشاري أمراض النساء والولادة والحمل الحرج وطب الأمومة والأجنة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/2.jpg",
      profileLink: "ar/dr-fawaz-edris",
      location: "جدة",
    },
    {
      id: 3,
      name: "الدكتور مازن بشارة",
      qualification:
        "المدير الطبي، بنون - جدة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "images/doctors/3.jpg",
      profileLink: "ar/dr-mazin-bishara",
      location: "جدة",
    },
    {
      id: 4,
      name: "الدكتور عاصم الوهيبي",
      qualification: "استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/4.jpg",
      profileLink: "ar/dr-asim-alwohaibi",
      location: "الرياض",
    },
    {
      id: 6,
      name: "الدكتور أحمد الشيخ",
      qualification:
        "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب/الحقن المجهري والمناظير والغدد الصماء التناسلية",
      imageUrl: "images/doctors/6.jpg",
      profileLink: "ar/dr-ahmed-alshaikh",
      location: "جدة",
    },
    {
      id: 7,
      name: "الدكتور وجدي  العمرى",
      qualification: " استشاري الإخصاب وتأخر الحمل",
      imageUrl: "images/doctors/7.jpg",
      profileLink: "ar/dr-wajdi-alomari",
      location: "الرياض",
    },
    {
      id: 8,
      name: "الدكتورة داليا  نور",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/8.jpg",
      profileLink: "ar/dr-dalia-nour",
      location: "الرياض",
    },
    {
      id: 9,
      name: "الدكتور أحمد هارون",
      qualification: " استشاري جراحة المسالك البولية وأمراض الذكورة والعقم",
      imageUrl: "images/doctors/9.jpg",
      profileLink: "ar/dr-ahmad-haroun",
      location: "جدة",
    },
    {
      id: 10,
      name: "الدكتور موسى  النعمي",
      qualification: " استشاري أمراض الذكورة  والعقم",
      imageUrl: "images/doctors/10.jpg",
      profileLink: "ar/dr-moussa-el-naiemy",
      location: "الرياض",
    },
    {
      id: 11,
      name: "الدكتورة مايا البزرة ",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/11.jpg",
      profileLink: "ar/dr-maya-albezreh",
      location: "جدة",
    },
    {
      id: 12,
      name: "الدكتورة رزان غيث",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "images/doctors/12.jpg",
      profileLink: "ar/dr-razan-ghaith",
       location: "جدة",
    },
    {
      id: 13,
      name: "الدكتورة مرام دعدوع",
      qualification: "نائب أول، أمراض النساء والولادة",
      imageUrl: "images/doctors/13.jpg",
      profileLink: "ar/dr-maram-dadoua",
       location: "جدة",
    },
  ];

  // ⭐ Function to render star ratings
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <li key={i}>
            <i className="ri-star-fill"></i>
          </li>
        ))}
        {hasHalfStar && (
          <li>
            <i className="ri-star-half-fill"></i>
          </li>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <li key={i + fullStars}>
            <i className="ri-star-line"></i>
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
              
                <h2>أطباؤنا</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        <div className="doctors-scroll-container">
          <div className="row g-4">
            {doctorsData.map((doctor) => (
              <div key={doctor.id} className="col-xl-3 col-md-6">
                <div className="doctor-card">
 <div className="image-wrapper" style={{ position: "relative" }}>
  <img
    src={doctor.imageUrl}
    alt={doctor.name}
    width={275}
    height={236}
    style={{ borderRadius: "10px" }}
  />
  {/* Overlay */}
  <div className="image-overlay">
    <div className="overlay-content">
      <Link
        href={doctor.profileLink}
        className="btn btn-success doctor-btn doctor-hover-btn"
      >
      عرض الملف الشخصي
      </Link>
      {doctor.location && (
        <div className="doctor-location">
          <i className="ri-map-pin-line"></i> {doctor.location}
        </div>
      )}
    </div>
  </div>
</div>


  <div className="content">
    <h3>
      <Link href={doctor.profileLink}>{doctor.name}</Link>
    </h3>
    <span className="sub">{doctor.qualification}</span>
    <div className="">
      <Link
        href="ar/request-an-appoinment"
        className="btn btn-success doctor-btn"
      >
       طلب موعد
      </Link>
    </div>
  </div>
</div>

<style jsx>{`
  .doctor-card {
    position: relative;
    overflow: hidden;
  }

  .image-wrapper {
    position: relative;
  }

  /* Show overlay when the card itself is hovered */
  .doctor-card:hover .image-overlay {
    opacity: 1;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 10px;
  }

  .image-overlay .doctor-btn {
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
  }
`}</style>




              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
