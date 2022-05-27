import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bu9oqhx', 'template_lwh1wca', e.target, 'user_Y2VvIximudWt5Y32mZnuf')
            .then((result) => {
                alert("Email send successfully");
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            }, (error) => {
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            });
    }


    const handleOnChange = (e) => {
        if (e.target.name === 'name') {
            setData(prev => {
                return {
                    ...prev, name: e.target.value
                }
            });
        } else if (e.target.name === 'email') {
            setData(prev => {
                return {
                    ...prev, email: e.target.value
                }
            });
        } else if (e.target.name === 'subject') {
            setData(prev => {
                return {
                    ...prev, subject: e.target.value
                }
            });
        } else {
            setData(prev => {
                return {
                    ...prev, message: e.target.value
                }
            });
        }
    }
    return (
        <section className='Contact__container'>
            <div className="container">
                <h2 className='get_in_touch page-heading'>get in touch</h2>
                <div className="row contact-form">
                    <div className="col-md-7 contact-form">
                        <form onSubmit={sendEmail} className='portfolio-form'>
                            <div class="form-floating mb-3">
                                <input onChange={handleOnChange} value={data.name} type="text" class="form-control" id="floatingName" placeholder="Name" name="name" />
                                <label for="floatingName">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleOnChange} value={data.subject} type="text" class="form-control" id="floatingName" placeholder="Name" name="subject" />
                                <label for="floatingName">subject</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={handleOnChange} value={data.email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea onChange={handleOnChange} value={data.message} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} name="message"></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <div>
                                <button className="brand-btn text-capitalize" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon className="icon" icon={faPhoneAlt}></FontAwesomeIcon></div>
                                <div> <p>Mobile Number</p></div>
                                <div><h6>+8801679599705</h6></div>
                            </div>
                        </div>
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon></div>
                                <div> <p>Email</p></div>
                                <div><h6>mdfaysalkhancse@gmail.com</h6></div>
                            </div>
                        </div>
                        <div className="contact-wrapper shadow p-3  bg-body rounded">
                            <div className="sideContactInner d-flex justify-content-around">
                                <div><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}></FontAwesomeIcon></div>
                                <div> <p>Address</p></div>
                                <div><h6>Mirpur, Dhaka,Bangladesh </h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;