import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define interfaces for our data structure
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface AppButton {
  name: string;
  url: string;
  image: string;
  alt: string;
}

interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  socialLinks: SocialLink[];
  sections: FooterSection[];
  appButtons: AppButton[];
  copyright: {
    text: string;
    owner: string;
    ownerUrl: string;
  };
  complianceBadges: string[];
}

// Dynamic data object
const footerData: FooterData = {
  logo: {
    src: "images/bnoon-logo.avif",
    alt: "logo",
    width: 134,
    height: 35,
  },
  description:
    "Doutor is a modern telemedicine platform committed to making high-quality healthcare accessible, affordable, and patient-centered.",
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/",
      icon: "/images/icons/fb-icon.avif",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/bnoon",
      icon: "/images/icons/linkdin-icon.avif",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/bnoonivf/",
      icon: "/images/icons/instagram-icon.avif",
    },
    {
      platform: "x",
      url: "https://x.com/bnoonivf",
      icon: "/images/icons/x-icon.avif",
    },
  ],
  sections: [
     {
      title: "Contact Us",
      links: [
        {
          text: "Riyadh : +966 11 444 8080",
          url: "tel:966 11 444 8080",
          isExternal: true,
        },
        {
          text: "Jeddah : +966 12 680 0800",
          url: "tel:+966 12 680 0800",
          isExternal: true,
        },
      ],
    },
    {
      title: "",
      links: [
        { text: "About Us", url: "/en/about-us" },
        { text: "Our Experts", url: "/en/our-experts" },
        { text: "Join Our Team", url: "/en/join-our-team" },
        { text: "Media Center", url: "/en/https://globalfertilityivf.com/media/" },
        { text: "Our Locations", url: "/en/our-clinics" },
         { text: "Bnoon Riyadh", url: "/en/bnoon-riyadh" },
          { text: "Bnoon Jeddah", url: "/en/bnoon-jeddah" },
      ],
    },
    {
      title: "",
      links: [
        
        { text: "Treatments", url: "/en/treatments" },
        { text: "Wa'ad Bnoon Program", url: "/en/waad-bnoon-program" },
        { text: "Your First Visit", url: "/en/your-visit" },
         { text: "Fertility Guide", url: "/en/fertility-guide" },
        { text: "Patients' Rights & Responsibilities", url: "/en/patients-rights" },
         { text: "Contact Us", url: "/en/contact-us" },
        { text: "Book an Appointment", url: "/en/request-an-appoinment" },
         { text: "Submit Your Feedback", url: "/en/submit-feedback" },
      ],
    },
    
   
  ],
  appButtons: [
    {
      name: "Google Play",
      url: "https://play.google.com/store/apps",
      image: "images/app/google-play.svg",
      alt: "google-play",
    },
    {
      name: "App Store",
      url: "https://www.apple.com/app-store/",
      image: "images/app/app-store.svg",
      alt: "app-store",
    },
  ],
  copyright: {
    text: "",
    owner: "",
    ownerUrl: "https://www.dubaiwebcity.com/",
  },
  complianceBadges: ["Website Design & Development by NetSoft"],
};

function Footer() {
  return (
    <footer className="footer-area">
      <div className="ptb-50">
        <div className="container">
     <div className="row g-4">
 {/* Left column: Contact Us */}
<div className="col-lg-4 col-sm-12">
  <div className="single-footer-widget">
    {footerData.sections[0].title && <h3>{footerData.sections[0].title}</h3>}
    <ul className="links">
      {footerData.sections[0].links.map((link, i) => (
        <li key={i}>
          {link.isExternal ? (
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ) : (
            <Link href={link.url}>{link.text}</Link>
          )}
        </li>
      ))}
    </ul>

    {/* Social icons */}
    <div className="social-icons mt-3 d-flex">
      {footerData.socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="me-3" // spacing between icons
        >
          <Image
            src={social.icon}
            alt={social.platform}
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  </div>
</div>

  {/* Right columns: last two sections */}
  <div className="col-lg-8 col-sm-12 d-flex justify-content-end">
    {footerData.sections.slice(1).map((section, index) => (
      <div className="single-footer-widget ms-4" style={{ minWidth: "150px" }} key={index}>
        {section.title && <h3>{section.title}</h3>}
        <ul className="links">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>

      <div className="container">
        <div className="copyright-area">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 col-md-12">
              <p className="footer-text">
                © <span>{footerData.copyright.text}</span>2025 All Rights Reserved{" "}
                <a href={footerData.copyright.ownerUrl} target="_blank" rel="noopener noreferrer">
                  {footerData.copyright.owner}
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <ul className="lists footer-text">
                {footerData.complianceBadges.map((badge, index) => (
                  <li key={index}>{badge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
