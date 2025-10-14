import React from "react";
import Link from "next/link";

const OurBlog = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: "images/blog/bnoon-riyadh.avif",
      title: "Bnoon - Riyadh",
      slug: "https://maps.app.goo.gl/Uwu7B8FT8n7bYNid6", // Maps link
      buttonLink: "en//bnoon-riyadh", // internal page
      description:
        "With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years...",
    },
    {
      id: 2,
      imageSrc: "images/blog/bnoon-jeddah.avif",
      title: "Bnoon – Jeddah",
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&ved=1t:2428&ictx=111",
      buttonLink: "en//bnoon-jeddah",
      description:
        "Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its...",
    },
    {
      id: 3,
      imageSrc: "images/blog/king-salman.avif",
      title: "Bnoon – King Salman Road, Riyadh (Opening December 2025)",
      slug: "https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb",
      buttonLink: "en//our-clinics",
      description:
        "To further expand access and redefine the standard of fertility care in the Kingdom...",
    },
  ];

  return (
    <div className="blog-area ptb-140">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>Our Clinics</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {blogData.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-card">
                {/* Image links to Google Maps */}
                <div className="image">
                  <a href={post.slug} target="_blank" rel="noopener noreferrer">
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      width={832}
                      height={832}
                    />
                  </a>
                </div>

                {/* Heading links to Google Maps */}
                <div className="content">
                  <h3>
                    <a href={post.slug} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  </h3>
                  <p>{post.description}</p>

                  {/* Button links to internal page */}
                  <Link href={post.buttonLink} className="btn btn-success btn-blog">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
