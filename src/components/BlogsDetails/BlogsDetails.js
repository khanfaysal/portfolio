import React from "react";
import "./BlogsDetails.css"

const BlogsDetails = ({ blog }) => {
    const { image, title, description } = blog;
    return (
        <a href={blog.url}
            target="_blank"
            rel="noreferrer">
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <small>
                        Read more..
                    </small>
                </div>
            </div>
        </a>
    );
};

export default BlogsDetails;
