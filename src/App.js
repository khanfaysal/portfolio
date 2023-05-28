import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import ProjectsSummary from "./components/ProjectsSummary/ProjectsSummary";
import Navbar from "./components/Shared/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/projects">
          <ProjectsSummary></ProjectsSummary>
        </Route>

        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
