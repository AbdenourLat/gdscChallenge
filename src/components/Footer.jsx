import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className="copyright">
        <p>Copyright <Link className="home-back">GDSC SBA</Link> 2023 - All rights reserved.</p>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/gdsc_esi_sba/related_profiles/" target="_blank">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://web.facebook.com/GDSC.ESI.SBA" target="_blank">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com/gdsc_esi_sba" target="_blank">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gdsc-esi-sba-b2bb67264/?originalSubdomain=dz" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
