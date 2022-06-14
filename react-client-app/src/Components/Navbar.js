import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>  {
    if(window.innerWidth <= 960) {
      setButton(false)
    }else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton() 
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/SCP_Foundation_Logo.png" alt="" width="320" height="70"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Subjects" className="nav-links" onClick={closeMobileMenu}>
              All Scps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Subjects/Safe"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Safe Scps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Subjects/Euclid"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Euclid Scps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Subjects/Keter"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Keter Scps
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Subjects/Thaumiel"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Thaumiel Scps
            </Link>
          </li>
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;