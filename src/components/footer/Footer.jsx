import React from "react";

import "./footer.css";
import Logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolor provident quis ratione omnis quae delectus consectetur vel
            nesciunt incidunt!
          </p>
        </div>

        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon } alt="" />
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
            @ 2024 Miraj Howlader. All Right Reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
