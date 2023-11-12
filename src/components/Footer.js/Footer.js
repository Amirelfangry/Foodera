import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="link">
        <a href="#">Register</a>
        <a href="#">Forum</a>
        <a href="#">Affiliate</a>
        <a href="#">FAQ</a>
      </div>
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <p> &copy; 2023 Foodera. All rights reserved.</p>
    </div>
  );
}

export default Footer;
