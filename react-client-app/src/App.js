import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/SCP_Safe" element={<SCPSafe />} />
          <Route path="/SCP_Euclid" element={<SCPEuclid />} />
          <Route path="/SCP_Keter" element={<SCPKeter />} />
          <Route path="/SCP_Thaumiel" element={<SCPThaumiel />} />

        </Routes>
      </Router>
    </>
  );
}
export default App;
