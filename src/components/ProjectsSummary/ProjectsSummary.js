import React from "react";
import ProjectSummaryDetails from "../ProjectsSummaryDetails/ProjectSummaryDetails";
import "./ProjectSummary.css";
import carService from "../../images/carService.png";
import bookShop from "../../images/bookshop.png";
import rideService from "../../images/rideService.png";
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
        "The user gets service, to give review also see specific order.Includes login system.This website controlled by an admin with a beautiful dashboard and any admin can make any other account admin.",
      liveLink: "https://car-repair-8145b.web.app/",
      clientLink: "https://github.com/khanfaysal/car-repair-client",
      serverLink:"https://github.com/khanfaysal/car-repair-server"
    },
    {
      image: bookShop,
      title: "Book Region Website",
      description:
        "This website is one kind of book shopping website.Customer order books from home page and checkout. Admin manages books and adds books.Includes google login systems",
      liveLink: "https://book-shop-978b6.web.app/",
      clientLink: "https://github.com/khanfaysal/book-region",
      serverLink:"https://github.com/khanfaysal/book-region-server"
    },
    {
      image: rideService,
      title: "Grab Rides Website",
      description:
        "Customer booking rides from different vehicles chosen if he/she already login.Can choose pick and destination point and also see google map (iframe).Besides customer to see the vehicle availability.",
      liveLink: "https://react-auth-assignment-89f47.web.app/",
      clientLink: "https://github.com/khanfaysal/grab-rides",
    },
    {
      image: shopNyla ,
      title: "Shop Nyla Website ( Team Project )",
      description:
        "Users can buy products after login into the applications.They can see beautiful UI design and also delete, increase/decrease product quantity while they are select to buy the products. Therefore when users select a product they can ensure which product is selected and also see the product's total price, shipping cost, vat, and total price.",
      liveLink: "https://shop-nyla.web.app/",
      clientLink: "https://github.com/mir-hussain/shop-nyla-client/branches",
    },
    {
      image: pixel ,
      title: "Pixel Website",
      description:
        "Pixel website is mainly focused on sharing photos, illustrations. Pixel images and videos may be used freely for commercial or non-commercial.",
      liveLink: "https://tailwind-project-d9330.web.app/",
      clientLink: "https://github.com/khanfaysal/tailwind-project",
    }
    
  ];
  return (
    <section className="section-projectSummary section">
      <div className="container">
        <h2 className="page-heading data-show">Projects</h2>
        <div className="row">
          <div className="col-md-12 row row-cols-1 row-cols-md-2 g-4">
            {projectsData.slice(0, visible).map((proData) => (
              <ProjectSummaryDetails proData={proData}></ProjectSummaryDetails>
            ))}
            
          </div>
          <button onClick={showMoreProjects} className="brand-btn">Load more</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummary;
