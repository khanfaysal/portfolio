import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='get_in_touch'>
            <div className="container">
            <h1 className='get_in_touch mt-5 page-heading'>get in touch</h1>
                <div className="row contact-form">
                    <form className='portfolio-form'>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingName" placeholder="Name"/>
                            <label for="floatingName">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            <label for="floatingTextarea2">Message</label>
                        </div>
                        <div>
                            <button className="brand-btn text-capitalize" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;