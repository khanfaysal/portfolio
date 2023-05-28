import React from "react";
import logo from "../../../images/logo-test.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className='main-div row'>
      <div className='col-md-4 d-flex justify-content-center align-items-end'>
        <img src={logo} alt='' className='my-logo img-fluid' />
      </div>

      <div className='col-md-6 d-flex flex-column align-items-center justify-content-center'>
        <div>
          <h1 className='banner-heading pt-3'>FAYSAL KHAN</h1>
          <h3 className='name-heading pb-2'>Web Developer</h3>
        </div>
      </div>

      <div className='col-md-2 d-flex justify-content-end align-items-center'>
        <div className='social-part'>
          <ul>
            <li>
              <a href='https://github.com/khanfaysal'>
                <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/faysal-khan-47aa8710a/'>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/mdfaysalkhancs1'>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
