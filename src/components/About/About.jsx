import PropTypes from "prop-types";
import "./About.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = ({ data, user }) => {
  const { imgLink, title, subtitle, text, details, cvPdf } = data;
  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              <div
                className="st-about-img st-bg "
                style={{
                  backgroundImage: `url(${imgLink})`,
                }}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img
                  src={user.about.avatar.url}
                  alt=""
                  style={{
                    height: "550px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div
                  className={`st-text-block st-style1`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 className="st-text-block-title">
                    Hi There! I'm{" "}
                    {user.about.name.replace(/\b\w/g, (match) =>
                      match.toUpperCase()
                    )}
                  </h2>
                  <h4 className="st-text-block-subtitle">{user.about.title}</h4>
                  <div className="st-text-block-text">
                    <p>{user.about.description}</p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    <li>
                      <span>Phone</span> :<span>{user.about.phoneNumber}</span>
                    </li>
                    <li>
                      <span>Email</span> :<span>{user.email}</span>
                    </li>
                    <li>
                      <span>From</span> :<span>{user.about.address}</span>
                    </li>
                    <li>
                      <span>Experience</span> :
                      <span>{user.about.exp_year} Years</span>
                    </li>
                    <li>
                      <span>Freelance</span> :<span>Available</span>
                    </li>
                  </ul>
                  <div className="st-text-block-btn">
                    <a
                      className="st-btn st-style1 st-color1"
                      href={cvPdf}
                      download
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
};

export default About;
