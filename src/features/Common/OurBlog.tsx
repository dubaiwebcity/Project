import React from "react";
import Link from "next/link";

const OurBlog = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: "images/blog/bnoon-riyadh.avif",
      title: "بنون – الرياض",
      slug: "https://maps.app.goo.gl/Uwu7B8FT8n7bYNid6", // Maps link
      buttonLink: "ar/bnoon-riyadh", // internal page
      description:
        "تُعد بنون من المراكز الرائدة في علاجات الإخصاب وصحة المرأة والرجل في العاصمة منذ افتتاحه عام 2013. يضم المركز أحدث التقنيات والمرافق ويتميز بنسب نجاح عالية على يد كادر طبي متميز۔",
    },
    {
      id: 2,
      imageSrc: "images/blog/bnoon-jeddah.avif",
      title: "بنون – جدة",
      slug: "https://www.google.com/maps/place/HealthPlus+Fertility+%26+Women's+Health+Center+-+Jeddah/data=!4m2!3m1!1s0x0:0x403eb3afa0ca3bd7?sa=X&ved=1t:2428&ictx=111",
      buttonLink: "ar/bnoon-jeddah",
      description:
        "انضم مركز بنون في جدة (المعروف سابقاً بمركزهيلث بلاس للإخصاب) إلى الشبكة في يونيو 2025 لتقديم خدمات موسّعة للعائلات في المنطقة الغربية بفرق  طبية متخصصة۔",
    },
    {
      id: 3,
      imageSrc: "images/blog/king-salman.avif",
      title: "بنون – طريق الملك سلمان، الرياض <br />(الافتتاح في نهاية 2025)",
      slug: "https://maps.app.goo.gl/F9Qu7tQQp74TTyNv9?g_st=iwb",
      buttonLink: "ar/our-clinics",
      description:
        "مرفق رائد تبلغ مساحته 3,800 متر مربع ويضم 4 طوابق، صُمّم ليجسّد المستقبل الواعد لرعاية الخصوبة باستخدام الذكاء الاصطناعي والتكنولوجيا المتقدمة۔",
    },
  ];

  return (
    <div className="blog-area ptb-140">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12">
              <div className="left">
                <h2>مراكزنا</h2>
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
  <a
    href={post.slug}
    target="_blank"
    rel="noopener noreferrer"
    dangerouslySetInnerHTML={{ __html: post.title }}
  ></a>
</h3>

                  <p>{post.description}</p>

                  {/* Button links to internal page */}
                  <Link href={post.buttonLink} className="btn btn-success btn-blog">
                   اقرأ المزيد
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
