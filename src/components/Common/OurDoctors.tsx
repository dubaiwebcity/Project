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
      name: "Dr. Abdalaziz Al-Shahrani",
      qualification:
        "Group Medical Director Consultant, Reproductive Endorinology, Infertility (IVF) & Gynecological Laproscopic Surgery",
      imageUrl: "images/doctors/1.jpg",
      profileLink: "en/dr-abdalaziz-alshahrani",
      location: "Riyadh",
    },
    {
      id: 2,
      name: "Dr. Fawaz Edris",
      qualification:
        "Executive Director, Bnoon -Jeddah Consultant, Obstetrics, Gynecology, Maternal Fetal Medicine, Reproductive Endocrinology & Infertility",
      imageUrl: "images/doctors/2.jpg",
      profileLink: "en/dr-fawaz-edris",
      location: "Jeddah",
    },
    {
      id: 3,
      name: "Dr. Mazin Bishara",
      qualification:
        "Medical Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility",
      imageUrl: "images/doctors/3.jpg",
      profileLink: "en/dr-mazin-bishara",
      location: "Jeddah",
    },
    {
      id: 4,
      name: "Dr. Asim Al Wuhaibi",
      qualification: "Consultant, Reproductive Endorinology & Infertility (IVF)",
      imageUrl: "images/doctors/4.jpg",
      profileLink: "en/dr-asim-alwohaibi",
      location: "Riyadh",
    },
   
    {
      id: 6,
      name: "Dr. Ahmed Alshaikh",
      qualification:
        "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility",
      imageUrl: "images/doctors/6.jpg",
      profileLink: "en/dr-ahmed-alshaikh",
      location: "Jeddah",
    },
    {
      id: 7,
      name: "Dr. Wajdi Al Omari",
      qualification: "Consultant, Reproductive Endorinology & Infertility (IVF)",
      imageUrl: "images/doctors/7.jpg",
      profileLink: "en/dr-wajdi-alomari",
      location: "Riyadh",
    },
    {
      id: 8,
      name: "Dr. Dalia Adel",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility (IVF)",
      imageUrl: "images/doctors/8.jpg",
      profileLink: "en/dr-dalia-nour",
      location: "Riyadh",
    },
    {
      id: 9,
      name: "Dr. Ahmad Haroun",
      qualification: "Consultant, Urology & Andrology",
      imageUrl: "images/doctors/9.jpg",
      profileLink: "en/dr-ahmad-haroun",
      location: "Jeddah",
    },
    {
      id: 10,
      name: "Dr. Moussa El Naiemy",
      qualification: "Consultant, Male Infertility & Andrology",
      imageUrl: "images/doctors/10.jpg",
      profileLink: "en/dr-moussa-el-naiemy",
      location: "Riyadh",
    },
    {
      id: 11,
      name: "Dr. Maya Albezreh",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility",
      imageUrl: "images/doctors/11.jpg",
      profileLink: "en/dr-maya-albezreh",
      location: "Jeddah",
    },
    {
      id: 12,
      name: "Dr. Razan Ghaith",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility",
      imageUrl: "images/doctors/12.jpg",
      profileLink: "en/dr-razan-ghaith",
       location: "Jeddah",
    },
    {
      id: 13,
      name: "Dr. Maram Dadoua",
      qualification: "Senior Registrar, Obstetrics & Gynecology",
      imageUrl: "images/doctors/13.jpg",
      profileLink: "en/dr-maram-dadoua",
       location: "Jeddah",
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
              
                <h2>Our Physicians</h2>
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
        View Profile
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
        href="en/request-an-appoinment"
        className="btn btn-success doctor-btn"
      >
        Request an Appointment
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
