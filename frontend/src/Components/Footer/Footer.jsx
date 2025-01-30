import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets.js";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={assets.logo} alt="" />
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          perspiciatis laudantium assumenda itaque pariatur, similique odit,
          reprehenderit aperiam eos recusandae voluptatibus rerum ipsa quas ex
          nesciunt officia! Tempore, fuga minima.
        </p>
        <div className="img">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
        </div>
      </div>
      <div className="footer-content">
        <h1>Contact</h1>
        <br />
        <h2>Home</h2>
        <br />
        <h2>About</h2>
        <br />
        <h2>Privacy policy</h2>
      </div>
      <div className="footer-right">
        <h1>Get In Touch</h1>
        <br />
        <h2>+91 17679809809</h2>
        <br />
        <h2>abc@gmail.com</h2>
      </div>
    </div>
  );
};

export default Footer;
