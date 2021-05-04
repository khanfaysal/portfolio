import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithubAlt,faLinkedinIn,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faDownload,faPhoneAlt,faEnvelope,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_bu9oqhx', 'template_lwh1wca', e.target, 'user_Y2VvIximudWt5Y32mZnuf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <section className='get_in_touch'>
            <div className="container">
            <h2 className='get_in_touch mt-5 page-heading'>get in touch</h2>
                <div className="row contact-form">
                    <div className="col-md-7 contact-form">
                    <form onSubmit={sendEmail} className='portfolio-form'>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingName" placeholder="Name" name="name"/>
                            <label for="floatingName">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingName" placeholder="Name" name="subject"/>
                            <label for="floatingName">subject</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email"/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} name="message"></textarea>
                            <label for="floatingTextarea2">Message</label>
                        </div>
                        <div>
                            <button className="brand-btn text-capitalize" type="submit">Send Message</button>
                        </div>
                    </form>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-wrapper shadow p-3 mb-5 bg-body rounded">
                           <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon style={{size:"50px"}} color="#706fd3" className="icon-size"icon={faPhoneAlt}></FontAwesomeIcon></div>
                                <div> <p>Phone</p></div>
                                <div><h6>+8801679599705</h6></div>
                           </div>
                        </div>
                        <div className="contact-wrapper shadow p-3 mb-5 bg-body rounded">
                           <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon style={{size:"50px"}} color="#706fd3" className="icon-size"icon={faEnvelope}></FontAwesomeIcon></div>
                                <div> <p>Email</p></div>
                                <div><h6>mdfaysalkhancse@gmail.com</h6></div>
                           </div>
                        </div>
                        <div className="contact-wrapper shadow p-3 mb-5 bg-body rounded">
                           <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon style={{size:"50px"}} color="#706fd3" className="icon-size"icon={faMapMarkerAlt}></FontAwesomeIcon></div>
                                <div> <p>Address</p></div>
                                <div><h6>Lalbagh, Dhaka,Bangladesh </h6></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;