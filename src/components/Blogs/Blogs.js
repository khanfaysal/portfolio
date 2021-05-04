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
            description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            footer: ''
        },
        {
            image: BlogImage2,
            title: 'js beauty in the world',
            description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            footer: ''
        },
        {
            image: BlogImage3,
            title: 'javascript modern techniques at present',
            description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            footer: ''
        }
    ]
    return (
        <section>
           <div className="container section">
           <h1 className='get_in_touch mt-5 page-heading'>Blogs</h1>
               <div className="row">
                   <div className="col-md-12 row row-cols-1 row-cols-md-2 g-4">
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