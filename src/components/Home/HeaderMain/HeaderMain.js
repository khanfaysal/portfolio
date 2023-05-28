import React from "react";
import logo from "../../../images/testhero.png";
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
    <main className=' main-div row '>
      <div className='col-md-12 d-flex justify-content-center align-items-center pt-5'>
        <div className='col-md-4'>
          {" "}
          <img src={logo} alt='' className='my-logo img-fluid rounded-circle' />
        </div>

        <div className='col-md-4 name-designation-wrap '>
          <h1 className='banner-heading pt-3'>FAYSAL KHAN</h1>
          <h3 className='name-heading pb-2'>
            {/* <Typewriter
            options={{
              strings: ['React', 'Js'],
              autoStart: true,
              loop: true,
            }}
          /> */}
            Web Developer
          </h3>
        </div>

        <div className='d-flex col-md-4 pt-5'>
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
