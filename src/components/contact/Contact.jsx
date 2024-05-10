import React from "react";

import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3ea6666-f438-4ff7-92ad-ae2d53fb88d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            repellendus, delectus optio vitae ad provident saepe laudantium ex
            nesciunt non.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>mirajhowlader9999@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>++88 01731 458068</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea name="message" placeholder="Enter your message"  rows="8"></textarea>

          <button className="contact-submit">Contact submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
