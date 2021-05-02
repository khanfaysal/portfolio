import React from 'react';
import ProjectSummaryDetails from '../ProjectsSummaryDetails/ProjectSummaryDetails';
import './ProjectSummary.css';

const ProjectsSummary = () => {
    const projectsData = [
        {
            // image:carService,
            title:'Car Repair Website',
            description:'The user gets service, to give review also see specific order.Includes login system.This website controlled by an admin with a beautiful dashboard and any admin can make any other account admin.',
            liveLink:'https://car-repair-8145b.web.app/',
            codeLink:'https://github.com/khanfaysal/car-repair-client'
        },
        {
            // image:bookShop,
            title:'Book Region Website',
            description:'customer order books from home page and checkout. Admin manages books and adds books.Includes google login systems',
            liveLink:'https://book-shop-978b6.web.app/',
            codeLink:'https://github.com/khanfaysal/book-region'
        },
        {
            // image:rideService,
            title:'Grab Rides Website',
            description:'Customer booking rides from different vehicles chosen if he/she already login.Can choose pick and destination point and also see google map (static).Besides customer to see the vehicle availability.',
            liveLink:'https://react-auth-assignment-89f47.web.app/',
            codeLink:'https://github.com/khanfaysal/grab-rides'
        }
    ]
    return (
        <section className='section-projectSummary section'>
            <div className="container">
                <h2 className="data-show page-heading">projects</h2>
            </div>
            <div className="container pt-5">
                <div className="row">
                    {
                      projectsData.map(proData=><ProjectSummaryDetails proData={proData}></ProjectSummaryDetails>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectsSummary;