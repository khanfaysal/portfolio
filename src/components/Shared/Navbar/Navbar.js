import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        {/* <Link to='/home' class="navbar-brand"><img src={logo} alt=""/></Link> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
           <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                    <Link class="nav-link ms-4" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/about-me">About Me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/resume">Resume</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/blogs">Blogs</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ms-4" to="/contact">Contact</Link>
                </li>
           </ul>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
