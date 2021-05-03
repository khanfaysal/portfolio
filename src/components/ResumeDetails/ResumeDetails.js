import React from 'react';

const ResumeDetails = ({resume}) => {
   
    return (
		<div class="col-md-6 offset-md-3">
			<h4>Latest News</h4>
			<ul class="timeline">
				<li>
					<a href="https://www.totoprayogo.com/">{resume.title1}</a>
					<a href="https://www.totoprayogo.com/" >{resume.title2}</a>
					{/* <a href="#" className="float-right">21 March, 2014</a> */}
					<p>{resume.description}</p>
				</li>
			</ul>
		</div>
	

    );
};

export default ResumeDetails;