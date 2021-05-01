import React from "react";
import { Link } from "react-router-dom";

const ProjectSummaryDetails = ({ proData }) => {
  return (
    <div className="col-md-4">
      <div class="card" style={{ width: "18rem" }}>
        <img src={proData.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title pt-3">{proData.title}</h5>
          <p class="card-text">{proData.description}</p>
          <Link href="#" class="btn btn-primary">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryDetails;
