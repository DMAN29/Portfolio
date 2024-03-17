import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  // const startDate = element.startDate
  // const { title, duration, subTitle, text } = element;
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{element.company_name}</h3>
      <div className="st-resume-timeline-duration">
        {new Date(element.startDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })}{" "}
        -{" "}
        {new Date() - new Date(element.endDate) < 0
          ? "Present"
          : new Date(element.endDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
      </div>
      <h4 className="st-resume-timeline-subtitle">{element.jobTitle}</h4>
      <div className="st-resume-timeline-text">
        <p>{element.summary}</p>
      </div>
    </div>
  );
};

SingleResume.propTypes = {
  element: PropTypes.object,
};

export default SingleResume;
