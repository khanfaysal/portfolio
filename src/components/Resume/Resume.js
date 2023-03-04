import React from "react";
import "./Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    return (
        <div class="container mt-5 mb-5">
            <div class="row">
                <h2 className="page-heading text-uppercase">resume</h2>
                <div class="col-md-6">
                    <ul class="timeline">
                        <li>
                            <h4 className="text-capitalize" style={{ color: "#e2be91" }}>
                                contact
                            </h4>
                            <div className="fontawesome-icon">
                                <p>
                                    <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon> : <a style={{ color: "#fff", textDecoration: "underline" }} href="https://github.com/khanfaysal">GitHub</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon> : <a style={{ color: "#fff", textDecoration: "underline" }} href="https://github.com/khanfaysal">LinkedIn</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> : <h6 className="" style={{ display: "inline", color: "#fff" }}>+880167959970</h6>
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 className="text-capitalize" style={{ color: "#e2be91" }}>
                                programming skills
                            </h4>
                            <div>
                                <p> Expert: HTML, CSS, Javascript, ES6, React, React-Router, CSS grid, flexbox, Bootstrap, React-Bootstrap</p>
                                <p>Comfortable: React native, SCSS, MongoDB, C, Material UI, Express js, Netlify, Heroku, Re-charts, Postman</p>
                                <p>Familiar: C++, Digital-marketing, Firebase, MS SQL, WordPress (Elementor), d3js, Chartjs, Next js</p>
                            </div>
                        </li>
                        <li>
                            <h4 className="text-capitalize" style={{ color: "#e2be91" }}>education & courses</h4>
                            <div className="education">
                                National University of Bangladesh | computer science & engineering<br />
                                Programming hero | Full stack web development<br />
                                Creative IT institute | Web design
                            </div>
                        </li>
                        <li>
                            <h4 className="text-capitalize" style={{ color: "#e2be91" }}>Experience</h4>
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
                                <div> <h4 className="text-capitalize" style={{ color: "#e2be91" }}>
                                    Car-repair Website
                                </h4></div>
                                {/* <div><p><mark>March 2021</mark></p></div> */}
                            </div>

                            <p>
                                -Users get service after login into the application and get a beautiful dashboard.<br />
                                -Users to see their specific order service,  give a review by the dashboard, and also see order place status by admin.<br />
                                -Admin can delete service, add service, view all users order, change the order status and also make admin others.<br />
                                -React, React hook form, Bootstrap, Express, Firebase auth, MongoDB used in this application.
                            </p>
                            <div className="resume-link"><a href="https://car-repair-8145b.web.app" target="_blank" rel="noreferrer"><u>Live link</u></a> | <a href="https://github.com/khanfaysal/car-repair-client" target="_blank" rel="noreferrer"><u>Client-Side Repo</u></a> | <a href="https://github.com/khanfaysal/car-repair-server" target="_blank" rel="noreferrer"> <u>Server Side Repo</u></a></div>
                        </li>
                        <li>
                            <div className="project d-flex justify-content-between">
                                <div> <h4 className="text-capitalize" style={{ color: "#e2be91" }}>
                                    Color generate website
                                </h4></div>
                                {/* <div><p><mark>April 2021</mark></p></div> */}
                            </div>

                            <p>
                                -Users can generate random color.<br />
                                -After random color users pick any color in hex value and used their projects easily.<br />
                                -JavaScript, HTML5, CSS3.
                            </p>

                            <div className="resume-link"><a href="https://zingy-manatee-7646ba.netlify.app/" target="_blank" rel="noreferrer"><u>Live link</u></a> | <a href="https://github.com/khanfaysal/color-generate" target="_blank" rel="noreferrer"><u>Client-Side Repo</u></a> </div>
                        </li>
                        <li>
                            <div className="project d-flex justify-content-between">
                                <div> <h4 className="text-capitalize" style={{ color: "#e2be91" }}>
                                    Pixel website
                                </h4></div>
                                {/* <div><p><mark>March 2021</mark></p></div> */}
                            </div>

                            <p>
                                -Users get different types of image by search option.<br />
                                -Users also show different data statistics through API<br />

                            </p>
                            <div className="resume-link"><a href="https://tailwind-project-d9330.web.app/" target="_blank" rel="noreferrer"><u>Live link</u></a> | <a href="https://github.com/khanfaysal/tailwind-project" target="_blank" rel="noreferrer"><u>Client-Side Repo</u></a> </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
