import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SCPSafe from "./Components/CardsSafe";


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SCP_Safe" element={<SCPSafe />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
