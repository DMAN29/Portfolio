import PropTypes from "prop-types";
import React from "react";
import "./Hero.scss";
import { Icon } from "@iconify/react";
import perser from "html-react-parser";
import SocialLinks2 from "../SocialLinks/SocialLinks2";

const Hero4 = ({ data, socialData, user }) => {
  const { title, text, imgAuthor, bgImgLink } = data;
  // console.log(title, text, imgAuthor, bgImgLink);
  return (
    <section
      id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version"
      style={{ backgroundImage: `url(${bgImgLink})` }}
    >
      <div className="container">
        <div className="st-hero-text">
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            {perser(
              user.about.name.replace(/\b\w/g, (match) => match.toUpperCase())
            )}
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            {user.about.subTitle}
          </p>
          <SocialLinks2 data={socialData} socials={user.social_handles} />
        </div>
      </div>
    </section>
  );
};

Hero4.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
  user: PropTypes.object,
};

export default Hero4;
