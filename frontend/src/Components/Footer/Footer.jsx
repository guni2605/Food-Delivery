import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-brand">
        <h1 className="brand">Food Dive</h1>
        <p className="description">
          Discover delicious meals delivered to your door. Food Dive connects
          you with your favorite local flavors and top-rated dishes.
        </p>
        <div className="social-icons">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.linkedin_icon} alt="LinkedIn" />
          <img src={assets.twitter_icon} alt="Twitter" />
        </div>
      </div>

      <div className="footer-section footer-links">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-section footer-contact">
        <h2>Get in Touch</h2>
        <p>📞 +91 17679809809</p>
        <p>📧 abc@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
