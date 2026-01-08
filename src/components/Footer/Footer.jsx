import React from "react";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-section-1">
          <div className="home-icons">
            <Link
              to="https://www.linkedin.com/in/harsh-jassi-40b427361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://www.instagram.com/_i_harsh99?igsh=eGx6NGg4enhuZzRr">
              <FaInstagram />
            </Link>
            <Link to="https://www.tiktok.com/@princerome37?_r=1&_t=ZS-92nBKF9Hni0">
              <FaTiktok />
            </Link>
          </div>
        </div>
        <div className="footer-section-2">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/project">
              <li>Project</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section-3">
          <h2>Copyright @2026; Designed by Harsh Jassi</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
