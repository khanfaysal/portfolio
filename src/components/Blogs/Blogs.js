import React from 'react';
import BlogImage1 from '../../images/jsPrimaryConcept.png';
import BlogImage2 from '../../images/10thingsJs.png';
import BlogImage3 from '../../images/jsArray.png';
import BlogImage4 from '../../images/jsInterviewQues.png';
import BlogImage5 from '../../images/fundametalReact.png';
import BlogsDetails from '../BlogsDetails/BlogsDetails';

const Blogs = () => {
    const blogsData = [
        {
            image: BlogImage1,
            title: 'Beginner Js Developer Should Know Basic things of JavaScript',
            description: 'First of all welcome to my blog medium world. We know that JavaScript is a programming language so it has types, operators, methods, and built-in functions. Now I will discuss JavaScript types and it,s fundamental concepts of any programming language',
            url: "https://mdfaysalkhancse.medium.com/beginner-js-developer-should-know-basic-things-of-javascript-7f7cf706aba2"
        },
        {
            image: BlogImage2,
            title: '10 things about JavaScript',
            description: 'JavaScript has different kinds of data. It has classified mainly two categories. They are primitive and non-primitive. The primitive data values mean that it is not an object and also has no method. There are five types of primitive data. They are string, number, boolean, null, undefined but average people say that Bigint is one kind of primitive data, and now symbol added to the list as primitive data types.',
            url: "https://mdfaysalkhancse.medium.com/10-things-about-javascript-591d1c51d525"
        },
        {
            image: BlogImage3,
            title: 'Javascript array mission — part 1',
            description: 'An array is a collection of elements or items. An array can be a collection of elements of any type like string, boolean, number, objects even other arrays. But unfortunately, the javascript data structure is a little bit different.',
            url: "https://mdfaysalkhancse.medium.com/javascript-array-mission-part-1-8ecc443f6fba"
        },
        {
            image: BlogImage4,
            title: 'javaScript interview question, you should know',
            description: 'Every junior programmer has a dream to get a job. So he/she should take to prepare for an interview. The most common interview questions about the JavaScript programming language are given below.',
            url: "https://mdfaysalkhancse.medium.com/javascript-interview-question-you-should-know-69165b69208a"
        },
        {
            image: BlogImage5,
            title: 'Fundamental of React library',
            description: 'React is a JavaScript library and created by Facebook. So we learn this with no confusion. Today I will discuss primary or fundamental things about React library. I think you are aware of javaScript. So let,s go.',
            url: "https://mdfaysalkhancse.medium.com/introduce-to-react-library-9f58d6715793"
        },
    ]
    return (
        <section>
            <div className="container section">
                <h1 className='get_in_touch mt-5 page-heading'>Blogs</h1>
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            blogsData.map(blog => <BlogsDetails blog={blog}></BlogsDetails>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;