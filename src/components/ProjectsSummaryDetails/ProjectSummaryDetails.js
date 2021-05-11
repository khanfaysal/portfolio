import React from "react";
import "./ProjectSummaryDetails.css";

const ProjectSummaryDetails = ({ proData }) => {
  return (
    <div>
      <div class="card shadow p-3 mb-5 bg-body rounded">
        <img src={proData.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title pt-4">{proData.title}</h5>
          <p class="card-text">{proData.description}</p>
          <div className="link-part d-flex justify-content-around">
            <div className="live-btn">
              <a href={proData.liveLink} className="card-btn" target="_blank" rel="noreferrer">
                Live link
              </a>
            </div>
            <div className="code-btn">
              <a href={proData.clientLink} className="card-btn" target="_blank" rel="noreferrer">
                Client Side
              </a>
            </div>
            <div className="code-btn">
              <a href={proData.serverLink} className="card-btn" target="_blank" rel="noreferrer">
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
