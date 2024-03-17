import data from "../Data.json";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero from "../components/Hero/Hero";

const Home = ({ personDetail }) => {
  const {
    heroData,
    aboutData,
    serviceData,
    skillData,
    portfolioData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;

  return (
    <>
      <div className="st-height-b80 st-height-lg-b80"></div>
      <Hero
        data={heroData.homeOneHero}
        socialData={socialData}
        user={personDetail.user}
      />
      <About data={aboutData} user={personDetail.user} data-aos="fade-right" />
      <Iconbox
        data={serviceData}
        service={personDetail.user.services}
        data-aos="fade-right"
      />
      <Skill user={personDetail.user} data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} timeline={personDetail.user.timeline} />
      <PortfolioSection
        data={portfolioData}
        project={personDetail.user.projects}
        data-aos="fade-right"
      />
      <ReviewSection
        data={reviewData}
        user={personDetail.user}
        data-aos="fade-right"
      />
      {/* <BlogSection
        data={blogData}
        user={personDetail.user}
        data-aos="fade-right"
      /> */}
      <Contact
        data={contactData}
        user={personDetail.user}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home;
