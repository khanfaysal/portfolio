import React from 'react';
import BlogImage1 from '../../images/blog1.jpg';
import BlogImage2 from '../../images/blog2.jpg';
import BlogImage3 from '../../images/blog3.jpg';
import BlogsDetails from '../BlogsDetails/BlogsDetails';

const Blogs = () => {
    const blogsData = [
        {
            image: BlogImage1,
            title: 'Inspiration design trends 2021',
            description: 'Javascript is the programming language in this web technology. It has many varities use of real world.',
            footer: ''
        },
        {
            image: BlogImage2,
            title: 'js beauty in the world',
            description: 'Javascript is the programming language in this web technology. It has many varities use of real world.',
            footer: ''
        },
        {
            image: BlogImage3,
            title: 'javascript modern techniques at present',
            description: 'Javascript is the programming language in this web technology. It has many varities use of real world.',
            footer: ''
        }
    ]
    return (
        <section>
           <div className="container section">
               <div className="row">
                   <div className="col-md-12 row">
                       {
                           blogsData.map(blog=><BlogsDetails blog={blog}></BlogsDetails>)
                       }

                   </div>
               </div>
           </div>
        </section>
    );
};

export default Blogs;