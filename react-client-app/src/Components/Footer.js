import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer-container'>
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                <img src="/image/ColourfulSCPLogo.png" alt="" width="120" height="70"/>
                </Link>
              </div>
              <small className='website-rights'>
                Copyright &copy; {new Date().getFullYear()} SCP Foundation Ltd
              </small>
            </div>
            
        </div>
        <div className="developer-section">
        <small className='website-rights'>
          Developed By: Zach, Alice and Kim. COMP.6210
        </small>
      </div>
    </>
  );
}

export default Footer;