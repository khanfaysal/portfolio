import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubAlt,faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row">
        <h2 className="page-heading text-uppercase">resume</h2>
        <div class="col-md-6">
          <ul class="timeline">
            <li>
              <h4 className="text-capitalize" style={{ color: "#706fd3" }}>
                contact
              </h4>
                <p>
                    <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon> : <a href="https://github.com/khanfaysal">GitHub</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon> : <a href="https://github.com/khanfaysal">LinkedIn</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> : <h6 className="" style={{display:"inline"}}>+880167959970</h6>
                </p>
            </li>
            <li>
            <h4 className="text-capitalize" style={{ color: "#706fd3" }}>
                programming skills
              </h4>
              <div>
               <p> Expert: HTML, CSS, Javascript, ES6, React, React-Router, CSS grid, flexbox, Bootstrap, React-Bootstrap</p>
                <p>Comfortable: React native, SCSS, MongoDB, C, Material UI, Express js, Netlify, Heroku, Re-charts, Postman</p>
                <p>Familiar: C++, Digital-marketing, Firebase, MS SQL, WordPress (Elementor), d3js, Chartjs, Next js</p>
              </div>
            </li>
            <li>
            <h4 className="text-capitalize" style={{ color: "#706fd3" }}>education & courses</h4>
              <div className="education">
                National University of Bangladesh | computer science & engineering<br />
                Programming hero | Full stack web development<br />
                Creative IT institute | Web design
              </div>
            </li>
            <li>
            <h4 className="text-capitalize" style={{ color: "#706fd3" }}>Experience</h4>
              <div className="education">
              Ahsanullah University of Science & Technology | An inter UnIversity Tech Competition
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="timeline">
            <li>
              <div className="project d-flex justify-content-between">
                <div> <h4 className="text-capitalize" style={{ color: "#706fd3" }}>
                Car-repair Website
                </h4></div>
                <div><p><mark>March 2021</mark></p></div>
              </div>
              
              <p>
                -Users get service after login into the application and get a beautiful dashboard.<br />
                -Users to see their specific order service,  give a review by the dashboard, and also see order place status by admin.<br />
                -Admin can delete service, add service, view all users order, change the order status and also make admin others.<br /> 
                -React, React hook form, Bootstrap, Express, Firebase auth, MongoDB used in this application.
              </p>
              <div className="resume-link"><a href="https://car-repair-8145b.web.app" target="_blank" rel="noreferrer">Live link</a> | <a href="https://github.com/khanfaysal/car-repair-client" target="_blank" rel="noreferrer">Client-Side Repo</a> | <a href="https://github.com/khanfaysal/car-repair-server" target="_blank" rel="noreferrer"> Server Side Repo</a></div>
            </li>
            <li>
              <div className="project d-flex justify-content-between">
                <div> <h4 className="text-capitalize" style={{ color: "#706fd3" }}>
                Book-Shop Website
                </h4></div>
                <div><p><mark>April 2021</mark></p></div>
              </div>
              
              <p>
                -Users can order the book if he/she already login otherwise not.<br />
                -This application has an admin dashboard, admin can view all orders, add books and delete the specific product.<br />
                -React, React hook form, Express js, Bootstrap,  Firebase auth, MongoDB, React-router.
              </p>
              <div className="resume-link"><a href="https://book-shop-978b6.web.app" target="_blank" rel="noreferrer">Live link</a> | <a href="https://github.com/khanfaysal/book-region" target="_blank" rel="noreferrer">Client-Side Repo</a> | <a href="https://github.com/khanfaysal/book-region-server" target="_blank" rel="noreferrer"> Server Side Repo</a></div>
            </li>
            <li>
              <div className="project d-flex justify-content-between">
                <div> <h4 className="text-capitalize" style={{ color: "#706fd3" }}>
                Grab-Rides Website
                </h4></div>
                <div><p><mark>March 2021</mark></p></div>
              </div>
              
              <p>
                -Users get ride service facility after login their unique identity.<br />
                -Choose different vehicles, can choose to pick and destination points, and also see google map.<br />
                -Besides users can see the available vehicles in this application.<br /> 
                -React, Bootstrap, React Bootstrap, Firebase, React router used in grab rides application.
                -This application used fake/custom data.
              </p>
              <div className="resume-link"><a href="https://react-auth-assignment-89f47.web.app" target="_blank" rel="noreferrer">Live link</a> | <a href="https://github.com/khanfaysal/grab-rides" target="_blank" rel="noreferrer">Client-Side Repo</a> | <a href="https://github.com/khanfaysal/car-repair-server" target="_blank" rel="noreferrer"> Server Side Repo</a></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
