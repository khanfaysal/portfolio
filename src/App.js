import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import Home from"./components/Home/Home/Home";
import Resume from "./components/Resume/Resume";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import ProjectsSummary from "./components/ProjectsSummary/ProjectsSummary";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/projects">
          <ProjectsSummary></ProjectsSummary>
        </Route>

        <Route path="/about-me">
          <AboutMe></AboutMe>
        </Route>

        <Route path="/resume">
          <Resume></Resume>
        </Route>

        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
