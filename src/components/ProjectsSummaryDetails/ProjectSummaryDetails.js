import React from "react";
import './ProjectSummaryDetails.css';

const ProjectSummaryDetails = ({ proData }) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "22rem" }}>
        <img className="" src={proData.image} class="card-img-top" alt="..." />
        <div className="card-body card-size">
          <h5 className="card-title pt-3">{proData.title}</h5>
          <p className="card-text">{proData.description}</p>
         <div className="link-part d-flex justify-content-around">
            <div className="live-btn"> <a href={proData.liveLink} className="card-btn">Live link</a></div>
            <div className="code-btn"><a href={proData.codeLink} className="card-btn">Code link</a></div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryDetails;
