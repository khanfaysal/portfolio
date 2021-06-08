import React from "react";
import myImage from "../../images/me1.jpg";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons";

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
          <div className="col-md-5">
            <img
              src={myImage}
              style={{ borderColor: "#706fd3" }}
              alt=""
              className="img-fluid img-thumbnail shadow p-3 mb-5 bg-body rounded"
            />
          </div>
          <div className="col-md-7">
            <div className="about-info">
              <h2 className="sub-heading mb-4">React & Js developer</h2>
              <p className="my-description">
                Hello I'm{" "}
                <span style={{ color: "#F2911B" }}>
                  <b>Faysal khan</b>
                </span>
                . Junior React developer with over 1 year plus of experience.
                Experienced with all stages of React development cycle for
                functionality web projects. Having an in-depth knowledge
                including advanced{" "}
                <span style={{ color: "#F2911B" }}>
                  <b>HTML5,CSS3,JavaScript,React,Bootstrap, Material UI</b>
                </span>{" "}
                . I try to give my best effort to solve any problem.
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6">
                <ul className="about-list">
                  <li>
                    <span className="title ">Name:</span>&nbsp;&nbsp;
                    <span className="value ">Faysal khan</span>
                  </li>
                  <li>
                    <span className="title ">age:</span>&nbsp;&nbsp;
                    <span className="value ">24 years</span>
                  </li>
                  <li>
                    <span className="title ">phone:</span>&nbsp;&nbsp;
                    <span className="value ">+8801679599705</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="about-list">
                  <li>
                    <span className="title ">Email:</span>&nbsp;&nbsp;
                    <span className="value ">mdfaysalkhancse@gmail.com</span>
                  </li>
                  <li>
                    <span className="title ">Institute:</span>&nbsp;&nbsp;
                    <span className="value ">National University of Bangladesh</span>
                  </li>
                  <li>
                    <span className="title ">Subject:</span>&nbsp;&nbsp;
                    <span className="value ">Computer Science & Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-12">
                <div className="button-div">
                  {/* <Link className="brand-btn"  href="https://drive.google.com/file/d/1GTSV191YzbblG-2RtlyQ5kUFIeWeSCoG/view?usp=sharing">Download Resume</Link>  */}
                  <a
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <h2 className="text-capitalize sub-heading p-5">Technology skills</h2>
           <div className="wrap-skills d-flex flex-wrap justify-content-around align-content-stretch pb-5">
           <div><img className="img-fluid" src={react} alt=""/></div>
           <div><img className="img-fluid" src={js} alt=""/></div>
           <div><img className="img-fluid" src={css} alt=""/></div>
           <div><img className="img-fluid" src={html} alt=""/></div>
           <div><img className="img-fluid" src={firebase} alt=""/></div>
           <div><img className="img-fluid" src={reactbootstrap} alt=""/></div>
           <div><img className="img-fluid" src={materialui} alt=""/></div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
