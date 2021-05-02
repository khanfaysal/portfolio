import React from 'react';
import logo from '../../../images/testhero.png';
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
                        <li><a href='https://github.com/khanfaysal'><FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon></a></li>
                        <li><a href='https://www.linkedin.com/in/faysal-khan-47aa8710a/'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
                        <li><a href='https://twitter.com/mdfaysalkhancs1'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                        <li><a href='https://www.youtube.com/channel/UC8tpeYzbPaqKWDVqESCmxew'><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
                        
                    </ul>
                    
                </div>
                <div className="col-md-12 text-center">
                    <img src={logo} alt="" className="my-logo img-fluid rounded-circle"/>
                    <h3 className="name-heading pt-3">FAYSAL KHAN</h3>
                    <h1 className='banner-heading'>React Developer</h1>
                    <p><a style={{textDecoration:"none",color:"#0b2154"}} href="https://drive.google.com/uc?id=1GTSV191YzbblG-2RtlyQ5kUFIeWeSCoG">Download Resume</a></p>
                </div>
            </main>
    );
};

export default HeaderMain;