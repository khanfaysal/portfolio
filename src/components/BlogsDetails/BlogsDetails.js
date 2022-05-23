import React from "react";

const BlogsDetails = ({ blog }) => {
    return (
        <a href={blog.url}
            target="_blank"
            rel="noreferrer">
            <div class="card shadow p-3 mb-5 bg-body rounded">
                <img src={blog.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <p class="card-text">{blog.description}</p>
                </div>
                <div class="card-footer">
                    <small style={{ color: "#F2911B", fontWeight: "bold" }}>
                        Read more..
                    </small>
                </div>
            </div>
        </a>
    );
};

export default BlogsDetails;
