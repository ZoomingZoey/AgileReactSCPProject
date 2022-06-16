import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="/image/ColourfulSCPLogo.png" alt="" width="120" height="70"/>
            </Link>
          </div>
          <small class='website-rights'>© SCP Foundation Database - By: Zach, Alice and Kim.</small>
        </div>
    </div>
  );
}

export default Footer;