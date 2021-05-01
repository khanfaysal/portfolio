import React from "react";
import { Link } from "react-router-dom";
import myImage from "../../images/me1.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="section-projectSummary section">
      <div className="page-heading container">
        <h2 className="text-uppercase">about me</h2>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src={myImage}
              style={{ borderColor: "#706fd3" }}
              alt=""
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-md-7">
            <div className="about-info">
              <h2 className="sub-heading mb-4">React & Js developer</h2>
              <p className="my-description">
                Hello I'm <span style={{color:"#706fd3",}}><b>Faysal khan</b></span>. Junior React developer with over 8 month of experience. Experienced with all stages of React development cycle for functionality web projects. Having an in-depth knowledge including advanced <span style={{color:"#706fd3",}}><b>HTML5,CSS3,JavaScript,React,Bootstrap, Material UI</b></span> . I try to give my best effort to solve any problem.
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6">
                <ul className="about-list">
                  <li>
                    <span className="title ">Name:</span>&nbsp;
                    <span className="value ">Faysal khan</span>
                  </li>
                  <li>
                    <span className="title ">age:</span>&nbsp;
                    <span className="value ">24 years</span>
                  </li>
                  <li>
                    <span className="title ">phone:</span>&nbsp;
                    <span className="value ">+8801679599705</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="about-list">
                  <li>
                    <span className="title ">Email:</span>&nbsp;
                    <span className="value ">mdfaysalkhancse@gmail.com</span>
                  </li>
                  <li>
                    <span className="title ">Country:</span>&nbsp;
                    <span className="value ">Bangladesh</span>
                  </li>
                  <li>
                    <span className="title ">City:</span>&nbsp;
                    <span className="value ">Dhaka</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-12">
                    <div className="button-div">
                        {/* <Link className="brand-btn"  href="https://drive.google.com/file/d/1GTSV191YzbblG-2RtlyQ5kUFIeWeSCoG/view?usp=sharing">Download Resume</Link>  */}
                        <a className="brand-btn" href="https://drive.google.com/file/d/1GTSV191YzbblG-2RtlyQ5kUFIeWeSCoG/view?usp=sharing">Download Resume</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
