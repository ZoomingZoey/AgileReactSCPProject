import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SCPAll from "./Components/Pages/SCPAll";
import Subject from "./Components/Pages/Subject";
import SCPSafe from "./Components/Pages/SCPSafe";
import SCPEuclid from "./Components/Pages/SCPEuclid";
import SCPKeter from "./Components/Pages/SCPKeter";
import SCPThaumiel from "./Components/Pages/SCPThaumiel";


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Subjects" element={<SCPAll />} />
          <Route path="/Subjects/:item" element={<Subject />} />
          <Route path="/Subjects/Safe" element={<SCPSafe />} />
          <Route path="/Subjects/Euclid" element={<SCPEuclid />} />
          <Route path="/Subjects/Keter" element={<SCPKeter />} />
          <Route path="/Subjects/Thaumiel" element={<SCPThaumiel />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
