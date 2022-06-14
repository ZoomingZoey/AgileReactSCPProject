import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            <li className="li">
              <Link to="/about">About Us</Link>
            </li>
            <li className="li">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
