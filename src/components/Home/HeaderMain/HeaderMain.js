import React from 'react';
import logo from '../../../images/testhero.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
            <main className=' main-div row d-flex align-items-center' style={{height:'400px'}}>
                <div className="social-part d-flex align-items-center pt-5">
                    {/* <h6><FontAwesomeIcon icon={faGithubAlt} /></h6>
                    <h6><FontAwesomeIcon icon={faLinkedinIn} /></h6> */}
                    <ul>
                        <li><Link to="/home"><FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon></Link></li>
                        <li><Link to="/home"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></Link></li>
                        <li><Link to="/home"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link></li>
                        <li><Link to="/home"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></Link></li>
                        
                    </ul>
                </div>
                <div className="col-md-12 text-center">
                    <img src={logo} alt="" className="my-logo img-fluid rounded-circle"/>
                    <h3 className="name-heading pt-3">FAYSAL KHAN</h3>
                    <h1 className='banner-heading'>React Developer</h1>
                </div>
            </main>
    );
};

export default HeaderMain;