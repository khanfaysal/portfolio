import React from "react";
import logo from "../../../images/logo-test.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faLinkedinIn,
  faMedium,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";
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
              <a href='https://github.com/khanfaysal' target='_blank'>
                <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/faysal-khan-47aa8710a/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://medium.com/@devfaysalkhan' target='_blank'>
                <FontAwesomeIcon icon={faMediumM}></FontAwesomeIcon>
              </a>
            </li>
            <li>
              <a href='https://drive.google.com/file/d/1TYoVlHJyYofoJk_ZIE9ULfhxRVDf_p-q/view?usp=sharing' target='_blank'>
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
