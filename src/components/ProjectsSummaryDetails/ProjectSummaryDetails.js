
import React from "react";
import "./ProjectSummaryDetails.css";

const ProjectSummaryDetails = (props) => {
  const { image, title, description, liveLink, clientLink, serverLink } = props.proData;
  const technologySplit = props.proData.tags.split(",");
  return (
    <div>
      <div className="card glassmorphism">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="mt-3">
            {technologySplit.map((tag) => (
              <span key={props.proData.title} className="badge rounded-pill bg-gray shadow-sm projects-tag m-2">
                {tag}
              </span>
            ))}
          </div>
          <h5 className="card-title pt-4">{title}</h5>
          <p className="card-text projects-text">{description}</p>
          <div className="link-part d-flex justify-content-around">
            <div className="live-btn">
              <a href={liveLink} className="card-btn" target="_blank" rel="noreferrer">
                Live link
              </a>
            </div>
            <div className="code-btn">
              <a href={clientLink} className="card-btn" target="_blank" rel="noreferrer">
                Client Side
              </a>
            </div>
            <div className="code-btn">
              <a href={serverLink} className="card-btn" target="_blank" rel="noreferrer">
                Server Side
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryDetails;
