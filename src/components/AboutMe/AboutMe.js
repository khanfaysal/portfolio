import React from "react";
import myImage from "../../images/me1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import react from '../../images/react.png';
import js from '../../images/js.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import firebase from '../../images/firebase.png';
import reactbootstrap from '../../images/reactbootstrap.png';
import materialui from '../../images/materialui.png';
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section className="section-projectSummary section">
            <div className="container">
                <div className="page-heading pb-3">
                    <h2 className="text-uppercase">about me</h2>
                </div>
                <div className="row">
                    <div className="col-md-5 image-card">
                        <div className="image">
                            <img
                                src={myImage}
                                alt=""
                                className="img-fluid img-thumbnail mw-100 p-0 m-0 w-100 h-100 bg-body rounded"
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about-info">
                            <p className="my-description">

                                <p>I'm Faysal khan a professional web developer. I have done B.Sc Engineering in CSE. I have extensive knowledge of  <span><b>Javascript, React js, SCSS, Redux</b> </span>{" "}, Next js, Gatsby js, and HTML5 and CSS3. I have been working as a junior software engineer for the past over a year and I have developed a strong understanding of the necessary skills and abilities.</p>
                                <p>In my professional life I have emphasized the importance of scalable and well documented code.Through working collaboratively with marketing and product teams, I have developed strong communication and teamwork skills. I am also experienced in <a href="https://faysal-portfolio-c70c10.webflow.io/" target="_blank"><span><b><u>Webflow technology.</u></b></span></a></p>
                                <p>Here are a few technologies I’ve been working with recently: </p>
                                {" "}
                            </p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li>
                                        <span className="title">- Javascript (Es6)</span>&nbsp;&nbsp;
                                        {/* <span className="value ">Faysal khan</span> */}
                                    </li>
                                    <li>
                                        <span className="title">- Reactjs</span>&nbsp;&nbsp;
                                        {/* <span className="value ">mdfaysalkhancse@gmail.com</span> */}
                                    </li>
                                    <li>
                                        <span className="title">- Nodejs</span>&nbsp;&nbsp;
                                        {/* <span className="value ">+8801679599705</span> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="about-list">
                                    <li>
                                        <span className="title">- openAI API</span>&nbsp;&nbsp;
                                        {/* <span className="value ">National University of Bangladesh</span> */}
                                    </li>
                                    <li>
                                        <span className="title">- Nextjs</span>&nbsp;&nbsp;
                                        {/* <span className="value ">Computer Science & Engineering</span> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="row pt-3">
                            <div className="col-md-12">
                                <div className="button-div">

                                    <a target="_blank"
                                        rel="noreferrer"
                                        className="brand-btn"
                                        href="https://drive.google.com/file/d/1SpEmyiPm7G844O3Hqt90wpN0X0q6WwkX/view?usp=sharing"
                                    >
                                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                                        &nbsp;&nbsp; Download Resume
                                    </a>&nbsp;&nbsp;
                                    <a
                                        className="brand-btn"
                                        href="https://github.com/khanfaysal"
                                    >
                                        <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                                        &nbsp;&nbsp; GitHub
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-3 mb-5 mt-5">
                        <h2 className="text-capitalize sub-heading">Technology skills</h2>
                        <div className="wrap-skills">
                            <div><img className="img-fluid" src={react} alt="" /></div>
                            <div><img className="img-fluid" src={js} alt="" /></div>
                            <div><img className="img-fluid" src={css} alt="" /></div>
                            <div><img className="img-fluid" src={html} alt="" /></div>
                            <div><img className="img-fluid" src={firebase} alt="" /></div>
                            <div><img className="img-fluid" src={reactbootstrap} alt="" /></div>
                            <div><img className="img-fluid" src={materialui} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
