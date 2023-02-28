import React from "react";
import ProjectSummaryDetails from "../ProjectsSummaryDetails/ProjectSummaryDetails";
import "./ProjectSummary.css";
import carService from "../../images/carService.png";
import colorGenerate from "../../images/Color-Generate.png";
import shopNyla from "../../images/Shop-Nyla.png";
import pixel from "../../images/Pixel.png";
import { useState } from "react";

const ProjectsSummary = () => {
  // const [projectsData, setProjectsData] = 
  const [visible, setVisible] = useState(4);
  const showMoreProjects = () => {
    setVisible((prevValue) => prevValue + 4);
  }
  const projectsData = [
    {
      image: carService,
      title: "Car Repair Website",
      description:
        "The user gets service, to give review also see specific order.This website controlled by an admin with a beautiful dashboard and any admin can make any other account admin.",
      liveLink: "https://car-repair-8145b.web.app/",
      clientLink: "https://github.com/khanfaysal/car-repair-client",
      serverLink: "https://github.com/khanfaysal/car-repair-server",
      tags: "reactjs,express js,react-router,bootstrap5,firebase-auth,mongoDB"
    },

    {
      image: colorGenerate,
      title: "Color Generate Website",
      description:
        "This website is generate random color as a result we choose our desire color and copy or grab color with hex value. When our any projects need color then grab here. After copy hex code you can use directly in your project.",
      liveLink: "https://zingy-manatee-7646ba.netlify.app/",
      clientLink: "https://github.com/khanfaysal/color-generate",
      tags: "HTML,CSS3,javascript"
    },
    {
      image: pixel,
      title: "Pixel Website",
      description:
        "Pixel website is mainly focused on sharing photos, illustrations. Pixel images and videos may be used freely for commercial or non-commercial.",
      liveLink: "https://tailwind-project-d9330.web.app/",
      clientLink: "https://github.com/khanfaysal/tailwind-project",
      tags: "tailwind css,reactjs,react-router,firebase-auth"
    },
    {
      image: shopNyla,
      title: "Shop Nyla Website ( Team Project )",
      description:
        "Users can buy products after login into the applications.Delete, increase/decrease product quantity option exists. Therefore when users select a product they can ensure which product is selected and also see the product's total price, shipping cost, vat, and total price.",
      liveLink: "https://shop-nyla.web.app/",
      clientLink: "https://github.com/mir-hussain/shop-nyla-client/branches",
      tags: "redux,reactjs,react-router,firebase-auth,emailjs"
    },

  ];
  return (
    <section className="section-projectSummary section">
      <div className="container">
        <h2 className="page-heading data-show">Projects</h2>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {projectsData.slice(0, visible).map((proData) => (
              <ProjectSummaryDetails proData={proData}></ProjectSummaryDetails>
            ))}

          </div>
          {/* <button onClick={showMoreProjects} className="brand-btn">Load more</button> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummary;
