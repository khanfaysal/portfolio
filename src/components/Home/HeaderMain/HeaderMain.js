import React from "react";
import logo from "../../../images/logo-test.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
// import Typewriter from "typewriter-effect";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className='main-div row'>

      <div className='name-banner-wrap col-md-12 d-flex flex-column align-items-center justify-content-center'>
        <div className='content-banner'>
          <h1 className='banner-heading pt-3'>FAYSAL KHAN</h1>
          <h3 className='name-heading pb-2'>Web Developer</h3>
          <div className='social-part'>
          <ul>
            <li>
              <a href='https://github.com/khanfaysal' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/faysal-khan-47aa8710a/' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://medium.com/@devfaysalkhan' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faMediumM}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/groups/147131708264515/' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://drive.google.com/file/d/1pi6N2MBm8GT_YiLmec3rVMrc6Kst-9Ov/view?usp=sharing' target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
