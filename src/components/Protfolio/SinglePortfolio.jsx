import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SinglePortfolio = ({ data, getData }) => {
  // const { imgLink, imgLinkLg, title, subTitle, effect, duration, delay } = data;
  const effect = "fade-up";
  const duration = "500";
  const delay = "600";
  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <div
        className="st-portfolio-single st-style1"
        onClick={() =>
          getData(data.image.url, data.title, data.techStack.join("/"))
        }
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={data?.image.url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{data.title}</h5>
              <p>{data.techStack.join("/")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
};

export default SinglePortfolio;
