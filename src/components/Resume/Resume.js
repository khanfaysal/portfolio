import React from 'react';
import './Resume.css'

const Resume = () => {
    
    return (
        <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h4>Latest News</h4>
                <ul class="timeline">
                    <li>
                        <a href="https://www.totoprayogo.com/">New Web Design</a>
                        <a href="#" class="float-right">21 March, 2014</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li>
                        <a href="https://www.totoprayogo.com/">21 000 Job Seekers</a>
                        <a href="https://www.totoprayogo.com/">4 March, 2014</a>
                        <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                    </li>
                    <li>
                        <a href="https://www.totoprayogo.com/">Awesome Employers</a>
                        <a href="https://www.totoprayogo.com/" class="float-right">1 April, 2014</a>
                        <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Resume;