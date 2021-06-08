import React from "react";

const BlogsDetails = ({ blog }) => {
  return (
    <div>
      <div class="card shadow p-3 mb-5 bg-body rounded">
        <img src={blog.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <a style={{ color : "#F2911B", fontWeight:"bold"}}
              href="https://medium.com/@mdfaysalkhancse"
              target="_blank"
              rel="noreferrer"
            >
              Read more..
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
