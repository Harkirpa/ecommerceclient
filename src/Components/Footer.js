import React from "react";
import "../Css/Footer.css";

import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-component">
      <div className="company-info-comp">
        <div className="company-logo-comp">
          <div className="footer-nav-logo">
            <Link to="/">
              <span className="LogoLetter1">B</span>
              <span className="LogoLetter2">I</span>
              <span className="LogoLetter3">G</span>
              <span className="LogoLetter4">M</span>
              <span className="LogoLetter5">A</span>
              <span className="LogoLetter6">R</span>
              <span className="LogoLetter7">T</span>
            </Link>
          </div>
        </div>
        <div className="company-desc">
          Big Mart is India's leading Ecommerce Webapp providing latest and
          greatest Discounts on the products.
        </div>
        <div className="company-social">
          <FaLinkedin />
          <FaTwitterSquare />
          <FaFacebookSquare />
          <PiInstagramLogoFill />
        </div>
      </div>
      <div className="footer-actions-container">
        <div>
          <h2>Services</h2>
          <div className="footer-service-nav">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="footer-company-info">
          <h1>Contact Us</h1>
          <div className="footer-company-align">
            <FaMobile /> +91-900000000
          </div>
          <div className="footer-company-align">
            <BiLogoGmail /> support@shopping.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;