import React from "react";
import "./ProjectSummaryDetails.css";

const ProjectSummaryDetails = (props) => {
  const { image, title, description, liveLink, clientLink, serverLink } = props.proData;
  const technologySplit = props.proData.tags.split(',')
  return (
    <div>
      <div class="card shadow p-3 mb-5 bg-body rounded">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="mt-3">
            {
              technologySplit.map(tag => (
                <span key={props.proData.title} class="badge rounded-pill bg-gray shadow-sm text-dark m-2">{tag}</span>
              ))
            }
          </div>
          <h5 class="card-title pt-4">{title}</h5>
          <p class="card-text">{description}</p>
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
