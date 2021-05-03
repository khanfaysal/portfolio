import React from "react";

const BlogsDetails = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div class="card-group">
        <div class="card">
          <img src={blog.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{blog.title}</h5>
            <p class="card-text">{blog.description}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><a href="https://medium.com/@mdfaysalkhancse">Read more..</a></small>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
