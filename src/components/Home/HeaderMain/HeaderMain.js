import React from "react";
import logo from "../../../images/testhero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import "./HeaderMain.css";

const HeaderMain = () => {
    return (
        <main
            className=" main-div row d-flex align-items-center"
        // style={{ height: "350px" }}
        >
            <div className="social-part d-flex align-items-center pt-5">
                <ul>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://github.com/khanfaysal">
                            <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/faysal-khan-47aa8710a/">
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/mdfaysalkhancs1">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-12 text-center pt-5">
                {/* <img src={logo} alt="" className="my-logo img-fluid rounded-circle" /> */}
                <h3 className="name-heading pt-3">FAYSAL KHAN</h3>
                <h1 className="banner-heading pb-2">{''}

                    {/* type writer npm package */}
                    <Typewriter
                        options={{
                            strings: ['React Developer', 'Js Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>

                <a target="_blank"
                    rel="noreferrer"
                    className="brand-btn"
                    href="https://drive.google.com/file/d/1SpEmyiPm7G844O3Hqt90wpN0X0q6WwkX/view?usp=sharing"
                >
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    &nbsp;&nbsp; Download Resume
                </a>
            </div>
        </main>
    );
};

export default HeaderMain;
